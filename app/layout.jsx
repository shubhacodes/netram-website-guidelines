// app/layout.jsx
import React from "react";
import "./globals.css";
import "./theme.css";
import { ThemeProvider } from "./contexts/ThemeContext";
import GoogleTranslate from "@/components/google-translate";
import Script from "next/script";
import {
  Playfair_Display,
  Instrument_Sans,
  Hedvig_Letters_Serif,
  Mulish,
  Libre_Baskerville,
  Inter,
} from "next/font/google";

// Configure fonts with Next.js font optimization
const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

const hedvigLetters = Hedvig_Letters_Serif({
  subsets: ["latin"],
  variable: "--font-hedvig",
  display: "swap",
});

const mulish = Mulish({
  subsets: ["latin"],
  variable: "--font-mulish",
  display: "swap",
});

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-libre",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Netram Eye Hospital - Rated in BEST 10 Eye Hospitals In Delhi- NCR",
  description:
    "Freedom from glasses with advanced LASIK and Cataract Surgery. Safe, precise & fast vision correction by Dr. Anchal Gupta — 20+ years experience, 5,000+ successful procedures.",
  icons: {
    icon: [
      {
        url: "/netram_favicon/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/netram_favicon/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      { url: "/netram_favicon/favicon.ico", sizes: "any" },
    ],
    apple: [
      {
        url: "/netram_favicon/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    other: [
      {
        rel: "android-chrome-192",
        url: "/netram_favicon/android-chrome-192x192.png",
      },
      {
        rel: "android-chrome-512",
        url: "/netram_favicon/android-chrome-512x512.png",
      },
      { rel: "manifest", url: "/netram_favicon/site.webmanifest" },
    ],
  },
};

export default function RootLayout({ children }) {
  const GTM_ID = "GTM-TML3N9Q9";

  return (
    <html
      lang="en"
      data-theme="1"
      className={`${playfairDisplay.variable} ${instrumentSans.variable} ${hedvigLetters.variable} ${mulish.variable} ${libreBaskerville.variable} ${inter.variable}`}
    >
      <head>
        {/* Meta tags for better Google Translate support */}
        <meta name="google" content="translate" />
        <meta httpEquiv="Content-Language" content="en" />

        {/* Google Tag Manager */}
        <Script id="gtm-init" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
        {/* End Google Tag Manager */}
      </head>
      <body className="antialiased theme-body">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        <ThemeProvider>
          <GoogleTranslate />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
