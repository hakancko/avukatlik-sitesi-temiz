"use client";

import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import { useScrollAnimation } from "@/lib/useScrollAnimation";

export default function Team() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.05, rootMargin: "-50px 0px" });
  const team = [
    {
      name: "Ferhat CANBEDİR",
      title: "Uzm. Arb. Av.",
      office: "Bayraklı Ofis",
      email: "canbedir@gmail.com",
      phone: "0 (532) 621 09 61",
      phone2: "0 (232) 435 91 92",
      image: "/team/ferhat_canbedir-.png",
    },
    {
      name: "Enes TUMAN",
      title: "Av.",
      office: "Menderes Ofis",
      email: "av.enestuman@gmail.com",
      phone: "0 (538) 355 44 81",
      image: "/team/enes_tuman-.png",
    },
    {
      name: "Su Öykü İNCEOĞULLARI",
      title: "Av.",
      office: "Bayraklı Ofis",
      email: "av.suoyku@gmail.com",
      phone: "0 (532) 684 46 04",
      phone2: "0 (232) 435 91 92",
      image: "/team/suoyku.jpg",
    },
  ];

  return (
    <section id="team" className="py-12 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
            Avukat Ekibimiz
          </h2>
          <div className="w-24 h-1 bg-teal-500 mx-auto mb-6" />
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-4">
            Deneyimli ve uzman avukat kadromuzla her zaman yanınızdayız
          </p>
          <div className="bg-cyan-50 border-l-4 border-cyan-500 rounded-lg p-6 max-w-3xl mx-auto">
            <p className="text-gray-700 leading-relaxed">
              <span className="font-bold text-cyan-700">Canbedir&Tuman&İnceoğulları</span> Hukuk ve Danışmanlık olarak, 
              tüm avukatlarımız müvekkillerimizin hak ve menfaatlerini en iyi şekilde korumak için 
              kendi uzmanlık alanlarında profesyonel hizmet sunmaktadır. Her bir davada titiz bir 
              çalışma ve güçlü bir savunma anlayışıyla hareket ederiz.
            </p>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto items-stretch">
          {team.map((member, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:-translate-y-2 flex flex-col h-full ${
                isVisible 
                  ? "opacity-100 translate-y-0 scale-100" 
                  : "opacity-0 translate-y-10 scale-95"
              }`}
              style={{ 
                transitionDelay: `${300 + index * 150}ms`,
                transitionDuration: '800ms'
              }}
            >
              {/* Image */}
              <div className="relative bg-white overflow-hidden flex-shrink-0 h-64 sm:h-72">
                <Image
                  src={member.image}
                  alt={`${member.title} ${member.name} - CTİ Avukatlık ${member.office}`}
                  fill
                  className="object-contain object-top"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  quality={100}
                  priority={index < 3}
                  loading={index < 3 ? "eager" : "lazy"}
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6 flex flex-col flex-grow">
                <h3 className="text-lg sm:text-xl font-bold text-cyan-900 mb-2 min-h-[3.5rem] flex items-start">
                  {member.title} {member.name}
                </h3>
                <p className="text-xs text-gray-500 mb-4 sm:mb-6 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-cyan-600 flex-shrink-0" />
                  <span>{member.office}</span>
                </p>

                {/* Contact Info */}
                <div className="space-y-2 sm:space-y-3 border-t border-gray-100 pt-3 sm:pt-4 mt-auto min-h-[140px] flex flex-col justify-start">
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center gap-2 text-gray-600 hover:text-cyan-600 transition-colors group/link"
                  >
                    <Mail className="w-4 h-4 text-cyan-600 flex-shrink-0 group-hover/link:scale-110 transition-transform" />
                    <span className="text-sm break-all">{member.email}</span>
                  </a>
                  <a
                    href={`tel:${member.phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-2 text-gray-600 hover:text-cyan-600 transition-colors group/link"
                  >
                    <Phone className="w-4 h-4 text-cyan-600 flex-shrink-0 group-hover/link:rotate-12 transition-transform" />
                    <span className="text-sm">{member.phone}</span>
                  </a>
                  {member.phone2 ? (
                    <a
                      href={`tel:${member.phone2.replace(/\s/g, "")}`}
                      className="flex items-center gap-2 text-gray-600 hover:text-cyan-600 transition-colors group/link"
                    >
                      <Phone className="w-4 h-4 text-cyan-600 flex-shrink-0 group-hover/link:rotate-12 transition-transform" />
                      <span className="text-sm">{member.phone2}</span>
                    </a>
                  ) : (
                    <div className="h-[28px]"></div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

