import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "BMC Safety Nets Bangalore | Premium Balcony Safety Nets & Invisible Grills",
  description: "BMC Safety Nets is Bangalore's leading provider of premium, UV-resistant safety nets, invisible grills, and ceiling cloth hangers. Same-day installation. 100% safe & affordable. Call +91 96866 68224 for a free inspection!",
  keywords: [
    "Bangalore Safety Nets",
    "Safety Nets Bangalore",
    "Pigeon Safety Nets Bangalore",
    "Bird Nets Bangalore",
    "Monkey Safety Nets Bangalore",
    "Invisible Grills Bangalore",
    "Balcony Safety Nets",
    "Children Safety Nets",
    "Sports Nets Bangalore",
    "Cricket Nets Bangalore",
    "Cloth Hangers Bangalore",
    "Best Safety Nets Bangalore",
    "Affordable Safety Nets Bangalore"
  ],
  authors: [{ name: "BMC Safety Nets Bangalore" }],
  category: "Home Services",
  alternates: {
    canonical: "https://bmcsafetynets.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "BMC Safety Nets Bangalore | Balcony Safety Nets & Invisible Grills",
    description: "Bangalore's trusted safety net installation experts. Premium quality, UV-resistant materials, same-day service, & free inspection. Protect your family today!",
    url: "https://bmcsafetynets.com",
    siteName: "BMC Safety Nets",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://bmcsafetynets.com/images/balcony.webp",
        width: 1200,
        height: 630,
        alt: "BMC Safety Nets Installation in Bangalore",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BMC Safety Nets Bangalore | Balcony Safety Nets",
    description: "Bangalore's premium safety net experts. Same-day installation & free site inspection. Call +91 96866 68224.",
    images: ["https://bmcsafetynets.com/images/balcony.webp"],
  },
  other: {
    "google-site-verification": "verification_token_here", // Note: replace this with your actual Google Search Console token
  },
  verification: {
    google: "GiuYVwkg5ET-gVdnDQ_Bje9ZUTj2ULmGvCpqjeAU3ME",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Inject Local Business Schema Markup
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "BMC Safety Nets",
    "image": "https://bmcsafetynets.com/images/balcony.webp",
    "@id": "https://bmcsafetynets.com/#localbusiness",
    "url": "https://bmcsafetynets.com",
    "telephone": "+919686668224",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "No. 45, 2nd Main Road, Near Metro Station, Yeshwanthpur",
      "addressLocality": "Bangalore",
      "addressRegion": "Karnataka",
      "postalCode": "560022",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 13.0285,
      "longitude": 77.5401
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "sameAs": [
      "https://www.facebook.com/bmcsafetynets",
      "https://www.instagram.com/bmcsafetynets"
    ]
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} scroll-smooth h-full antialiased`}
    >
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-K6KCTMS8');`,
          }}
        />
        {/* End Google Tag Manager */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="min-h-full bg-slate-50 text-slate-900 flex flex-col font-sans">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K6KCTMS8"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
      </body>
    </html>
  );
}
