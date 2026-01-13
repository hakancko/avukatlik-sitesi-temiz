# Email Bildirimi Kurulum Rehberi

## 🚀 Resend.com ile Email Kurulumu

### Adım 1: Resend Hesabı Oluşturun

1. [resend.com](https://resend.com) adresine gidin
2. "Start Building" veya "Sign Up" tıklayın
3. GitHub veya Google ile giriş yapın

### Adım 2: API Key Alın

1. Dashboard'a girin
2. Sol menüden **API Keys** seçin
3. **Create API Key** butonuna tıklayın
4. İsim verin (örn: "avukatlik-sitesi-prod")
5. Oluşturulan key'i kopyalayın (tekrar görmezsiniz!)

### Adım 3: Environment Variable Ekleyin

`.env.local` dosyanıza ekleyin:

```env
# Supabase (mevcut)
NEXT_PUBLIC_SUPABASE_URL=https://bspkzmkopbkovtauwicc.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sb_publishable_AQdrZi9InkpfHMriPe96kw_MMzXWSK9

# Resend Email
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxx
```

### Adım 4: Development Server'ı Yeniden Başlatın

```bash
# Ctrl+C ile durdurun
npm run dev
```

### Adım 5: Domain Doğrulama (Opsiyonel - Production için)

**Test için:**
- Resend otomatik olarak `onboarding@resend.dev` kullanır
- 100 email/gün ücretsiz

**Production için:**
1. Resend Dashboard → **Domains** → **Add Domain**
2. Kendi domain'inizi ekleyin (örn: `canbedirtuman.com`)
3. DNS kayıtlarını ekleyin
4. Doğrulama bekleyin
5. `app/api/send-email/route.ts` dosyasında:
   ```typescript
   from: 'İletişim <iletisim@canbedirtuman.com>',
   ```

## ✅ Test Etme

1. Siteye gidin: `http://localhost:3000/iletisim`
2. Formu doldurun
3. "Mesaj Gönder" tıklayın
4. Email kutunuzu kontrol edin: `ahmethakanagca2828@gmail.com`

## 📧 Email Şablonunu Özelleştirme

`app/api/send-email/route.ts` dosyasında HTML şablonunu değiştirebilirsiniz:

```typescript
html: `
  <h1>Yeni Mesaj</h1>
  <p><strong>İsim:</strong> ${isim}</p>
  ...
`
```

## 🎯 Alternatif: Supabase Email Trigger

Eğer Resend kullanmak istemezseniz, Supabase Edge Function ile de yapabilirsiniz:

1. Supabase Dashboard → **Edge Functions**
2. "New function" oluşturun
3. Database trigger ile otomatik email gönderin

## 💡 İpuçları

- **Spam Kontrolü:** reCAPTCHA ekleyin
- **Rate Limiting:** Çok fazla email engelleyin
- **Template Engine:** React Email kullanın
- **Analytics:** Email açılma oranlarını takip edin

## 🔧 Troubleshooting

### Email gelmiyor?
- `.env.local`'da `RESEND_API_KEY` var mı?
- Server yeniden başlatıldı mı?
- Spam klasörünü kontrol ettiniz mi?
- Browser console'da hata var mı?

### "Invalid API key" hatası?
- API key doğru kopyalandı mı?
- `.env.local` dosyası kaydedildi mi?
- Development server yeniden başlatıldı mı?

## 📊 Limitlere

**Ücretsiz Plan (Resend):**
- 100 email/gün
- 3,000 email/ay
- Test domain (`onboarding@resend.dev`)

**Ücretli Plan:**
- $20/ay başlangıç
- 50,000 email/ay
- Kendi domain'iniz
- Analytics

## 🎉 Başarılı!

Artık form gönderimi olduğunda:
1. ✅ Supabase'e kaydedilir
2. ✅ Email bildirimi gönderilir
3. ✅ Kullanıcı başarı mesajı görür

