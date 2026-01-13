"use client";

import { Briefcase, Home, Heart, Users as UsersIcon, Gavel, Building, Shield, Scale, FileText, ShoppingCart, Calculator, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useScrollAnimation } from "@/lib/useScrollAnimation";

export default function Services() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.05, rootMargin: "-50px 0px" });
  const services = [
    {
      icon: Briefcase,
      title: "Şirketler Hukuku",
      description: "Şirket kuruluşu, ortaklık anlaşmaları, şirket birleşmeleri, devir işlemleri ve şirketler hukukundan kaynaklanan uyuşmazlıklar.",
      color: "from-emerald-600 to-teal-600",
      slug: "sirketler-hukuku"
    },
    {
      icon: Home,
      title: "Gayrimenkul Hukuku",
      description: "Tapu işlemleri, kira davaları, tahliye, kat mülkiyeti, kamulaştırma ve gayrimenkul uyuşmazlıkları.",
      color: "from-blue-600 to-cyan-600",
      slug: "gayrimenkul-hukuku"
    },
    {
      icon: Heart,
      title: "Sağlık Hukuku",
      description: "Tıbbi malpraktis davaları, hasta hakları, sağlık kuruluşları ile ilgili uyuşmazlıklar ve sağlık hukuku danışmanlığı.",
      color: "from-rose-500 to-pink-500",
      slug: "saglik-hukuku"
    },
    {
      icon: UsersIcon,
      title: "Aile Hukuku",
      description: "Boşanma, velayet, nafaka, mal rejimi, soybağı, evlat edinme ve aile hukukundan kaynaklanan uyuşmazlıklar.",
      color: "from-purple-600 to-pink-600",
      slug: "aile-hukuku"
    },
    {
      icon: Gavel,
      title: "Ceza Hukuku",
      description: "Ceza davalarında savunma, suç duyuruları, beraat davaları ve ceza hukuku alanındaki uyuşmazlıklar.",
      color: "from-red-600 to-orange-600",
      slug: "ceza-hukuku"
    },
    {
      icon: Building,
      title: "İdare Hukuku",
      description: "İptal davaları, tam yargı davaları, belediye işlemleri, imar davaları ve idare hukuku uyuşmazlıkları.",
      color: "from-slate-600 to-gray-600",
      slug: "idare-hukuku"
    },
    {
      icon: Shield,
      title: "İş Hukuku",
      description: "İşe iade davaları, kıdem tazminatı, iş kazaları, işçi alacakları ve işçi-işveren ilişkisinden kaynaklanan uyuşmazlıklar.",
      color: "from-indigo-600 to-blue-600",
      slug: "is-hukuku"
    },
    {
      icon: Scale,
      title: "İcra ve İflas Hukuku",
      description: "İcra takipleri, iflas davaları, konkordato, haciz işlemleri ve icra-iflas hukuku alanındaki uyuşmazlıklar.",
      color: "from-amber-600 to-orange-600",
      slug: "icra-iflas-hukuku"
    },
    {
      icon: FileText,
      title: "Miras Hukuku",
      description: "Miras taksimi, veraset ilamı, vasiyetname düzenleme, mirasçılık belgesi ve miras hukuku alanındaki uyuşmazlıklar.",
      color: "from-violet-600 to-purple-600",
      slug: "miras-hukuku"
    },
    {
      icon: ShoppingCart,
      title: "Tüketici Hukuku",
      description: "Tüketici hakları, ayıplı mal, garanti, taksitli satış, mesafeli satış ve tüketici hukukundan kaynaklanan uyuşmazlıklar.",
      color: "from-green-600 to-emerald-600",
      slug: "tuketici-hukuku"
    },
    {
      icon: Calculator,
      title: "Vergi Hukuku",
      description: "Vergi uyuşmazlıkları, vergi itirazları, vergi cezaları, vergi davaları ve vergi hukukundan kaynaklanan uyuşmazlıklar.",
      color: "from-cyan-600 to-blue-600",
      slug: "vergi-hukuku"
    },
  ];

  return (
    <section id="services" className="py-12 sm:py-20 bg-gray-50">
      <div className="container mx-auto px-3 sm:px-6 lg:px-8 max-w-full overflow-hidden">
        {/* Section Header */}
        <div 
          ref={ref}
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-cyan-900 mb-4">
            Uzmanlık Alanlarımız
          </h2>
          <div className="w-24 h-1 bg-teal-500 mx-auto mb-6" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Her alanda uzman avukat kadromuzla hukuki ihtiyaçlarınıza profesyonel çözümler sunuyoruz
          </p>
        </div>

        {/* Services Grid */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 lg:gap-5 w-full">
          {services.map((service, index) => {
            const Icon = service.icon;
            // Responsive genişlik: mobil 2 sütun, tablet 2 sütun, desktop 3 sütun, xl 4 sütun
            const widthClass = "w-[calc(50%-4px)] sm:w-[calc(50%-8px)] lg:w-[calc(33.333%-14px)] xl:w-[calc(25%-15px)]";
            return (
              <div
                key={index}
                className={`group bg-white rounded-lg sm:rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-1 min-w-0 ${widthClass} ${
                  isVisible 
                    ? "opacity-100 translate-y-0 scale-100" 
                    : "opacity-0 translate-y-10 scale-95"
                }`}
                style={{ 
                  transitionDelay: `${200 + index * 100}ms`,
                  transitionDuration: '700ms'
                }}
              >
                {/* Icon Header */}
                <div className={`bg-gradient-to-br ${service.color} p-2 sm:p-4 flex items-center justify-center`}>
                  <Icon className="w-6 h-6 sm:w-10 sm:h-10 text-white" />
                </div>

                {/* Content */}
                <div className="p-2 sm:p-4 flex flex-col flex-grow">
                  <h3 className="text-xs sm:text-lg font-bold text-cyan-900 mb-1 sm:mb-2 group-hover:text-cyan-600 transition-colors break-words leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-[10px] sm:text-sm leading-relaxed mb-1.5 sm:mb-3 flex-grow line-clamp-2 sm:line-clamp-3 break-words">
                    {service.description}
                  </p>
                  <Link
                    href={`/hizmetler/${service.slug}`}
                    className="mt-auto inline-flex items-center justify-center gap-1 text-cyan-600 hover:text-cyan-700 font-medium text-[10px] sm:text-sm transition-colors duration-200 group/btn border-t border-gray-100 pt-2 sm:pt-3"
                  >
                    <span className="hidden sm:inline">Daha Fazla Bilgi</span>
                    <span className="sm:hidden">Detay</span>
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

