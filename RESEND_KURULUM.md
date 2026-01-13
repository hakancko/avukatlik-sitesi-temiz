# Resend ile av.suoyku@gmail.com Adresine Email Gönderme

## 🎯 Hedef
Resend kullanarak **av.suoyku@gmail.com** adresine email göndermek.

## ⚠️ Sorun
Resend ücretsiz hesabı test modunda:
- ❌ Sadece kayıtlı email adresinize gönderebilir
- ❌ Başka adreslere göndermek için **domain doğrulaması** gerekiyor

## ✅ Çözüm: Domain Doğrulama (5 Dakika)

### Adım 1: Resend Dashboard

1. **https://resend.com/login** - Giriş yap (mevcut hesapla)
2. Sol menüden **"Domains"** sekmesine git
3. **"Add Domain"** butonuna tıkla

### Adım 2: Domain Ekle

Domain eklerken 2 seçenek var:

#### Seçenek A: Ana Domain (Önerilen)
```
canbedituman.com
```
✅ Email: `iletisim@canbedituman.com`

#### Seçenek B: Subdomain (Daha Hızlı)
```
mail.canbedituman.com
```
✅ Email: `iletisim@mail.canbedituman.com`

### Adım 3: DNS Kayıtları Ekle

Resend size 3 DNS kaydı verecek. Domain sağlayıcınıza gidin:

**Örnekler:**
- GoDaddy → DNS Management
- Namecheap → Advanced DNS
- CloudFlare → DNS

**Eklenecek kayıtlar:**

1. **SPF Record (TXT):**
```
Type: TXT
Name: @
Value: v=spf1 include:_spf.resend.com ~all
```

2. **DKIM Record (TXT):**
```
Type: TXT
Name: resend._domainkey
Value: [Resend'den kopyalayın]
```

3. **DMARC Record (TXT):**
```
Type: TXT
Name: _dmarc
Value: v=DMARC1; p=none;
```

### Adım 4: Doğrulama Bekle

- ⏱️ **5-60 dakika** içinde doğrulanır (genelde 5-10 dk)
- Resend otomatik kontrol eder
- Email geldiğinde veya "Verify" butonuna basabilirsiniz

### Adım 5: Email Adresini Güncelle

Domain doğrulandıktan sonra kodda tek satır değişiklik:

```typescript
from: 'İletişim Formu <iletisim@canbedituman.com>',  // Doğrulanmış domain
to: ['av.suoyku@gmail.com'],  // Artık çalışır! ✅
```

## 🚀 Alternatif: Hızlı Test için Resend'e Email Ekle

**Domain doğrulama beklemek istemiyorsanız:**

1. Resend Dashboard → Settings → Team
2. **av.suoyku@gmail.com** adresini ekip üyesi olarak ekle
3. Artık bu adrese gönderebilirsiniz (domain olmadan)

❌ **Dezavantaj:** Email'ler "onboarding@resend.dev" adresinden gider

## 📋 Özet

### Domain Doğrulamayla:
✅ `iletisim@canbedituman.com` → `av.suoyku@gmail.com`
✅ Profesyonel görünüm
✅ Ücretsiz (100 email/gün)
✅ 5-60 dakika kurulum

### Team Member ile:
✅ `onboarding@resend.dev` → `av.suoyku@gmail.com`
⚠️ Test email adresi görünümü
✅ Anında çalışır
✅ Ücretsiz

## 🎬 Şu An Yapmanız Gerekenler:

1. **https://resend.com/domains** adresine git
2. Domain ekle: `canbedituman.com`
3. DNS kayıtlarını ekle
4. 5-10 dakika bekle
5. Bana "Doğrulandı" diye haber ver
6. Email adresini güncelleyelim → Test edelim! 🚀

Herhangi bir adımda takılırsanız söyleyin yardımcı olurum! 😊















