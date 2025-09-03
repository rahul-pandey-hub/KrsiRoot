import "./globals.css";
import { Montserrat, Playfair_Display } from "next/font/google";
import type { Metadata } from "next";
import Script from "next/script";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { Toaster } from "@/components/ui/toaster";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["300", "400", "500"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://KrsiRoots.com'),
  title: {
    default: "KrsiRoots",
    template: "%s | KrsiRoots"
  },
  description: "India's leading organic food trading platform connecting farmers with global buyers. Premium organic and sustainable food direct from farm to table.",
  keywords: ["organic food", "organic trading", "sustainable agriculture", "Indian organic products", "farm to table", "organic certification", "global trade", "premium organic"],
  authors: [{ name: "KrsiRoots Team" }],
  creator: "KrsiRoots",
  publisher: "KrsiRoots",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/favicon.ico',
    apple: [
      { url: '/apple-icon.png', sizes: '180x180' },
    ],
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://KrsiRoots.com',
    siteName: 'KrsiRoots',
    title: 'KrsiRoots - Organic For All',
    description: "India's leading organic food trading platform connecting farmers with global buyers.",
    // images: [
    //   {
    //     url: '/images/og-image.jpg',
    //     width: 1200,
    //     height: 630,
    //     alt: 'KrsiRoots Platform Preview',
    //   },
    // ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@KrsiRoots',
    creator: '@KrsiRoots',
    title: 'KrsiRoots - Premium Organic Food Trading Platform',
    description: "India's leading organic food trading platform connecting farmers with global buyers.",
    // images: ['/images/twitter-image.jpg'],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
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
  alternates: {
    canonical: 'https://KrsiRoots.com',
    // languages: {
    //   'en-US': 'https://KrsiRoots.com/en-us',
    //   'hi-IN': 'https://KrsiRoots.com/hi',
    // },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'yandex-verification-code',
    yahoo: 'yahoo-verification-code',
    other: {
      'facebook-domain-verification': 'your-facebook-verification-code',
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#4CAF50" />
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" />
        <link rel="dns-prefetch" href="https://cdnjs.cloudflare.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "KrsiRoots",
              "url": "https://KrsiRoots.com",
              "logo": "https://KrsiRoots.com/images/logo.png",
              "sameAs": [
                "https://www.facebook.com/profile.php?id=61579862834774",
                "https://twitter.com/KrsiRoots",
                "https://www.instagram.com/krsiroots_organics?igsh=MXQ4aTE4Y3Jzdnk4dg==",
                "https://in.linkedin.com/in/krsi-organics-a8a8a7375"
              ],
              "contactPoint": [{
                "@type": "ContactPoint",
                "telephone": "+91-8866034343",
                "contactType": "customer service",
                "availableLanguage": ["English", "Hindi"]
              }],
              "description": "India's leading organic food trading platform connecting farmers with global buyers."
            })
          }}
        />
      </head>
      <body className={`${montserrat.variable} ${playfair.variable}`}>
        <GoogleAnalytics GA_MEASUREMENT_ID={"G-RWYJSBPN45"} />
        <Link
          href={"https://wa.me/918866034343"}
          className="fixed bottom-10 right-10 bg-gray-100 rounded-full p-2 z-50 cursor-pointer shadow-lg hover:bg-gray-200"
          aria-label="Contact us on WhatsApp"
        >
          <FaWhatsapp size={50} className="text-green-500" />
        </Link>

        {children}
        <Toaster />
        
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js"
          strategy="afterInteractive"
          crossOrigin="anonymous"
        />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"
          strategy="afterInteractive"
          crossOrigin="anonymous"
        />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"
          strategy="afterInteractive"
          crossOrigin="anonymous"
        />
      </body>
    </html>
  );
}
