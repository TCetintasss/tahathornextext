export function createMockSnapshot(playerName) {
  return {
    playerName,
    factionTitle: "Kurulus Filosu",
    homePlanet: "Khepri-17",
    resources: [
      { label: "Demir Cevheri", amount: 1820, perHour: 240 },
      { label: "Buz", amount: 940, perHour: 135 },
      { label: "Silika", amount: 680, perHour: 88 },
      { label: "Paladyum", amount: 62, perHour: -4 },
      { label: "Altin", amount: 0, perHour: 0 },
      { label: "Kredi", amount: 1240, perHour: 52 },
      { label: "Enerji", amount: 118, perHour: -12 }
    ],
    alerts: [
      "Loading sonrasi ilk kontrol enerji acigi olmali.",
      "MVP'de savas yok; gorev modeli lojistik ve ticaret agirlikli tutuldu.",
      "Altin katmani ileride tarafsiz gezegen gorevleriyle acilacak."
    ],
    era: {
      current: 1,
      nextName: "Yorunge Sanayi",
      requirements: [
        "Ana Bina seviye 2",
        "Enerji acigi sifira yakin olmali",
        "Depo kapasitesi en az 5000"
      ],
      blockers: ["Reaktor seviyesiz", "Paladyum stogu kritik"]
    },
    buildings: [
      {
        label: "Ana Bina",
        level: 1,
        impact: "Cag gecislerini ve yeni modulleri acar.",
        nextAction: "Seviye 2 icin enerji verimliligi ve depo kapasitesi gerekiyor."
      },
      {
        label: "Depo Modulu",
        level: 2,
        impact: "Uretim tasmasini ve kaynak kaybini azaltir.",
        nextAction: "Bir sonraki yukselme ile demir kapasitesi 5200 olacak.",
        eta: "18 dk icinde tamamlanacak"
      },
      {
        label: "Sera",
        level: 2,
        impact: "Erken oyunda nufus ve ikincil girdi dengesini korur.",
        nextAction: "Buz tuketimini dengelemek icin verimlilik cekirdekleri acilabilir."
      },
      {
        label: "Fusyon Reaktoru",
        level: 1,
        impact: "Enerji acigini kapatir ve bina akisini rahatlatur.",
        nextAction: "Yukselme kuyruguna alinmali."
      },
      {
        label: "Temel Tersane",
        level: 1,
        impact: "Madencilik ve rota ekonomisinin kapisini acar.",
        nextAction: "Ilk ticaret gemisi acilmak uzere."
      }
    ],
    missions: [
      {
        label: "Madenci Servisi 01",
        destination: "Tarafsiz Kaya Kusagi",
        cargo: "Tahmini 120 demir, 18 silika",
        eta: "14 dk kala"
      },
      {
        label: "Nakliye Gemisi 01",
        destination: "Ortak Pazar Istasyonu",
        cargo: "80 buz sat, kredi ve paladyum fiyatini izle",
        eta: "26 dk kala"
      }
    ],
    marketSignals: [
      {
        title: "Buz fiyati yukseliyor",
        summary: "Bot likiditesi dengeliyor ama arz daraliyor.",
        trend: "up"
      },
      {
        title: "Paladyum darbogazi",
        summary: "Erken cag oyuncularinda enerji talebi artiyor.",
        trend: "up"
      },
      {
        title: "Demir dengede",
        summary: "Acik pazar hacmi bot destekli olarak sabit kaldi.",
        trend: "stable"
      }
    ],
    nextRecommendations: [
      "Reaktoru ilk yukselme slotuna al.",
      "Depo modulu bitince ikinci madenci rotasini ac.",
      "Ilk pazar denemesinde buz satarak kredi tamponu olustur."
    ]
  };
}
