import {
  BOT_DEFS,
  BUILDING_DEFS,
  ERA_DEFS,
  MARKET_BASE_PRICES,
  QUICK_ORDER_DEFS,
  ROUTE_DEFS,
  SHIP_DEFS,
} from "../data/gameContent.js";

function makeResourceState() {
  return {
    iron: 2200,
    ice: 980,
    silica: 760,
    palladium: 58,
    gold: 0,
    scrap: 42,
    credits: 1400,
    energy: 120,
  };
}

export function createInitialGameState(playerName) {
  const now = Date.now();

  return {
    tick: 0,
    clockMinutes: 0,
    playerName,
    playerId: "TT-2049",
    securityTier: "Mock Auth",
    factionTitle: "Kurulus Filosu",
    homePlanet: "Khepri-17",
    tradePlanet: "Ortak Pazar Istasyonu",
    resources: makeResourceState(),
    buildings: {
      commandCenter: { level: 1 },
      storageBay: { level: 2 },
      hydroponics: { level: 2 },
      fusionReactor: { level: 1 },
      shipyard: { level: 1 },
      recycler: { level: 0 },
      marketPort: { level: 0 },
      logisticsHub: { level: 0 },
      deepScanner: { level: 0 },
    },
    ships: {
      miner: 2,
      trader: 0,
      mothership: 0,
      support: 0,
      scavenger: 0,
      tanker: 0,
      scanner: 0,
    },
    queues: {
      building: [],
      shipyard: [],
    },
    missions: [
      {
        id: "mission-seed-1",
        routeId: "iron-belt",
        shipId: "miner",
        label: "Ilk madenci rotasi",
        remaining: 16,
        total: 26,
        startedAt: now,
        rewards: { iron: 150, silica: 30, scrap: 10 },
      },
    ],
    market: {
      prices: { ...MARKET_BASE_PRICES },
      orders: [],
      quickOrders: QUICK_ORDER_DEFS,
      volume: 0,
      taxRate: 0.04,
    },
    bots: BOT_DEFS.map((bot, index) => ({
      ...bot,
      lastActionAt: index * 6,
      mood: "aktif",
      lastAction: "Beklemede",
    })),
    eraIndex: 0,
    alerts: [
      "Enerji acigi buyurmeden reaktor yukseltmesi oncelenmeli.",
      "Altin yalnizca ileri tarama rotalariyla aciliyor.",
      "Savas sistemi MVP disinda ama gorev omurgasi gelecege hazir.",
    ],
    logs: [
      "Sistem acildi: giris, loading ve ana arayuz baglandi.",
      "Ilk snapshot olusturuldu ve gezegen state'i yuklendi.",
      "MVP-01 ile MVP-08 arasi moduller tek uygulamada eslestirildi.",
    ],
    metrics: {
      marketVolume: 0,
      botTrades: 0,
      playerTrades: 0,
      energyRecoveryMoments: 0,
    },
    world: {
      routes: ROUTE_DEFS,
      sectors: [
        {
          title: "Oyuncu Gezegeni",
          summary: "Guvenli uretim alani. Buyume, enerji ve kapasite kararlarinin merkezi.",
        },
        {
          title: "Tarafsiz Gezegenler",
          summary: "Firsat ve riskin bir arada oldugu maden ve hurda rotalari.",
        },
        {
          title: "Ticaret Gezegeni",
          summary: "Oyuncu-bot etkilesiminin merkezindeki emir defteri ve fiyat akisi.",
        },
      ],
    },
    roadmap: {
      completed: ["MVP-01", "MVP-02", "MVP-03", "MVP-04", "MVP-05", "MVP-06", "MVP-07", "MVP-08"],
      pending: ["Canli backend", "Gercek auth", "Sunucu otoriter market motoru"],
    },
    defs: {
      buildings: BUILDING_DEFS,
      ships: SHIP_DEFS,
      eras: ERA_DEFS,
    },
  };
}
