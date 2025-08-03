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
    question: "What is Brat Generator White?",
    answer:
      "It’s a free online tool to create bold Brat-style images with a clean white background—ideal for minimalists and meme lovers.",
  },
  {
    icon: Palette,
    question: "What makes the white version unique?",
    answer:
      "It features a white backdrop and strong black text, giving it a clean, editorial aesthetic.",
  },
  {
    icon: Type,
    question: "Can I use long text or lyrics?",
    answer:
      "Yes, it supports multiline input with automatic font scaling, perfect for longer bratty quotes or song lyrics.",
  },
  {
    icon: Smartphone,
    question: "Does it work on mobile?",
    answer: "Yes! It’s fully optimized for both iPhone and Android browsers.",
  },
  {
    icon: Download,
    question: "What format is the download?",
    answer:
      "You’ll receive a high-resolution PNG image, ready to post or print.",
  },
  {
    icon: Settings,
    question: "Can I customize font or blur?",
    answer:
      "Font sizing and blur adjust dynamically, but you can also tweak the blur effect for a crisper look.",
  },
  {
    icon: FileDown,
    question: "Is transparent background supported?",
    answer:
      "Currently, white backgrounds are solid by default. Transparent export is available on the main Brat Generator.",
  },
  {
    icon: BadgeCheck,
    question: "Is this really free?",
    answer: "Yes, completely free—no sign-up, no watermark, no limitations.",
  },
  {
    icon: MessageCircle,
    question: "Can I use emojis or symbols?",
    answer: "Absolutely! Add emojis like 🤍⚪✨ to match the white brat theme.",
  },
  {
    icon: FileText,
    question: "Which font is used?",
    answer:
      "It mimics the narrow sans-serif font seen in Charli XCX’s Brat visuals, but not the exact typeface.",
  },
  {
    icon: Eye,
    question: "Is there a real-time preview?",
    answer:
      "Yes. The display updates instantly as you type or change settings.",
  },
  {
    icon: Zap,
    question: "What’s with the blur effect?",
    answer:
      "It’s part of the original Brat aesthetic. You can reduce or disable it if needed.",
  },
  {
    icon: Paintbrush,
    question: "Can I try other color styles?",
    answer:
      "Yes, explore our pink, green, or black versions for different moods.",
  },
  {
    icon: HelpCircle,
    question: "Where do I report issues?",
    answer: "Use the contact form or message us on X (Twitter) @bratgenerator.",
  },
  {
    icon: Monitor,
    question: "Can I use it on desktop?",
    answer: "Of course! It works smoothly across all major browsers.",
  },
  {
    icon: UploadCloud,
    question: "Can I upload my own background?",
    answer:
      "Not yet, but support for custom backgrounds may come in future updates.",
  },
  {
    icon: Instagram,
    question: "How do I tag it online?",
    answer: "Use #bratgenerator and tag @bratgenerator on TikTok or Instagram.",
  },
  {
    icon: Users,
    question: "Can I make group memes?",
    answer:
      "Yes! Add shared lyrics, quotes, or jokes and send to your friends.",
  },
  {
    icon: Quote,
    question: "Is it good for quote posts?",
    answer: "Yes. The clean white layout makes quotes pop beautifully.",
  },
  {
    icon: Star,
    question: "Can I use these images commercially?",
    answer:
      "You can use it non-commercially. For merch or products, be sure to attribute properly and respect parody laws.",
  },
];

export const metadata: Metadata = {
  title:
    "Brat Generator White – Create Minimalist Brat Album Covers in White Style",
  description:
    "Design your own minimalist Brat album cover with Brat Generator White. Inspired by Charli XCX’s viral aesthetic. Free, no watermark, mobile-friendly & perfect for lyric memes.",
  alternates: {
    canonical: "https://bratgenerator.blog/brat-generator-white",
  },
  openGraph: {
    type: "website",
    url: "https://bratgenerator.blog/brat-generator-white",
    title:
      "Brat Generator White – Create Minimalist Brat Album Covers in White Style",
    description:
      "Design your own minimalist Brat album cover with Brat Generator White. Inspired by Charli XCX’s viral aesthetic. Free, no watermark, mobile-friendly & perfect for lyric memes.",
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
      "Brat Generator White – Create Minimalist Brat Album Covers in White Style",
    site: "https://bratgenerator.blog/brat-generator-white",
    description:
      "Design your own minimalist Brat album cover with Brat Generator White. Inspired by Charli XCX’s viral aesthetic. Free, no watermark, mobile-friendly & perfect for lyric memes.",
    images: ["https://bratgenerator.blog/logo.png"],
  },
};

export default function HomePage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Brat Generator White – Create Minimalist Brat Album Covers in White
          Style
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Design your own minimalist Brat album cover with Brat Generator White.
          Inspired by Charli XCX’s viral aesthetic. Free, no watermark,
          mobile-friendly & perfect for lyric memes.
        </p>
      </section>

      <BratGenerator defaultTheme="white" />

      <section className="max-w-3xl mx-auto mt-10 text-lg space-y-6">
        <h2 className="text-2xl font-bold mb-4 text-center">
          What is Brat Generator White?
        </h2>
        <p>
          <strong>Brat Generator White</strong> is a minimalist version of our
          popular Brat album cover tool. Using a clean white background and bold
          black text, it’s perfect for aesthetic lyric posts, social memes, or
          your next viral TikTok moment. Whether you’re channeling a soft brat
          mood or seeking a sleek meme layout, this generator has you covered.
        </p>
        <p>
          Inspired by Charli XCX’s iconic 2024 album style, this tool is part of
          our growing suite of Brat tools including{" "}
          <Link
            href="/brat-generator-pink"
            className="underline text-pink-600"
            title="Brat Generator Pink"
          >
            Brat Generator Pink
          </Link>
          ,{" "}
          <Link
            href="/brat-generator-black"
            className="underline text-black"
            title="Brat Generator Black"
          >
            Brat Generator Black
          </Link>
          , and{" "}
          <Link
            href="/brat-lyrics-generator"
            className="underline text-blue-600"
            title="Brat Lyrics Generator"
          >
            Brat Lyrics Generator
          </Link>
          .
        </p>
        <p>
          You can freely input long text, quotes, lyrics, or bratty messages.
          The font adjusts automatically, and there’s a blur effect just like
          the original design. Create it, download it, and share it instantly—no
          login required.
        </p>
      </section>

      <FAQ04
        heading="Frequently Asked Questions About Brat Generator White"
        description="Everything you need to know about the clean and bold Brat Generator White. From downloading your image to customizing fonts and layout—explore the answers below."
        faq={faq}
      />
    </main>
  );
}
