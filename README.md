# TestTaha Oyun Kabugu

Bu proje, ekli oyun dokumanindaki ana modulleri tek bir calisan web uygulamasinda toplar. Hedef, Netlify'de hizli test edilebilen ama uzun vadede authoritative backend'e tasinabilecek bir temel kurmaktir.

## Bu surumde aktif olan moduller

- ID/Sifre giris ekrani
- Loading ekrani
- Ana oyun arayuzu
- Gezegen bina sistemi ve yukseltme kuyruklari
- Gemi uretimi ve gorev rotalari
- Kaynak ekonomisi, enerji dengesi ve kapasite sinirlari
- Ticaret sistemi ve hizli emirler
- Bot oyuncu davranislari
- Bes cag ilerleme ekrani
- Operasyon paneli, telemetry, teknik mimari ve veri modeli ozetleri

## Teknoloji tercihi

- Mevcut calisan kabuk: bagimliliksiz ES modules + HTML + CSS
- Hedef sonraki adim: Vite + React + TypeScript

Bu secim burada kasitli: paket kurulumu kapali oldugu icin calisan oyunu once sifir bagimlilikla cikardik. Sonraki iterasyonda ayni sistemler React istemcisine tasinabilir.

## Klasor yapisi

```text
.
├── index.html
├── netlify.toml
└── src
    ├── core
    ├── data
    ├── styles
    └── ui
```

## Yerel acilis

Statik olarak acilabilir:

```bash
python3 -m http.server 4173
```

Ardindan tarayicida `http://127.0.0.1:4173`

## Netlify notu

- Build command: bos
- Publish directory: `.`

## Sonraki buyuk adimlar

1. Authoritative backend ve snapshot servisi baglamak
2. Gercek kimlik dogrulama eklemek
3. Pazar ve gorev sonucunu istemciden alip sunucuya tasimak
4. Savas, ittifak ve canli event katmanlarini acmak
