import BratGenerator from "@/components/common/generator";
import FAQ04 from "@/components/faq-04/faq-04";
import type { Metadata } from "next";

import {
  Image,
  Palette,
  Type,
  Smartphone,
  Download,
  Settings,
  FileDown,
  BadgeCheck,
  MessageCircle,
  FileText,
  Eye,
  Zap,
  Paintbrush,
  HelpCircle,
  Monitor,
  UploadCloud,
  Instagram,
  Users,
  Quote,
  Star,
} from "lucide-react";

import Link from "next/link";

const faq = [
  {
    icon: Image,
    question: "What is Brat Summer Meme Generator?",
    answer:
      "A free tool that turns your text into bold, neon‑green memes inspired by Charli XCX’s Brat album and the Brat Summer aesthetic.",
  },
  {
    icon: Palette,
    question: "Why “Brat Summer”?",
    answer:
      "The design borrows from the viral cultural moment that began with Charli XCX’s 2024 album, spreading through TikTok and memes :contentReference[oaicite:3]{index=3}.",
  },
  {
    icon: Type,
    question: "Can I enter long lyrics or quotes?",
    answer:
      "Yes—it supports multi-line text with automatic resizing to fit the meme layout.",
  },
  {
    icon: Smartphone,
    question: "Is it mobile‑friendly?",
    answer:
      "Yes, it’s optimized for iPhones and Android devices with live preview and quick download.",
  },
  {
    icon: Download,
    question: "What file format do I get?",
    answer: "High-resolution PNG download—ideal for social sharing or saving.",
  },
  {
    icon: Settings,
    question: "Can I customize background color?",
    answer:
      "You can choose Brat‑green or switch to white or transparent—depending on theme options.",
  },
  {
    icon: FileDown,
    question: "Is transparent background supported?",
    answer: "In some themes, yes. Check options to export without background.",
  },
  {
    icon: BadgeCheck,
    question: "Is the tool free?",
    answer: "Yes—no sign-up, no watermark, and completely free to use.",
  },
  {
    icon: MessageCircle,
    question: "Can I use emojis or symbols?",
    answer:
      "Yes—emojis are fully supported and render well in the Brat aesthetic.",
  },
  {
    icon: FileText,
    question: "Is the font authentic?",
    answer:
      "It mimics lowercase Arial-like style seen on the album cover—similar but not exact.",
  },
  {
    icon: Eye,
    question: "Is there a live preview?",
    answer: "Yes—everything updates as you type or change settings.",
  },
  {
    icon: Zap,
    question: "Why the blur effect?",
    answer:
      "The subtle blur echoes the original Brat artwork design—optional and adjustable.",
  },
  {
    icon: Paintbrush,
    question: "Can I switch themes after entering text?",
    answer:
      "Yes, you can swap themes like green, pink, black or white, and the same text will adapt.",
  },
  {
    icon: HelpCircle,
    question: "How do I report a bug?",
    answer:
      "Contact us through the site’s feedback form or tag @bratgenerator on X (Twitter).",
  },
  {
    icon: Monitor,
    question: "Does it work on desktop browsers?",
    answer: "Fully compatible with Chrome, Safari, Firefox, Edge, and more.",
  },
  {
    icon: UploadCloud,
    question: "Can I upload custom background or logo?",
    answer: "Not yet, but uploading support is planned for future updates.",
  },
  {
    icon: Instagram,
    question: "How can I share on social media?",
    answer:
      "Download then post to TikTok, Instagram, or X using #BratSummer or #BratGenerator.",
  },
  {
    icon: Users,
    question: "Is this good for group meme use?",
    answer:
      "Yes—perfect for shared lyrics or inside jokes across friend groups.",
  },
  {
    icon: Quote,
    question: "Can I make lyric quote memes?",
    answer: "Absolutely—enter your lines and download a polished lyric image.",
  },
  {
    icon: Star,
    question: "Can I use these memes commercially?",
    answer:
      "Only for non‑commercial use. For merch or branding, follow fair use and attribution.",
  },
];

export const metadata: Metadata = {
  title:
    "Brat Summer Meme Generator – Create Charli XCX‑Style Memes with Brat Vibes",
  description:
    "Join the Brat Summer trend with our Brat Summer Meme Generator. Inspired by Charli XCX’s viral lime‑green Brat aesthetic, this free tool creates instant meme‑style graphics. No watermark, no signup—generate your brat meme in seconds.",
  alternates: {
    canonical: "/brat-summer-meme-generator",
  },
  openGraph: {
    type: "website",
    url: "https://bratgenerator.blog/brat-summer-meme-generator",
    title:
      "Brat Summer Meme Generator – Create Charli XCX‑Style Memes with Brat Vibes",
    description:
      "Join the Brat Summer trend with our Brat Summer Meme Generator. Inspired by Charli XCX’s viral lime‑green Brat aesthetic, this free tool creates instant meme‑style graphics. No watermark, no signup—generate your brat meme in seconds.",
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
      "Brat Summer Meme Generator – Create Charli XCX‑Style Memes with Brat Vibes",
    site: "https://bratgenerator.blog/brat-summer-meme-generator",
    description:
      "Join the Brat Summer trend with our Brat Summer Meme Generator. Inspired by Charli XCX’s viral lime‑green Brat aesthetic, this free tool creates instant meme‑style graphics. No watermark, no signup—generate your brat meme in seconds.",
    images: ["https://bratgenerator.blog/logo.png"],
  },
};

export default function HomePage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Brat Summer Meme Generator
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Join the Brat Summer trend with our Brat Summer Meme Generator.
          Inspired by Charli XCX’s viral lime‑green Brat aesthetic, this free
          tool creates instant meme‑style graphics. No watermark, no
          signup—generate your brat meme in seconds.
        </p>
      </section>

      <BratGenerator />

      <section className="max-w-3xl mx-auto mt-10 text-lg space-y-6">
        <h2 className="text-2xl font-bold mb-4 text-center">
          What is Brat Summer Meme Generator?
        </h2>
        <p>
          <strong>Brat Summer Meme Generator</strong> is a free, browser-based
          tool that turns your custom text into vibrant, minimalist images
          inspired by Charli XCX’s “Brat” album and the Brat Summer trend.
        </p>
        <p>
          Join the same aesthetic wave used in the viral “Brat Summer”
          movement—neon Brat‑green backgrounds, lowercase Arial-inspired fonts,
          and bold visuals that dominated TikTok and fan art.
        </p>
        <p>
          Try related tools like
          <Link
            href="/brat-generator"
            title="Brat Generator main tool"
            className="underline text-green-600"
          >
            Brat Generator
          </Link>
          ,
          <Link
            href="/brat-lyrics-generator"
            title="Brat Lyrics Generator"
            className="underline text-purple-600"
          >
            Brat Lyrics Generator
          </Link>
          , or create different looks with
          <Link
            href="/brat-generator-pink"
            title="Brat Generator Pink"
            className="underline text-pink-500"
          >
            Pink
          </Link>
          ,
          <Link
            href="/brat-generator-black"
            title="Brat Generator Black"
            className="underline text-black"
          >
            Black
          </Link>
          ,
          <Link
            href="/brat-generator-white"
            title="Brat Generator White"
            className="underline text-gray-700"
          >
            White
          </Link>
          .
        </p>
      </section>

      <FAQ04
        heading="Frequently Asked Questions About Brat Summer Meme Generator"
        description="Learn how to make bold, Brat Summer‑style memes, customize backgrounds and text, and share instantly. This FAQ answers everything you need to create viral Brat‑style content."
        faq={faq}
      />
    </main>
  );
}
