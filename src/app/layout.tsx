import type { Metadata } from "next";
import { Newsreader, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { portfolioData } from "@/data/portfolio";
import { profileDescription, profileTitle, siteUrl } from "@/data/site";

const serifFont = Newsreader({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  style: "normal",
});

const sansFont = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const socialPreview = {
  url: "/social-preview.png",
  width: 1200,
  height: 630,
  alt: "ASCII portrait of Faysal Ahmed Fahim beside his name and frontend developer title",
};

export const metadata: Metadata = {
  title: profileTitle,
  description: profileDescription,
  verification: {
    google: "MfvQoUK50biCzclVUrJ7yEfpr7ZCH7UH0-6247C_FRE",
  },
  authors: [{ name: portfolioData.name, url: siteUrl }],
  creator: portfolioData.name,
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "16x16 32x32 48x48" },
      { url: "/icon-96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
  },
  openGraph: {
    title: profileTitle,
    description: profileDescription,
    url: siteUrl,
    siteName: portfolioData.name,
    locale: "en_US",
    type: "profile",
    images: [{ ...socialPreview, type: "image/png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: profileTitle,
    description: profileDescription,
    creator: "@0xFaysal_",
    images: [socialPreview],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}#website`,
      url: siteUrl,
      name: portfolioData.name,
      alternateName: "0xFaysal",
    },
    {
      "@type": "ProfilePage",
      "@id": `${siteUrl}#profilepage`,
      url: siteUrl,
      name: profileTitle,
      description: profileDescription,
      isPartOf: { "@id": `${siteUrl}#website` },
      mainEntity: { "@id": `${siteUrl}#person` },
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}#person`,
      name: portfolioData.name,
      givenName: "Faysal Ahmed",
      familyName: "Fahim",
      alternateName: "0xFaysal",
      url: siteUrl,
      jobTitle: portfolioData.title,
      image: new URL("/ascii-portrait-closeup.svg", siteUrl).href,
      nationality: { "@type": "Country", name: "Bangladesh" },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Dhaka",
        addressCountry: "BD",
      },
      sameAs: [
        portfolioData.socials.github,
        portfolioData.socials.linkedin,
        portfolioData.socials.x,
        portfolioData.socials.facebook,
        portfolioData.socials.instagram,
      ].filter(Boolean),
      affiliation: {
        "@type": "CollegeOrUniversity",
        name: "United International University",
        url: "https://www.uiu.ac.bd/",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Dhaka",
          addressCountry: "BD",
        },
      },
      award: [
        "Gold Medal, Green Entrepreneurship (Green Tech), FIRSO Bangladesh 2026 (Team XEN - HelioBay)",
        "Selected to represent Bangladesh at the FIRSO Global Final 2026",
        "Top 20 Finalist, Data Privacy Avengers 2026, Robi Axiata PLC (Team Incognito Unit)",
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${serifFont.variable} ${sansFont.variable}`}
    >
      <head>
        <meta name="color-scheme" content="light dark" />
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark"){document.documentElement.dataset.theme=t;}else if(window.matchMedia("(prefers-color-scheme: dark)").matches){document.documentElement.dataset.theme="dark";}}catch(e){}`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen font-sans antialiased selection:bg-accent/20">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-2 focus:z-50 focus:bg-background focus:p-3">Skip to content</a>
        <Header />
        <main id="main-content" tabIndex={-1}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
