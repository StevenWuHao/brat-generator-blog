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
      "Brat Generator lets you create custom Charli XCX-style covers with bold text over neon green or alternate themes, instantly shareable.",
  },
  {
    icon: Palette,
    question: "What themes are supported?",
    answer:
      "Green, Pink, Black, and White themes are available, plus custom color support.",
  },
  {
    icon: Type,
    question: "Can I enter long text or lyrics?",
    answer:
      "Yes—multi-line input is supported with auto-resizing and alignment.",
  },
  {
    icon: Smartphone,
    question: "Does it work on mobile?",
    answer:
      "Fully responsive and optimized for mobile browsers on iOS and Android.",
  },
  {
    icon: Download,
    question: "What file format is output?",
    answer: "High-quality PNG—perfect for social sharing or printing.",
  },
  {
    icon: Settings,
    question: "Can I adjust blur and font size?",
    answer:
      "Yes. Customize blur strength, alignment, and font settings to your liking.",
  },
  {
    icon: FileDown,
    question: "Is transparent background available?",
    answer: "Support available in Green theme to export without background.",
  },
  {
    icon: BadgeCheck,
    question: "Do I need to login?",
    answer:
      "No. Brat Generator is free and works without any signup or watermark.",
  },
  {
    icon: MessageCircle,
    question: "Can emojis be used?",
    answer: "Yes—emojis and special characters display great in brat style.",
  },
  {
    icon: FileText,
    question: "Is the font authentic?",
    answer:
      "We mimic the slim, sans-serif Arial look—but it's not the exact font from Charli’s album.",
  },
  {
    icon: Eye,
    question: "Is there a live preview?",
    answer:
      "Yes—your design updates in real-time as you type or change settings.",
  },
  {
    icon: Zap,
    question: "Why is the text blurred?",
    answer:
      "The blur is part of the original aesthetic—optional and adjustable for effect.",
  },
  {
    icon: Paintbrush,
    question: "Can I switch themes later?",
    answer: "Yes—easily switch between green, pink, black, or white layouts.",
  },
  {
    icon: HelpCircle,
    question: "How do I report bugs?",
    answer: "Reach us via Twitter @bratgenerator or our site’s feedback form.",
  },
  {
    icon: Monitor,
    question: "Does it work on desktop browsers?",
    answer: "Yes—fully functional on Chrome, Safari, Firefox, and Edge.",
  },
  {
    icon: UploadCloud,
    question: "Can I upload custom assets?",
    answer: "Not yet—this is planned for future updates.",
  },
  {
    icon: Instagram,
    question: "How to tag images on social media?",
    answer:
      "Use #bratgenerator or tag @bratgenerator for community recognition.",
  },
  {
    icon: Users,
    question: "Is this suitable for group memes?",
    answer:
      "Yes—create shared covers or lyrics for groups, friends, or online chats.",
  },
  {
    icon: Quote,
    question: "Can I make lyric quote images?",
    answer:
      "Absolutely—combine this with the Lyrics Generator for full lyrics design.",
  },
  {
    icon: Star,
    question: "Can I use it commercially?",
    answer:
      "Non‑commercial use is fine. For merchandise or business use, please attribute responsibly and follow fair-use guidelines.",
  },
];

export const metadata: Metadata = {
  title: "Charli XCX Brat Generator – Make Your Own Viral Brat Cover",
  description:
    "Design custom Brat-style graphics with your own text in neon green and minimalist style—based on Charli XCX’s iconic album. Free, no signup, no watermark. Meme-ready in seconds.",
  alternates: {
    canonical: "https://bratgenerator.blog/charli-xcx-brat-generator",
  },
  openGraph: {
    type: "website",
    url: "https://bratgenerator.blog/charli-xcx-brat-generator",
    title: "Charli XCX Brat Generator – Make Your Own Viral Brat Cover",
    description:
      "Design custom Brat-style graphics with your own text in neon green and minimalist style—based on Charli XCX’s iconic album. Free, no signup, no watermark. Meme-ready in seconds.",
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
    title: "Charli XCX Brat Generator – Make Your Own Viral Brat Cover",
    site: "https://bratgenerator.blog/charli-xcx-brat-generator",
    description:
      "Design custom Brat-style graphics with your own text in neon green and minimalist style—based on Charli XCX’s iconic album. Free, no signup, no watermark. Meme-ready in seconds.",
    images: ["https://bratgenerator.blog/logo.png"],
  },
};

export default function HomePage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Charli XCX Brat Generator – Make Your Own Viral Brat Cover
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Design custom Brat-style graphics with your own text in neon green and
          minimalist style—based on Charli XCX’s iconic album. Free, no signup,
          no watermark. Meme-ready in seconds.
        </p>
      </section>

      <BratGenerator />

      <section className="max-w-3xl mx-auto mt-10 text-lg space-y-6">
        <h2 className="text-2xl font-bold mb-4 text-center">
          What is charli xcx brat generator​?
        </h2>
        <p>
          <strong>Charli XCX Brat Generator</strong> is a free online tool
          inspired by Charli XCX’s breakthrough 2024 album <em>Brat</em>. It
          recreates the iconic aesthetic—neon lime‑green background and
          lowercase Arial text—for fans to generate custom album covers, memes,
          lyrics graphics, and more.
        </p>
        <p>
          Built on the viral “brat summer” trend, the generator lets you type
          custom brat‑style text and instantly see it rendered in the same bold
          minimalism that defined recent pop culture and even influenced
          political campaign branding.
        </p>
        <p>
          Explore multiple theme options: try the classic Brat green, switch it
          up with the white version, or use tools like the
          <Link
            href="/brat-lyrics-generator"
            className="underline text-purple-600"
            title="Brat Lyrics Generator"
          >
            Brat Lyrics Generator
          </Link>
          ,
          <Link
            href="/brat-font-generator"
            className="underline text-blue-600"
            title="Brat Font Generator"
          >
            Font Generator
          </Link>
          , or alternate styles like
          <Link
            href="/brat-generator-pink"
            className="underline text-pink-500"
            title="Brat Generator Pink"
          >
            Pink
          </Link>
          ,
          <Link
            href="/brat-generator-black"
            className="underline text-black"
            title="Brat Generator Black"
          >
            Black
          </Link>
          , and
          <Link
            href="/brat-generator-white"
            className="underline text-gray-700"
            title="Brat Generator White"
          >
            White
          </Link>{" "}
          for different moods.
        </p>
      </section>

      <FAQ04
        heading="Frequently Asked Questions About Charli XCX Brat Generator"
        description="Learn how Brat Generator works, how to customize colors and blur, and how to share your creations with the world. This FAQ covers everything from themes to transparency and font options."
        faq={faq}
      />
    </main>
  );
}
