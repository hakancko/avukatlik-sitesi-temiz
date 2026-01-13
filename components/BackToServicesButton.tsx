"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function BackToServicesButton() {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    // Ana sayfaya git, hash ile birlikte
    // ScrollToTop component'i hash'i handle edecek
    router.push("/#services");
  };

  return (
    <a
      href="/#services"
      onClick={handleClick}
      className="group inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-6"
    >
      <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
      <span>Hizmetlerimize Dön</span>
    </a>
  );
}

