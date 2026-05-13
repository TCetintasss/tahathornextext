import { BACKEND_MODULES, DATA_MODEL_NOTES, SYNC_NOTES } from "../data/gameContent.js";
import { getGameViewModel } from "../core/simulation.js";

function formatNumber(value) {
  return new Intl.NumberFormat("tr-TR", {
    maximumFractionDigits: value >= 10 ? 0 : 1,
  }).format(value);
}

function formatCost(cost) {
  return Object.entries(cost)
    .filter(([key]) => key !== "time")
    .map(([key, value]) => `${formatNumber(value)} ${key}`)
    .join(" / ");
}

function progressBar(current, total) {
  const safeTotal = Math.max(1, total);
  const width = Math.max(4, Math.min(100, Math.round((current / safeTotal) * 100)));
  return `
    <div class="progress">
      <span style="width:${width}%"></span>
    </div>
  `;
}

function panel(title, eyebrow, body, aside = "") {
  return `
    <section class="panel">
      <header class="panel__header">
        <div>
          <p class="panel__eyebrow">${eyebrow}</p>
          <h2>${title}</h2>
        </div>
        ${aside ? `<div class="panel__aside">${aside}</div>` : ""}
      </header>
      <div class="panel__body">${body}</div>
    </section>
  `;
}

function renderAuth(playerName) {
  return `
    <main class="auth-screen">
      <section class="auth-screen__content">
        <p class="eyebrow">TESTTAHA / Kimlik Dogrulama</p>
        <h1>Uzay madenciligi, enerji disiplini ve pazar gerilimi tek operasyon merkezinde.</h1>
        <p class="lead">
          Dokumandaki ID/Sifre girisi, loading, ana arayuz, gezegen cekirdegi, filo, pazar, bot ve
          operasyon paneli tek oynanabilir kabukta toplandi.
        </p>
        <form class="auth-form" data-role="login-form">
          <label class="field">
            <span>Operator ID</span>
            <input name="callsign" value="${playerName}" placeholder="Komutan adinizi girin" />
          </label>
          <label class="field">
            <span>Sifre</span>
            <input name="password" type="password" value="123456" />
          </label>
          <div class="auth-form__meta">
            <p>Varsayim: bu surumde auth mock. Sonraki adimda Netlify veya harici kimlik katmani baglanacak.</p>
            <button type="submit">Kontrol Merkezine Gir</button>
          </div>
        </form>
      </section>
    </main>
  `;
}

function renderLoading(playerName) {
  return `
    <main class="loading-screen">
      <div class="loading-shell">
        <p class="eyebrow">Canli Evren Yukleniyor</p>
        <h1>${playerName || "Komutan"} icin snapshot, filo ve pazar state'i hazirlaniyor.</h1>
        <div class="loading-bar" aria-hidden="true"><span></span></div>
        <ul class="loading-list">
          <li>Auth oturumu baglaniyor</li>
          <li>Gezegen cekirdegi ve kaynak tick'i senkronize ediliyor</li>
          <li>Bot davranislari ve emir defteri yenileniyor</li>
          <li>Operasyon telemetry veri seti olusturuluyor</li>
        </ul>
      </div>
    </main>
  `;
}

function renderResourceStrip(resources) {
  return resources
    .map((resource) => {
      const capacity = resource.capacity ? `<small>Kapasite ${formatNumber(resource.capacity)}</small>` : "";
      return `
        <article class="resource-chip">
          <span>${resource.label}</span>
          <strong>${formatNumber(resource.amount)}</strong>
          <small>${resource.perHour >= 0 ? "+" : ""}${formatNumber(resource.perHour)}/saat</small>
          ${capacity}
        </article>
      `;
    })
    .join("");
}

function renderOverview(vm) {
  const alerts = vm.game.alerts.map((item) => `<li>${item}</li>`).join("");
  const queueSummary = [
    ...vm.game.queues.building.map((item) => `${item.targetId}: ${Math.ceil(item.remaining)} dk`),
    ...vm.game.queues.shipyard.map((item) => `${item.targetId}: ${Math.ceil(item.remaining)} dk`),
  ]
    .map((item) => `<li>${item}</li>`)
    .join("");
  const sectors = vm.game.world.sectors
    .map(
      (sector) => `
        <article class="info-band">
          <h3>${sector.title}</h3>
          <p>${sector.summary}</p>
        </article>
      `,
    )
    .join("");

  return `
    <section class="screen-grid">
      ${panel(
        "Komuta Durumu",
        "Anlik riskler",
        `<ul class="bullet-list">${alerts}</ul>`,
        `<span class="status-pill">%${vm.efficiency} verim</span>`,
      )}
      ${panel(
        "Kuyruklar",
        "Bina ve tersane",
        queueSummary ? `<ul class="bullet-list">${queueSummary}</ul>` : `<p class="muted">Aktif kuyruk yok.</p>`,
      )}
      ${panel("Evren Dugumleri", "Oynanis akisi", `<div class="band-grid">${sectors}</div>`)}
      ${panel(
        "Basari Gostergeleri",
        "Operasyon metrikleri",
        `
          <div class="metric-grid">
            <article class="metric"><span>Pazar hacmi</span><strong>${formatNumber(vm.game.metrics.marketVolume)}</strong></article>
            <article class="metric"><span>Bot emirleri</span><strong>${formatNumber(vm.game.metrics.botTrades)}</strong></article>
            <article class="metric"><span>Oyuncu emirleri</span><strong>${formatNumber(vm.game.metrics.playerTrades)}</strong></article>
            <article class="metric"><span>Enerji toparlanmasi</span><strong>${formatNumber(vm.game.metrics.energyRecoveryMoments)}</strong></article>
          </div>
        `,
      )}
    </section>
  `;
}

function renderPlanet(vm) {
  const buildings = vm.buildings
    .map((building) => {
      const queue = building.queued
        ? `
            ${progressBar(building.queued.total - building.queued.remaining, building.queued.total)}
            <p class="muted">${Math.ceil(building.queued.remaining)} dakika kaldi</p>
          `
        : "";
      const action = building.unlocked && !building.maxed
        ? `<button data-action="upgrade-building" data-id="${building.id}" ${building.queued ? "disabled" : ""}>Yukselt</button>`
        : `<button disabled>${building.unlocked ? "Maksimum" : "Kilitli"}</button>`;
      return `
        <article class="row-card">
          <div>
            <h3>${building.label} <span>Seviye ${building.level}</span></h3>
            <p>${building.description}</p>
            <p class="muted">${formatCost(building.nextCost)}</p>
            ${queue}
          </div>
          <div class="row-card__meta">
            <span>${building.unlocked ? "Cag acik" : `Cag ${building.unlockEra}`}</span>
            ${action}
          </div>
        </article>
      `;
    })
    .join("");

  const eraCards = vm.game.defs.eras
    .map((era, index) => {
      const active = index === vm.game.eraIndex;
      const reached = index <= vm.game.eraIndex;
      return `
        <article class="era-card ${active ? "era-card--active" : ""}">
          <p class="panel__eyebrow">Cag ${era.id}</p>
          <h3>${era.name}</h3>
          <p>${era.focus}</p>
          <ul class="bullet-list compact">
            ${era.unlocks.map((unlock) => `<li>${unlock}</li>`).join("")}
          </ul>
          <span class="status-pill ${reached ? "status-pill--ok" : ""}">${reached ? "Ulasildi" : "Kilitli"}</span>
        </article>
      `;
    })
    .join("");

  const nextAction = vm.nextEraAvailable
    ? `<button data-action="advance-era">Sonraki Caga Gec</button>`
    : `<button disabled>Cag kosullari eksik</button>`;

  return `
    <section class="screen-grid">
      ${panel(
        "Gezegen Cekirdegi",
        "Bina sistemi",
        `<div class="stack-list">${buildings}</div>`,
        `<span class="status-pill">${vm.currentEra.name}</span>`,
      )}
      ${panel(
        "Bes Cag Merdiveni",
        "Ilerleme",
        `<div class="era-grid">${eraCards}</div>`,
        nextAction,
      )}
    </section>
  `;
}

function renderFleet(vm) {
  const ships = vm.ships
    .map((ship) => {
      const queued = ship.queuedCount ? `<p class="muted">Tersanede ${ship.queuedCount} adet var.</p>` : "";
      return `
        <article class="row-card">
          <div>
            <h3>${ship.label} <span>${ship.amount} aktif</span></h3>
            <p>${ship.description}</p>
            <p class="muted">${formatCost(ship.nextCost)}</p>
            ${queued}
          </div>
          <div class="row-card__meta">
            <span>${ship.unlocked ? "Hazir" : `Cag ${ship.unlockEra}`}</span>
            <button data-action="queue-ship" data-id="${ship.id}" ${ship.unlocked ? "" : "disabled"}>Uret</button>
          </div>
        </article>
      `;
    })
    .join("");

  const routes = vm.routes
    .map((route) => {
      const rewards = Object.entries(route.rewards)
        .map(([key, value]) => `${value} ${key}`)
        .join(", ");
      return `
        <article class="row-card">
          <div>
            <h3>${route.label}</h3>
            <p>${route.category} / Risk ${route.risk}</p>
            <p class="muted">${rewards}</p>
          </div>
          <div class="row-card__meta">
            <span>${route.availableShips} uygun gemi</span>
            <button data-action="dispatch-mission" data-id="${route.id}" ${route.unlocked && route.availableShips > 0 ? "" : "disabled"}>Gonder</button>
          </div>
        </article>
      `;
    })
    .join("");

  const activeMissions = vm.game.missions
    .map((mission) => {
      const route = vm.routes.find((item) => item.id === mission.routeId);
      return `
        <article class="row-card">
          <div>
            <h3>${mission.label}</h3>
            <p>${route ? route.category : "gorev"}</p>
            ${progressBar(mission.total - mission.remaining, mission.total)}
          </div>
          <div class="row-card__meta">
            <span>${Math.ceil(mission.remaining)} dk</span>
          </div>
        </article>
      `;
    })
    .join("");

  return `
    <section class="screen-grid">
      ${panel("Gemi Siniflari", "Filo gelisimi", `<div class="stack-list">${ships}</div>`)}
      ${panel("Gorev Rotasi", "Tarafsiz gezegenler ve ticaret", `<div class="stack-list">${routes}</div>`)}
      ${panel(
        "Aktif Gorevler",
        "Lojistik kuyruk",
        activeMissions ? `<div class="stack-list">${activeMissions}</div>` : `<p class="muted">Su an aktif gorev yok.</p>`,
      )}
    </section>
  `;
}

function renderMarket(vm) {
  const priceRows = Object.entries(vm.prices)
    .map(
      ([resource, price]) => `
        <article class="metric">
          <span>${resource}</span>
          <strong>${formatNumber(price)}</strong>
        </article>
      `,
    )
    .join("");

  const quickOrders = vm.game.market.quickOrders
    .map(
      (order) => `
        <button class="wide-button" data-action="quick-order" data-id="${order.id}">
          ${order.label}
        </button>
      `,
    )
    .join("");

  const orderBook = vm.game.market.orders
    .map(
      (order) => `
        <article class="row-card">
          <div>
            <h3>${order.label}</h3>
            <p>${order.side} / ${order.resource}</p>
          </div>
          <div class="row-card__meta">
            <span>${formatNumber(order.amount)} birim</span>
            <span>${formatNumber(order.total)} kredi</span>
          </div>
        </article>
      `,
    )
    .join("");

  return `
    <section class="screen-grid">
      ${panel("Piyasa Nabzi", "Kaynak fiyatlari", `<div class="metric-grid">${priceRows}</div>`)}
      ${panel("Hizli Emirler", "Ticaret sistemi", `<div class="button-stack">${quickOrders}</div>`)}
      ${panel(
        "Emir Defteri",
        "Son islemler",
        orderBook ? `<div class="stack-list">${orderBook}</div>` : `<p class="muted">Henuz emir yok.</p>`,
        `<span class="status-pill">Vergi %${Math.round(vm.game.market.taxRate * 100)}</span>`,
      )}
    </section>
  `;
}

function renderBots(vm) {
  const bots = vm.game.bots
    .map(
      (bot) => `
        <article class="row-card">
          <div>
            <h3>${bot.label}</h3>
            <p>${bot.role}</p>
            <p class="muted">Son aksiyon: ${bot.lastAction}</p>
          </div>
          <div class="row-card__meta">
            <span>${bot.mood}</span>
            <span>${bot.cadence} dk cadence</span>
          </div>
        </article>
      `,
    )
    .join("");

  return `
    <section class="screen-grid">
      ${panel("Bot Oyuncular", "Canli ekonomi desteği", `<div class="stack-list">${bots}</div>`)}
      ${panel(
        "Gerilim Kural Seti",
        "Denge mantigi",
        `
          <ul class="bullet-list">
            <li>Likidite botu pazar boslugunu kapatir.</li>
            <li>Madenci bot temel kaynak akisini sabit tutar.</li>
            <li>Rakip bot paladyum ve altinda baski yaratir.</li>
            <li>Denge botu yeni oyuncunun tam kilitlenmesini engeller.</li>
          </ul>
        `,
      )}
    </section>
  `;
}

function renderOperations(vm) {
  const logs = vm.game.logs.map((log) => `<li>${log}</li>`).join("");
  const backend = BACKEND_MODULES.map((item) => `<li>${item}</li>`).join("");
  const sync = SYNC_NOTES.map((item) => `<li>${item}</li>`).join("");
  const dataModel = DATA_MODEL_NOTES.map((item) => `<li>${item}</li>`).join("");
  const roadmapDone = vm.game.roadmap.completed.map((item) => `<li>${item}</li>`).join("");
  const roadmapNext = vm.game.roadmap.pending.map((item) => `<li>${item}</li>`).join("");

  return `
    <section class="screen-grid">
      ${panel("Operasyon Loglari", "Canli panel", `<ul class="bullet-list">${logs}</ul>`)}
      ${panel("Teknik Mimari", "Backend modulleri", `<ul class="bullet-list">${backend}</ul>`)}
      ${panel("Senkronizasyon", "Cok oyunculu notlar", `<ul class="bullet-list">${sync}</ul>`)}
      ${panel("Veri Modeli", "Iliski ozeti", `<ul class="bullet-list">${dataModel}</ul>`)}
      ${panel(
        "MVP Kapsami",
        "Backlog durumu",
        `
          <div class="two-column-list">
            <div><h3>Tamamlananlar</h3><ul class="bullet-list">${roadmapDone}</ul></div>
            <div><h3>Sunucu tarafinda kalanlar</h3><ul class="bullet-list">${roadmapNext}</ul></div>
          </div>
        `,
      )}
    </section>
  `;
}

function renderScreen(screen, vm) {
  if (screen === "planet") return renderPlanet(vm);
  if (screen === "fleet") return renderFleet(vm);
  if (screen === "market") return renderMarket(vm);
  if (screen === "bots") return renderBots(vm);
  if (screen === "ops") return renderOperations(vm);
  return renderOverview(vm);
}

function navButton(screen, current, label) {
  return `
    <button class="nav-button ${screen === current ? "nav-button--active" : ""}" data-action="switch-screen" data-id="${screen}">
      ${label}
    </button>
  `;
}

function renderGameShell(state) {
  const vm = getGameViewModel(state.game);
  const nav = [
    ["overview", "Genel Durum"],
    ["planet", "Gezegen"],
    ["fleet", "Filo"],
    ["market", "Pazar"],
    ["bots", "Botlar"],
    ["ops", "Operasyon"],
  ]
    .map(([screen, label]) => navButton(screen, state.screen, label))
    .join("");

  return `
    <main class="app-shell">
      <aside class="sidebar">
        <div class="brand-lockup">
          <p class="eyebrow">TESTTAHA</p>
          <h1>Uzay Madenciligi Kontrol Agi</h1>
          <p class="muted">${state.game.playerName} / ${state.game.playerId}</p>
        </div>
        <nav class="nav-list">${nav}</nav>
        <div class="sidebar__footer">
          <p class="muted">Saat +${formatNumber(state.game.clockMinutes)} oyun dakikasi</p>
          <button data-action="logout">Cik</button>
        </div>
      </aside>
      <section class="workspace">
        <header class="workspace__header">
          <div>
            <p class="eyebrow">${state.game.homePlanet} / ${vm.currentEra.name}</p>
            <h2>Enerji ${formatNumber(vm.energy.net)} / Verim %${vm.efficiency}</h2>
          </div>
          <div class="workspace__status">
            <span class="status-pill">Kapasite ${formatNumber(vm.capacity)}</span>
            <span class="status-pill">${vm.game.missions.length} aktif gorev</span>
            <span class="status-pill">${vm.game.market.volume} hacim</span>
          </div>
        </header>
        <section class="resource-strip">${renderResourceStrip(vm.resources)}</section>
        ${renderScreen(state.screen, vm)}
      </section>
    </main>
  `;
}

export function renderApp(state) {
  if (state.phase === "auth") return renderAuth(state.playerName);
  if (state.phase === "loading") return renderLoading(state.playerName);
  return renderGameShell(state);
}
