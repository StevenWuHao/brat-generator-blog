import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/header";
import Footer01Page from "@/components/footer-02/footer-02";
import Script from "next/script";
import PlausibleProvider from "next-plausible";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Brat Generator – Go Viral with Your Own Brat Album Cover in Seconds",
  description:
    "Want your own Brat-style cover that’s bold, bratty, and totally viral? Brat Generator makes it easy. Just type your text, pick a theme, and get your custom graphic in seconds—perfect for memes, posts, or showing off your brat energy.",
  openGraph: {
    type: "website",
    url: "https://bratgenerator.blog/",
    title:
      "Brat Generator – Go Viral with Your Own Brat Album Cover in Seconds",
    description:
      "Want your own Brat-style cover that’s bold, bratty, and totally viral? Brat Generator makes it easy. Just type your text, pick a theme, and get your custom graphic in seconds—perfect for memes, posts, or showing off your brat energy.",
    images: [
      {
        url: "https://bratgenerator.blog/logo.png",
        width: 1200,
        height: 630,
        alt: "Brat Generator Cover",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Brat Generator – Go Viral with Your Own Brat Album Cover in Seconds",
    description:
      "Want your own Brat-style cover that’s bold, bratty, and totally viral? Brat Generator makes it easy. Just type your text, pick a theme, and get your custom graphic in seconds—perfect for memes, posts, or showing off your brat energy.",
    images: ["https://bratgenerator.blog/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=G-1RS0MVJ7XT`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1RS0MVJ7XT');
          `}
      </Script>
      <PlausibleProvider
        domain="bratgenerator.blog"
        trackOutboundLinks
        trackFileDownloads
        taggedEvents
        pageviewProps
      />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <Header />
        {children}
        <Footer01Page />
      </body>
    </html>
  );
}
