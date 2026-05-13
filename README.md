# TestTaha Baslangic Iskeleti

Bu repo, ekli oyun dokumanindaki ilk sprint odagina gore hazirlanmis bir acilis iskeletidir. Hedef; Netlify'de hizli test edilebilen, sonradan gercek cok oyunculu servislerle buyutulebilen bir temel kurmaktir.

## Secilen teknoloji yigini

- `Hedef yigin: Vite + React + TypeScript`: oyun buyudukce bilesenlesme, tip guvenligi ve authoritative istemci-sunucu ayrimi icin en uygun yol.
- `Mevcut calisir acilis: bagimliliksiz ES modules + HTML + CSS`: bu ortamda paket kaynagi kapali oldugu icin hemen acilabilen, Netlify'ye dogrudan atilabilen bir baslangic katmani kuruldu.
- `Domain-first klasorleme`: gorsel katman ile oyun verisini ayirmak, sonradan authoritative backend gecisini kolaylastirmak icin.

## Ilk surum kapsami

- Giris ekrani
- Loading ekrani
- Ana operasyon paneli
- Oyuncu hesap ozeti ve mock snapshot
- Kaynaklar, bina durumlari, filo gorevleri ve cag ilerlemesi panelleri

## Klasor yapisi

```text
.
├── netlify.toml
├── src
│   ├── data
│   ├── ui
│   └── styles
├── index.html
└── README.md
```

## Calistirma

```bash
# Dosyayi dogrudan ac
index.html
```

## Sonraki teknik adimlar

1. Bu bagimliliksiz kabugu Vite + React + TypeScript tabanli istemciye tasimak
2. Mock snapshot katmanini Netlify Function tabanli snapshot servisine cevirmek
3. Auth akisina Netlify Identity veya harici kimlik katmani eklemek
4. Gezegen uretim tick'i ve bina yukselme kuyrugunu authoritative servis olarak tasimak
