"use client";

import { MessageCircle } from "lucide-react";
import Link from "next/link";

export default function FloatingContactButton() {
  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
      {/* Main Button - Direct Link to Contact Form */}
      <Link
        href="/iletisim#contact-form"
        className="bg-teal-500 hover:bg-cyan-600 text-white p-3 sm:p-4 rounded-full shadow-2xl transition-all hover:scale-110 flex items-center justify-center group"
        aria-label="Mesaj Gönder"
      >
        <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
      </Link>

      {/* Pulse Animation */}
      <div className="absolute inset-0 rounded-full bg-teal-500 animate-ping opacity-20 pointer-events-none" />
    </div>
  );
}

