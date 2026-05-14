# TestTaha Oyun Kabugu

Bu surum, `feedback 0.03v` sonrasinda eklenen prototip genislemelerini tek statik SPA icinde toplar ve oyun dokumanindaki `1, 5, 6, 7, 9, 10` basliklarini arayuzde daha gorunur hale getirir.

## Bu surumde aktif olan moduller

- Kayit, giris ve 3 adimli loading akisi
- Gezegen, insaat, tersane, hurda tamiri, arastirma, pazar, harita, klan, sohbet, cag, raporlar ve profil ekranlari
- Bina sistemi: 2 slotlu insaat kuyrugu, yalnizca ilk isin aktif islemesi, kaynak yetersizliginde tahmini birikme suresi, kredi ile hizlandirma
- Gemi sistemi: kaynak toplama, ticaret, ana gemi, destek, hurda toplayici, paladyum tanker, altin tarayici ve 2 savas sinifi
- Kaynak ekonomisi: demir, kristal, biyokutle, paladyum, altin, hurda, kredi ve enerji dengesi
- 5 cag yapisi, cag atlama maliyetleri ve ilerleme paneli
- Harita gorevleri: toplama, casusluk, saldiri, destek ve event gezegenleri
- Savas raporlari, istihbarat raporlari, destek raporlari ve gorev gecmisi
- Gunluk gorevler, sezon hedefleri, klan destek cagrilari ve sohbet
- Bot oyuncu etkisi: pazar likiditesi, rota rekabeti ve denge botu hareketleri
- Kredi paketleri: `30/$5`, `65/$10`, `140/$20`

## Oyun dokumanindaki ekstra basliklarin karsiligi

1. Vizyon: ana gezegen ekraninda uretim + lojistik + enerji omurgasi ozetlenir.
5. Bina sistemi: her bina kapasite modulu olarak ayrik kartta gosterilir.
6. Gemi siniflari: roller, profiller ve ozel yetenekler tersane ekraninda aciklanir.
7. Kaynak ekonomisi: enerji formulu ve uretim zinciri ozetleri panelde gorunur.
9. Bot oyuncular: pazar ekraninda bot davranislari ve etkileri listelenir.
10. UI/UX yapisi: giris, loading ve ana HUD akisi ayrik ekranlara bolundu.

## Yerel acilis

```bash
python3 -m http.server 4173
```

Ardindan tarayicida `http://127.0.0.1:4173`

## Netlify notu

- Build command: bos
- Publish directory: `.`

## Sonraki buyuk adimlar

1. Authoritative backend ve kalici state baglamak
2. Gercek auth ve odeme dogrulamasini servis katmanina tasimak
3. Cok oyunculu market eslesmesini istemci prototipinden ayirmak
4. Tarayici bazli etkileşim testlerini ve UI cilasini genisletmek
