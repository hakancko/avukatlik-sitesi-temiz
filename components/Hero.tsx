"use client";

import { ArrowRight, Phone, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-700 via-cyan-500 to-teal-400 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Quote Section */}
          <div className="mb-8 sm:mb-12">
            <div className="inline-flex items-center justify-center mb-4 sm:mb-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-white/30 shadow-lg bg-white/10 backdrop-blur-sm flex-shrink-0">
                <Image 
                  src="/photo/logo.png" 
                  alt="CTİ Avukatlık & Hukuk Danışmanlığı Logo - İzmir Avukatlık Bürosu" 
                  width={96} 
                  height={96}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
            <blockquote className="text-base sm:text-lg md:text-xl lg:text-2xl font-serif font-bold text-white leading-relaxed max-w-3xl mx-auto mb-4 sm:mb-6">
              &quot;Avukatlar topluluğu en mükemmel, en ziyade itibara lâyık öyle şerefli bir insanlar birliğidir ki mutat doğruluğu az görür ve tatbikatta kusursuzluk derecesine kadar varırlar. Eğer fazilet sosyete tarafından kovulsaydı, son sığınağını onların yanında bulurdu.&quot;
            </blockquote>
            <p className="text-sm sm:text-base text-gray-200 italic">
              İzmir&apos;de profesyonel avukatlık ve hukuk danışmanlığı hizmetleri
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link
              href="/iletisim"
              className="group inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl hover:scale-105 min-h-[44px] min-w-[44px] touch-manipulation"
              aria-label="İletişim sayfasına git"
            >
              <span className="text-sm sm:text-base">Hemen İletişime Geçin</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform flex-shrink-0" />
            </Link>
            <Link
              href="/#services"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all backdrop-blur-sm min-h-[44px] min-w-[44px] touch-manipulation"
              aria-label="Hizmetler bölümüne git"
            >
              <span className="text-sm sm:text-base">Hizmetlerimiz</span>
            </Link>
          </div>

          {/* Quick Contact Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-white/90 text-sm sm:text-base">
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
              <a
                href="tel:05015544604"
                className="flex items-center gap-2 hover:text-teal-300 transition-colors group min-h-[44px] touch-manipulation"
                aria-label="Telefon ara: 0 (501) 554 46 04"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform flex-shrink-0" />
                <span className="font-medium whitespace-nowrap text-sm sm:text-base">0 (501) 554 46 04</span>
              </a>
              <a
                href="tel:02324359192"
                className="flex items-center gap-2 hover:text-teal-300 transition-colors group min-h-[44px] touch-manipulation"
                aria-label="Telefon ara: 0 (232) 435 91 92"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform flex-shrink-0" />
                <span className="font-medium whitespace-nowrap text-sm sm:text-base">0 (232) 435 91 92</span>
              </a>
            </div>
            <span className="hidden sm:block text-white/40">|</span>
            <a
              href="mailto:av.suoyku@gmail.com"
              className="flex items-center gap-2 hover:text-teal-300 transition-colors group min-h-[44px] touch-manipulation"
              aria-label="E-posta gönder: av.suoyku@gmail.com"
            >
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform flex-shrink-0" />
              <span className="font-medium break-all sm:break-normal text-sm sm:text-base">av.suoyku@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

