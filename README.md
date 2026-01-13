# Su Öykü İnceoğulları - Avukatlık Hukuk Sitesi

Modern ve profesyonel bir avukatlık ofisi web sitesi. Next.js 15, TypeScript ve Tailwind CSS ile geliştirilmiştir.

## 🚀 Özellikler

- ⚡ **Next.js 15** - En son Next.js App Router
- 🎨 **Tailwind CSS** - Modern ve responsive tasarım
- 📱 **Fully Responsive** - Tüm cihazlarda mükemmel görünüm
- 🎯 **SEO Optimized** - Arama motorları için optimize edilmiş
- ♿ **Accessible** - WCAG standartlarına uygun
- 🌙 **Modern UI/UX** - Profesyonel ve şık arayüz

## 📋 Bölümler

1. **Ana Sayfa (Hero)** - Etkileyici giriş bölümü
2. **Hakkımızda** - Ofis tanıtımı ve istatistikler
3. **Uzmanlık Alanları** - 8 farklı hukuk dalı
   - Boşanma Hukuku
   - Ceza Hukuku
   - Gayrimenkul Hukuku
   - Ticaret Hukuku
   - Aile Hukuku
   - Miras Hukuku
   - İş & İşçi Hukuku
   - İdare Hukuku
4. **Ekibimiz** - Avukat profilleri ve uzmanlık alanları
5. **İletişim** - İletişim formu, harita ve iletişim bilgileri

## 🛠️ Teknolojiler

- **Framework:** Next.js 15
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Fonts:** Google Fonts (Geist, Playfair Display)

## 📦 Kurulum

```bash
# Bağımlılıkları yükle
npm install

# Development server'ı başlat
npm run dev

# Production build oluştur
npm run build

# Production'da çalıştır
npm start
```

## 🌐 Deployment

### Vercel (Önerilen)

1. GitHub/GitLab'a push yapın
2. [Vercel](https://vercel.com)'e gidin
3. Projeyi import edin
4. Deploy edin!

### Supabase Entegrasyonu (İleride)

Görseller ve dinamik içerik için Supabase kullanılacak:

```bash
npm install @supabase/supabase-js
```

## 📝 Yapılacaklar

- [x] Temel site yapısı
- [x] Tüm componentler
- [x] Responsive tasarım
- [ ] Avukat fotoğrafları ekleme
- [ ] İletişim formu backend entegrasyonu
- [ ] Supabase entegrasyonu
- [ ] Admin paneli
- [ ] Blog/Makaleler bölümü
- [ ] Çoklu dil desteği (TR/EN)

## 📞 İletişim Bilgileri

**Su Öykü İnceoğulları - Avukat & Hukuk Danışmanlığı**

- 📍 Adres: Mansuroğlu Mah. 288/5 Sok. K:4 D:14 Ege İş Merkezi Bayraklı, İZMİR
- 📞 Telefon: 0 (501) 554 46 04 / 0 (232) 435 91 92
- 📧 E-posta: av.suoyku@gmail.com

## 🎨 Renk Paleti

- **Primary:** #8b6f47 (Kahverengi/Altın)
- **Primary Dark:** #6b5537
- **Accent:** #c9a961 (Altın)
- **Secondary:** #2c2416 (Koyu Kahverengi)

## 📱 Ekran Görüntüleri

Site şu anda http://localhost:3000 adresinde çalışıyor!

## 🔧 Geliştirme Notları

### Componentler

- `Header.tsx` - Responsive navigation bar
- `Hero.tsx` - Ana sayfa hero bölümü
- `About.tsx` - Hakkımızda ve istatistikler
- `Services.tsx` - Uzmanlık alanları grid
- `Team.tsx` - Avukat profil kartları
- `Contact.tsx` - İletişim formu ve bilgiler
- `Footer.tsx` - Alt bilgi bölümü

### Stil Sistemi

- Tailwind CSS v4 kullanılıyor
- Custom renkler `globals.css`'de tanımlı
- Responsive breakpoints: `sm`, `md`, `lg`, `xl`

## 📄 Lisans

Bu proje özel bir proje olup, tüm hakları saklıdır.

---

**Geliştirici Notu:** İleride eklenecek özellikler için `.env.local` dosyası oluşturun ve API anahtarlarınızı buraya ekleyin.
