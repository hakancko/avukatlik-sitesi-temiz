"use client";

import { MapPin, Phone, Mail, Building2, User } from "lucide-react";
import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    const formData = new FormData(e.currentTarget);
    const data = {
      isim: formData.get('isim') as string,
      telefon: formData.get('telefon') as string,
      email: formData.get('email') as string,
      konu: formData.get('konu') as string,
      mesaj: formData.get('mesaj') as string,
    };

    // Telefon numarası validasyonu
    const phoneDigits = data.telefon.replace(/\D/g, ''); // Sadece rakamları al
    if (phoneDigits.length !== 11) {
      setSubmitStatus({
        type: 'error',
        message: 'Telefon numarası 11 basamaklı olmalıdır. Örnek: 0 (5__) ___ __ __'
      });
      setIsSubmitting(false);
      return;
    }
    if (!phoneDigits.startsWith('0')) {
      setSubmitStatus({
        type: 'error',
        message: 'Telefon numarası 0 ile başlamalıdır.'
      });
      setIsSubmitting(false);
      return;
    }

    try {
      console.log('Form gönderiliyor...', data);
      
      // 1. Supabase'e kaydet (opsiyonel - hata olursa devam et)
      try {
        const { data: result, error } = await supabase
          .from('contact_submissions')
          .insert([data])
          .select();

        if (error) {
          console.warn('Supabase kaydedilemedi (normal):', error.message);
        } else {
          console.log('Form Supabase\'e kaydedildi:', result);
        }
      } catch (supabaseError) {
        console.warn('Supabase bağlantısı yok (normal):', supabaseError);
      }
      
      // 2. Email gönder
      const emailResponse = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      
      if (!emailResponse.ok) {
        throw new Error('Email gönderilemedi');
      }

      console.log('Email başarıyla gönderildi');
      
      setSubmitStatus({
        type: 'success',
        message: 'Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.'
      });
      (e.target as HTMLFormElement).reset();
    } catch (error: any) {
      console.error('Form gönderim hatası:', error);
      
      let errorMessage = 'Email gönderilemedi. ';
      
      if (error.message?.includes('Failed to fetch')) {
        errorMessage += 'İnternet bağlantınızı kontrol edin.';
      } else {
        errorMessage += 'Lütfen daha sonra tekrar deneyin veya direkt telefon ile iletişime geçin: 0 (501) 554 46 04';
      }
      
      setSubmitStatus({
        type: 'error',
        message: errorMessage
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  const offices = [
    {
      name: "Bayraklı Ofis",
      address: "Mansuroğlu Mah. 288/5 Sok. No:6 K:4 D:14",
      city: "Bayraklı, İZMİR",
      lawyers: [
        {
          name: "Uzm. Arb. Av. Ferhat CANBEDİR",
          phones: ["0 (532) 621 09 61", "0 (232) 435 91 92"],
          email: "canbedir@gmail.com",
        },
        {
          name: "Av. Su Öykü İNCEOĞULLARI",
          phones: ["0 (501) 554 46 04", "0 (232) 435 91 92"],
          email: "av.suoyku@gmail.com",
        },
      ],
    },
    {
      name: "Menderes Ofis",
      address: "Kasımpaşa Mah. Atatürk Cad. No:69 K:1 D:7",
      city: "Menderes, İZMİR",
      lawyers: [
        {
          name: "Av. Enes TUMAN",
          phones: ["0 (538) 355 44 81"],
          email: "av.enestuman@gmail.com",
        },
      ],
    },
  ];

  return (
    <section className="py-12 sm:py-20 bg-gradient-to-br from-cyan-700 via-cyan-500 to-teal-400">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            İletişim
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6" />
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Hukuki danışmanlık ve randevu için bizimle iletişime geçin
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Office Sections - Yan Yana */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-start">
            {offices.map((office, officeIndex) => (
              <div 
                key={officeIndex} 
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all flex flex-col h-full"
              >
                {/* Office Header */}
                <div className="text-center mb-6 pb-6 border-b border-white/20">
                  <div className="inline-flex items-center justify-center gap-3 mb-3">
                    <div className="bg-teal-400 p-2 rounded-lg">
                      <Building2 className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-white">
                      {office.name}
                    </h3>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-cyan-100 text-sm">
                    <MapPin className="w-4 h-4 text-teal-300 flex-shrink-0" />
                    <p>{office.address}</p>
                  </div>
                  <p className="text-cyan-200 text-sm mt-1">{office.city}</p>
                </div>

                {/* Lawyers Info */}
                <div className="space-y-4 mb-6">
                  <h4 className="text-white font-semibold text-sm uppercase tracking-wider flex items-center gap-2">
                    <User className="w-4 h-4 text-teal-300" />
                    Avukatlarımız
                  </h4>
                  {office.lawyers.map((lawyer, lawyerIndex) => (
                    <div
                      key={lawyerIndex}
                      className="bg-white/10 rounded-lg p-4 space-y-3"
                    >
                      <p className="text-white font-bold">{lawyer.name}</p>
                      
                      <div className="space-y-2 pl-2 border-l-2 border-teal-400/50">
                        {lawyer.phones.map((phone, phoneIdx) => (
                          <a
                            key={phoneIdx}
                            href={`tel:${phone.replace(/\s/g, "")}`}
                            className="flex items-center gap-2 text-cyan-100 hover:text-teal-300 transition-colors text-sm group"
                          >
                            <Phone className="w-3.5 h-3.5 text-teal-300 flex-shrink-0 group-hover:rotate-12 transition-transform" />
                            {phone}
                          </a>
                        ))}
                        
                        <a
                          href={`mailto:${lawyer.email}`}
                          className="flex items-center gap-2 text-cyan-100 hover:text-teal-300 transition-colors text-sm group"
                        >
                          <Mail className="w-3.5 h-3.5 text-teal-300 flex-shrink-0 group-hover:scale-110 transition-transform" />
                          {lawyer.email}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div id="contact-form" className="mt-6 sm:mt-8 scroll-mt-20">
            <div className="bg-white rounded-2xl shadow-2xl p-4 sm:p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-cyan-500 p-2.5 rounded-lg">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-cyan-900">
                  Bize Mesaj Gönderin
                </h3>
              </div>

              {/* Status Messages */}
              {submitStatus.type && (
                <div className={`mb-6 p-4 rounded-lg ${
                  submitStatus.type === 'success' 
                    ? 'bg-green-50 border border-green-200 text-green-800' 
                    : 'bg-red-50 border border-red-200 text-red-800'
                }`}>
                  <p className="text-sm">{submitStatus.message}</p>
                </div>
              )}

              <form 
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Ad Soyad *
                    </label>
                    <input
                      type="text"
                      name="isim"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-gray-500 text-base"
                      placeholder="Adınız ve soyadınız"
                      minLength={2}
                      maxLength={100}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Telefon * <span className="text-xs text-gray-500">(11 basamaklı)</span>
                    </label>
                    <input
                      type="tel"
                      name="telefon"
                      required
                      pattern="[0-9\s\(\)\-]+"
                      maxLength={18}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-gray-500 text-base"
                      placeholder="0 (5__) ___ __ __"
                      title="Lütfen 11 basamaklı Türkiye telefon numarası giriniz"
                      inputMode="tel"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    E-posta *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-gray-500 text-base"
                    placeholder="ornek@email.com"
                    inputMode="email"
                    autoComplete="email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Konu
                  </label>
                  <select 
                    name="konu"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-gray-700 text-base min-h-[44px]"
                    defaultValue=""
                  >
                    <option value="" disabled>Konu seçiniz</option>
                    <option>Şirketler Hukuku</option>
                    <option>Gayrimenkul Hukuku</option>
                    <option>Sağlık Hukuku</option>
                    <option>Aile Hukuku</option>
                    <option>Ceza Hukuku</option>
                    <option>İdare Hukuku</option>
                    <option>İş Hukuku</option>
                    <option>İcra ve İflas Hukuku</option>
                    <option>Miras Hukuku</option>
                    <option>Tüketici Hukuku</option>
                    <option>Vergi Hukuku</option>
                    <option>Diğer</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Mesajınız *
                  </label>
                  <textarea
                    name="mesaj"
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none placeholder:text-gray-500 text-base"
                    placeholder="Lütfen konunuzu kısaca açıklayın..."
                    minLength={10}
                    maxLength={2000}
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-cyan-600 hover:bg-cyan-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-bold py-4 rounded-lg transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 min-h-[48px] touch-manipulation text-base"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Gönderiliyor...
                    </>
                  ) : (
                    'Mesaj Gönder'
                  )}
                </button>
                <p className="text-xs text-gray-500 text-center">
                  * Mesajınız en kısa sürede değerlendirilip tarafınıza dönüş yapılacaktır.
                </p>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

