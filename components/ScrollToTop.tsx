"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Hash varsa, o bölüme scroll yap
      if (window.location.hash) {
        const hash = window.location.hash.substring(1); // # işaretini kaldır
        const element = document.getElementById(hash);
        if (element) {
          // Element bulundu, scroll yap
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 100);
        } else {
          // Element bulunamadı, en üste scroll yap
          window.scrollTo({ top: 0, behavior: 'instant' });
        }
      } else {
        // Hash yoksa, en üste scroll et
        window.scrollTo({ top: 0, behavior: 'instant' });
      }
    }
  }, [pathname]);

  return null;
}

