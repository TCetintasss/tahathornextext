# TestTaha Oyun Kabugu

Bu repo artik sadece ekran gosteren bir prototip degil; buyumeye uygun katmanlara ayrilmis bir oyun kabugu omurgasi olarak duzenlendi.

Netlify burada kalici hedef platform degil. Bu katman su an acilis akisi, test deploylari ve backend provasi niteligindeki auth-session kontrolleri icin gecici bir kopru olarak kullaniliyor. Ileride ayni API sozlesmesi gercek sunucu katmanina tasinacak.

## Yeni omurga

- `src/domain/game`
  Oyun tipleri, sabit veri tanimlari, bina/gemi/cag kataloglari
- `src/services/game`
  Simulasyon motoru ve ortak oyun kurallari
- `netlify/functions`
  Gecici test backend'i: auth, health, session ve telemetry rotalari
- `src/store`
  Oyun state'i, aksiyonlar ve veri gecisleri
- `src/ui`
  Ekranlar, tekrar kullanilan bilesenler ve stiller
- `src/ui/screens`, `src/ui/layout`, `src/ui/components`, `src/ui/config`
  Ekran, iskelet, parca bilesen ve navigasyon sorumluluklari ayrik tutulur
- `src/store/actionTypes.ts`
  Store aksiyon sozlesmeleri icin ayri katman
- `scripts`
  Build, dev, preview ve typecheck komutlari
- `.github/workflows`
  Push ve PR dogrulama zinciri

## Mimari hedef

- Sistemlerin birbiriyle carpismamasi icin kurallar `service` katmanina toplandi.
- Serbest alan yazimi yerine daha guvenli store aksiyonlari kullaniliyor.
- UI katmani artik kilit/acik, uygun/uygun degil kararlarini ortak kural katmanindan okuyor.
- Build zinciri `dist/` ureten tek komutta toplanmis durumda.
- Netlify ayari `dist` yayinina ve otomatik branch/preview akisina hazirlandi.
- Acilis akisinda artik gercek `health` ve `session` kontrolu yapiliyor; istemci acilisinda `/api/*` fonksiyonlariyla el sikisiyor.
- Auth akisi istemci ici sifre karsilastirmasindan cikarildi; giris ve kayit `/api/auth` uzerinden dogrulaniyor.

## Mevcut teknoloji durumu

- Kaynak kod `React + TypeScript` duzeninde tutuluyor.
- Bu container icinde npm registry erisimi kisitli oldugu icin paket kurulumu yapilamadi.
- Bu yuzden repo iki asamali bir yapiyla ilerliyor:
  - bugun calisan korumali statik build hattı
  - hazirda bekleyen `Vite + React + Netlify plugin` konfigurasyonu

Bu sayede proje bugunden build alip `dist/` uretebiliyor, ama paketler kuruldugunda daha ileri Vite hattina da gecis yolu hazir.

## Komutlar

```bash
npm run dev
npm run build
npm run preview
npm run typecheck
```

Davranis:

- `npm run dev`
  Korumali yerel sunucuyu acar; statik dosyalarla birlikte `/api/auth`, `/api/health`, `/api/session` ve `/api/telemetry` fonksiyonlarini da yerelde servis eder.
- `npm run build`
  Simdilik korumali statik build uretir ve `dist/` klasorunu doldurur.
- `npm run preview`
  `dist/` ciktisini ve ayni `/api/*` fonksiyon omurgasini birlikte acar.
- `npm run typecheck`
  TypeScript kuruluysa gercek denetim yapar.

Not:

- Ileride paketli Vite yolunu zorla acmak istersen `USE_VITE_PIPELINE=1` kullanilacak.
- Bu gecis kaynaklar tamamen module-import yapisina alindiginda acilacak.

## Build ciktisi

- Uretim cikti klasoru: `dist`
- Mevcut build komutu: `npm run build`
- Netlify publish klasoru: `dist`
- Session saklama omurgasi: Netlify Blobs varsa site-scoped store, yoksa yerel bellek fallback
- Telemetry saklama omurgasi: Netlify Blobs varsa kalici olay kaydi, yoksa yerel bellek fallback

## Netlify otomatik deploy

- `netlify.toml` repo kokunde hazir.
- Push sonrasi branch deploy ve deploy preview akisi icin repo Netlify'ye baglandiginda otomatik deploy devreye girebilir.
- Push ve PR tarafinda ayrica GitHub dogrulama hattı var:
  - `.github/workflows/validate.yml`
  - `.github/workflows/netlify-deploy.yml`

Ayrintili kurulum notu:

- [NETLIFY-DEPLOY.md](/workspace/tahathornextext/NETLIFY-DEPLOY.md)

## Hizli test

- Temel akislar icin:
  [SMOKE-TEST.md](/workspace/tahathornextext/SMOKE-TEST.md)

- Oyun acildiginda sol paneldeki `QA hizli kontrol` alaniyla zamani hizlica ilerletip kuyruk, gorev ve rapor akislarini beklemeden test edebilirsin.

## Sonraki hedefler

1. Korumali statik build hattindan tam Vite module zincirine gecmek
2. Authoritative store ve servis katmanini cok oyunculu yapıya tasimak
3. Netlify test katmanindan gercek authoritative sunucuya gecmek
4. Odeme ve kredi dogrulamasini istemci prototipinden cikarmak
