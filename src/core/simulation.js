import {
  BUILDING_DEFS,
  ERA_DEFS,
  MARKET_BASE_PRICES,
  QUICK_ORDER_DEFS,
  RESOURCE_KEYS,
  RESOURCE_META,
  ROUTE_DEFS,
  SHIP_DEFS,
} from "../data/gameContent.js";

function cloneState(game) {
  return JSON.parse(JSON.stringify(game));
}
function getBuildingDef(id) { return BUILDING_DEFS.find((building) => building.id === id); }
function getShipDef(id) { return SHIP_DEFS.find((ship) => ship.id === id); }
function getRouteDef(id) { return ROUTE_DEFS.find((route) => route.id === id); }
function pushLog(game, message) { game.logs.unshift(message); game.logs = game.logs.slice(0, 16); }
function buildingCost(def, nextLevel) {
  const scaled = {};
  Object.entries(def.cost).forEach(([resource, amount]) => { scaled[resource] = Math.round(amount * (1 + (nextLevel - 1) * 0.55)); });
  scaled.time = Math.round(def.baseDuration * (1 + (nextLevel - 1) * 0.24));
  return scaled;
}
function shipCost(def, shipyardLevel) {
  const scaled = {};
  Object.entries(def.cost).forEach(([resource, amount]) => {
    if (resource === "energy") { scaled[resource] = amount; return; }
    scaled[resource] = Math.round(amount * (1 - Math.min(0.18, shipyardLevel * 0.03)));
  });
  scaled.time = Math.max(10, Math.round(def.buildMinutes * (1 - Math.min(0.2, shipyardLevel * 0.04))));
  return scaled;
}
function hasResources(game, cost) {
  return Object.entries(cost).every(([resource, amount]) => resource === "time" || (game.resources[resource] || 0) >= amount);
}
function spendResources(game, cost) {
  Object.entries(cost).forEach(([resource, amount]) => { if (resource !== "time") game.resources[resource] -= amount; });
}
function addResources(game, rewards) {
  Object.entries(rewards).forEach(([resource, amount]) => { game.resources[resource] = (game.resources[resource] || 0) + amount; });
}
function getStorageCapacity(game) {
  const storageLevel = game.buildings.storageBay.level;
  const commandLevel = game.buildings.commandCenter.level;
  return 2400 + storageLevel * 1200 + commandLevel * 320;
}
function getEnergyProfile(game) {
  const reactor = game.buildings.fusionReactor.level;
  const hydroponics = game.buildings.hydroponics.level;
  const shipyard = game.buildings.shipyard.level;
  const recycler = game.buildings.recycler.level;
  const marketPort = game.buildings.marketPort.level;
  const logisticsHub = game.buildings.logisticsHub.level;
  const deepScanner = game.buildings.deepScanner.level;
  const command = game.buildings.commandCenter.level;
  const storage = game.buildings.storageBay.level;
  const produced = 42 + reactor * 48 + logisticsHub * 6;
  const consumed = command * 8 + storage * 4 + hydroponics * 10 + shipyard * 12 + recycler * 8 + marketPort * 10 + logisticsHub * 12 + deepScanner * 15 + Object.values(game.ships).reduce((sum, count) => sum + count * 2, 0);
  return { produced, consumed, net: produced - consumed };
}
function computeProduction(game) {
  const energy = getEnergyProfile(game);
  const multiplier = energy.net >= 0 ? 1 : Math.max(0.35, 1 + energy.net / Math.max(energy.produced, 1));
  const production = {
    iron: (70 + game.buildings.commandCenter.level * 26 + game.buildings.recycler.level * 8) * multiplier,
    ice: (46 + game.buildings.hydroponics.level * 24) * multiplier,
    silica: (34 + game.buildings.commandCenter.level * 10 + game.buildings.deepScanner.level * 18) * multiplier,
    palladium: (game.buildings.logisticsHub.level * 3 + game.buildings.deepScanner.level * 1.4) * multiplier,
    gold: game.eraIndex >= 3 ? 0.6 * multiplier : 0,
    scrap: Math.max(0, 4 + game.buildings.recycler.level * 5 - game.buildings.recycler.level * 3),
    credits: (18 + game.buildings.marketPort.level * 18 + game.buildings.commandCenter.level * 6) * multiplier,
    energy: energy.net,
  };
  return { production, energy, multiplier };
}
function applyPassiveProduction(game, minutes) {
  const { production, energy } = computeProduction(game);
  const capacity = getStorageCapacity(game);
  Object.entries(production).forEach(([resource, perHour]) => { game.resources[resource] = (game.resources[resource] || 0) + (perHour / 60) * minutes; });
  ["iron", "ice", "silica", "palladium", "gold", "scrap"].forEach((resource) => { game.resources[resource] = Math.max(0, Math.min(capacity, game.resources[resource])); });
  game.resources.credits = Math.max(0, game.resources.credits);
  game.resources.energy = Math.max(0, Math.min(220, game.resources.energy));
  if (energy.net > 0 && game.resources.energy < 80) game.metrics.energyRecoveryMoments += 1;
}
function processQueues(game, minutes) {
  ["building", "shipyard"].forEach((queueType) => {
    const queue = game.queues[queueType];
    queue.forEach((item) => { item.remaining -= minutes; });
    const completed = queue.filter((item) => item.remaining <= 0);
    game.queues[queueType] = queue.filter((item) => item.remaining > 0);
    completed.forEach((item) => {
      if (item.kind === "building") { game.buildings[item.targetId].level += 1; pushLog(game, `${getBuildingDef(item.targetId).label} seviye ${game.buildings[item.targetId].level} oldu.`); }
      if (item.kind === "ship") { game.ships[item.targetId] += 1; pushLog(game, `${getShipDef(item.targetId).label} uretimi tamamlandi.`); }
    });
  });
}
function processMissions(game, minutes) {
  game.missions.forEach((mission) => { mission.remaining -= minutes; });
  const completed = game.missions.filter((mission) => mission.remaining <= 0);
  game.missions = game.missions.filter((mission) => mission.remaining > 0);
  completed.forEach((mission) => { addResources(game, mission.rewards); game.ships[mission.shipId] += 1; pushLog(game, `${mission.label} tamamlandi ve kargo depoya akti.`); });
}
function movePricesTowardBase(game) {
  Object.entries(MARKET_BASE_PRICES).forEach(([resource, basePrice]) => {
    const current = game.market.prices[resource];
    const drift = (basePrice - current) * 0.08;
    game.market.prices[resource] = Math.max(0.8, Number((current + drift).toFixed(2)));
  });
}
function botAction(game, bot) {
  const prices = game.market.prices;
  if (bot.id === "liquidity-bot") { prices.iron = Number((prices.iron * 0.98).toFixed(2)); prices.ice = Number((prices.ice * 1.02).toFixed(2)); bot.lastAction = "Demir ve buz piyasasina emir ekledi."; }
  if (bot.id === "miner-bot") { game.resources.scrap += 8; prices.silica = Number((prices.silica * 0.97).toFixed(2)); bot.lastAction = "Tarafsiz maden rotasi kapatti."; }
  if (bot.id === "rival-bot") { prices.palladium = Number((prices.palladium * 1.05).toFixed(2)); prices.gold = Number((prices.gold * 1.04).toFixed(2)); bot.lastAction = "Paladyum ve altin tarafinda baski kurdu."; }
  if (bot.id === "balance-bot") { prices.palladium = Number((prices.palladium * 0.985).toFixed(2)); prices.iron = Number((prices.iron * 1.01).toFixed(2)); bot.lastAction = "Pazar kilitlenmesini yumusatti."; }
  game.market.volume += 40; game.metrics.botTrades += 1;
}
function processBots(game) {
  game.bots.forEach((bot) => {
    if (game.clockMinutes - bot.lastActionAt >= bot.cadence) { bot.lastActionAt = game.clockMinutes; bot.mood = "etkilesimde"; botAction(game, bot); pushLog(game, `${bot.label}: ${bot.lastAction}`); }
    else { bot.mood = "devriye"; }
  });
}
function updateAlerts(game) {
  const { energy } = computeProduction(game);
  const alerts = [];
  if (energy.net < 0) alerts.push("Enerji acigi aktif. Uretim verimi baski altinda.");
  if (game.resources.palladium < 25) alerts.push("Paladyum darbogazi var. Tanker veya pazar alimlari gerekiyor.");
  if (game.market.prices.gold > MARKET_BASE_PRICES.gold * 1.15) alerts.push("Altin fiyatinda sicrama var. Tarama filolari deger kazandi.");
  if (game.queues.building.length === 0) alerts.push("Bina kuyrugu bos. Cag gecisi yavaslayabilir.");
  if (game.missions.length === 0) alerts.push("Aktif gorev yok. Lojistik damar durdu.");
  game.alerts = alerts.slice(0, 4);
}
function updateMetrics(game) { game.metrics.marketVolume = game.market.volume; }
export function simulateTick(previousGame, minutes = 5) {
  const game = cloneState(previousGame);
  game.tick += 1; game.clockMinutes += minutes;
  applyPassiveProduction(game, minutes); processQueues(game, minutes); processMissions(game, minutes); movePricesTowardBase(game); processBots(game); updateAlerts(game); updateMetrics(game);
  return game;
}
export function getGameViewModel(game) {
  const { production, energy, multiplier } = computeProduction(game);
  const capacity = getStorageCapacity(game);
  const currentEra = ERA_DEFS[game.eraIndex];
  const nextEra = ERA_DEFS[Math.min(game.eraIndex + 1, ERA_DEFS.length - 1)];
  const nextEraAvailable = canAdvanceEra(game);
  const resources = RESOURCE_KEYS.map((key) => ({ key, label: RESOURCE_META[key].label, amount: Math.round((game.resources[key] || 0) * 10) / 10, perHour: Math.round((production[key] || 0) * 10) / 10, capacity: RESOURCE_META[key].type === "cargo" ? capacity : null }));
  const buildings = BUILDING_DEFS.map((def) => {
    const level = game.buildings[def.id].level;
    const nextLevel = Math.min(def.maxLevel, level + 1);
    const cost = buildingCost(def, nextLevel);
    const queued = game.queues.building.find((item) => item.targetId === def.id);
    const unlocked = currentEra.id >= def.unlockEra;
    return { ...def, level, unlocked, maxed: level >= def.maxLevel, queued, nextCost: cost };
  });
  const ships = SHIP_DEFS.map((def) => {
    const queued = game.queues.shipyard.filter((item) => item.targetId === def.id);
    return { ...def, amount: game.ships[def.id], unlocked: currentEra.id >= def.unlockEra, nextCost: shipCost(def, game.buildings.shipyard.level), queuedCount: queued.length };
  });
  const routes = ROUTE_DEFS.map((route) => ({ ...route, unlocked: currentEra.id >= getShipDef(route.shipId).unlockEra, availableShips: game.ships[route.shipId] }));
  return { game, resources, buildings, ships, routes, prices: game.market.prices, capacity, energy, efficiency: Math.round(multiplier * 100), currentEra, nextEra, nextEraAvailable };
}
export function queueBuildingUpgrade(previousGame, buildingId) {
  const game = cloneState(previousGame);
  const def = getBuildingDef(buildingId); const state = game.buildings[buildingId]; const currentEra = ERA_DEFS[game.eraIndex];
  if (!def || currentEra.id < def.unlockEra) return { game, message: "Bu bina bu cagda acik degil." };
  if (state.level >= def.maxLevel) return { game, message: "Bina zaten maksimum seviyede." };
  if (game.queues.building.some((item) => item.targetId === buildingId)) return { game, message: "Bu bina zaten kuyruga alinmis." };
  const cost = buildingCost(def, state.level + 1); if (!hasResources(game, cost)) return { game, message: "Yukselme icin yeterli kaynak yok." };
  spendResources(game, cost); game.queues.building.push({ kind: "building", targetId: buildingId, remaining: cost.time, total: cost.time }); pushLog(game, `${def.label} yukselmesi kuyruga alindi.`);
  return { game, message: `${def.label} kuyruga eklendi.` };
}
export function queueShipBuild(previousGame, shipId) {
  const game = cloneState(previousGame); const def = getShipDef(shipId); const currentEra = ERA_DEFS[game.eraIndex];
  if (!def || currentEra.id < def.unlockEra) return { game, message: "Bu gemi henuz acik degil." };
  if (game.buildings.shipyard.level <= 0) return { game, message: "Once tersane gerekiyor." };
  const cost = shipCost(def, game.buildings.shipyard.level); if (!hasResources(game, cost)) return { game, message: "Gemi uretimi icin kaynak yetersiz." };
  spendResources(game, cost); game.queues.shipyard.push({ kind: "ship", targetId: shipId, remaining: cost.time, total: cost.time }); pushLog(game, `${def.label} uretimi baslatildi.`);
  return { game, message: `${def.label} tersaneye alindi.` };
}
export function dispatchMission(previousGame, routeId) {
  const game = cloneState(previousGame); const route = getRouteDef(routeId);
  if (!route) return { game, message: "Rota bulunamadi." };
  if (game.ships[route.shipId] <= 0) return { game, message: "Bu rota icin uygun gemi yok." };
  game.ships[route.shipId] -= 1; game.missions.push({ id: `${routeId}-${Date.now()}`, routeId, shipId: route.shipId, label: route.label, remaining: route.duration, total: route.duration, startedAt: Date.now(), rewards: route.rewards }); pushLog(game, `${route.label} gorevi baslatildi.`);
  return { game, message: `${route.label} rotasi acildi.` };
}
export function applyQuickOrder(previousGame, orderId) {
  const game = cloneState(previousGame); const order = QUICK_ORDER_DEFS.find((item) => item.id === orderId);
  if (!order) return { game, message: "Hizli emir bulunamadi." };
  const price = game.market.prices[order.resource]; const total = Math.round(price * order.amount * (1 + game.market.taxRate));
  if (order.side === "sell") { if (game.resources[order.resource] < order.amount) return { game, message: "Satmak icin yeterli stok yok." }; game.resources[order.resource] -= order.amount; game.resources.credits += Math.round(price * order.amount); }
  else { if (game.resources.credits < total) return { game, message: "Alim icin kredi yetersiz." }; game.resources.credits -= total; game.resources[order.resource] += order.amount; }
  game.market.orders.unshift({ id: `${order.id}-${Date.now()}`, label: order.label, side: order.side, resource: order.resource, amount: order.amount, total }); game.market.orders = game.market.orders.slice(0, 12); game.market.volume += total; game.metrics.playerTrades += 1; pushLog(game, `Pazar emri gecti: ${order.label}.`);
  return { game, message: `${order.label} uygulandi.` };
}
export function canAdvanceEra(game) {
  if (game.eraIndex >= ERA_DEFS.length - 1) return false;
  const nextEra = ERA_DEFS[game.eraIndex + 1];
  return Object.entries(nextEra.requirements).every(([key, value]) => (key === "credits" || key === "palladium") ? game.resources[key] >= value : game.buildings[key].level >= value);
}
export function advanceEra(previousGame) {
  const game = cloneState(previousGame);
  if (!canAdvanceEra(game)) return { game, message: "Sonraki caga gecis kosullari henuz saglanmadi." };
  game.eraIndex += 1; pushLog(game, `${ERA_DEFS[game.eraIndex].name} acildi.`);
  return { game, message: `${ERA_DEFS[game.eraIndex].name} aktif.` };
}
