import BratGenerator from "@/components/common/generator";
import FAQ04 from "@/components/faq-04/faq-04";
import type { Metadata } from "next";

import {
  Palette,
  Type,
  Smartphone,
  Download,
  Settings,
  FileDown,
  BadgeCheck,
  Image as ImageIcon,
  MessageCircle,
  Monitor,
  Eye,
  Instagram,
  Zap,
  HelpCircle,
  FileText,
  Users,
  Paintbrush,
  UploadCloud,
  Quote,
  Star,
} from "lucide-react";
import Link from "next/link";

const faq = [
  {
    icon: Palette,
    question: "What is Brat Generator Black?",
    answer:
      "It’s a variation of the original Brat Generator, styled with a black background and white text for a darker, edgier aesthetic.",
  },
  {
    icon: Type,
    question: "Does it support long text?",
    answer:
      "Yes! You can enter long lyrics, quotes, or messages. The text will auto-resize to fit the image perfectly.",
  },
  {
    icon: Smartphone,
    question: "Can I use it on my phone?",
    answer:
      "Absolutely. It works flawlessly on iPhone and Android browsers — no app needed.",
  },
  {
    icon: Download,
    question: "How do I save the image?",
    answer:
      "Click the download button to export your cover as a high-quality PNG file instantly.",
  },
  {
    icon: Settings,
    question: "Can I adjust font or blur?",
    answer:
      "Yes. Font size adjusts automatically, and you can toggle blur settings for different looks.",
  },
  {
    icon: FileDown,
    question: "Is transparent background supported?",
    answer:
      "Not in this version. But the main Brat Generator Green offers transparency export.",
  },
  {
    icon: BadgeCheck,
    question: "Is this tool free?",
    answer:
      "Yes! All Brat Generator tools are 100% free with no watermark or login.",
  },
  {
    icon: ImageIcon,
    question: "Can I upload my own background?",
    answer: "Currently no, but this feature may be added soon.",
  },
  {
    icon: MessageCircle,
    question: "Can I use symbols or emojis?",
    answer: "Yes. Emojis and special characters are fully supported.",
  },
  {
    icon: Monitor,
    question: "Can I use it on desktop?",
    answer: "Yes, it’s optimized for both desktop and mobile browsers.",
  },
  {
    icon: Eye,
    question: "Do I get a live preview?",
    answer:
      "Yes. The preview updates in real-time as you type or adjust settings.",
  },
  {
    icon: Instagram,
    question: "Is it shareable on TikTok or IG?",
    answer:
      "Of course. Download and share your brat art on any platform. Use #bratgenerator to join the trend.",
  },
  {
    icon: Zap,
    question: "Why is there a blur effect?",
    answer:
      "The blur mimics the original Brat album design. You can adjust or remove it to suit your vibe.",
  },
  {
    icon: HelpCircle,
    question: "I found a bug. How do I report it?",
    answer:
      "Reach us via Twitter @bratgenerator or submit feedback through our contact page.",
  },
  {
    icon: FileText,
    question: "What font is used?",
    answer:
      "It’s a condensed sans-serif that closely matches the style of Charli XCX’s Brat visuals.",
  },
  {
    icon: Users,
    question: "Can I use this in group memes?",
    answer:
      "Definitely. Many users create pfp collages and group posts with the black brat theme.",
  },
  {
    icon: Paintbrush,
    question: "Can I switch to a different color?",
    answer:
      "Yes, check out our Pink, Green, and White versions for more options.",
  },
  {
    icon: Quote,
    question: "Is this good for lyric graphics?",
    answer:
      "Yes! Combine this with our Brat Lyrics Generator for perfect brat-style lyric images.",
  },
  {
    icon: UploadCloud,
    question: "Will you add more customization?",
    answer:
      "Yes. We plan to add more layout and theme options in future updates.",
  },
  {
    icon: Star,
    question: "Can I use this for commercial design?",
    answer:
      "You may use it non-commercially. For business or merch use, follow fair use and attribute clearly.",
  },
];

export const metadata: Metadata = {
  title: "Brat Generator Black – Make Your Own Dark Brat Album Cover Online",
  description:
    "Create stunning black-themed Brat covers with Brat Generator Black. Inspired by Charli XCX’s viral album, this free online tool lets you customize text in a moody, minimalist aesthetic. No watermark. No sign-up. Just brat.",
  alternates: {
    canonical: "/brat-generator-black",
  },
  openGraph: {
    type: "website",
    url: "https://bratgenerator.blog/brat-generator-black",
    title: "Brat Generator Black – Make Your Own Dark Brat Album Cover Online",
    description:
      "Create stunning black-themed Brat covers with Brat Generator Black. Inspired by Charli XCX’s viral album, this free online tool lets you customize text in a moody, minimalist aesthetic. No watermark. No sign-up. Just brat.",
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
    title: "Brat Generator Black – Make Your Own Dark Brat Album Cover Online",
    site: "https://bratgenerator.blog/brat-generator-black",
    description:
      "Create stunning black-themed Brat covers with Brat Generator Black. Inspired by Charli XCX’s viral album, this free online tool lets you customize text in a moody, minimalist aesthetic. No watermark. No sign-up. Just brat.",
    images: ["https://bratgenerator.blog/logo.png"],
  },
};

export default function HomePage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Brat Generator Black — Craft Bold and Edgy Brat-Style Covers in Black
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Create stunning black-themed Brat covers with Brat Generator Black.
          Inspired by Charli XCX’s viral album, this free online tool lets you
          customize text in a moody, minimalist aesthetic. No watermark. No
          sign-up. Just brat.
        </p>
      </section>

      <BratGenerator defaultTheme="black" />

      <section className="max-w-3xl mx-auto mt-10 text-lg space-y-6">
        <h2 className="text-2xl font-bold mb-4 text-center">
          What is Brat Generator Black?
        </h2>
        <p>
          <strong>Brat Generator Black</strong> is a free tool designed to help
          you create bold, minimalistic black-themed Brat covers inspired by
          Charli XCX’s viral{" "}
          <Link
            href="/charli-xcx-brat-generator"
            title="charli xcx brat generator"
            className="underline font-medium"
          >
            Brat aesthetic
          </Link>
          . This version features a dark background with white text, perfect for
          creating moody lyric graphics, edgy memes, or underground-style posts.
        </p>
        <p>
          It complements other versions like the{" "}
          <Link
            href="/"
            title="brat generator green"
            className="underline text-green-500 font-medium"
          >
            Green Generator
          </Link>
          , the fun{" "}
          <Link
            href="/brat-generator-pink"
            title="brat generator pink"
            className="underline text-pink-500 font-medium"
          >
            Pink Edition
          </Link>
          , and the classic white variant.
        </p>
        <p>
          Whether you’re posting to Instagram, crafting a TikTok meme, or
          designing your next{" "}
          <a
            href="/brat-lyrics-generator"
            title="brat lyrics generator"
            className="underline font-medium"
          >
            Brat-style lyrics
          </a>
          , this version gives you full creative control.
        </p>
      </section>

      <FAQ04
        heading="Frequently Asked Questions About Brat Generator Black"
        description="Frequently Asked Questions about Brat Generator Black. Get quick answers on how to create your own bold, black-themed brat album covers, customize fonts and blur effects, download images, and share your creations. Learn about supported devices, usage tips, and upcoming features."
        faq={faq}
      />
    </main>
  );
}
