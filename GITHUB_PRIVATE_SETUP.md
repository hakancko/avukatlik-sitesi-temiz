# 🔒 Private GitHub Repository + Vercel Kurulum Rehberi

Bu rehber, projenizi **private GitHub repository** olarak yayınlayıp **Vercel'e bağlamak** için adım adım talimatlar içerir.

## ✅ Ön Hazırlık

- [ ] GitHub hesabınız var mı? (Yoksa: https://github.com/signup)
- [ ] Vercel hesabınız var mı? (Yoksa: https://vercel.com/signup)
- [ ] Proje klasöründe `.gitignore` dosyası var mı? (✅ Var)

## 📋 Adım Adım Kurulum

### 1️⃣ Git Repository Hazırlama

```bash
# Terminal'de proje klasörüne gidin
cd avukatlik-sitesi-temiz

# Git başlat (eğer başlatılmadıysa)
git init

# Tüm dosyaları staging area'ya ekle
git add .

# İlk commit
git commit -m "Initial commit: CTİ Avukatlık website"

# Mevcut branch'i main olarak adlandır
git branch -M main
```

### 2️⃣ GitHub'da Private Repository Oluşturma

1. **GitHub'a giriş yapın:** https://github.com/login
2. **Yeni repository oluşturun:**
   - Sağ üstteki **"+"** ikonuna tıklayın
   - **"New repository"** seçin
3. **Repository ayarları:**
   - **Repository name:** `cti-avukatlik` (veya istediğiniz isim)
   - **Description:** "CTİ Avukatlık & Hukuk Danışmanlığı Web Sitesi" (opsiyonel)
   - ⚠️ **MUTLAKA "Private" seçeneğini işaretleyin!**
   - ✅ "Add a README file" seçeneğini **KALDIRIN** (zaten dosyalarınız var)
   - ✅ "Add .gitignore" seçeneğini **KALDIRIN** (zaten var)
   - ✅ "Choose a license" seçeneğini **KALDIRIN**
4. **"Create repository"** butonuna tıklayın

### 3️⃣ Local Repository'yi GitHub'a Bağlama

GitHub'da repository oluşturduktan sonra, sayfada gösterilen komutları kullanın:

```bash
# GitHub'da gösterilen komutları kullanın, örnek:
git remote add origin https://github.com/KULLANICI_ADINIZ/cti-avukatlik.git
git branch -M main
git push -u origin main
```

**Not:** `KULLANICI_ADINIZ` yerine kendi GitHub kullanıcı adınızı yazın.

### 4️⃣ Vercel Hesabı ve GitHub Bağlantısı

#### A) Vercel'e Kayıt/Giriş

1. https://vercel.com adresine gidin
2. **"Sign Up"** veya **"Log In"** butonuna tıklayın
3. **"Continue with GitHub"** seçeneğini seçin
4. GitHub hesabınızla giriş yapın
5. Vercel'in GitHub'a erişim izni isteyecek → **"Authorize Vercel"** tıklayın

#### B) Private Repository Erişim İzni

Vercel'in private repo'nuzu görebilmesi için izin vermeniz gerekir:

**Yöntem 1: Vercel Dashboard'dan**
1. Vercel dashboard'da **"Add New..."** → **"Project"** tıkla
2. Eğer private repo görünmüyorsa:
   - **"Adjust GitHub App Permissions"** linkine tıkla
   - GitHub'a yönlendirileceksiniz

**Yöntem 2: GitHub Settings'den (Önerilen)**
1. https://github.com/settings/installations adresine gidin
2. **"Vercel"** uygulamasını bulun
3. **"Configure"** butonuna tıklayın
4. **"Repository access"** bölümünde:
   - ✅ **"Only select repositories"** seçeneğini işaretleyin
   - Açılan listeden **"cti-avukatlik"** (veya repo adınız) seçin
   - **"Save"** butonuna tıklayın

### 5️⃣ Vercel'de Proje Oluşturma

1. Vercel dashboard'a geri dönün
2. **"Add New..."** → **"Project"** tıklayın
3. Artık private repo'nuz görünecek → **"Import"** tıklayın
4. **Framework Preset:** Next.js (otomatik algılanır)
5. **Root Directory:** `./` (varsayılan, değiştirmeyin)
6. **Build Command:** `npm run build` (otomatik)
7. **Output Directory:** `.next` (otomatik)
8. **Install Command:** `npm install` (otomatik)

### 6️⃣ Environment Variables Ekleme

**Deploy etmeden önce** environment variables ekleyin:

1. Vercel import ekranında **"Environment Variables"** bölümünü açın
2. Aşağıdaki değişkenleri ekleyin:

```
NEXT_PUBLIC_SUPABASE_URL
Değer: https://bspkzmkopbkovtauwicc.supabase.co
Environment: Production, Preview, Development (hepsini seçin)

NEXT_PUBLIC_SUPABASE_ANON_KEY
Değer: sb_publishable_AQdrZi9InkpfHMriPe96kw_MMzXWSK9
Environment: Production, Preview, Development (hepsini seçin)

RESEND_API_KEY
Değer: re_dWHFUYaw_4N7z8io87ZMc7DoYtCRbyi8d
Environment: Production, Preview, Development (hepsini seçin)
```

**Önemli:**
- Her değişken için **"Add"** butonuna tıklayın
- **Environment** seçeneklerinde **Production, Preview, Development** hepsini işaretleyin
- Değerleri kopyalarken boşluk olmadığından emin olun

### 7️⃣ Deploy Etme

1. Tüm ayarları kontrol edin
2. **"Deploy"** butonuna tıklayın
3. Vercel otomatik olarak:
   - Repository'yi clone eder
   - Dependencies'leri yükler (`npm install`)
   - Projeyi build eder (`npm run build`)
   - Deploy eder
4. Yaklaşık **2-3 dakika** bekleyin
5. ✅ **"Congratulations!"** mesajı göründüğünde deploy başarılı!

### 8️⃣ Domain Ayarları (Opsiyonel)

Vercel otomatik olarak bir subdomain verir: `cti-avukatlik-xxxxx.vercel.app`

**Özel domain eklemek için:**
1. Vercel dashboard → Projeniz → **"Settings"** → **"Domains"**
2. Domain adınızı girin: `www.ctiavukatlik.com`
3. Vercel size DNS ayarlarını gösterecek
4. Domain sağlayıcınızda (GoDaddy, Namecheap, vb.) DNS kayıtlarını ekleyin

## 🔐 Güvenlik Notları

### Private Repository Avantajları:
- ✅ Kodunuz herkese açık değil
- ✅ Sadece siz ve izin verdiğiniz kişiler görebilir
- ✅ Vercel private repo'ları tam destekler
- ✅ Environment variables zaten güvenli (Vercel'de şifreli saklanır)

### Önemli Güvenlik Kuralları:
- ❌ **ASLA** `.env.local` dosyasını commit etmeyin (zaten .gitignore'da)
- ❌ **ASLA** API key'leri kod içine yazmayın
- ✅ Tüm hassas bilgileri Vercel Environment Variables'da saklayın
- ✅ GitHub'da repository'yi **Private** tutun

## 🔄 Güncelleme Süreci

Projeyi güncelledikten sonra:

```bash
# Değişiklikleri commit et
git add .
git commit -m "Açıklayıcı commit mesajı"

# GitHub'a push et
git push origin main
```

Vercel **otomatik olarak** yeni deploy başlatır! 🚀

## ❓ Sık Sorulan Sorular

### Q: Private repo Vercel'de çalışır mı?
**A:** Evet! Vercel private repository'leri tam destekler. Sadece GitHub'tan izin vermeniz yeterli.

### Q: Repository'yi sonradan public yapabilir miyim?
**A:** Evet, GitHub repository settings'den istediğiniz zaman public yapabilirsiniz. Vercel bağlantısı bozulmaz.

### Q: Vercel deploy ücretsiz mi?
**A:** Evet, Vercel'in ücretsiz planı private repo'lar için de geçerlidir.

### Q: Environment variables güvenli mi?
**A:** Evet, Vercel environment variables şifreli saklanır ve sadece deploy sırasında kullanılır.

### Q: Deploy başarısız olursa ne yapmalıyım?
**A:** Vercel dashboard'da **"Deployments"** sekmesinde hata loglarını görebilirsiniz. Genellikle:
- Environment variables eksik
- Build hatası
- Dependency hatası

## 📞 Yardım

- **Vercel Dokümantasyon:** https://vercel.com/docs
- **GitHub Dokümantasyon:** https://docs.github.com
- **Vercel Support:** https://vercel.com/support

---

**Başarılar! 🎉**

