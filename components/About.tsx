"use client";

import { Scale } from "lucide-react";
import { useScrollAnimation } from "@/lib/useScrollAnimation";

export default function About() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.05, rootMargin: "-50px 0px" });

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
            className={`max-w-4xl mx-auto transition-all duration-1000 delay-200 ${
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
          </div>
        </div>
      </div>
    </section>
  );
}

