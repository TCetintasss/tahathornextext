export const RESOURCE_KEYS = [
  "iron",
  "ice",
  "silica",
  "palladium",
  "gold",
  "scrap",
  "credits",
  "energy",
];

export const RESOURCE_META = {
  iron: { label: "Demir", type: "cargo" },
  ice: { label: "Buz", type: "cargo" },
  silica: { label: "Silika", type: "cargo" },
  palladium: { label: "Paladyum", type: "cargo" },
  gold: { label: "Altin", type: "cargo" },
  scrap: { label: "Hurda", type: "cargo" },
  credits: { label: "Kredi", type: "soft" },
  energy: { label: "Enerji", type: "soft" },
};

export const ERA_DEFS = [
  {
    id: 1,
    name: "Kurulus Cagi",
    focus: "Hayatta kalma ve temel uretim",
    unlocks: ["Depo", "Sera", "Temel tersane", "Ilk madenci gorevleri"],
    requirements: { commandCenter: 1, fusionReactor: 1, credits: 0, palladium: 0 },
  },
  {
    id: 2,
    name: "Yorunge Sanayi Cagi",
    focus: "Verimlilik ve geri donusum",
    unlocks: ["Geri donusum", "Pazar limani", "Ticaret gemisi", "Bot likiditesi"],
    requirements: { commandCenter: 2, fusionReactor: 2, credits: 1600, palladium: 40 },
  },
  {
    id: 3,
    name: "Derin Uzay Lojistik Cagi",
    focus: "Rota optimizasyonu ve agir tasima",
    unlocks: ["Lojistik merkezi", "Destek gemisi", "Paladyum tanker", "Nadir rota emirleri"],
    requirements: { commandCenter: 3, logisticsHub: 2, credits: 4200, palladium: 90 },
  },
  {
    id: 4,
    name: "Yildiz Agi Cagi",
    focus: "Otomasyon ve yildizlar arasi pazar etkisi",
    unlocks: ["Derin tarayici", "Altin tarayici", "Rota otomasyonu", "Yuksek hacimli emirler"],
    requirements: { commandCenter: 4, deepScanner: 2, credits: 9000, palladium: 180 },
  },
  {
    id: 5,
    name: "Egemenlik Cagi",
    focus: "Tam ekonomik hakimiyet ve ileri ag koordinasyonu",
    unlocks: ["Ana gemi yukseltmeleri", "Canli operasyonlar", "Yildiz agi bonuslari", "Egemenlik puani"],
    requirements: { commandCenter: 5, marketPort: 4, credits: 18000, palladium: 320 },
  },
];

export const BUILDING_DEFS = [
  { id: "commandCenter", label: "Ana Bina", description: "Cag gecisinin merkezi kapisi; tum stratejik buyumeyi acar.", unlockEra: 1, maxLevel: 5, baseDuration: 45, cost: { iron: 300, ice: 80, silica: 90, credits: 100 } },
  { id: "storageBay", label: "Depo Modulu", description: "Fiziksel kaynak kapasitesini artirir ve tasma riskini azaltir.", unlockEra: 1, maxLevel: 6, baseDuration: 28, cost: { iron: 140, silica: 70, credits: 80 } },
  { id: "hydroponics", label: "Sera", description: "Buz ve ikincil destek ciktilariyla erken oyunun dengesini korur.", unlockEra: 1, maxLevel: 6, baseDuration: 24, cost: { iron: 110, ice: 60, credits: 60 } },
  { id: "fusionReactor", label: "Fusyon Reaktoru", description: "Enerji omurgasini kurar; tum uretim veriminin sigortasidir.", unlockEra: 1, maxLevel: 6, baseDuration: 30, cost: { iron: 180, silica: 110, palladium: 10, credits: 130 } },
  { id: "shipyard", label: "Temel Tersane", description: "Gemi uretimi ve yeni gorev tiplerinin acilis noktasi.", unlockEra: 1, maxLevel: 5, baseDuration: 34, cost: { iron: 220, silica: 120, credits: 170 } },
  { id: "recycler", label: "Geri Donusum Birimi", description: "Hurdayi tekrar ekonomiye sokar ve orta oyuna gecisi hizlandirir.", unlockEra: 2, maxLevel: 5, baseDuration: 36, cost: { iron: 240, scrap: 30, credits: 200 } },
  { id: "marketPort", label: "Pazar Limani", description: "Ticaret gezegeni ile emir akisini guclendirir.", unlockEra: 2, maxLevel: 5, baseDuration: 40, cost: { iron: 280, silica: 180, credits: 260 } },
  { id: "logisticsHub", label: "Lojistik Merkezi", description: "Gorev sayisini ve rota verimliligini artirir.", unlockEra: 3, maxLevel: 5, baseDuration: 42, cost: { iron: 340, ice: 140, credits: 380, palladium: 30 } },
  { id: "deepScanner", label: "Derin Tarayici", description: "Altin ve nadir kaynak rotalarinin acilis anahtari.", unlockEra: 4, maxLevel: 4, baseDuration: 50, cost: { silica: 320, credits: 520, palladium: 60 } },
];

export const SHIP_DEFS = [
  { id: "miner", label: "Kaynak Toplama Gemisi", description: "Tarafsiz gezegenlerden temel maden toplar.", unlockEra: 1, buildMinutes: 22, cost: { iron: 160, credits: 110, energy: 10 } },
  { id: "trader", label: "Ticaret Gemisi", description: "Pazar limanina emir tasir ve kredi akisini guclendirir.", unlockEra: 2, buildMinutes: 26, cost: { iron: 180, silica: 60, credits: 160, energy: 12 } },
  { id: "mothership", label: "Ana Gemi", description: "Agir kapasite ve ileri rota bonuslari saglar.", unlockEra: 5, buildMinutes: 80, cost: { iron: 600, silica: 260, palladium: 120, credits: 1600, energy: 35 } },
  { id: "support", label: "Destek Gemisi", description: "Lojistik ve onarim verimini artirir.", unlockEra: 3, buildMinutes: 30, cost: { iron: 220, ice: 80, credits: 220, energy: 12 } },
  { id: "scavenger", label: "Hurda Toplayici", description: "Atik rotalarindan hurda ve ikinci kalite maden toplar.", unlockEra: 2, buildMinutes: 24, cost: { iron: 140, scrap: 20, credits: 130, energy: 10 } },
  { id: "tanker", label: "Paladyum Tanker", description: "Paladyum tasir ve enerji omurgasini destekler.", unlockEra: 3, buildMinutes: 34, cost: { iron: 260, palladium: 35, credits: 260, energy: 14 } },
  { id: "scanner", label: "Altin Tarayici", description: "Altin patlamalarini tarar ve nadir kesifler yapar.", unlockEra: 4, buildMinutes: 38, cost: { silica: 260, palladium: 50, credits: 420, energy: 18 } },
];

export const ROUTE_DEFS = [
  { id: "iron-belt", label: "Tarafsiz Kaya Kusagi", category: "mining", shipId: "miner", duration: 26, risk: "Dusuk", rewards: { iron: 150, silica: 30, scrap: 10 } },
  { id: "ice-ridge", label: "Buz Sirtlari", category: "mining", shipId: "miner", duration: 22, risk: "Dusuk", rewards: { ice: 120, silica: 20 } },
  { id: "trade-ring", label: "Ticaret Gezegeni Halkasi", category: "trade", shipId: "trader", duration: 28, risk: "Orta", rewards: { credits: 260 } },
  { id: "scrap-yard", label: "Hurda Mezarligi", category: "salvage", shipId: "scavenger", duration: 24, risk: "Orta", rewards: { scrap: 85, iron: 30, credits: 40 } },
  { id: "palladium-lane", label: "Paladyum Koridoru", category: "mining", shipId: "tanker", duration: 34, risk: "Yuksek", rewards: { palladium: 22, credits: 80 } },
  { id: "gold-scan", label: "Altin Patlama Tarama", category: "scan", shipId: "scanner", duration: 40, risk: "Yuksek", rewards: { gold: 12, silica: 40, credits: 120 } },
  { id: "relay-support", label: "Derin Uzay Destek Hatti", category: "support", shipId: "support", duration: 30, risk: "Orta", rewards: { credits: 110, energy: 24 } },
];

export const MARKET_BASE_PRICES = { iron: 2.2, ice: 2.8, silica: 3.4, palladium: 9.5, gold: 15.0, scrap: 1.6 };

export const QUICK_ORDER_DEFS = [
  { id: "sell-ice", label: "80 buz sat", side: "sell", resource: "ice", amount: 80 },
  { id: "sell-scrap", label: "60 hurda sat", side: "sell", resource: "scrap", amount: 60 },
  { id: "buy-palladium", label: "18 paladyum al", side: "buy", resource: "palladium", amount: 18 },
  { id: "buy-silica", label: "50 silika al", side: "buy", resource: "silica", amount: 50 },
];

export const BOT_DEFS = [
  { id: "liquidity-bot", label: "Likidite Botu", role: "Pazarda hacim yaratir ve fiyat sivrilmelerini yumusatir.", cadence: 20 },
  { id: "miner-bot", label: "Madenci Bot", role: "Tarafsiz gezegenlerden temel maden tasir.", cadence: 26 },
  { id: "rival-bot", label: "Rakip Bot", role: "Oyuncuyu paladyum ve altin tarafinda baskilar.", cadence: 30 },
  { id: "balance-bot", label: "Denge Botu", role: "Yeni oyuncu ekonomisinin tamamen kilitlenmesini engeller.", cadence: 24 },
];

export const BACKEND_MODULES = [
  "Auth ve hesap profili",
  "Authoritative oyun state servisi",
  "Gorev ve kuyruk isleyici",
  "Pazar eslestirme motoru",
  "Bot davranis servisi",
  "Operasyon telemetry toplayicisi",
];

export const SYNC_NOTES = [
  "Istemci yalnizca goruntu ve komut gonderme yuzeyi olmali.",
  "Periyodik snapshot + event replay modeli tercih edilmeli.",
  "Market ve gorevlerde authoritative sunucu sonucu esas alinmali.",
  "Enerji, kuyruk ve rota farklari duzenli dogrulanmali.",
];

export const DATA_MODEL_NOTES = [
  "PlayerAccount -> PlanetState -> Buildings -> Fleets -> Missions",
  "MarketOrders ve TradeHistory ayri log olarak tutulmali",
  "EraProgress, BotImpact ve Telemetry tabloları analitik icin ayrik olmali",
  "Savas MVP disi ama mission tipi ve ship slot modeli simdiden hazir tutulmali",
];
