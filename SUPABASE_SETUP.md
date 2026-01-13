# Supabase Kurulum Rehberi

## 1. Supabase Projesi Oluşturma

1. [Supabase Dashboard](https://supabase.com/dashboard)'a gidin
2. "New Project" butonuna tıklayın
3. Proje detaylarını doldurun:
   - **Project Name:** avukatlik-sitesi
   - **Database Password:** Güçlü bir şifre oluşturun
   - **Region:** Europe (Frankfurt) - en yakın bölge
4. "Create new project" butonuna tıklayın

## 2. Database Tablosu Oluşturma

Supabase Dashboard'da **SQL Editor**'e gidin ve aşağıdaki SQL kodunu çalıştırın:

```sql
-- İletişim formları için tablo
CREATE TABLE contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  isim TEXT NOT NULL,
  telefon TEXT NOT NULL,
  email TEXT NOT NULL,
  konu TEXT NOT NULL,
  mesaj TEXT NOT NULL,
  okundu BOOLEAN DEFAULT FALSE
);

-- Row Level Security (RLS) politikaları
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Herkese INSERT izni ver (form gönderimi için)
CREATE POLICY "Herkes form gönderebilir"
  ON contact_submissions
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Index oluştur (performans için)
CREATE INDEX idx_contact_created_at ON contact_submissions(created_at DESC);
CREATE INDEX idx_contact_okundu ON contact_submissions(okundu);
```

## 3. Environment Variables Ayarlama

1. Supabase Dashboard'da **Settings > API** bölümüne gidin
2. Aşağıdaki bilgileri kopyalayın:
   - **Project URL**
   - **anon/public key**

3. Proje dizininde `.env.local` dosyası oluşturun:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

## 4. Email Bildirimleri (Opsiyonel)

Supabase'de yeni form gönderimi olduğunda email almak için:

### Yöntem 1: Supabase Edge Function (Ücretsiz)

SQL Editor'de aşağıdaki kodu çalıştırın:

```sql
-- Email bildirimi için trigger function
CREATE OR REPLACE FUNCTION notify_new_contact()
RETURNS TRIGGER AS $$
BEGIN
  -- Burada Supabase Edge Function veya webhook çağrısı yapabilirsiniz
  -- Şimdilik sadece log
  RAISE NOTICE 'Yeni form gönderimi: % - %', NEW.isim, NEW.email;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger oluştur
CREATE TRIGGER on_contact_submission
  AFTER INSERT ON contact_submissions
  FOR EACH ROW
  EXECUTE FUNCTION notify_new_contact();
```

### Yöntem 2: Resend.com Entegrasyonu (Önerilen)

1. [Resend.com](https://resend.com) hesabı oluşturun (ücretsiz 100 email/gün)
2. API Key alın
3. Supabase Edge Function oluşturun (Dashboard > Edge Functions)

## 5. Form Gönderimlerini Görüntüleme

### Supabase Dashboard'da:
- **Table Editor** > `contact_submissions` tablosuna gidin
- Tüm form gönderimlerini görebilirsiniz

### SQL Sorgusu ile:
```sql
-- Son 10 form gönderimi
SELECT * FROM contact_submissions
ORDER BY created_at DESC
LIMIT 10;

-- Okunmamış formlar
SELECT * FROM contact_submissions
WHERE okundu = FALSE
ORDER BY created_at DESC;
```

## 6. Test Etme

1. Web sitesindeki iletişim formunu doldurun
2. "Mesaj Gönder" butonuna tıklayın
3. Supabase Dashboard > Table Editor'de yeni kaydı görmelisiniz

## 7. Güvenlik Notları

✅ **Yapılanlar:**
- RLS (Row Level Security) aktif
- Sadece INSERT operasyonu için public erişim
- Environment variables kullanımı

⚠️ **Öneriler:**
- Production'da rate limiting ekleyin
- Spam koruması için reCAPTCHA ekleyin
- Admin paneli için ayrı authentication kullanın

## 8. Troubleshooting

### "Invalid API key" hatası:
- `.env.local` dosyasını kontrol edin
- Development server'ı yeniden başlatın: `npm run dev`

### Form gönderilmiyor:
- Browser console'da hata kontrol edin
- Supabase project URL'in doğru olduğundan emin olun
- Network tab'de Supabase API çağrısını kontrol edin

### Email bildirimleri gelmiyor:
- Trigger'ın doğru kurulduğunu kontrol edin
- Supabase logs'u inceleyin

## 9. Sonraki Adımlar

- [ ] Admin paneli oluşturma (form gönderimlerini yönetmek için)
- [ ] Email bildirimleri kurulumu
- [ ] Spam koruması (reCAPTCHA)
- [ ] Form gönderimi sonrası teşekkür mesajı
- [ ] Analytics entegrasyonu

