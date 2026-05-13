# TestTaha Oyun Kabugu

Bu proje, oyun dokumanindaki ana modulleri ve 0.01v / 0.02v feedbacklerini tek calisan web uygulamasinda toplar.

## Bu surumde aktif olan moduller

- Kayit ol / giris yap akisi
- Profil alani ve gezegen adi degistirme
- Gercek saatle senkron oyun saati
- Gezegen bina sistemi ve yukseltme kuyruklari
- Gemi uretimi, adet secimi ve tersane sinif limiti
- Kesif zorunlulugu ile acilan gezegen rotalari
- Ticaret gezegeni ve altin bazli pazar akisi
- Operasyon ekraninda gidis-donus zamani ve kargo takibi
- Harita ekraninda kesfedilen gezegenler, rakipler ve yoldaki filolar
- Klan / savas gorunurlugu ve cag merdiveni

## Onemli kurallar

- Hurda pasif uretilmez; sadece yok olan gemiler veya hurda toplama seferlerinden gelir.
- Kredi pasif uretilmez; premium satin alim kaynagidir.
- Oyun saati gercek saat dilimi ile ayni akar.
- Pazar alimlari altin uzerinden doner.
- Ticaret gezegeni ayri akistir; ticaret gemileri geri cagirilmadan donmez.

## Yerel acilis

```bash
python3 -m http.server 4173
```

Ardindan tarayicida `http://127.0.0.1:4173`

## Netlify notu

- Build command: bos
- Publish directory: `.`

## Siradaki buyuk adimlar

1. Gercek auth ve kalici oyuncu verisi baglamak
2. Authoritative market ve rota servislerini sunucu tarafina tasimak
3. Gercek savas sonucu, hasar ve hurda hesaplarini backend tarafina almak
4. Cok oyunculu harita hareketlerini canli veriyle beslemek
