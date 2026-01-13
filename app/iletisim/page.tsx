import Header from "@/components/Header";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata = {
  title: "İletişim",
  description: "CTİ Avukatlık ile iletişime geçin. İzmir Bayraklı ve Menderes ofislerimizden hukuki danışmanlık ve randevu alın. Uzm. Arb. Av. Ferhat CANBEDİR, Av. Enes TUMAN, Av. Su Öykü İNCEOĞULLARI ile görüşmek için formu doldurun veya arayın.",
  keywords: "İzmir avukat iletişim, avukat randevu, hukuk danışmanlık, Bayraklı avukat ofisi, Menderes avukat ofisi, CTİ avukatlık iletişim",
  openGraph: {
    title: "İletişim | CTİ Avukatlık",
    description: "Bayraklı ve Menderes ofislerimizden bize ulaşın. Hukuki danışmanlık için 0 (501) 554 46 04 veya 0 (232) 435 91 92 numaralarından arayabilirsiniz.",
    type: "website",
    locale: "tr_TR",
    url: "https://www.ctiavukatlik.com/iletisim",
    siteName: "CTİ Avukatlık",
  },
  twitter: {
    card: "summary_large_image",
    title: "İletişim | CTİ Avukatlık",
    description: "Bayraklı ve Menderes ofislerimizden bize ulaşın. Hukuki danışmanlık için 0 (501) 554 46 04 veya 0 (232) 435 91 92 numaralarından arayabilirsiniz.",
  },
  alternates: {
    canonical: "/iletisim",
  }
};

export default function IletisimPage() {
  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Ana Sayfa",
        "item": "https://www.ctiavukatlik.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "İletişim",
        "item": "https://www.ctiavukatlik.com/iletisim"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />
      <main id="top" className="min-h-screen scroll-smooth">
        <Header />
        <div className="pt-16 sm:pt-20">
          <Contact />
        </div>
        <Footer />
      </main>
    </>
  );
}

