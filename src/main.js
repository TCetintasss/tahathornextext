const BUILDINGS = [
  {
    id: "hq",
    name: "Ana Bina",
    description: "Cag kapisi, filo limiti ve yonetim seviyesinin merkezi.",
    image: "/assets/building-core.svg",
    age: 1,
    baseDuration: 220,
    cost: { iron: 200, crystal: 80, palladium: 40 },
    upkeep: { energy: 8 },
    effect: "Yeni moduller ve cag gecisi izinleri acar.",
  },
  {
    id: "storage",
    name: "Depo",
    description: "Tasmalari onler, transfer tamponunu buyutur.",
    image: "/assets/building-core.svg",
    age: 1,
    baseDuration: 180,
    cost: { iron: 120, crystal: 40, biomass: 20 },
    upkeep: { energy: 3 },
    effect: "Kaynak limiti ve ticaret tamponu artar.",
  },
  {
    id: "powerPlant",
    name: "Enerji Santrali",
    description: "Paladyumu enerjiye ceviren omurga bina.",
    image: "/assets/building-core.svg",
    age: 1,
    baseDuration: 260,
    cost: { iron: 110, crystal: 70, palladium: 60 },
    upkeep: { energy: 0 },
    effect: "Net enerji fazlasi olusturur.",
  },
  {
    id: "greenhouse",
    name: "Sera",
    description: "Biyokutle ve is gucu verimini tutar.",
    image: "/assets/building-core.svg",
    age: 1,
    baseDuration: 200,
    cost: { iron: 80, crystal: 35, biomass: 30 },
    upkeep: { energy: 4 },
    effect: "Biyokutle ve nufus destek puani uretir.",
  },
  {
    id: "shipyard",
    name: "Uzay Gemi Tersanesi",
    description: "Gemi cesidi ve eszamanli sinif uretimini acan merkez.",
    image: "/assets/building-core.svg",
    age: 1,
    baseDuration: 340,
    cost: { iron: 170, crystal: 120, palladium: 55 },
    upkeep: { energy: 7 },
    effect: "Daha cok sinifta uretim kuyruhu acilir.",
  },
  {
    id: "junkyard",
    name: "Hurdalik",
    description: "Enkazdan daha verimli hurda ayiklar.",
    image: "/assets/building-core.svg",
    age: 2,
    baseDuration: 240,
    cost: { iron: 120, crystal: 70, biomass: 20 },
    upkeep: { energy: 4 },
    effect: "Hurda geri kazanimi ve tamir verimi artar.",
  },
  {
    id: "factory",
    name: "Uretim Tesisi",
    description: "Ham kaynaklari daha rafine ciktiya cevirir.",
    image: "/assets/building-core.svg",
    age: 2,
    baseDuration: 280,
    cost: { iron: 150, crystal: 110, biomass: 35 },
    upkeep: { energy: 6 },
    effect: "Uretim halkalarini hizlandirir.",
  },
  {
    id: "researchLab",
    name: "Arastirma Merkezi",
    description: "Gelisim, askeri ve savas dallarini acar.",
    image: "/assets/building-core.svg",
    age: 3,
    baseDuration: 360,
    cost: { crystal: 140, gold: 10, palladium: 55 },
    upkeep: { energy: 8 },
    effect: "Pasif bonuslar ve uzmanlasma verir.",
  },
  {
    id: "logisticsHub",
    name: "Lojistik Merkezi",
    description: "Ayni anda daha fazla aktif gorev yonetilir.",
    image: "/assets/building-core.svg",
    age: 3,
    baseDuration: 320,
    cost: { iron: 180, crystal: 90, palladium: 75 },
    upkeep: { energy: 7 },
    effect: "Filo gorev limiti ve destek menzili artar.",
  },
  {
    id: "marketOffice",
    name: "Pazar Ofisi",
    description: "Vergi analizi ve emir otomasyonu saglar.",
    image: "/assets/building-core.svg",
    age: 4,
    baseDuration: 310,
    cost: { crystal: 120, gold: 16, palladium: 60 },
    upkeep: { energy: 5 },
    effect: "Daha iyi fiyat bandi ve bot takibi verir.",
  },
  {
    id: "defenseGrid",
    name: "Savunma Izgarasi",
    description: "Taret, kalkan ve hangar puanlarini buyutur.",
    image: "/assets/building-core.svg",
    age: 3,
    baseDuration: 300,
    cost: { iron: 150, crystal: 95, palladium: 85 },
    upkeep: { energy: 9 },
    effect: "Gezegen savunma gucu ve kalkan kapasitesi artar.",
  },
];

const SHIPS = [
  {
    id: "harvester",
    name: "Kaynak Toplama Gemisi",
    role: "Standart hammadde toplama",
    profile: "Yuksek kapasite / orta hiz / dusuk dayaniklilik",
    special: "Belirli damar tiplerinde +%12 toplama bonusu",
    tier: "1-5",
    age: 1,
    duration: 300,
    image: "/assets/ship-hauler.svg",
    cargo: 180,
    power: 0,
    armor: 28,
    cost: { iron: 140, crystal: 80, biomass: 25, palladium: 40 },
  },
  {
    id: "trader",
    name: "Ticaret Gemisi",
    role: "Pazar rotalarinda kar tasir",
    profile: "Orta kapasite / yuksek hiz / orta dayaniklilik",
    special: "Pazar vergisini %2-%6 azaltir",
    tier: "2-5",
    age: 2,
    duration: 340,
    image: "/assets/ship-hauler.svg",
    cargo: 150,
    power: 0,
    armor: 42,
    cost: { iron: 120, crystal: 110, biomass: 20, palladium: 60 },
  },
  {
    id: "scout",
    name: "Altin Tarayici",
    role: "Nadir damar ve istihbarat taramasi",
    profile: "Dusuk kapasite / yuksek hiz / dusuk dayaniklilik",
    special: "Altin damarini erken algilar",
    tier: "4-5",
    age: 4,
    duration: 260,
    image: "/assets/ship-scout.svg",
    cargo: 60,
    power: 12,
    armor: 18,
    cost: { iron: 100, crystal: 150, gold: 6, palladium: 70 },
  },
  {
    id: "mothership",
    name: "Ana Gemi",
    role: "Filo komutasi ve rota guvenligi",
    profile: "Cok yuksek kapasite / dusuk hiz / yuksek dayaniklilik",
    special: "Konvoy bonusu ve eskort hiz sabitleme",
    tier: "3-5",
    age: 3,
    duration: 660,
    image: "/assets/ship-warship.svg",
    cargo: 420,
    power: 38,
    armor: 180,
    cost: { iron: 420, crystal: 300, gold: 8, palladium: 180 },
  },
  {
    id: "support",
    name: "Destek Gemisi",
    role: "Tarama, yakit, bakim ve eskort",
    profile: "Dusuk kapasite / yuksek hiz / orta dayaniklilik",
    special: "Ana gemi ile gorev basarisizligini dusurur",
    tier: "3-5",
    age: 3,
    duration: 320,
    image: "/assets/ship-scout.svg",
    cargo: 70,
    power: 10,
    armor: 55,
    cost: { iron: 130, crystal: 110, biomass: 15, palladium: 50 },
  },
  {
    id: "salvager",
    name: "Hurda Toplayici",
    role: "Enkaz ve kirik filo toplama",
    profile: "Orta kapasite / orta hiz / dusuk dayaniklilik",
    special: "Hurda geri kazanim oranini yukselttir",
    tier: "2-5",
    age: 2,
    duration: 290,
    image: "/assets/ship-scout.svg",
    cargo: 130,
    power: 0,
    armor: 26,
    cost: { iron: 130, crystal: 100, biomass: 10, palladium: 45 },
  },
  {
    id: "palladiumTanker",
    name: "Paladyum Tankeri",
    role: "Enerji zinciri tasimasi",
    profile: "Yuksek kapasite / orta hiz / orta dayaniklilik",
    special: "Enerji hattindaki kesinti cezasini azaltir",
    tier: "4-5",
    age: 4,
    duration: 380,
    image: "/assets/ship-hauler.svg",
    cargo: 260,
    power: 0,
    armor: 64,
    cost: { iron: 180, crystal: 120, palladium: 90, gold: 5 },
  },
  {
    id: "warLancer",
    name: "Uzun Menzil Savas Gemisi",
    role: "Ilk vurus ve saldiri acilisi",
    profile: "Yuksek ates gucu / dusuk zirh",
    special: "Baskinlarda yuksek ilk salvo",
    tier: "3-5",
    age: 3,
    duration: 410,
    image: "/assets/ship-warship.svg",
    cargo: 0,
    power: 48,
    armor: 42,
    cost: { iron: 220, crystal: 180, palladium: 100, biomass: 15 },
  },
  {
    id: "warBulwark",
    name: "Agir Zirhli Savas Gemisi",
    role: "Savunmayi tasiyan govde",
    profile: "Kisa menzil / yuksek dayaniklilik",
    special: "On cephede kayip emici rol",
    tier: "3-5",
    age: 3,
    duration: 440,
    image: "/assets/ship-warship.svg",
    cargo: 0,
    power: 36,
    armor: 88,
    cost: { iron: 280, crystal: 120, palladium: 120, biomass: 15 },
  },
];

const RESEARCH_BRANCHES = [
  {
    id: "growth",
    name: "Gelisim",
    items: [
      {
        id: "denseStorage",
        name: "Yogun Depolama",
        description: "Depo ve transfer tamponunu buyutur.",
        cost: { crystal: 120, gold: 4 },
        effect: "Depo limiti +%15",
      },
      {
        id: "bioLoop",
        name: "Biyokutle Halkasi",
        description: "Sera ve geri donusum zincirini baglar.",
        cost: { crystal: 110, gold: 5, biomass: 70 },
        effect: "Biyokutle verimi +%20",
      },
    ],
  },
  {
    id: "military",
    name: "Askeri",
    items: [
      {
        id: "guidedVolley",
        name: "Yonlu Salvo",
        description: "Uzun menzil savas gemilerinin ilk salvo etkisini artirir.",
        cost: { crystal: 130, gold: 6, palladium: 50 },
        effect: "Saldiri puani +%10",
      },
      {
        id: "fortGrid",
        name: "Kale Izgarasi",
        description: "Savunma binalarinin turetilmis savunma puanini artirir.",
        cost: { iron: 150, crystal: 110, gold: 5 },
        effect: "Savunma puani +%12",
      },
    ],
  },
  {
    id: "war",
    name: "Savas",
    items: [
      {
        id: "battleTelemetry",
        name: "Muharebe Telemetrisi",
        description: "Savas raporlarinda daha iyi hasar ayrisimi saglar.",
        cost: { crystal: 140, gold: 6, palladium: 60 },
        effect: "Istihbarat hassasiyeti artar",
      },
      {
        id: "rapidRepair",
        name: "Hizli Tamir Doktrini",
        description: "Hurda ile onarim maliyetini azaltir.",
        cost: { iron: 120, crystal: 90, gold: 5 },
        effect: "Tamir hurdasi -%15",
      },
    ],
  },
];

const CREDIT_PACKS = [
  { id: "small", label: "30 kredi", bonus: 0, price: "$5", credits: 30 },
  { id: "mid", label: "60 + 5 bonus", bonus: 5, price: "$10", credits: 65 },
  { id: "large", label: "120 + 20 bonus", bonus: 20, price: "$20", credits: 140 },
];

const PLANETS = [
  {
    id: "home",
    name: "TestTaha Prime",
    kind: "home",
    distance: 0,
    image: "/assets/planet-home.svg",
    stock: {},
    defense: 72,
    turret: 24,
  },
  {
    id: "tradeHub",
    name: "Ticaret Gezegeni",
    kind: "trade",
    distance: 8,
    image: "/assets/planet-resource.svg",
    stock: {},
    defense: 20,
    turret: 0,
  },
  {
    id: "p1",
    name: "Khepri-9",
    kind: "resource",
    distance: 6,
    image: "/assets/planet-resource.svg",
    stock: { iron: 2000, crystal: 900, biomass: 500, palladium: 240, gold: 1 },
    defense: 18,
    turret: 0,
  },
  {
    id: "p2",
    name: "Nysa Delta",
    kind: "resource",
    distance: 14,
    image: "/assets/planet-resource.svg",
    stock: { iron: 1500, crystal: 1700, biomass: 620, palladium: 360, gold: 2 },
    defense: 22,
    turret: 0,
  },
  {
    id: "p3",
    name: "Orion Grave",
    kind: "event",
    distance: 21,
    image: "/assets/planet-resource.svg",
    stock: { iron: 900, crystal: 720, biomass: 140, palladium: 420, gold: 4, scrap: 90 },
    defense: 36,
    turret: 20,
  },
  {
    id: "p4",
    name: "Serrin Bastion",
    kind: "rival",
    distance: 28,
    image: "/assets/planet-rival.svg",
    stock: { iron: 600, crystal: 400, palladium: 150, gold: 3 },
    defense: 96,
    turret: 44,
  },
  {
    id: "p5",
    name: "Halcyon Rim",
    kind: "resource",
    distance: 40,
    image: "/assets/planet-resource.svg",
    stock: { iron: 3100, crystal: 2200, biomass: 1200, palladium: 640, gold: 5 },
    defense: 28,
    turret: 0,
  },
];

const AGES = [
  {
    level: 1,
    name: "Kurulus",
    focus: "Hayatta kalma ve temel uretim",
    cost: { iron: 280, crystal: 120, palladium: 40 },
    requirements: [
      "Ana Bina 1",
      "Temel enerji dengesi",
    ],
    check: () => true,
  },
  {
    level: 2,
    name: "Yorunge Sanayi",
    focus: "Verimlilik ve geri donusum",
    cost: { iron: 500, crystal: 220, palladium: 100, credits: 20 },
    requirements: [
      "Ana Bina 4",
      "Depo 3",
      "Tersane 2",
    ],
    check: (state) =>
      state.buildings.hq >= 4 &&
      state.buildings.storage >= 3 &&
      state.buildings.shipyard >= 2,
  },
  {
    level: 3,
    name: "Derin Uzay Lojistik",
    focus: "Uzak kaynak toplama",
    cost: { iron: 650, crystal: 280, palladium: 220, gold: 4 },
    requirements: [
      "Ana Bina 7",
      "Lojistik Merkezi 2",
      "En az 4 lojistik gemisi",
    ],
    check: (state) =>
      state.buildings.hq >= 7 &&
      state.buildings.logisticsHub >= 2 &&
      state.shipInventory.harvester + state.shipInventory.trader >= 4,
  },
  {
    level: 4,
    name: "Yildiz Agi",
    focus: "Otomasyon ve ileri ticaret",
    cost: { iron: 760, crystal: 340, palladium: 260, gold: 10, credits: 35 },
    requirements: [
      "Ana Bina 10",
      "Pazar Ofisi 2",
      "Arastirma Merkezi 2",
    ],
    check: (state) =>
      state.buildings.hq >= 10 &&
      state.buildings.marketOffice >= 2 &&
      state.buildings.researchLab >= 2,
  },
  {
    level: 5,
    name: "Egemenlik",
    focus: "Ag hakimiyeti ve buyuk konvoylar",
    cost: { iron: 920, crystal: 420, palladium: 320, gold: 18, credits: 45 },
    requirements: [
      "Ana Bina 13",
      "Savunma Izgarasi 3",
      "En az 2 savas raporu ve 2 ticaret rotasi",
    ],
    check: (state) =>
      state.buildings.hq >= 13 &&
      state.buildings.defenseGrid >= 3 &&
      state.reports.filter((report) => report.kind === "battle").length >= 2 &&
      state.reports.filter((report) => report.kind === "trade").length >= 2,
  },
];

const DAILY_MISSIONS = [
  { id: "daily-build", label: "2 insaat baslat", target: 2, reward: { credits: 10 } },
  { id: "daily-trade", label: "1 ticaret rotasi ac", target: 1, reward: { credits: 8, gold: 2 } },
  { id: "daily-report", label: "3 rapor uret", target: 3, reward: { credits: 6, iron: 180 } },
];

const SEASON_GOALS = [
  { id: "season-war", label: "2 savas raporu uret", target: 2, reward: { credits: 20, gold: 4 } },
  { id: "season-clan", label: "1 destek cagrisi yanitla", target: 1, reward: { credits: 18, palladium: 120 } },
  { id: "season-age", label: "1 cag ilerlet", target: 1, reward: { credits: 24, gold: 5 } },
];

const CHAT_SEEDS = {
  clan: [
    { author: "AstraNomad", text: "Palladium hattini acik tutalim, enerji cok dusuyor." },
    { author: "Taha", text: "Destek cagrisi gelir gelmez filo yolluyorum." },
  ],
  global: [
    { author: "OrbitMancer", text: "Trade hub fiyat bandi yeniden acildi." },
    { author: "Helix", text: "Orion Grave event gezegeni 30 dk daha acik." },
  ],
};

const BOT_TYPES = [
  "Tuccar bot",
  "Madenci bot",
  "Denge botu",
  "Yeni oyuncu rakibi",
];

const formatNumber = (value) =>
  new Intl.NumberFormat("tr-TR", { maximumFractionDigits: value < 10 ? 1 : 0 }).format(
    Math.max(0, value),
  );

const formatClock = (timestamp) =>
  new Intl.DateTimeFormat("tr-TR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  }).format(timestamp);

const formatDuration = (ms) => {
  const total = Math.max(0, Math.ceil(ms / 1000));
  const h = Math.floor(total / 3600);
  const m = Math.floor((total % 3600) / 60);
  const s = total % 60;
  if (h) return `${h}s ${m}dk`;
  if (m) return `${m}dk ${s}sn`;
  return `${s}sn`;
};

const uid = () => Math.random().toString(36).slice(2, 10);

const state = {
  screen: "auth",
  loadingStep: 0,
  authMode: "login",
  authDraft: {
    username: "taha",
    email: "taha@testtaha.space",
    password: "123456",
    loginUser: "taha",
    loginPassword: "123456",
  },
  notice: "",
  now: Date.now(),
  lastTick: Date.now(),
  currentView: "overview",
  selectedLanguage: "TR",
  user: {
    username: "taha",
    email: "taha@testtaha.space",
    password: "123456",
    planetName: "TestTaha Prime",
    role: "Kurucu",
    credits: 92,
  },
  ageLevel: 2,
  resources: {
    iron: 1700,
    crystal: 1120,
    biomass: 860,
    palladium: 420,
    gold: 14,
    scrap: 44,
    credits: 0,
    energyReserve: 0,
  },
  buildings: {
    hq: 4,
    storage: 3,
    powerPlant: 3,
    greenhouse: 2,
    shipyard: 2,
    junkyard: 1,
    factory: 1,
    researchLab: 1,
    logisticsHub: 1,
    marketOffice: 0,
    defenseGrid: 1,
  },
  buildingQueue: [],
  shipInventory: {
    harvester: 3,
    trader: 2,
    scout: 0,
    mothership: 1,
    support: 1,
    salvager: 1,
    palladiumTanker: 0,
    warLancer: 2,
    warBulwark: 1,
  },
  damagedShips: {
    warLancer: 1,
    warBulwark: 1,
  },
  shipDrafts: Object.fromEntries(SHIPS.map((ship) => [ship.id, 1])),
  shipQueue: [],
  missions: [],
  marketOrders: [
    {
      id: uid(),
      seller: "AstraNomad",
      cargo: { iron: 280, crystal: 80, palladium: 30 },
      goldPrice: 12,
      note: "Bot destekli taban likidite",
    },
  ],
  planets: PLANETS.map((planet) => ({
    ...planet,
    discovered: ["home", "tradeHub", "p1", "p2"].includes(planet.id),
    visibleUntil: planet.kind === "event" ? Date.now() + 45 * 60 * 1000 : null,
    otherPlayers:
      planet.kind === "rival"
        ? ["Helix Dominion", "Vega Arcanum"]
        : planet.kind === "resource"
          ? ["Nova Drift"]
          : [],
  })),
  clan: {
    name: "Anka Birligi",
    role: "Kurucu",
    supportCalls: [
      {
        id: uid(),
        author: "AstraNomad",
        text: "Halcyon Rim hattinda 1 destek gemisi ve 1 warLancer gerekiyor.",
        answered: false,
      },
    ],
  },
  chats: JSON.parse(JSON.stringify(CHAT_SEEDS)),
  reports: [],
  dailyMissions: DAILY_MISSIONS.map((item) => ({ ...item, progress: 0, claimed: false })),
  seasonGoals: SEASON_GOALS.map((item) => ({ ...item, progress: 0, claimed: false })),
  researches: Object.fromEntries(RESEARCH_BRANCHES.flatMap((branch) => branch.items.map((item) => [item.id, false]))),
  botPulse: [],
  marketPrices: {
    iron: 1.1,
    crystal: 1.8,
    biomass: 0.9,
    palladium: 2.6,
    gold: 9.4,
  },
};

const app = document.querySelector("#root");

const getBuilding = (id) => BUILDINGS.find((item) => item.id === id);
const getShip = (id) => SHIPS.find((item) => item.id === id);

const addNotice = (message) => {
  state.notice = message;
};

const addResources = (pack) => {
  Object.entries(pack).forEach(([key, value]) => {
    if (key === "credits") {
      state.user.credits += value;
    } else {
      state.resources[key] = (state.resources[key] || 0) + value;
    }
  });
};

const spendCost = (cost) => {
  Object.entries(cost).forEach(([key, value]) => {
    if (key === "credits") {
      state.user.credits -= value;
    } else {
      state.resources[key] -= value;
    }
  });
};

const hasCost = (cost) =>
  Object.entries(cost).every(([key, value]) =>
    key === "credits" ? state.user.credits >= value : (state.resources[key] || 0) >= value,
  );

const buildingCost = (building) => {
  const level = state.buildings[building.id];
  return Object.fromEntries(
    Object.entries(building.cost).map(([key, value]) => [key, Math.round(value * (1 + level * 0.32))]),
  );
};

const shipCost = (ship, count) =>
  Object.fromEntries(Object.entries(ship.cost).map(([key, value]) => [key, value * count]));

const storageLimit = () => 4000 + state.buildings.storage * 900 + (state.researches.denseStorage ? 1200 : 0);

const getDefensePower = () =>
  state.buildings.defenseGrid * 28 +
  state.buildings.hq * 8 +
  (state.researches.fortGrid ? 22 : 0);

const getEnergySnapshot = () => {
  const produced = state.buildings.powerPlant * 52 + state.buildings.hq * 4;
  const demanded = Object.entries(state.buildings).reduce((sum, [id, level]) => {
    const building = getBuilding(id);
    const upkeep = building?.upkeep?.energy || 0;
    return sum + upkeep * level;
  }, 0) + state.missions.length * 4;
  const net = produced - demanded;
  const factor = net >= 0 ? 1 : Math.max(0.55, 1 + net / 140);
  return { produced, demanded, net, factor };
};

const getProduction = () => {
  const energy = getEnergySnapshot();
  const boost = state.buildings.factory * 0.05 + (state.researches.bioLoop ? 0.08 : 0);
  return {
    iron: (18 + state.buildings.hq * 3 + state.buildings.factory * 9) * energy.factor,
    crystal: (12 + state.buildings.factory * 7 + state.buildings.researchLab * 4) * energy.factor,
    biomass: (10 + state.buildings.greenhouse * 11) * (1 + boost) * energy.factor,
    palladium: (6 + state.buildings.powerPlant * 5 + state.buildings.logisticsHub * 2) * energy.factor,
  };
};

const estimateTimeToAfford = (cost) => {
  const production = getProduction();
  const estimates = Object.entries(cost)
    .map(([key, value]) => {
      if (key === "credits") return null;
      const current = state.resources[key] || 0;
      if (current >= value) return 0;
      const perHour = production[key] || 0;
      if (!perHour) return Infinity;
      return ((value - current) / perHour) * 3600000;
    })
    .filter((value) => value !== null);
  if (!estimates.length) return 0;
  return Math.max(...estimates);
};

const pushReport = (kind, title, summary) => {
  state.reports.unshift({
    id: uid(),
    kind,
    title,
    summary,
    time: state.now,
  });
  state.dailyMissions.find((item) => item.id === "daily-report").progress += 1;
};

const bumpMissionProgress = (id, amount = 1) => {
  const mission = state.dailyMissions.find((item) => item.id === id);
  if (mission) mission.progress += amount;
};

const bumpSeasonProgress = (id, amount = 1) => {
  const season = state.seasonGoals.find((item) => item.id === id);
  if (season) season.progress += amount;
};

const currentAge = () => AGES.find((age) => age.level === state.ageLevel);

const shipyardLimit = () => Math.max(1, Math.min(4, state.buildings.shipyard));

const activeMissionLimit = () => 2 + state.buildings.logisticsHub;

const resolveBattle = (targetPlanet, fleet) => {
  const attackPower =
    (fleet.ships.warLancer || 0) * (getShip("warLancer").power + (state.researches.guidedVolley ? 6 : 0)) +
    (fleet.ships.warBulwark || 0) * getShip("warBulwark").power +
    (fleet.ships.mothership || 0) * getShip("mothership").power;
  const armor =
    (fleet.ships.warLancer || 0) * getShip("warLancer").armor +
    (fleet.ships.warBulwark || 0) * getShip("warBulwark").armor +
    (fleet.ships.mothership || 0) * getShip("mothership").armor;
  const defense = targetPlanet.defense + targetPlanet.turret + getDefensePower() * 0.15;
  const battleScore = attackPower + armor * 0.25 - defense;
  const attackerLoss = Math.max(0, Math.round((defense / Math.max(attackPower, 1)) * 2));
  const defenderLoss = Math.max(1, Math.round(Math.max(attackPower * 0.35 - targetPlanet.turret * 0.3, 1)));
  const won = battleScore > 10;
  const loot = won
    ? {
        iron: Math.min(targetPlanet.stock.iron || 0, 180 + attackerLoss * 22),
        crystal: Math.min(targetPlanet.stock.crystal || 0, 100 + attackerLoss * 15),
        scrap: 18 + defenderLoss,
      }
    : { scrap: 8 + attackerLoss };
  targetPlanet.stock.iron = Math.max(0, (targetPlanet.stock.iron || 0) - (loot.iron || 0));
  targetPlanet.stock.crystal = Math.max(0, (targetPlanet.stock.crystal || 0) - (loot.crystal || 0));
  return { won, attackerLoss, defenderLoss, loot };
};

const createMission = (kind, targetId, ships, extra = {}) => {
  const target = state.planets.find((planet) => planet.id === targetId);
  const travelMs = Math.max(4, target.distance) * 60 * 1000;
  state.missions.push({
    id: uid(),
    kind,
    targetId,
    targetName: target.name,
    ships,
    phase: "outbound",
    startedAt: state.now,
    arrivesAt: state.now + travelMs,
    travelMs,
    cargo: {},
    ...extra,
  });
};

const removeShipsFromInventory = (ships) => {
  Object.entries(ships).forEach(([shipId, count]) => {
    state.shipInventory[shipId] -= count;
  });
};

const returnShipsToInventory = (ships) => {
  Object.entries(ships).forEach(([shipId, count]) => {
    state.shipInventory[shipId] += count;
  });
};

const launchHarvest = (planetId) => {
  const target = state.planets.find((planet) => planet.id === planetId);
  if (!target?.discovered) return addNotice("Hedefi once kesfetmen gerekiyor.");
  if (state.missions.length >= activeMissionLimit()) return addNotice("Aktif gorev limiti dolu.");
  if (state.shipInventory.harvester <= 0) return addNotice("Kaynak toplama gemin yok.");
  removeShipsFromInventory({ harvester: 1 });
  createMission("harvest", planetId, { harvester: 1 });
  addNotice(`${target.name} icin kaynak toplama gorevi yola cikti.`);
};

const launchSpy = (planetId) => {
  const target = state.planets.find((planet) => planet.id === planetId);
  if (!target?.discovered) return addNotice("Casusluk icin hedef gorunur olmali.");
  if ((state.shipInventory.support || 0) <= 0) return addNotice("Casusluk icin destek gemisi gerekiyor.");
  removeShipsFromInventory({ support: 1 });
  createMission("spy", planetId, { support: 1 });
  addNotice(`${target.name} icin istihbarat taramasi basladi.`);
};

const launchSalvage = (planetId) => {
  const target = state.planets.find((planet) => planet.id === planetId);
  if (!target?.discovered) return addNotice("Hurda toplamak icin hedefi once kesfet.");
  if ((state.shipInventory.salvager || 0) <= 0) return addNotice("Hurda toplayici gemin yok.");
  removeShipsFromInventory({ salvager: 1 });
  createMission("salvage", planetId, { salvager: 1 });
  addNotice(`${target.name} cevresine hurda toplama gorevi gonderildi.`);
};

const launchTrade = () => {
  if (state.missions.length >= activeMissionLimit()) return addNotice("Aktif gorev limiti dolu.");
  if ((state.shipInventory.trader || 0) <= 0) return addNotice("Ticaret gemin yok.");
  const shipment = {
    iron: 120,
    crystal: 60,
    biomass: 40,
  };
  if (!hasCost(shipment)) return addNotice("Ticaret icin yeterli stok yok.");
  spendCost(shipment);
  removeShipsFromInventory({ trader: 1 });
  createMission("trade", "tradeHub", { trader: 1 }, { cargo: shipment });
  bumpMissionProgress("daily-trade");
  addNotice("Ticaret gezegenine kaynak sevkiyati basladi.");
};

const launchAttack = (planetId) => {
  const target = state.planets.find((planet) => planet.id === planetId);
  if (!target?.discovered) return addNotice("Saldiri icin hedef gorunur olmali.");
  const ships = {
    warLancer: Math.min(1, state.shipInventory.warLancer),
    warBulwark: Math.min(1, state.shipInventory.warBulwark),
    mothership: Math.min(1, state.shipInventory.mothership),
  };
  const total = Object.values(ships).reduce((sum, value) => sum + value, 0);
  if (!total) return addNotice("Savas icin uygun filo yok.");
  removeShipsFromInventory(ships);
  createMission("attack", planetId, ships);
  addNotice(`${target.name} icin saldiri filosu cikarildi.`);
};

const answerSupportCall = (callId) => {
  const call = state.clan.supportCalls.find((item) => item.id === callId);
  if (!call || call.answered) return;
  if ((state.shipInventory.support || 0) <= 0) return addNotice("Destek gemin yok.");
  if ((state.shipInventory.warLancer || 0) <= 0) return addNotice("Destek cagrisi icin en az 1 warLancer gerekli.");
  call.answered = true;
  removeShipsFromInventory({ support: 1, warLancer: 1 });
  createMission("support", "p5", { support: 1, warLancer: 1 }, { supportCallId: callId });
  bumpSeasonProgress("season-clan");
  addNotice("Klan destek cagrisi yanitlandi.");
};

const queueBuilding = (buildingId) => {
  const building = getBuilding(buildingId);
  const cost = buildingCost(building);
  if (state.buildingQueue.length >= 2) return addNotice("Insaat sirasi en fazla 2 slot.");
  if (state.buildingQueue.some((job) => job.buildingId === buildingId)) {
    return addNotice("Bu bina zaten sirada.");
  }
  if (!hasCost(cost)) {
    const eta = estimateTimeToAfford(cost);
    return addNotice(
      eta === Infinity
        ? "Bu maliyet icin once ilgili uretim hattini acmalisin."
        : `Kaynak yetmiyor. Tahmini birikme suresi: ${formatDuration(eta)}`,
    );
  }
  spendCost(cost);
  const level = state.buildings[buildingId];
  state.buildingQueue.push({
    id: uid(),
    buildingId,
    startedAt: null,
    endsAt: null,
    duration: Math.round(building.baseDuration * (1 + level * 0.18) * 1000),
  });
  bumpMissionProgress("daily-build");
  addNotice(`${building.name} insaati siraya alindi.`);
};

const speedUpBuilding = (jobId) => {
  const job = state.buildingQueue.find((item) => item.id === jobId);
  if (!job) return;
  if (state.user.credits < 10) return addNotice("Hizlandirma icin 10 kredi gerekiyor.");
  state.user.credits -= 10;
  job.endsAt -= Math.round((job.endsAt - state.now) * 0.1);
  addNotice("Insaat %10 hizlandirildi.");
};

const queueShip = (shipId) => {
  const ship = getShip(shipId);
  const count = Math.max(1, Number(state.shipDrafts[shipId] || 1));
  const cost = shipCost(ship, count);
  const activeClasses = new Set(state.shipQueue.map((job) => getShip(job.shipId)?.role));
  if (!activeClasses.has(ship.role) && activeClasses.size >= shipyardLimit()) {
    return addNotice(`Tersane su an en fazla ${shipyardLimit()} farkli gorev tipini ayni anda uretebilir.`);
  }
  if (!hasCost(cost)) {
    const eta = estimateTimeToAfford(cost);
    return addNotice(
      eta === Infinity
        ? "Bu gemi icin gerekli zincir henuz acik degil."
        : `Gemi icin stok yetersiz. Tahmini birikme suresi: ${formatDuration(eta)}`,
    );
  }
  spendCost(cost);
  state.shipQueue.push({
    id: uid(),
    shipId,
    count,
    startedAt: state.now,
    endsAt: state.now + ship.duration * count * 1000,
  });
  addNotice(`${ship.name} icin ${count} adet uretim kuyruha alindi.`);
};

const speedUpShip = (jobId) => {
  const job = state.shipQueue.find((item) => item.id === jobId);
  if (!job) return;
  if (state.user.credits < 10) return addNotice("Hizlandirma icin 10 kredi gerekiyor.");
  state.user.credits -= 10;
  job.endsAt -= Math.round((job.endsAt - state.now) * 0.1);
  addNotice("Gemi uretimi %10 hizlandirildi.");
};

const repairShip = (shipId) => {
  const damaged = state.damagedShips[shipId] || 0;
  if (!damaged) return addNotice("Tamir bekleyen gemi yok.");
  const rawCost = shipId === "warBulwark" ? 30 : 22;
  const discount = state.researches.rapidRepair ? 0.85 : 1;
  const scrapCost = Math.ceil(rawCost * discount);
  if (state.resources.scrap < scrapCost) return addNotice("Yeterli hurda yok.");
  state.resources.scrap -= scrapCost;
  state.damagedShips[shipId] -= 1;
  state.shipInventory[shipId] += 1;
  addNotice(`${getShip(shipId).name} tamir edildi.`);
};

const unlockResearch = (researchId) => {
  if (state.researches[researchId]) return addNotice("Bu arastirma zaten acik.");
  const research = RESEARCH_BRANCHES.flatMap((branch) => branch.items).find((item) => item.id === researchId);
  if (!hasCost(research.cost)) return addNotice("Arastirma icin gerekli kaynak yok.");
  spendCost(research.cost);
  state.researches[researchId] = true;
  addNotice(`${research.name} arastirmasi tamamlandi.`);
};

const claimMissionReward = (id, type) => {
  const group = type === "daily" ? state.dailyMissions : state.seasonGoals;
  const item = group.find((entry) => entry.id === id);
  if (!item || item.claimed || item.progress < item.target) return;
  item.claimed = true;
  addResources(item.reward);
  addNotice(`${item.label} odulu toplandi.`);
};

const buyCredits = (packId) => {
  const pack = CREDIT_PACKS.find((item) => item.id === packId);
  state.user.credits += pack.credits;
  addNotice(`${pack.label} kredi paketi eklendi. Fiyat gostergesi: ${pack.price}.`);
};

const advanceAge = () => {
  const next = AGES.find((age) => age.level === state.ageLevel + 1);
  if (!next) return addNotice("Son caga zaten ulasildi.");
  if (!next.check(state)) return addNotice("Cag gereksinimleri henuz tamamlanmadi.");
  if (!hasCost(next.cost)) return addNotice("Cag atlama maliyeti icin kaynak yetersiz.");
  spendCost(next.cost);
  state.ageLevel += 1;
  state.shipInventory.mothership += 1;
  bumpSeasonProgress("season-age");
  pushReport("age", `${next.name} cagina gecildi`, "Yeni cag ile birlikte 1 adet Ana Gemi filoya eklendi.");
  addNotice(`${next.name} cagina gecildi. Filoya 1 Ana Gemi eklendi.`);
};

const sendChat = (channel, text) => {
  if (!text.trim()) return;
  state.chats[channel].push({ author: state.user.username, text: text.trim() });
  addNotice(`${channel === "clan" ? "Klan" : "Global"} sohbete mesaj gonderildi.`);
};

const simulateBots = () => {
  const shifts = [
    { type: BOT_TYPES[0], message: "Pazar bandinda taban likidite tuttu.", effect: { iron: 0.02, crystal: -0.01 } },
    { type: BOT_TYPES[1], message: "Halcyon Rim rotasina kaydi, altin sahasina yuklenmedi.", effect: { palladium: -0.03 } },
    { type: BOT_TYPES[2], message: "Paladyum fiyat sicrama riskini yumusatti.", effect: { palladium: 0.04, gold: -0.02 } },
    { type: BOT_TYPES[3], message: "Yeni oyuncu havuzunda dengeleyici rekabet olusturdu.", effect: { iron: -0.02, biomass: 0.01 } },
  ];
  const picked = shifts
    .map((item, index) => ({ ...item, id: `${state.now}-${index}` }))
    .slice(0, 3);
  picked.forEach((entry) => {
    Object.entries(entry.effect).forEach(([key, delta]) => {
      state.marketPrices[key] = Math.max(0.4, Number((state.marketPrices[key] + delta).toFixed(2)));
    });
  });
  state.botPulse = picked;
};

const processMissionArrival = (mission) => {
  const target = state.planets.find((planet) => planet.id === mission.targetId);
  if (mission.kind === "harvest") {
    const haul = {
      iron: Math.min(target.stock.iron || 0, 150),
      crystal: Math.min(target.stock.crystal || 0, 90),
      biomass: Math.min(target.stock.biomass || 0, 70),
      palladium: Math.min(target.stock.palladium || 0, 40),
    };
    if ((target.stock.gold || 0) > 0 && Math.random() > 0.65) {
      haul.gold = 1;
      target.stock.gold -= 1;
    }
    Object.entries(haul).forEach(([key, value]) => {
      target.stock[key] = Math.max(0, (target.stock[key] || 0) - value);
    });
    mission.cargo = haul;
    mission.phase = "returning";
    mission.arrivesAt = state.now + mission.travelMs;
    pushReport("mission", `${target.name} toplama raporu`, `Yuklenen kaynak: ${Object.entries(haul).map(([key, value]) => `${key} ${formatNumber(value)}`).join(", ")}`);
    return;
  }
  if (mission.kind === "spy") {
    mission.phase = "returning";
    mission.arrivesAt = state.now + mission.travelMs;
    pushReport(
      "intel",
      `${target.name} istihbarat raporu`,
      `Savunma ${target.defense + target.turret}, tahmini stok altin ${formatNumber(target.stock.gold || 0)}, diger oyuncular ${target.otherPlayers.join(", ") || "yok"}.`,
    );
    return;
  }
  if (mission.kind === "salvage") {
    const salvage = 18 + state.buildings.junkyard * 4 + Math.round(Math.random() * 10);
    mission.cargo = { scrap: salvage };
    mission.phase = "returning";
    mission.arrivesAt = state.now + mission.travelMs;
    pushReport("mission", `${target.name} hurda kurtarma`, `Toplam hurda kazanimi ${salvage}.`);
    return;
  }
  if (mission.kind === "trade") {
    mission.phase = "holding";
    mission.arrivesAt = state.now + 90 * 1000;
    const worth = Object.entries(mission.cargo).reduce(
      (sum, [key, value]) => sum + value * (state.marketPrices[key] || 1),
      0,
    );
    state.marketOrders.unshift({
      id: uid(),
      seller: state.user.username,
      cargo: mission.cargo,
      goldPrice: Math.max(8, Math.round(worth / 22)),
      note: "Ticaret filosu hedefte bekliyor",
    });
    pushReport("trade", "Ticaret gezegeni sevkiyati", `Emir acildi. Tahmini fiyat ${Math.round(worth / 22)} altin.`);
    return;
  }
  if (mission.kind === "support") {
    mission.phase = "returning";
    mission.arrivesAt = state.now + mission.travelMs;
    pushReport("support", "Klan destek gorevi", "Destek filosu hedef hatta takviye sagladi.");
    return;
  }
  if (mission.kind === "attack") {
    const result = resolveBattle(target, mission);
    mission.cargo = result.loot;
    mission.phase = "returning";
    mission.arrivesAt = state.now + mission.travelMs;
    state.damagedShips.warLancer += result.attackerLoss > 0 ? 1 : 0;
    if (result.attackerLoss > 1) state.damagedShips.warBulwark += 1;
    pushReport(
      "battle",
      `${target.name} saldiri raporu`,
      `${result.won ? "Zafer" : "Puskurtuldu"} · saldiran kaybi ${result.attackerLoss}, savunan kaybi ${result.defenderLoss}, loot ${Object.entries(result.loot).map(([key, value]) => `${key} ${formatNumber(value)}`).join(", ")}`,
    );
    bumpSeasonProgress("season-war");
  }
};

const processTick = (deltaMs) => {
  if (state.screen === "loading") {
    const elapsed = state.now - state.lastTick + deltaMs;
    if (elapsed > 900 && state.loadingStep < 3) {
      state.loadingStep += 1;
      if (state.loadingStep >= 3) {
        state.screen = "app";
        addNotice("Senkronizasyon tamamlandi.");
      }
    }
    return;
  }
  if (state.screen !== "app") return;
  const production = getProduction();
  const hours = deltaMs / 3600000;
  ["iron", "crystal", "biomass", "palladium"].forEach((key) => {
    const next = state.resources[key] + production[key] * hours;
    state.resources[key] = Math.min(storageLimit(), next);
  });

  if (state.buildingQueue.length) {
    const current = state.buildingQueue[0];
    if (!current.startedAt) {
      current.startedAt = state.now;
      current.endsAt = state.now + current.duration;
    }
    if (state.now >= current.endsAt) {
      state.buildings[current.buildingId] += 1;
      const finished = getBuilding(current.buildingId);
      pushReport("mission", `${finished.name} tamamlandi`, `Yeni seviye ${state.buildings[current.buildingId]}.`);
      state.buildingQueue.shift();
    }
  }

  state.shipQueue = state.shipQueue.filter((job) => {
    if (state.now >= job.endsAt) {
      state.shipInventory[job.shipId] += job.count;
      pushReport("mission", `${getShip(job.shipId).name} uretimi`, `${job.count} adet gemi filoya katildi.`);
      return false;
    }
    return true;
  });

  state.missions = state.missions.filter((mission) => {
    if (state.now < mission.arrivesAt) return true;
    if (mission.phase === "outbound") {
      processMissionArrival(mission);
      return true;
    }
    if (mission.phase === "holding") {
      mission.phase = "returning";
      mission.arrivesAt = state.now + mission.travelMs;
      return true;
    }
    if (mission.phase === "returning") {
      addResources(mission.cargo || {});
      returnShipsToInventory(mission.ships);
      return false;
    }
    return true;
  });

  state.planets.forEach((planet) => {
    if (planet.kind === "event" && planet.visibleUntil && planet.visibleUntil < state.now) {
      planet.discovered = false;
    }
  });

  if (state.now % 18000 < 1000) simulateBots();
};

const progressPercent = (start, end) => {
  const total = Math.max(1, end - start);
  const elapsed = Math.max(0, Math.min(total, state.now - start));
  return (elapsed / total) * 100;
};

const renderChips = (values) =>
  Object.entries(values)
    .filter(([, value]) => value)
    .map(([key, value]) => `<span class="chip">${key}: ${formatNumber(value)}</span>`)
    .join("");

const renderTopbar = () => {
  const energy = getEnergySnapshot();
  return `
    <div class="topbar">
      <div class="topbar-title">
        <small>Canli operasyon paneli</small>
        <h1>${state.user.planetName}</h1>
      </div>
      <div class="resource-strip">
        <span>Demir ${formatNumber(state.resources.iron)}</span>
        <span>Kristal ${formatNumber(state.resources.crystal)}</span>
        <span>Biyokutle ${formatNumber(state.resources.biomass)}</span>
        <span>Paladyum ${formatNumber(state.resources.palladium)}</span>
        <span>Altin ${formatNumber(state.resources.gold)}</span>
        <span>Hurda ${formatNumber(state.resources.scrap)}</span>
        <span>Kredi ${formatNumber(state.user.credits)}</span>
        <span class="${energy.net < 0 ? "bad" : "good"}">Enerji ${formatNumber(energy.net)}</span>
      </div>
    </div>
  `;
};

const renderSidebar = () => {
  const navItems = [
    ["overview", "Gezegen"],
    ["construction", "Insaat"],
    ["shipyard", "Tersane"],
    ["repair", "Hurda Tamiri"],
    ["research", "Arastirma"],
    ["market", "Pazar"],
    ["map", "Harita"],
    ["clan", "Klan"],
    ["chat", "Sohbet"],
    ["age", "Cag"],
    ["reports", "Raporlar"],
    ["profile", "Profil"],
  ];
  return `
    <aside class="sidebar">
      <div class="profile-card">
        <div class="avatar">${state.user.username.slice(0, 2).toUpperCase()}</div>
        <div>
          <strong>${state.user.username}</strong>
          <div class="small muted">${state.clan.name} · ${state.clan.role}</div>
        </div>
      </div>
      <nav class="nav-list">
        ${navItems
          .map(
            ([id, label]) =>
              `<button class="nav-btn ${state.currentView === id ? "is-active" : ""}" data-action="go-view" data-view="${id}">${label}</button>`,
          )
          .join("")}
      </nav>
      <div class="sidebar-foot">
        <div class="clock-block">
          <small>Gercek oyun saati</small>
          <div class="clock">${formatClock(state.now)}</div>
          <div class="small muted">${Intl.DateTimeFormat().resolvedOptions().timeZone}</div>
        </div>
        <div class="note-box">
          <strong>0.03v + ekstra basliklar</strong>
          <p>Vizyon, bina, gemi, ekonomi, bot ve UI akislari tek kabukta toplandi.</p>
        </div>
        ${state.notice ? `<div class="status-note">${state.notice}</div>` : ""}
      </div>
    </aside>
  `;
};

const renderOverview = () => {
  const energy = getEnergySnapshot();
  const production = getProduction();
  const activeAge = currentAge();
  return `
    <section class="hero-grid">
      <div class="panel hero-panel">
        <small>1. Kisa Genel Vizyon</small>
        <h2>Oyuncu gucu = uretim verimliligi + lojistik dogruluk + enerji dengesi</h2>
        <p>
          Bu ekran, oyun dokumanindaki vizyonu somutlestirir: mikro bina yerlestirme degil,
          dogru kapasiteyi dogru anda buyutme. Pazar, rota ve cag kararlari birlikte okunur.
        </p>
        <div class="chip-row">
          <span class="chip">Cag: ${activeAge.name}</span>
          <span class="chip">Filo limiti: ${activeMissionLimit()}</span>
          <span class="chip">Depo limiti: ${formatNumber(storageLimit())}</span>
        </div>
      </div>
      <div class="panel">
        <small>7. Kaynak Ekonomisi</small>
        <h3>Enerji denge formulu</h3>
        <div class="stat-grid">
          <div class="stat-card"><span>Uretim</span><strong>${formatNumber(energy.produced)}</strong></div>
          <div class="stat-card"><span>Tuketim</span><strong>${formatNumber(energy.demanded)}</strong></div>
          <div class="stat-card"><span>Net</span><strong class="${energy.net < 0 ? "bad" : "good"}">${formatNumber(energy.net)}</strong></div>
          <div class="stat-card"><span>Verim</span><strong>${Math.round(energy.factor * 100)}%</strong></div>
        </div>
        <div class="chip-row">
          <span class="chip">Demir/saat ${formatNumber(production.iron)}</span>
          <span class="chip">Kristal/saat ${formatNumber(production.crystal)}</span>
          <span class="chip">Biyokutle/saat ${formatNumber(production.biomass)}</span>
          <span class="chip">Paladyum/saat ${formatNumber(production.palladium)}</span>
        </div>
      </div>
    </section>
    <section class="content-grid two-col">
      <div class="panel">
        <div class="section-head"><div><small>Operasyon omurgasi</small><h3>Aktif kuyruklar</h3></div></div>
        <div class="list">
          ${
            state.buildingQueue
              .map((job, index) => {
                const building = getBuilding(job.buildingId);
                const active = index === 0 && job.startedAt;
                return `<article class="item">
                  <div class="item-row">
                    <div>
                      <strong>${building.name}</strong>
                      <div class="small muted">${active ? "Aktif sayac iniyor" : "Beklemede"}</div>
                    </div>
                    <span class="chip">${job.endsAt ? formatDuration(job.endsAt - state.now) : "Hazirlaniyor"}</span>
                  </div>
                </article>`;
              })
              .join("") || `<div class="item"><p class="muted">Insaat kuyrugu bos.</p></div>`
          }
          ${
            state.shipQueue
              .map((job) => `<article class="item"><div class="item-row"><strong>${getShip(job.shipId).name}</strong><span class="chip">${job.count} adet · ${formatDuration(job.endsAt - state.now)}</span></div></article>`)
              .join("") || ""
          }
        </div>
      </div>
      <div class="panel">
        <div class="section-head"><div><small>Bot oyuncular</small><h3>Canli ekonomi sinyalleri</h3></div></div>
        <div class="list">
          ${
            state.botPulse
              .map((entry) => `<article class="item"><strong>${entry.type}</strong><p class="muted">${entry.message}</p></article>`)
              .join("") || `<div class="item"><p class="muted">Bot nabzi bir sonraki turda guncellenecek.</p></div>`
          }
        </div>
      </div>
    </section>
  `;
};

const renderConstruction = () => `
  <section class="content-grid two-col">
    <div class="panel">
      <div class="section-head"><div><small>5. Bina Sistemi</small><h3>Kapasite modulleri</h3></div><span class="chip">Maksimum 2 sira</span></div>
      <div class="list">
        ${BUILDINGS.map((building) => {
          const cost = buildingCost(building);
          const queued = state.buildingQueue.find((job) => job.buildingId === building.id);
          const eta = !hasCost(cost) ? estimateTimeToAfford(cost) : 0;
          return `
            <article class="item">
              <div class="item-head">
                <div class="item-title">
                  <img src="${building.image}" alt="${building.name}" />
                  <div>
                    <h4>${building.name} · Seviye ${state.buildings[building.id]}</h4>
                    <p class="muted">${building.description}</p>
                    <div class="small muted">${building.effect}</div>
                  </div>
                </div>
                <button class="primary-btn" data-action="queue-building" data-building-id="${building.id}">Siraya Al</button>
              </div>
              <div class="chip-row">${renderChips(cost)}</div>
              <div class="meta-row">
                <span>Bakim enerji: ${building.upkeep.energy * Math.max(1, state.buildings[building.id])}</span>
                <span>${queued ? "Kuyrukta" : eta ? `Tahmini birikme ${formatDuration(eta)}` : "Kaynak hazir"}</span>
              </div>
              ${
                queued && queued.startedAt
                  ? `<div class="progress"><span style="width:${progressPercent(queued.startedAt, queued.endsAt)}%"></span></div><div class="actions"><button class="secondary-btn" data-action="speed-up-building" data-job-id="${queued.id}">10 kredi ile %10 hizlandir</button></div>`
                  : ""
              }
            </article>
          `;
        }).join("")}
      </div>
    </div>
    <div class="panel">
      <div class="section-head"><div><small>Insaat kurali</small><h3>Kuyruk mantigi</h3></div></div>
      <div class="callout">
        <p>Yalnizca ilk is aktif sayac dusurur. Ikinci slot bekler. Bu, geri bildirimde istenen "2 sira ama tek aktif insaat" kuralini uygular.</p>
      </div>
      <div class="list">
        ${state.buildingQueue.map((job, index) => {
          const building = getBuilding(job.buildingId);
          return `<article class="item">
            <div class="item-row">
              <strong>${index + 1}. ${building.name}</strong>
              <span class="chip">${job.endsAt ? formatDuration(job.endsAt - state.now) : "Hazirlaniyor"}</span>
            </div>
            <p class="muted">${index === 0 ? "Aktif slot" : "Bekleyen slot"}</p>
          </article>`;
        }).join("") || `<div class="item"><p class="muted">Sirada is yok.</p></div>`}
      </div>
    </div>
  </section>
`;

const renderShipyard = () => `
  <section class="panel">
    <div class="section-head"><div><small>6. Gemi Siniflari ve Gelisimleri</small><h3>Tersane</h3></div><span class="chip">Ayni anda ${shipyardLimit()} farkli rol</span></div>
    <div class="list">
      ${SHIPS.map((ship) => {
        const count = state.shipDrafts[ship.id];
        const queue = state.shipQueue.find((job) => job.shipId === ship.id);
        return `
          <article class="item">
            <div class="item-head">
              <div class="item-title">
                <img src="${ship.image}" alt="${ship.name}" />
                <div>
                  <h4>${ship.name}</h4>
                  <p class="muted">${ship.role}</p>
                  <div class="small muted">${ship.profile}</div>
                  <div class="small accent">${ship.special}</div>
                </div>
              </div>
              <button class="primary-btn" data-action="queue-ship" data-ship-id="${ship.id}">Uret</button>
            </div>
            <div class="controls-row">
              <label>Adet <input type="number" min="1" max="20" value="${count}" data-model="shipDrafts.${ship.id}" /></label>
              <span class="chip">Envanter ${state.shipInventory[ship.id]}</span>
              <span class="chip">Tier ${ship.tier}</span>
              <span class="chip">Acilis cagi ${ship.age}</span>
            </div>
            <div class="chip-row">${renderChips(shipCost(ship, count))}</div>
            ${
              queue
                ? `<div class="progress"><span style="width:${progressPercent(queue.startedAt, queue.endsAt)}%"></span></div><div class="actions"><button class="secondary-btn" data-action="speed-up-ship" data-job-id="${queue.id}">10 kredi ile %10 hizlandir</button></div>`
                : ""
            }
          </article>
        `;
      }).join("")}
    </div>
  </section>
`;

const renderRepair = () => `
  <section class="content-grid two-col">
    <div class="panel">
      <div class="section-head"><div><small>Hurda Tamiri</small><h3>Hasarli gemiler</h3></div></div>
      <div class="list">
        ${["warLancer", "warBulwark"].map((shipId) => {
          const ship = getShip(shipId);
          return `<article class="item">
            <div class="item-row">
              <div>
                <strong>${ship.name}</strong>
                <div class="small muted">Hasarli adet ${state.damagedShips[shipId]}</div>
              </div>
              <button class="secondary-btn" data-action="repair-ship" data-ship-id="${shipId}">Hurda ile Tamir Et</button>
            </div>
          </article>`;
        }).join("")}
      </div>
    </div>
    <div class="panel">
      <div class="section-head"><div><small>Hurda kurali</small><h3>Nereden gelir</h3></div></div>
      <div class="callout">
        <p>Hurda pasif uretilmez. Savas, event enkazi veya hurda toplama goreviyle gelir. Tamir sistemi bu sinira gore calisir.</p>
      </div>
    </div>
  </section>
`;

const renderResearch = () => `
  <section class="content-grid">
    ${RESEARCH_BRANCHES.map((branch) => `
      <div class="panel">
        <div class="section-head"><div><small>Arastirma dali</small><h3>${branch.name}</h3></div></div>
        <div class="list">
          ${branch.items.map((item) => `
            <article class="item">
              <div class="item-row">
                <div>
                  <strong>${item.name}</strong>
                  <div class="small muted">${item.description}</div>
                  <div class="small accent">${item.effect}</div>
                </div>
                <button class="${state.researches[item.id] ? "secondary-btn" : "primary-btn"}" data-action="unlock-research" data-research-id="${item.id}">
                  ${state.researches[item.id] ? "Acildi" : "Arastir"}
                </button>
              </div>
              <div class="chip-row">${renderChips(item.cost)}</div>
            </article>
          `).join("")}
        </div>
      </div>
    `).join("")}
  </section>
`;

const renderMarket = () => `
  <section class="content-grid two-col">
    <div class="panel">
      <div class="section-head"><div><small>Pazar ve kredi</small><h3>Ticaret Gezegeni</h3></div><button class="primary-btn" data-action="launch-trade">Standart Ticaret Rotasi Ac</button></div>
      <div class="chip-row">
        <span class="chip">Demir ${state.marketPrices.iron} altin</span>
        <span class="chip">Kristal ${state.marketPrices.crystal} altin</span>
        <span class="chip">Biyokutle ${state.marketPrices.biomass} altin</span>
        <span class="chip">Paladyum ${state.marketPrices.palladium} altin</span>
        <span class="chip">Altin ${state.marketPrices.gold} kredi esdegeri</span>
      </div>
      <div class="list">
        ${state.marketOrders.map((order) => `
          <article class="item">
            <div class="item-row">
              <div>
                <strong>${order.seller}</strong>
                <div class="small muted">${order.note}</div>
              </div>
              <span class="chip">${order.goldPrice} altin</span>
            </div>
            <div class="chip-row">${renderChips(order.cargo)}</div>
          </article>
        `).join("")}
      </div>
    </div>
    <div class="panel">
      <div class="section-head"><div><small>9. Bot Oyuncular</small><h3>Pazar dengeleme</h3></div></div>
      <div class="list">
        ${state.botPulse.map((entry) => `<article class="item"><strong>${entry.type}</strong><p class="muted">${entry.message}</p></article>`).join("") || `<div class="item"><p class="muted">Bot davranislari pazar turuyle yenilenir.</p></div>`}
      </div>
      <div class="section-head second-head"><div><small>Kredi paketleri</small><h3>Satin alim yuzeyi</h3></div></div>
      <div class="pack-grid">
        ${CREDIT_PACKS.map((pack) => `<button class="pack-card" data-action="buy-credits" data-pack-id="${pack.id}"><strong>${pack.label}</strong><span>${pack.price}</span></button>`).join("")}
      </div>
    </div>
  </section>
`;

const renderMap = () => `
  <section class="content-grid two-col">
    <div class="panel map-panel">
      <div class="section-head"><div><small>Harita</small><h3>Gorev merkezleri</h3></div></div>
      <div class="map-board">
        ${state.planets.filter((planet) => planet.discovered || planet.kind === "home" || planet.kind === "trade").map((planet) => `
          <div class="map-node ${planet.kind}">
            <img src="${planet.image}" alt="${planet.name}" />
            <div>
              <strong>${planet.name}</strong>
              <div class="small muted">${planet.kind} · ${planet.distance} segment</div>
            </div>
          </div>
        `).join("")}
      </div>
      <div class="mission-summary">
        ${state.missions.map((mission) => `<div class="chip">${mission.kind} · ${mission.targetName} · ${mission.phase}</div>`).join("") || `<div class="small muted">Aktif mission yok.</div>`}
      </div>
    </div>
    <div class="panel">
      <div class="section-head"><div><small>Gorev akislari</small><h3>Gezegen listesi</h3></div></div>
      <div class="list">
        ${state.planets.filter((planet) => planet.id !== "home").map((planet) => `
          <article class="item">
            <div class="item-head">
              <div class="item-title">
                <img src="${planet.image}" alt="${planet.name}" />
                <div>
                  <h4>${planet.name}</h4>
                  <div class="small muted">${planet.kind} · savunma ${planet.defense + planet.turret}</div>
                  <div class="small muted">Oyuncular: ${planet.otherPlayers.join(", ") || "yok"}</div>
                </div>
              </div>
              <span class="chip">${planet.discovered || planet.kind === "trade" ? "Gorunur" : "Kapali"}</span>
            </div>
            <div class="chip-row">${renderChips(planet.stock)}</div>
            <div class="actions wrap">
              ${planet.kind !== "trade" ? `<button class="secondary-btn" data-action="launch-harvest" data-planet-id="${planet.id}">Topla</button>` : ""}
              ${planet.kind !== "trade" ? `<button class="secondary-btn" data-action="launch-spy" data-planet-id="${planet.id}">Casusluk</button>` : ""}
              ${planet.kind !== "trade" ? `<button class="secondary-btn" data-action="launch-salvage" data-planet-id="${planet.id}">Hurda Topla</button>` : ""}
              ${planet.kind === "rival" || planet.kind === "event" ? `<button class="primary-btn" data-action="launch-attack" data-planet-id="${planet.id}">Saldir</button>` : ""}
            </div>
          </article>
        `).join("")}
      </div>
    </div>
  </section>
`;

const renderClan = () => `
  <section class="content-grid two-col">
    <div class="panel">
      <div class="section-head"><div><small>Klan yapisi</small><h3>${state.clan.name}</h3></div><span class="chip">${state.user.role || state.clan.role}</span></div>
      <div class="callout">
        <p>Klan ici roller, destek cagrilari ve savas gorunurlugu bu ekranda toplandi. Rakip klan: Helix Dominion.</p>
      </div>
      <div class="list">
        ${state.clan.supportCalls.map((call) => `
          <article class="item">
            <div class="item-row">
              <div>
                <strong>${call.author}</strong>
                <div class="small muted">${call.text}</div>
              </div>
              <button class="${call.answered ? "secondary-btn" : "primary-btn"}" data-action="answer-support" data-call-id="${call.id}">
                ${call.answered ? "Yanıtlandi" : "Destek Gonder"}
              </button>
            </div>
          </article>
        `).join("")}
      </div>
    </div>
    <div class="panel">
      <div class="section-head"><div><small>Sezon hedefleri</small><h3>Uzun vadeli ilerleme</h3></div></div>
      <div class="list">
        ${state.seasonGoals.map((goal) => `
          <article class="item">
            <div class="item-row">
              <div>
                <strong>${goal.label}</strong>
                <div class="small muted">${goal.progress}/${goal.target}</div>
              </div>
              <button class="${goal.claimed ? "secondary-btn" : "primary-btn"}" data-action="claim-season" data-goal-id="${goal.id}">
                ${goal.claimed ? "Toplandi" : "Odulu Al"}
              </button>
            </div>
            <div class="chip-row">${renderChips(goal.reward)}</div>
          </article>
        `).join("")}
      </div>
    </div>
  </section>
`;

const renderChat = () => `
  <section class="content-grid two-col">
    ${["clan", "global"].map((channel) => `
      <div class="panel">
        <div class="section-head"><div><small>${channel === "clan" ? "Klan sohbeti" : "Global sohbet"}</small><h3>${channel === "clan" ? state.clan.name : "Galaksi Kanalı"}</h3></div></div>
        <div class="chat-log">
          ${state.chats[channel].map((entry) => `<div class="chat-line"><strong>${entry.author}</strong><span>${entry.text}</span></div>`).join("")}
        </div>
        <div class="chat-form">
          <input placeholder="Mesaj yaz" data-chat-input="${channel}" />
          <button class="primary-btn" data-action="send-chat" data-channel="${channel}">Gonder</button>
        </div>
      </div>
    `).join("")}
  </section>
`;

const renderAge = () => `
  <section class="content-grid two-col">
    <div class="panel">
      <div class="section-head"><div><small>Cag sistemi</small><h3>Bes cag yapisi</h3></div><button class="primary-btn" data-action="advance-age">Bir Sonraki Caga Gec</button></div>
      <div class="list">
        ${AGES.map((age) => `<article class="item ${age.level === state.ageLevel ? "current-age" : ""}">
          <strong>${age.level}. ${age.name}</strong>
          <div class="small muted">${age.focus}</div>
          <div class="chip-row">${age.requirements.map((requirement) => `<span class="chip">${requirement}</span>`).join("")}</div>
          ${age.level === state.ageLevel + 1 ? `<div class="chip-row">${renderChips(age.cost)}</div>` : ""}
        </article>`).join("")}
      </div>
    </div>
    <div class="panel">
      <div class="section-head"><div><small>Gunluk gorevler</small><h3>Kisa vadeli hedefler</h3></div></div>
      <div class="list">
        ${state.dailyMissions.map((mission) => `
          <article class="item">
            <div class="item-row">
              <div>
                <strong>${mission.label}</strong>
                <div class="small muted">${mission.progress}/${mission.target}</div>
              </div>
              <button class="${mission.claimed ? "secondary-btn" : "primary-btn"}" data-action="claim-daily" data-mission-id="${mission.id}">
                ${mission.claimed ? "Toplandi" : "Odulu Al"}
              </button>
            </div>
            <div class="chip-row">${renderChips(mission.reward)}</div>
          </article>
        `).join("")}
      </div>
    </div>
  </section>
`;

const renderReports = () => `
  <section class="panel">
    <div class="section-head"><div><small>Raporlar</small><h3>Gecmis savas, gorev, destek ve istihbarat raporlari</h3></div></div>
    <div class="list">
      ${state.reports.map((report) => `
        <article class="item">
          <div class="item-row">
            <div>
              <strong>${report.title}</strong>
              <div class="small muted">${report.kind} · ${new Date(report.time).toLocaleString("tr-TR")}</div>
            </div>
            <span class="chip">${report.kind}</span>
          </div>
          <p class="muted">${report.summary}</p>
        </article>
      `).join("") || `<div class="item"><p class="muted">Henuz rapor olusmadi.</p></div>`}
    </div>
  </section>
`;

const renderProfile = () => `
  <section class="content-grid two-col">
    <div class="panel">
      <div class="section-head"><div><small>Profil</small><h3>Komutan bilgileri</h3></div></div>
      <div class="list">
        <article class="item">
          <strong>${state.user.username}</strong>
          <div class="small muted">${state.user.email}</div>
        </article>
        <article class="item">
          <label>Gezegen adi</label>
          <div class="chat-form">
            <input id="planet-name" value="${state.user.planetName}" />
            <button class="primary-btn" data-action="rename-planet">Kaydet</button>
          </div>
        </article>
        <article class="item">
          <label>Dil secimi</label>
          <select data-model="selectedLanguage">
            <option value="TR" ${state.selectedLanguage === "TR" ? "selected" : ""}>TR</option>
            <option value="EN" ${state.selectedLanguage === "EN" ? "selected" : ""}>EN</option>
          </select>
        </article>
      </div>
    </div>
    <div class="panel">
      <div class="section-head"><div><small>UI akisi</small><h3>10. Ekranlar ve UI/UX Yapisi</h3></div></div>
      <div class="callout">
        <p>Giris, loading ve ana HUD ayrik tutuldu. Bilgi mimarisi sabit; cag ilerlese bile oyuncu ayni yerlerde ayni veri alanlarini gorur.</p>
      </div>
    </div>
  </section>
`;

const renderAuth = () => `
  <section class="auth-shell">
    <div class="auth-visual-panel">
      <small>10.1 Giris Ekrani</small>
      <h1>TestTaha Command</h1>
      <p>Oyuna en kisa yoldan giris. Pazarlama sayfasi degil, dogrudan operasyon merkezi kapisi.</p>
    </div>
    <div class="auth-form-panel">
      <div class="segmented">
        <button class="${state.authMode === "login" ? "is-active" : ""}" data-action="switch-auth" data-mode="login">Giris</button>
        <button class="${state.authMode === "register" ? "is-active" : ""}" data-action="switch-auth" data-mode="register">Kayit</button>
      </div>
      ${
        state.authMode === "register"
          ? `
            <label>Kullanici adi <input data-model="authDraft.username" value="${state.authDraft.username}" /></label>
            <label>Mail <input data-model="authDraft.email" value="${state.authDraft.email}" /></label>
            <label>Sifre <input type="password" data-model="authDraft.password" value="${state.authDraft.password}" /></label>
          `
          : `
            <label>Kullanici adi <input data-model="authDraft.loginUser" value="${state.authDraft.loginUser}" /></label>
            <label>Sifre <input type="password" data-model="authDraft.loginPassword" value="${state.authDraft.loginPassword}" /></label>
          `
      }
      <button class="primary-btn full" data-action="submit-auth">${state.authMode === "login" ? "Giris Yap" : "Kayit Ol"}</button>
      ${state.notice ? `<div class="status-note">${state.notice}</div>` : ""}
    </div>
  </section>
`;

const renderLoading = () => {
  const steps = ["Uretim senkronize ediliyor", "Pazar durumu cekiliyor", "Filolar dogrulaniyor"];
  return `
    <section class="loading-shell">
      <div class="panel loading-panel">
        <small>10.2 Loading Ekrani</small>
        <h2>Yildiz agina baglaniliyor</h2>
        <div class="loading-list">
          ${steps
            .map(
              (step, index) =>
                `<div class="loading-step ${index < state.loadingStep ? "done" : index === state.loadingStep ? "active" : ""}">
                  <span>${index + 1}</span>
                  <strong>${step}</strong>
                </div>`,
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
};

const renderApp = () => {
  const views = {
    overview: renderOverview(),
    construction: renderConstruction(),
    shipyard: renderShipyard(),
    repair: renderRepair(),
    research: renderResearch(),
    market: renderMarket(),
    map: renderMap(),
    clan: renderClan(),
    chat: renderChat(),
    age: renderAge(),
    reports: renderReports(),
    profile: renderProfile(),
  };
  return `
    <section class="app-shell">
      ${renderSidebar()}
      <main class="main">
        ${renderTopbar()}
        ${views[state.currentView]}
      </main>
    </section>
  `;
};

const render = () => {
  if (state.screen === "auth") app.innerHTML = renderAuth();
  else if (state.screen === "loading") app.innerHTML = renderLoading();
  else app.innerHTML = renderApp();
};

const setByPath = (path, value) => {
  const keys = path.split(".");
  let ref = state;
  while (keys.length > 1) ref = ref[keys.shift()];
  const leaf = keys[0];
  const current = ref[leaf];
  ref[leaf] = typeof current === "number" ? Number(value) : value;
};

document.addEventListener("click", (event) => {
  const target = event.target.closest("[data-action]");
  if (!target) return;
  const { action } = target.dataset;
  if (action === "switch-auth") state.authMode = target.dataset.mode;
  if (action === "submit-auth") {
    if (state.authMode === "register") {
      const { username, email, password } = state.authDraft;
      if (!username || !email || !password) addNotice("Kayit icin tum alanlar gerekli.");
      else {
        state.user.username = username;
        state.user.email = email;
        state.user.password = password;
        state.user.planetName = `${username} Prime`;
        state.screen = "loading";
        state.loadingStep = 0;
        addNotice("Kayit tamamlandi.");
      }
    } else if (
      state.authDraft.loginUser === state.user.username &&
      state.authDraft.loginPassword === state.user.password
    ) {
      state.screen = "loading";
      state.loadingStep = 0;
      addNotice("Giris yapildi.");
    } else addNotice("Kullanici adi veya sifre hatali.");
  }
  if (action === "go-view") state.currentView = target.dataset.view;
  if (action === "queue-building") queueBuilding(target.dataset.buildingId);
  if (action === "speed-up-building") speedUpBuilding(target.dataset.jobId);
  if (action === "queue-ship") queueShip(target.dataset.shipId);
  if (action === "speed-up-ship") speedUpShip(target.dataset.jobId);
  if (action === "repair-ship") repairShip(target.dataset.shipId);
  if (action === "unlock-research") unlockResearch(target.dataset.researchId);
  if (action === "launch-trade") launchTrade();
  if (action === "launch-harvest") launchHarvest(target.dataset.planetId);
  if (action === "launch-spy") launchSpy(target.dataset.planetId);
  if (action === "launch-salvage") launchSalvage(target.dataset.planetId);
  if (action === "launch-attack") launchAttack(target.dataset.planetId);
  if (action === "answer-support") answerSupportCall(target.dataset.callId);
  if (action === "claim-daily") claimMissionReward(target.dataset.missionId, "daily");
  if (action === "claim-season") claimMissionReward(target.dataset.goalId, "season");
  if (action === "buy-credits") buyCredits(target.dataset.packId);
  if (action === "advance-age") advanceAge();
  if (action === "rename-planet") {
    const input = document.querySelector("#planet-name");
    if (input?.value.trim()) {
      state.user.planetName = input.value.trim();
      addNotice("Gezegen adi guncellendi.");
    }
  }
  if (action === "send-chat") {
    const channel = target.dataset.channel;
    const input = document.querySelector(`[data-chat-input="${channel}"]`);
    sendChat(channel, input?.value || "");
    if (input) input.value = "";
  }
  render();
});

document.addEventListener("input", (event) => {
  const target = event.target;
  if (target.dataset.model) {
    setByPath(target.dataset.model, target.value);
    render();
  }
});

setInterval(() => {
  const now = Date.now();
  const delta = now - state.lastTick;
  state.now = now;
  processTick(delta);
  state.lastTick = now;
  render();
}, 1000);

simulateBots();
render();
