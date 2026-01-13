# Gmail App Password Kurulum Rehberi

## 🎯 av.suoyku@gmail.com hesabından email göndermek için

### Adım 1: Gmail App Password Oluştur

1. **av.suoyku@gmail.com** hesabına giriş yap
2. Bu linke git: https://myaccount.google.com/apppasswords
   - VEYA: Google Account → Security → 2-Step Verification → App Passwords

3. **Eğer "App Passwords" göremiyorsanız:**
   - Önce **2-Step Verification** (2 Adımlı Doğrulama) aktif etmeniz gerekiyor
   - Google Account → Security → 2-Step Verification → Açık yap
   - Sonra "App Passwords" seçeneği görünür

4. **App Password oluştur:**
   - "Select app" → "Other (Custom name)"
   - İsim girin: "Avukatlik Sitesi"
   - "Generate" butonuna tıkla

5. **16 haneli şifreyi kopyala** (örnek: `abcd efgh ijkl mnop`)

### Adım 2: .env.local Dosyasına Ekle

1. `.env.local` dosyasını aç
2. App Password'ü ekle (BOŞLUKSUZ):

```
GMAIL_APP_PASSWORD=abcdefghijklmnop
```

**ÖNEMLİ:** Şifreyi boşluksuz yazın!

### Adım 3: Development Server'ı Yeniden Başlat

```bash
# Ctrl+C ile durdur
# Sonra tekrar başlat:
npm run dev
```

### Adım 4: Test Et

1. İletişim formunu doldur
2. "Mesaj Gönder" butonuna tıkla
3. **av.suoyku@gmail.com** adresine email gelecek!

## ✅ Artık Çalışır:

- ✅ Email **av.suoyku@gmail.com** adresinden gönderilir
- ✅ Email **av.suoyku@gmail.com** adresine gelir
- ✅ Müşteriye cevap vermek için "Reply" yeterli (replyTo özelliği aktif)
- ✅ Domain doğrulaması gerektirmez
- ✅ Ücretsiz

## 🔒 Güvenlik

- ❌ `.env.local` dosyasını GitHub'a yükleme (zaten .gitignore'da)
- ✅ App Password normal şifre değil, sadece bu uygulama için
- ✅ İstediğin zaman iptal edebilirsin

## Sorun Giderme

### "Invalid credentials" hatası:
- App Password'ü doğru kopyaladığınızdan emin olun
- Boşluk olmadan yazın
- Development server'ı yeniden başlatın

### "2-Step Verification required" hatası:
- Google hesabınızda 2 Adımlı Doğrulama aktif etmeniz gerekiyor
- https://myaccount.google.com/security

### Email gelmiyor:
- Gmail spam klasörünü kontrol et
- Göndericiden gelmemiş klasörüne bakın
- Console'da hata var mı kontrol et















