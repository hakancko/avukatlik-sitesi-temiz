"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const navItems = [
    { name: "Ana Sayfa", href: "/" },
    { name: "Hakkımızda", href: "/#about" },
    { name: "Uzmanlık Alanları", href: "/#services" },
    { name: "Ekibimiz", href: "/#team" },
    { name: "İletişim", href: "/iletisim", special: true },
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
        setIsMenuOpen(false);
        return;
      }
    }
    
    // Farklı sayfaya gidiyorsa normal Link davranışı
    if (href === '/' && pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-md">
      <nav className="container mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link 
            href="/" 
            onClick={(e) => handleNavClick(e, '/')}
            className="flex items-center space-x-2 sm:space-x-3 group"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-cyan-200 shadow-md group-hover:shadow-lg transition-all flex-shrink-0">
              <Image 
                src="/photo/logo.png" 
                alt="CTİ Avukatlık & Hukuk Danışmanlığı Logo" 
                width={48} 
                height={48}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <div className="flex flex-col flex-1 min-w-0">
              {/* Desktop: Tam versiyon (büyük ekran) */}
              <div className="hidden xl:flex items-center gap-1.5 whitespace-nowrap">
                <span className="text-xl font-serif font-bold text-cyan-900">C.T.İ.</span>
                <span className="text-xl font-serif font-bold text-cyan-900">AVUKATLIK</span>
                <span className="text-xl font-sans font-bold text-cyan-900">&</span>
                <span className="text-xl font-serif font-bold text-cyan-900">HUKUK DANIŞMANLIĞI</span>
              </div>
              <span className="hidden xl:block text-xs text-cyan-600 font-medium mt-0.5 whitespace-nowrap">
                Uzm. Arb. Av. Ferhat CANBEDİR <span className="text-teal-500">•</span> Av. Enes TUMAN <span className="text-teal-500">•</span> Av. Su Öykü İNCEOĞULLARI
              </span>
              
              {/* Tablet/Laptop: Orta versiyon - tek satır */}
              <div className="hidden md:flex xl:hidden flex-col leading-tight">
                <div className="flex items-center gap-1 whitespace-nowrap">
                  <span className="text-sm font-serif font-bold text-cyan-900">C.T.İ.</span>
                  <span className="text-sm font-serif font-bold text-cyan-900">AVUKATLIK</span>
                  <span className="text-sm font-sans font-bold text-cyan-900">&</span>
                  <span className="text-sm font-serif font-bold text-cyan-900">HUKUK DANIŞMANLIĞI</span>
                </div>
                <span className="text-[10px] text-cyan-600 font-medium mt-0.5 leading-tight whitespace-nowrap">
                  Uzm. Arb. Av. Ferhat CANBEDİR <span className="text-teal-500">•</span> Av. Enes TUMAN <span className="text-teal-500">•</span> Av. Su Öykü İNCEOĞULLARI
                </span>
              </div>
              
              {/* Mobile: Kompakt versiyon - tek satır */}
              <div className="flex md:hidden flex-col leading-tight min-w-0">
                <div className="flex items-center gap-0.5 sm:gap-1 flex-wrap">
                  <span className="text-[10px] sm:text-xs font-serif font-bold text-cyan-900 whitespace-nowrap">C.T.İ.</span>
                  <span className="text-[10px] sm:text-xs font-serif font-bold text-cyan-900 whitespace-nowrap">AVUKATLIK</span>
                  <span className="text-[10px] sm:text-xs font-sans font-bold text-cyan-900 whitespace-nowrap">&</span>
                  <span className="text-[10px] sm:text-xs font-serif font-bold text-cyan-900 whitespace-nowrap">HUKUK DANIŞMANLIĞI</span>
                </div>
                <span className="text-[8px] sm:text-[9px] text-cyan-600 font-medium tracking-tight mt-0.5 leading-tight">
                  <span className="block">Uzm. Arb. Av. Ferhat CANBEDİR <span className="text-teal-500">•</span> Av. Enes TUMAN</span>
                  <span className="block">Av. Su Öykü İNCEOĞULLARI</span>
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2 xl:space-x-4 2xl:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`${
                  item.special
                    ? "bg-teal-500 text-white px-3 xl:px-4 2xl:px-5 py-2 xl:py-2.5 rounded-full hover:bg-cyan-600 font-bold shadow-md hover:shadow-lg text-xs xl:text-sm"
                    : "text-cyan-700 hover:text-cyan-900 font-semibold text-xs xl:text-sm"
                } transition-all whitespace-nowrap`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile/Tablet Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors flex-shrink-0"
            aria-label="Menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-cyan-900" />
            ) : (
              <Menu className="w-6 h-6 text-cyan-900" />
            )}
          </button>
        </div>

        {/* Mobile/Tablet Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`${
                    item.special
                      ? "bg-teal-500 text-white px-5 py-3 rounded-lg hover:bg-cyan-600 font-bold text-center"
                      : "text-cyan-700 hover:text-cyan-900 font-semibold"
                  } transition-all py-2`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

