function panel(title, eyebrow, content, aside = "") {
  return `
    <section class="panel">
      <header class="panel__header">
        <div>
          <p class="panel__eyebrow">${eyebrow}</p>
          <h2>${title}</h2>
        </div>
        ${aside ? `<div class="panel__aside">${aside}</div>` : ""}
      </header>
      <div class="panel__body">${content}</div>
    </section>
  `;
}

function renderAuth(playerName) {
  return `
    <main class="auth-screen">
      <section class="auth-screen__content">
        <p class="eyebrow">TestTaha / Operasyon Hazirligi</p>
        <h1>Uzay madenciligini kaynak, enerji ve rota disiplini ile yoneten bir acilis arayuzu.</h1>
        <p class="lead">
          Dokumandaki Sprint 1 hedefi icin giris, loading, ana layout ve hesap modeli tek bir
          acilis deneyimi olarak kuruldu.
        </p>

        <form class="auth-form" data-role="login-form">
          <label class="field">
            <span>Cagri Ismi</span>
            <input name="callsign" value="${playerName}" placeholder="Komutan adinizi girin" />
          </label>

          <div class="auth-form__meta">
            <p>Varsayim: ilk surumde gercek auth yerine hesap secimi mock olarak ilerliyor.</p>
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
        <p class="eyebrow">Canli Evren Girisi</p>
        <h1>${playerName || "Komutan"} icin operasyon panosu hazirlaniyor.</h1>
        <div class="loading-bar" aria-hidden="true"><span></span></div>
        <ul class="loading-list">
          <li>Uretim kuyruklari senkronize ediliyor</li>
          <li>Filo gorevleri cozuluyor</li>
          <li>Enerji ve depo snapshot'i hazirlaniyor</li>
        </ul>
      </div>
    </main>
  `;
}

function renderDashboard(snapshot) {
  const resourceStrip = snapshot.resources
    .map(
      (resource) => `
        <article class="resource-chip">
          <span>${resource.label}</span>
          <strong>${resource.amount}</strong>
          <small>${resource.perHour > 0 ? "+" : ""}${resource.perHour}/saat</small>
        </article>
      `,
    )
    .join("");

  const alerts = snapshot.alerts.map((alert) => `<p>${alert}</p>`).join("");
  const buildings = snapshot.buildings
    .map(
      (building) => `
        <article class="row-card">
          <div>
            <h3>${building.label} <span>Seviye ${building.level}</span></h3>
            <p>${building.impact}</p>
          </div>
          <div class="row-card__meta">
            <p>${building.nextAction}</p>
            ${building.eta ? `<span>${building.eta}</span>` : ""}
          </div>
        </article>
      `,
    )
    .join("");

  const missions = snapshot.missions
    .map(
      (mission) => `
        <article class="row-card">
          <div>
            <h3>${mission.label}</h3>
            <p>${mission.destination}</p>
          </div>
          <div class="row-card__meta">
            <p>${mission.cargo}</p>
            <span>${mission.eta}</span>
          </div>
        </article>
      `,
    )
    .join("");

  const marketSignals = snapshot.marketSignals
    .map(
      (signal) => `
        <article class="row-card">
          <div>
            <h3>${signal.title}</h3>
            <p>${signal.summary}</p>
          </div>
          <div class="trend trend--${signal.trend}">${signal.trend}</div>
        </article>
      `,
    )
    .join("");

  const recommendations = snapshot.nextRecommendations
    .map((item) => `<li>${item}</li>`)
    .join("");

  const eraRequirements = snapshot.era.requirements.map((item) => `<li>${item}</li>`).join("");
  const eraBlockers = snapshot.era.blockers.map((item) => `<li>${item}</li>`).join("");

  return `
    <main class="dashboard">
      <header class="hero">
        <div>
          <p class="eyebrow">${snapshot.playerName} / ${snapshot.factionTitle}</p>
          <h1>${snapshot.homePlanet} operasyon merkezi</h1>
          <p class="lead">
            Bu acilis iskeleti, dokumandaki temel oyun dongusunu tek ekranda gorunur hale getirir:
            kaynak dengesi, bina kararleri, gorev takibi ve cag ilerlemesi.
          </p>
        </div>
        <div class="hero__actions">
          <span class="status-pill">Cag ${snapshot.era.current}</span>
          <button data-role="logout">Oturumu Kapat</button>
        </div>
      </header>

      <section class="resource-strip">${resourceStrip}</section>

      <section class="dashboard-grid">
        ${panel("Komuta Notlari", "Anlik Durum", `<div class="list-block">${alerts}</div>`)}
        ${panel(
          "Cag Gecisi",
          "Ilerleme",
          `
            <div class="two-column-list">
              <div>
                <h3>Gerekli kosullar</h3>
                <ul>${eraRequirements}</ul>
              </div>
              <div>
                <h3>Aktif engeller</h3>
                <ul>${eraBlockers}</ul>
              </div>
            </div>
          `,
          `<span class="status-pill">${snapshot.era.nextName}</span>`,
        )}
        ${panel("Bina Omurgasi", "Gezegen", `<div class="stack-list">${buildings}</div>`)}
        ${panel("Filo Gorevleri", "Lojistik", `<div class="stack-list">${missions}</div>`)}
        ${panel("Pazar Sinyalleri", "Ticaret", `<div class="stack-list">${marketSignals}</div>`)}
        ${panel(
          "Bir Sonraki Degerli Adimlar",
          "MVP Yonu",
          `<ol class="recommendations">${recommendations}</ol>`,
        )}
      </section>
    </main>
  `;
}

export function renderApp(state) {
  if (state.phase === "auth") {
    return renderAuth(state.playerName);
  }

  if (state.phase === "loading" || !state.snapshot) {
    return renderLoading(state.playerName);
  }

  return renderDashboard(state.snapshot);
}
