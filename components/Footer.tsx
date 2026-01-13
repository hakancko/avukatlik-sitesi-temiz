"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();

  const quickLinks = [
    { name: "Ana Sayfa", href: "/" },
    { name: "Hakkımızda", href: "/#about" },
    { name: "Uzmanlık Alanları", href: "/#services" },
    { name: "Ekibimiz", href: "/#team" },
    { name: "İletişim", href: "/iletisim" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Hash linki varsa
    if (href.includes('#')) {
      const [path, hash] = href.split('#');
      
      // Aynı sayfadaysa
      if (path === '' || path === pathname) {
        e.preventDefault();
        
        if (hash) {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        return;
      }
    }
    
    // Ana sayfaya gidiyorsa ve aynı sayfadaysa
    if (href === '/' && pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const services = [
    { name: "Şirketler Hukuku", href: "/hizmetler/sirketler-hukuku" },
    { name: "Gayrimenkul Uyuşmazlıkları", href: "/hizmetler/gayrimenkul-hukuku" },
    { name: "Sağlık Hukuku", href: "/hizmetler/saglik-hukuku" },
    { name: "Aile Hukuku", href: "/hizmetler/aile-hukuku" },
    { name: "Ceza Hukuku", href: "/hizmetler/ceza-hukuku" },
    { name: "İdare Hukuku", href: "/hizmetler/idare-hukuku" },
    { name: "İş Hukuku", href: "/hizmetler/is-hukuku" },
    { name: "İcra ve İflas Hukuku", href: "/hizmetler/icra-iflas-hukuku" },
    { name: "Miras Hukuku", href: "/hizmetler/miras-hukuku" },
    { name: "Tüketici Hukuku", href: "/hizmetler/tuketici-hukuku" },
    { name: "Vergi Hukuku", href: "/hizmetler/vergi-hukuku" },
    { name: "Sigorta Hukuku", href: "/hizmetler/sigorta-hukuku" },
  ];

  return (
    <footer className="bg-cyan-800 text-gray-300">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 lg:gap-8">
          {/* About Section */}
          <div>
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-6">
              <div className="w-16 h-16 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-cyan-400/30 shadow-lg flex-shrink-0">
                <Image 
                  src="/photo/logo.png" 
                  alt="CTİ Avukatlık & Hukuk Danışmanlığı Logo" 
                  width={64} 
                  height={64}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col flex-1 text-center sm:text-left">
                <div className="leading-tight mb-2">
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-0.5">
                    <span className="text-sm sm:text-sm font-serif font-bold text-white">C.T.İ.</span>
                    <span className="text-sm sm:text-sm font-serif font-bold text-white">AVUKATLIK</span>
                    <span className="text-sm sm:text-sm font-sans font-bold text-white">&</span>
                    <span className="text-sm sm:text-sm font-serif font-bold text-white">HUKUK</span>
                    <span className="text-sm sm:text-sm font-serif font-bold text-white">DANIŞMANLIĞI</span>
                  </div>
                </div>
                <span className="text-xs text-teal-300 font-medium">
                  <span className="block">Uzm. Arb. Av. Ferhat CANBEDİR</span>
                  <span className="block">Av. Enes TUMAN</span>
                  <span className="block">Av. Su Öykü İNCEOĞULLARI</span>
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-center sm:text-left">
              İzmir&apos;de profesyonel avukatlık ve hukuk danışmanlığı hizmetleri.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4 text-base">Hızlı Erişim</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-sm hover:text-teal-300 transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="text-teal-400 text-xs group-hover:translate-x-0.5 transition-transform">›</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-4 text-base">Uzmanlık Alanları</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link 
                    href={service.href}
                    onClick={(e) => handleNavClick(e, service.href)}
                    className="text-sm hover:text-teal-300 transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="text-teal-400 text-xs group-hover:translate-x-0.5 transition-transform flex-shrink-0">›</span>
                    <span className="break-words">{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-4 text-base">İletişim</h4>
            <ul className="space-y-4 text-sm">
              {/* Bayraklı Ofis */}
              <li>
                <p className="text-teal-300 font-semibold mb-2 text-xs">BAYRAKLI OFİS</p>
                <div className="space-y-1.5">
                  <div className="flex items-start gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-teal-400 flex-shrink-0 mt-0.5" />
                    <span className="text-xs leading-snug">Mansuroğlu Mah. 288/5 Sok. No:6 K:4 D:14</span>
                  </div>
                  <a href="tel:05015544604" className="flex items-center gap-1.5 hover:text-teal-300 transition-colors">
                    <Phone className="w-3.5 h-3.5 text-teal-400" />
                    <span className="text-xs">0 (501) 554 46 04</span>
                  </a>
                </div>
              </li>

              {/* Menderes Ofis */}
              <li className="pt-3 border-t border-white/10">
                <p className="text-teal-300 font-semibold mb-2 text-xs">MENDERES OFİS</p>
                <div className="space-y-1.5">
                  <div className="flex items-start gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-teal-400 flex-shrink-0 mt-0.5" />
                    <span className="text-xs leading-snug">Kasımpaşa Mah. Atatürk Cad. No:69 K:1 D:7</span>
                  </div>
                  <a href="tel:05383554481" className="flex items-center gap-1.5 hover:text-teal-300 transition-colors">
                    <Phone className="w-3.5 h-3.5 text-teal-400" />
                    <span className="text-xs">0 (538) 355 44 81</span>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-cyan-900/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-1.5">
              <span className="text-sm font-serif font-bold text-white">C.T.İ.</span>
              <span className="text-sm font-serif font-bold text-white">AVUKATLIK</span>
              <span className="text-sm font-sans font-bold text-white">&</span>
              <span className="text-sm font-serif font-bold text-white">HUKUK DANIŞMANLIĞI</span>
            </div>
            <p className="text-center text-xs text-gray-400">
              © {currentYear} C.T.İ. Avukatlık & Hukuk Danışmanlığı. Tüm hakları saklıdır.
            </p>
            <p className="text-center text-[10px] sm:text-[11px] text-teal-300/80">
              <span className="block sm:inline">Uzm. Arb. Av. Ferhat CANBEDİR</span> <span className="text-teal-400 hidden sm:inline">•</span> <span className="block sm:inline">Av. Enes TUMAN</span> <span className="text-teal-400 hidden sm:inline">•</span> <span className="block sm:inline">Av. Su Öykü İNCEOĞULLARI</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

