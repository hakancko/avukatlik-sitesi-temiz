# Deployment (Yayına Alma) Rehberi

## 🚀 Vercel'e Deploy Etme

### ⚠️ ÖNEMLİ: Private Repository İçin

Vercel, **private GitHub repository'lerini** tamamen destekler. Private repo yapısını bozmadan deploy edebilirsiniz.

### 1. GitHub Private Repository Oluştur

```bash
# Git başlat (henüz yapılmadıysa)
git init

# .gitignore kontrol et (zaten var)
# .env.local dosyasının .gitignore'da olduğundan emin ol

# İlk commit
git add .
git commit -m "Initial commit: CTİ Avukatlık website"

# GitHub'da PRIVATE repository oluştur:
# 1. https://github.com/new adresine git
# 2. Repository name: cti-avukatlik (veya istediğiniz isim)
# 3. ✅ Private seçeneğini işaretle (ÖNEMLİ!)
# 4. "Create repository" butonuna tıkla

# GitHub'a push
git remote add origin https://github.com/KULLANICI_ADINIZ/cti-avukatlik.git
git branch -M main
git push -u origin main
```

**Not:** Repository'yi oluştururken **mutlaka "Private"** seçeneğini işaretleyin. Public yaparsanız herkes görebilir.

### 2. Vercel'de Private Repository Bağlama

#### Adım 1: Vercel'e GitHub ile Giriş Yap
1. https://vercel.com adresine git
2. **"Sign Up"** veya **"Log In"** butonuna tıkla
3. **"Continue with GitHub"** seçeneğini seç
4. GitHub hesabınızla giriş yapın
5. Vercel'in GitHub'a erişim izni isteyecek → **"Authorize Vercel"** butonuna tıklayın

#### Adım 2: Private Repository Erişim İzni
Vercel, private repo'lara erişmek için GitHub'tan izin ister:

1. Vercel dashboard'da **"Add New..."** → **"Project"** tıkla
2. **"Import Git Repository"** ekranında private repo görünmüyorsa:
   - **"Adjust GitHub App Permissions"** linkine tıkla
   - Veya: https://github.com/settings/installations adresine git
   - Vercel uygulamasını bul ve **"Configure"** tıkla
   - **"Repository access"** bölümünde:
     - ✅ **"Only select repositories"** seç
     - Private repo'nuzu seçin (cti-avukatlik)
     - **"Save"** tıkla

#### Adım 3: Projeyi Import Et
1. Vercel dashboard'a geri dön
2. **"Add New..."** → **"Project"** tıkla
3. Artık private repo'nuz görünecek → **"Import"** tıkla
4. Framework: **Next.js** (otomatik algılanır)
5. Root Directory: `./` (varsayılan)
6. **"Deploy"** butonuna tıklamadan önce Environment Variables ekleyin (aşağıdaki adıma bakın)

### 3. Environment Variables Ekle

**Deploy etmeden önce** Environment Variables ekleyin:

1. Vercel import ekranında **"Environment Variables"** bölümünü açın
2. Aşağıdaki değişkenleri ekleyin:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://bspkzmkopbkovtauwicc.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sb_publishable_AQdrZi9InkpfHMriPe96kw_MMzXWSK9

# Resend
RESEND_API_KEY=re_dWHFUYaw_4N7z8io87ZMc7DoYtCRbyi8d
```

**Önemli:**
- Her değişkeni **Production**, **Preview** ve **Development** için ayrı ayrı ekleyin
- Değerleri kopyalarken boşluk veya gizli karakter olmadığından emin olun
- Deploy sonrası da Settings → Environment Variables'dan ekleyebilirsiniz

### 4. Deploy Et

- "Deploy" butonuna tıkla
- Yaklaşık 2-3 dakika bekle
- Deploy tamamlandı! 🎉

### 5. Domain Ayarları

#### A) Vercel Subdomain (Ücretsiz)
- Otomatik: `cti-avukatlik.vercel.app`

#### B) Özel Domain (Önerilen)
1. Vercel dashboard → Settings → Domains
2. Domain adı ekle: `www.ctiavukatlik.com`
3. DNS ayarları:
   ```
   Type: A
   Name: @
   Value: 76.76.21.21

   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

## 🗄️ Supabase Production Ayarları

### Database Güvenliği
1. Supabase Dashboard → SQL Editor
2. Aşağıdaki SQL'i çalıştır:

```sql
-- Production için RLS politikası
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Herkes form gönderebilir (INSERT)
CREATE POLICY "Anyone can submit contact form"
ON contact_submissions
FOR INSERT
TO anon
WITH CHECK (true);

-- Sadece authenticated users okuyabilir
CREATE POLICY "Only authenticated users can view"
ON contact_submissions
FOR SELECT
TO authenticated
USING (true);
```

### Backup Ayarları
1. Settings → Backups
2. Enable Point-in-Time Recovery (PITR)
3. Günlük otomatik backup aktif

## 📊 Google Search Console Kurulumu

### 1. Ownership Verification

**Yöntem 1: HTML Tag (Önerilen)**
1. https://search.google.com/search-console
2. Property ekle → URL prefix
3. HTML tag kopyala
4. `app/layout.tsx` metadata'ya ekle:

```typescript
export const metadata: Metadata = {
  // ...
  verification: {
    google: 'BURAYA_GOOGLE_VERIFICATION_CODE',
  },
};
```

**Yöntem 2: DNS TXT Record**
- Domain provider'da TXT record ekle

### 2. Sitemap Submit
1. Search Console → Sitemaps
2. Sitemap URL'i ekle: `https://www.ctiavukatlik.com/sitemap.xml`
3. Submit

### 3. URL Inspection
- Ana sayfa ve önemli sayfaları manuel olarak index'le

## 📈 Google Analytics 4 Kurulumu

### 1. GA4 Property Oluştur
1. https://analytics.google.com
2. Admin → Create Property
3. Property name: "CTİ Avukatlık"
4. Measurement ID'yi kopyala (G-XXXXXXXXXX)

### 2. Next.js'e Entegre Et

`app/layout.tsx` içine ekle:

```typescript
import Script from 'next/script';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
```

## 🗺️ Google My Business Kayıt

### Bayraklı Ofis
1. https://business.google.com
2. "Add location" → "İzmir, Türkiye"
3. Bilgiler:
   - Business name: CTİ Avukatlık - Bayraklı Ofisi
   - Category: Avukat
   - Address: Mansuroğlu Mah. 288/5 Sok. No:6 K:4 D:14, Bayraklı, İZMİR
   - Phone: +90 232 435 91 92
   - Website: https://www.ctiavukatlik.com
   - Hours: Pazartesi-Cuma 09:00-18:00

### Menderes Ofis
- Aynı adımları tekrarla
- Business name: CTİ Avukatlık - Menderes Ofisi
- Address: Kasımpaşa Mah. Atatürk Cad. No:69 K:1 D:7, Menderes, İZMİR
- Phone: +90 538 355 44 81

## 🔒 Güvenlik Kontrol Listesi

- [x] HTTPS aktif (Vercel otomatik)
- [x] Environment variables gizli
- [x] .env.local gitignore'da
- [x] Supabase RLS aktif
- [x] API routes rate limiting (Vercel otomatik)
- [ ] Content Security Policy (CSP) headers
- [ ] GDPR/KVKK uyumluluk sayfası

## 📱 Post-Launch Kontroller

### İlk 24 Saat
- [ ] Tüm sayfaları test et
- [ ] Mobil responsive kontrol
- [ ] İletişim formu çalışıyor mu?
- [ ] Email bildirimleri geliyor mu?
- [ ] Telefon linkleri çalışıyor mu?
- [ ] Google Maps embed'ler açılıyor mu?

### İlk Hafta
- [ ] Google Search Console'da indexing durumu
- [ ] Analytics data geliyor mu?
- [ ] Supabase'de formlar kaydediliyor mu?
- [ ] Performance metrics (Core Web Vitals)
- [ ] Broken link kontrolü

### İlk Ay
- [ ] SEO ranking takibi
- [ ] Google My Business reviews
- [ ] User feedback toplama
- [ ] A/B testing planı

## 🎯 Performans Hedefleri

### Core Web Vitals
- **LCP** (Largest Contentful Paint): < 2.5s ✅
- **FID** (First Input Delay): < 100ms ✅
- **CLS** (Cumulative Layout Shift): < 0.1 ✅

### Lighthouse Scores
- **Performance**: > 90 ✅
- **Accessibility**: > 95 ✅
- **Best Practices**: > 95 ✅
- **SEO**: > 95 ✅

## 🔄 Güncelleme ve Bakım

### Düzenli Güncellemeler
```bash
# Dependency güncellemeleri (aylık)
npm update

# Security patches (hemen)
npm audit fix

# Next.js major version updates (dikkatli)
npm install next@latest react@latest react-dom@latest
```

### Vercel'de Otomatik Deploy
- `main` branch'e push → Otomatik production deploy
- Feature branch'lere push → Preview deploy
- Pull request → Automatic preview URL

## 📞 Destek ve Sorun Giderme

### Vercel Support
- Community: https://github.com/vercel/next.js/discussions
- Discord: https://vercel.com/discord

### Supabase Support
- Docs: https://supabase.com/docs
- Discord: https://discord.supabase.com

### Resend Support
- Docs: https://resend.com/docs
- Email: support@resend.com

## ✅ Deploy Başarılı! Sonraki Adımlar

1. **Domain DNS Propagation**: 24-48 saat bekle
2. **Google indexing**: 1-2 hafta bekle
3. **SEO sonuçlar**: 3-6 ay bekle
4. **Local SEO dominance**: 6-12 ay çalış

**Tebrikler! Siteniz yayında! 🎉**

