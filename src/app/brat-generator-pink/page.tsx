import BratGenerator from "@/components/common/generator";
import FAQ04 from "@/components/faq-04/faq-04";
import type { Metadata } from "next";

import {
  Image as ImageIcon,
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
    icon: ImageIcon,
    question: "What is Brat Generator Pink?",
    answer:
      "It's a variant of the original Brat Generator focused on the pink aesthetic—perfect for memes, posts, and soft brat expressions.",
  },
  {
    icon: Palette,
    question: "How is the pink version different?",
    answer:
      "Brat Generator Pink uses a bright #ff90e8 background and black font, giving it a more feminine and playful vibe.",
  },
  {
    icon: Type,
    question: "Can I use long lyrics or quotes?",
    answer:
      "Yes! It supports multi-line input and dynamic resizing to fit long brat-style quotes or lyrics.",
  },
  {
    icon: Smartphone,
    question: "Is this mobile-friendly?",
    answer:
      "Absolutely! The generator works perfectly on both iOS and Android browsers.",
  },
  {
    icon: Download,
    question: "What format is the downloaded image?",
    answer:
      "All images are downloaded as high-quality PNG files, ideal for sharing or printing.",
  },
  {
    icon: Settings,
    question: "Can I change font size or blur?",
    answer:
      "Yes, font size auto-adjusts but you can tweak blur or spacing to match the pink brat vibe.",
  },
  {
    icon: FileDown,
    question: "Can I export with a transparent background?",
    answer:
      "Currently, transparency is only available in the main Brat Generator, but may be added to pink soon.",
  },
  {
    icon: BadgeCheck,
    question: "Is this free to use?",
    answer: "100% free. No sign-up, no watermark, no paywall.",
  },
  {
    icon: MessageCircle,
    question: "Can I use emojis?",
    answer: "Yes! Emojis like 💅✨🩷 work great with the pink aesthetic.",
  },
  {
    icon: FileText,
    question: "Can I copy the font?",
    answer:
      "You can’t download the font directly, but it uses a narrow sans-serif that mimics the Brat style.",
  },
  {
    icon: Eye,
    question: "Is there a preview before download?",
    answer: "Yes. All changes are shown in real-time before download.",
  },
  {
    icon: Zap,
    question: "Why is there blur?",
    answer:
      "The subtle blur is part of the viral Brat visual style. You can turn it off if desired.",
  },
  {
    icon: Paintbrush,
    question: "Can I change to other colors?",
    answer:
      "You can switch to green, black, or white versions from our other generators linked below.",
  },
  {
    icon: HelpCircle,
    question: "Where can I report bugs?",
    answer: "Use the contact form or reach out via Twitter @bratgenerator.",
  },
  {
    icon: Monitor,
    question: "Does it work on desktop?",
    answer: "Yes. It’s optimized for all screen sizes.",
  },
  {
    icon: UploadCloud,
    question: "Can I upload my own image?",
    answer: "Not yet, but custom uploads are on our roadmap.",
  },
  {
    icon: Instagram,
    question: "How should I tag it on IG or TikTok?",
    answer: "Use #bratgenerator or tag @bratgenerator to get featured!",
  },
  {
    icon: Users,
    question: "Can I use it in group memes?",
    answer: "Yes! Friends love using pink brat memes as pfp or group images.",
  },
  {
    icon: Quote,
    question: "Can I make a quote meme?",
    answer: "Absolutely—try lyrics, affirmations, or bratty statements.",
  },
  {
    icon: Star,
    question: "Can I use it commercially?",
    answer:
      "You may use it non-commercially. For merch or branding, please attribute and follow fair-use standards.",
  },
];

export const metadata: Metadata = {
  title: "Brat Generator Pink – Create Your Own Pink Brat Album Cover Online",
  description:
    "Create a bold pink Brat album cover in seconds using Brat Generator Pink. Inspired by Charli XCX’s viral aesthetic. Free, no watermark, fully customizable, and share-ready.",
  alternates: {
    canonical: "https://bratgenerator.blog/brat-generator-pink",
  },
  openGraph: {
    type: "website",
    url: "https://bratgenerator.blog/brat-generator-pink",
    title: "Brat Generator Pink – Create Your Own Pink Brat Album Cover Online",
    description:
      "Create a bold pink Brat album cover in seconds using Brat Generator Pink. Inspired by Charli XCX’s viral aesthetic. Free, no watermark, fully customizable, and share-ready.",
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
    title: "Brat Generator Pink – Create Your Own Pink Brat Album Cover Online",
    site: "https://bratgenerator.blog/brat-generator-pink",
    description:
      "Create a bold pink Brat album cover in seconds using Brat Generator Pink. Inspired by Charli XCX’s viral aesthetic. Free, no watermark, fully customizable, and share-ready.",
    images: ["https://bratgenerator.blog/logo.png"],
  },
};

export default function HomePage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Brat Generator Pink – Your Own Pink Brat Album Cover Meme
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Brat Generator Pink is a free tool inspired by Charli XCX’s iconic
          Brat album — now with a soft, playful twist. Quickly create bold pink
          covers, bratty lyric graphics, or memes to share on TikTok and
          Instagram — no login or watermark.
        </p>
      </section>

      <BratGenerator defaultTheme="pink" />

      <section className="max-w-3xl mx-auto mt-10 text-lg space-y-6">
        <h2 className="text-2xl font-bold mb-4 text-center">
          What is the Brat Generator Pink?
        </h2>
        <p>
          <strong>Brat Generator Pink</strong> is a free online tool that allows
          you to create bold, bratty, and highly aesthetic pink-themed Brat
          album covers. Inspired by{" "}
          <Link
            href="/charli-xcx-brat-generator"
            title="Charli XCX Brat Generator"
            className="underline text-pink-600"
          >
            Charli XCX’s
          </Link>{" "}
          iconic 2024 album aesthetic, this tool gives you full control over
          text, color, layout, and styling.
        </p>
        <p>
          Unlike the classic{" "}
          <Link
            href="/"
            title="Brat Generator Green"
            className="underline text-green-600"
          >
            green brat generator
          </Link>{" "}
          or the edgy{" "}
          <Link
            href="/brat-generator-black"
            title="Brat Generator Black"
            className="underline text-black"
          >
            black version
          </Link>
          , the pink generator is perfect for more playful, meme-worthy, or
          pop-style visuals.
        </p>
        <p>
          Whether you want to express your <em>soft brat energy</em>, make a
          viral post, or simply design your next{" "}
          <Link
            href="/brat-lyrics-generator"
            title="Brat Lyrics Generator"
            className="underline text-pink-600"
          >
            Brat-style lyric meme
          </Link>
          , Brat Generator Pink has you covered.
        </p>
      </section>

      <FAQ04
        heading="Frequently Asked Questions About Brat Generator Pink"
        description="Learn how to create pink brat-style memes, customize your text, and share your creations. This FAQ covers everything from download options to color themes."
        faq={faq}
      />
    </main>
  );
}
