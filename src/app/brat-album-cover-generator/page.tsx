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
    question: "What is Brat Generator?",
    answer:
      "Brat Generator is a free online tool to create Brat-style album covers, memes, and graphics inspired by Charli XCX’s iconic visual aesthetic.",
  },
  {
    icon: Palette,
    question: "What color themes are available?",
    answer:
      "You can choose from Green, Pink, Black, or White themes—or create your own using the custom color picker.",
  },
  {
    icon: Type,
    question: "Can I type long sentences or lyrics?",
    answer:
      "Yes! Our generator supports multi-line input with auto font resizing and alignment.",
  },
  {
    icon: Smartphone,
    question: "Does this work on mobile devices?",
    answer:
      "Yes, it’s fully responsive and optimized for both iOS and Android browsers.",
  },
  {
    icon: Download,
    question: "What file format is the output?",
    answer:
      "Images are downloaded as high-resolution PNG files, perfect for social media or print.",
  },
  {
    icon: Settings,
    question: "Can I control font size, blur, and alignment?",
    answer:
      "Yes, you can customize all visual settings including text alignment, blur strength, and more.",
  },
  {
    icon: FileDown,
    question: "Is transparent background supported?",
    answer:
      "Yes! You can toggle a transparent background before downloading for more flexible use.",
  },
  {
    icon: BadgeCheck,
    question: "Is Brat Generator completely free?",
    answer: "Yes — no watermark, no login, and no hidden fees.",
  },
  {
    icon: MessageCircle,
    question: "Can I use emojis?",
    answer: "Absolutely! Emojis and special characters are fully supported.",
  },
  {
    icon: FileText,
    question: "Is the font accurate to the original Brat cover?",
    answer:
      "While not the exact font, we use a very close match—narrow, sans-serif, and clean.",
  },
  {
    icon: Eye,
    question: "Can I preview the design before downloading?",
    answer: "Yes! The image updates in real-time as you type and style.",
  },
  {
    icon: Zap,
    question: "Why is the text blurred?",
    answer:
      "The Brat aesthetic includes a subtle blur effect, which you can enable or disable.",
  },
  {
    icon: Paintbrush,
    question: "Can I create other versions like pink or black?",
    answer:
      "Yes! Visit our Pink, Black, or White Brat Generator pages to explore different styles.",
  },
  {
    icon: HelpCircle,
    question: "Where can I report a bug or give feedback?",
    answer:
      "You can use the contact form or tag us on Twitter @bratgenerator with suggestions.",
  },
  {
    icon: Monitor,
    question: "Does this work on desktop browsers?",
    answer: "Yes, including Chrome, Firefox, Safari, and Edge.",
  },
  {
    icon: UploadCloud,
    question: "Can I upload my own image or logo?",
    answer:
      "Not at the moment, but we're working on custom background uploads in future versions.",
  },
  {
    icon: Instagram,
    question: "How do I share my image on social media?",
    answer:
      "Use #bratgenerator or tag @bratgenerator on TikTok, Instagram, or X (Twitter) for a chance to be featured.",
  },
  {
    icon: Users,
    question: "Can I use this for group memes?",
    answer:
      "Yes! It's perfect for friend groups, group chats, or shared social memes.",
  },
  {
    icon: Quote,
    question: "Can I make quote graphics or lyric memes?",
    answer:
      "Absolutely—Brat Generator is ideal for turning text into aesthetic statements.",
  },
  {
    icon: Star,
    question: "Can I use my Brat image commercially?",
    answer:
      "Non-commercial use is encouraged. For commercial use, attribution and fair use policies apply.",
  },
];

export const metadata: Metadata = {
  title:
    "Brat Album Cover Generator – Create Your Own Brat Album Cover Online for Free",
  description:
    "Design your own viral Brat-style image in seconds. Brat Generator is a free online tool inspired by Charli XCX’s bold album aesthetic. Customize colors, text, and layout – no watermark, no login required.",
  alternates: {
    canonical: "https://bratgenerator.blog/brat-album-cover-generator",
  },
  openGraph: {
    type: "website",
    url: "https://bratgenerator.blog/brat-album-cover-generator",
    title:
      "Brat Album Cover Generator – Create Your Own Brat Album Cover Online for Free",
    description:
      "Design your own viral Brat-style image in seconds. Brat Generator is a free online tool inspired by Charli XCX’s bold album aesthetic. Customize colors, text, and layout – no watermark, no login required.",
    images: [
      {
        url: "https://bratgenerator.blog/images/brat-music-covers.png",
        width: 1200,
        height: 630,
        alt: "Brat Generator Cover",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Brat Album Cover Generator – Create Your Own Brat Album Cover Online for Free",
    site: "https://bratgenerator.blog/brat-album-cover-generator",
    description:
      "Design your own viral Brat-style image in seconds. Brat Generator is a free online tool inspired by Charli XCX’s bold album aesthetic. Customize colors, text, and layout – no watermark, no login required.",
    images: ["https://bratgenerator.blog/images/brat-music-covers.png"],
  },
};

export default function HomePage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Brat Album Cover Generator
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Design your own viral Brat-style image in seconds. Brat Generator is a
          free online tool inspired by Charli XCX’s bold album aesthetic.
          Customize colors, text, and layout – no watermark, no login required.
        </p>
      </section>

      <BratGenerator
        title="Brat Album Cover Generator"
        description="What's your album name?"
        defaultText="Brat Album Cover Generator"
      />

      <section className="max-w-3xl mx-auto mt-10 text-lg space-y-6">
        <h2 className="text-2xl font-bold mb-4 text-center">
          What is Brat Album Cover Generator?
        </h2>
        <p>
          <strong>Brat Generator</strong> is a free online design tool that lets
          you recreate the iconic visual style of{" "}
          <Link
            href="/charli-xcx-brat-generator"
            title="Charli XCX’s Brat album cover"
            className="underline text-green-600"
          >
            Charli XCX’s Brat album cover
          </Link>
          . Whether you want to turn lyrics, affirmations, or inside jokes into
          viral content, Brat Generator gives you total control over layout,
          colors, blur, and text style.
        </p>
        <p>
          Choose between{" "}
          <Link
            href="/brat-generator-green"
            title="Brat generator green"
            className="underline text-green-600"
          >
            Green
          </Link>
          ,{" "}
          <Link
            href="/brat-generator-pink"
            title="Brat generator pink"
            className="underline text-pink-500"
          >
            Pink
          </Link>
          ,{" "}
          <Link
            href="/brat-generator-black"
            title="Brat generator black"
            className="underline text-black"
          >
            Black
          </Link>
          , or{" "}
          <Link
            href="/brat-generator-white"
            title="Brat generator white"
            className="underline text-gray-700"
          >
            White
          </Link>{" "}
          themes — or create your own custom vibe.
        </p>
        <p>
          Looking for more tools? Check out our{" "}
          <Link
            href="/brat-font-generator"
            title="Brat font generator"
            className="underline text-blue-600"
          >
            Brat Font Generator
          </Link>{" "}
          for typography, or{" "}
          <Link
            href="/brat-lyrics-generator"
            title="Brat Lyrics generator"
            className="underline text-purple-600"
          >
            Brat Lyrics Generator
          </Link>{" "}
          to auto-generate meme-worthy lines.
        </p>
      </section>

      <FAQ04
        heading="Frequently Asked Questions About Brat Album Cover Generator"
        description="Want to know how to create the perfect Brat meme, export transparent images,
  or use emojis in your custom text? This FAQ section covers the most asked
  questions about Brat Generator, font tools, theme options, and more."
        faq={faq}
      />
    </main>
  );
}
