# Resend Domain Doğrulama Rehberi

## Sorun
Resend ücretsiz hesabı sadece **kendi email adresinize** test email gönderebilir.
`av.suoyku@gmail.com` gibi başka adreslere göndermek için **domain doğrulaması** gerekiyor.

## Çözüm Seçenekleri

### Seçenek 1: Domain Doğrulama (ÖNERİLEN - ÜCRETSİZ)

1. **Resend Dashboard'a gidin:** https://resend.com/domains
2. **"Add Domain" butonuna tıklayın**
3. **Domain adınızı girin:** Örnek: `canbedituman.com` veya `avukat.canbedituman.com`
4. **DNS kayıtlarını ekleyin:**
   - Resend size 3 DNS kaydı verecek (TXT, MX, CNAME)
   - Domain sağlayıcınıza (GoDaddy, Namecheap, vs.) gidin
   - Bu DNS kayıtlarını ekleyin
5. **Doğrulama bekleyin:** 24-48 saat içinde doğrulanır
6. **Email adresini değiştirin:**
   ```typescript
   from: 'İletişim Formu <iletisim@canbedituman.com>'
   to: ['av.suoyku@gmail.com']
   ```

### Seçenek 2: Subdomain Kullan (Daha Hızlı)

Eğer ana domain'i doğrulamak istemiyorsanız:
- Subdomain oluşturun: `mail.canbedituman.com`
- Sadece bu subdomain için DNS ekleyin
- From adresi: `iletisim@mail.canbedituman.com`

### Seçenek 3: Gmail SMTP Kullan (Alternatif)

Resend yerine Gmail SMTP:

```bash
npm install nodemailer
```

```typescript
// app/api/send-email/route.ts
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ahmethakanagca2828@gmail.com',
    pass: process.env.GMAIL_APP_PASSWORD // Gmail App Password gerekli
  }
});

await transporter.sendMail({
  from: 'ahmethakanagca2828@gmail.com',
  to: 'av.suoyku@gmail.com',
  subject: 'Yeni İletişim Formu',
  html: '...'
});
```

**Gmail App Password nasıl alınır:**
1. Google Account → Security
2. 2-Step Verification aktif et
3. App Passwords oluştur
4. `.env.local` dosyasına ekle: `GMAIL_APP_PASSWORD=xxxx`

### Seçenek 4: Test Aşamasında

Geliştirme aşamasındayken:
- Şimdilik `ahmethakanagca2828@gmail.com` adresine gönder
- Production'a çıkmadan önce domain doğrula
- Form gönderimlerini Supabase'de görüntüle

## Önerilen Akış

1. **Şimdi (Test):** 
   - Email → `ahmethakanagca2828@gmail.com`
   - Form verileri → Supabase veritabanı
   
2. **Production Öncesi:**
   - Domain doğrula (resend.com/domains)
   - Email adresini `av.suoyku@gmail.com` olarak güncelle
   - Test et

3. **Production:**
   - From: `iletisim@canbedituman.com`
   - To: `av.suoyku@gmail.com`
   - Her şey çalışır ✅

## Şu Anki Durum

✅ **Çalışıyor:**
- Form gönderimi
- Email: ahmethakanagca2828@gmail.com

⏳ **Yapılacak (Production için):**
- Domain doğrulama
- Email: av.suoyku@gmail.com

## Hızlı Test

Şu anda formu test edebilirsiniz:
1. İletişim formunu doldurun
2. "Mesaj Gönder" butonuna tıklayın
3. **ahmethakanagca2828@gmail.com** adresine email gelecek
4. Mesaj içeriğinde müşteri bilgileri olacak

Domain doğruladıktan sonra sadece 1 satır değiştireceksiniz:
```typescript
to: ['av.suoyku@gmail.com'],  // Bunu değiştir
```















