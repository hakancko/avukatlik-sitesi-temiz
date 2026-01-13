import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "CTİ Avukatlık & Hukuk Danışmanlığı",
    "alternateName": "Canbedir & Tuman & İnceoğulları Avukatlık Bürosu",
    "description": "İzmir'de 25+ yıllık deneyimle profesyonel avukatlık ve hukuk danışmanlığı hizmetleri. Şirketler, gayrimenkul, sağlık, aile, ceza, idare, iş, icra-iflas, miras, tüketici ve vergi hukuku alanlarında uzman kadro.",
    "url": "https://www.ctiavukatlik.com",
    "logo": "https://www.ctiavukatlik.com/photo/logo.png",
    "image": "https://www.ctiavukatlik.com/photo/logo.png",
    "telephone": ["+905015544604", "+902324359192"],
    "email": "av.suoyku@gmail.com",
    "address": [
      {
        "@type": "PostalAddress",
        "streetAddress": "Mansuroğlu Mah. 288/5 Sok. No:6 K:4 D:14",
        "addressLocality": "Bayraklı",
        "addressRegion": "İzmir",
        "addressCountry": "TR"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "Kasımpaşa Mah. Atatürk Cad. No:69 K:1 D:7",
        "addressLocality": "Menderes",
        "addressRegion": "İzmir",
        "addressCountry": "TR"
      }
    ],
    "areaServed": {
      "@type": "City",
      "name": "İzmir"
    },
    "priceRange": "$$",
    "openingHours": "Mo-Fr 09:00-18:00",
    "serviceType": [
      "Şirketler Hukuku",
      "Gayrimenkul Hukuku",
      "Sağlık Hukuku",
      "Aile Hukuku",
      "Ceza Hukuku",
      "İdare Hukuku",
      "İş Hukuku",
      "İcra ve İflas Hukuku",
      "Miras Hukuku",
      "Tüketici Hukuku",
      "Vergi Hukuku"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "150"
    },
    "founder": [
      {
        "@type": "Person",
        "name": "Uzm. Arb. Av. Ferhat CANBEDİR"
      },
      {
        "@type": "Person",
        "name": "Av. Enes TUMAN"
      },
      {
        "@type": "Person",
        "name": "Av. Su Öykü İNCEOĞULLARI"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <ScrollToTop />
      <main id="top" className="min-h-screen scroll-smooth">
        <Header />
        <Hero />
        <About />
        <Services />
        <Team />
        <Footer />
      </main>
    </>
  );
}
