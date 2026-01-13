import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import CallButton from "@/components/CallButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "CTİ Avukatlık & Hukuk Danışmanlığı | Canbedir & Tuman & İnceoğulları",
    template: "%s | CTİ Avukatlık"
  },
  description: "İzmir'de profesyonel avukatlık ve hukuk danışmanlığı hizmetleri. Canbedir, Tuman ve İnceoğulları avukatlarımızla Bayraklı ve Menderes ofislerimizden şirketler, gayrimenkul, sağlık, aile, ceza, idare, iş, icra-iflas, miras, tüketici ve vergi hukuku konularında 25+ yıllık deneyimle yanınızdayız.",
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#06b6d4' },
    { media: '(prefers-color-scheme: dark)', color: '#0891b2' },
  ],
  keywords: [
    "İzmir avukat", "CTİ avukatlık", "Bayraklı avukat", "Menderes avukat",
    "şirketler hukuku avukatı İzmir", "gayrimenkul avukatı İzmir", "sağlık hukuku avukatı İzmir",
    "aile hukuku avukatı", "ceza avukatı İzmir", "idare hukuku avukatı", "iş hukuku avukatı",
    "icra iflas avukatı", "miras avukatı", "tüketici hukuku avukatı", "vergi hukuku avukatı",
    "Canbedir avukat", "Tuman avukat", "İnceoğulları avukat",
    "İzmir hukuk bürosu", "İzmir avukatlık ofisi", "avukat danışmanlık İzmir",
    "hukuki danışmanlık", "uzman avukat İzmir"
  ],
  authors: [{ name: "CTİ Avukatlık - Canbedir & Tuman & İnceoğulları" }],
  creator: "CTİ Avukatlık & Hukuk Danışmanlığı",
  publisher: "CTİ Avukatlık & Hukuk Danışmanlığı",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.ctiavukatlik.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://www.ctiavukatlik.com',
    title: 'CTİ Avukatlık & Hukuk Danışmanlığı | İzmir',
    description: "İzmir'de 25+ yıllık deneyimle profesyonel avukatlık hizmetleri. Uzm. Arb. Av. Ferhat CANBEDİR, Av. Enes TUMAN ve Av. Su Öykü İNCEOĞULLARI ile şirketler, gayrimenkul, sağlık, aile, ceza, idare, iş, icra-iflas, miras, tüketici ve vergi hukuku konularında uzman hizmet.",
    siteName: 'CTİ Avukatlık',
    images: [
      {
        url: 'https://www.ctiavukatlik.com/photo/logo.png',
        width: 1200,
        height: 1200,
        alt: 'CTİ Avukatlık & Hukuk Danışmanlığı Logo - İzmir',
        type: 'image/png',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CTİ Avukatlık & Hukuk Danışmanlığı | İzmir',
    description: "İzmir'de 25+ yıllık deneyimle profesyonel avukatlık ve hukuk danışmanlığı hizmetleri. Bayraklı ve Menderes ofislerimizden hizmetinizdeyiz.",
    images: ['https://www.ctiavukatlik.com/photo/logo.png'],
    creator: '@ctiavukatlik',
    site: '@ctiavukatlik',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Google Search Console doğrulama kodunu buraya ekleyebilirsiniz
    // google: 'your-verification-code',
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth overflow-x-hidden">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased overflow-x-hidden max-w-full`}
      >
        {children}
        <CallButton />
      </body>
    </html>
  );
}
