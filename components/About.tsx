"use client";

import { Award, Users, Scale, BookOpen } from "lucide-react";
import { useScrollAnimation } from "@/lib/useScrollAnimation";

export default function About() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.05, rootMargin: "-50px 0px" });
  const stats = [
    { icon: Award, value: "25+", label: "Yıllık Deneyim" },
    { icon: Users, value: "2000+", label: "Memnun Müvekkil" },
    { icon: Scale, value: "1000+", label: "Başarılı Dava" },
    { icon: BookOpen, value: "11+", label: "Uzmanlık Alanı" },
  ];

  return (
    <section id="about" className="py-12 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
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
            Hakkımızda
          </h2>
          <div className="w-24 h-1 bg-teal-500 mx-auto mb-6" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            İzmir&apos;de köklü bir geçmiş ve güvenilir hukuk hizmetiyle yanınızdayız
          </p>
        </div>

          {/* Content */}
          <div 
            className={`grid md:grid-cols-2 gap-8 md:gap-12 items-start mb-12 sm:mb-16 transition-all duration-1000 delay-200 ${
              isVisible 
                ? "opacity-100 translate-y-0" 
                : "opacity-0 translate-y-10"
            }`}
          >
            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed text-lg">
                <span className="font-serif text-2xl text-cyan-600">CTİ Avukatlık & Hukuk Danışmanlığı</span> ofisi olarak, 
                müvekkillerimize en kaliteli hukuki hizmeti sunmayı ilke edinerek çalışmalarımızı sürdürmekteyiz.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Şirketler, gayrimenkul, sağlık, aile, ceza, idare, iş, icra-iflas, miras, tüketici ve vergi hukuku başta olmak üzere birçok alanda 
                uzman kadromuzla profesyonel avukatlık hizmetleri sunmaktayız. Her müvekkilimizin 
                davasına özel, detaylı ve titiz bir çalışma anlayışıyla yaklaşıyoruz.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Hukuki süreçlerde yanınızda olmak, haklarınızı en iyi şekilde savunmak ve 
                adalete ulaşmanızı sağlamak için tüm gücümüzle çalışıyoruz.
              </p>
              <div className="flex items-start gap-3 bg-cyan-50 p-4 rounded-lg border-l-4 border-cyan-500">
                <Scale className="w-6 h-6 text-cyan-600 flex-shrink-0 mt-1" />
                <p className="text-cyan-900 italic font-medium">
                  &quot;Avukatlar tarih boyunca köle kullanmadılar ama hiçbir zaman efendileri de olmadı!&quot;
                </p>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className={`bg-gradient-to-br from-cyan-500 to-teal-500 p-6 rounded-xl text-center text-white shadow-lg hover:shadow-xl transition-all hover:scale-105 ${
                      isVisible 
                        ? "opacity-100 translate-y-0 scale-100" 
                        : "opacity-0 translate-y-10 scale-90"
                    }`}
                    style={{ 
                      transitionDelay: `${400 + index * 100}ms`,
                      transitionDuration: '600ms'
                    }}
                  >
                    <Icon className="w-10 h-10 mx-auto mb-3" />
                    <div className="text-3xl font-bold mb-2">{stat.value}</div>
                    <div className="text-sm text-white/90">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

