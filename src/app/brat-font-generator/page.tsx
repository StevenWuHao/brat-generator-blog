import BratGenerator from "@/components/common/generator";
import FAQ04 from "@/components/faq-04/faq-04";
import type { Metadata } from "next";

import {
  Type,
  Paintbrush,
  Eye,
  Download,
  Smartphone,
  Layout,
  Text,
  FileText,
  BadgeCheck,
  Instagram,
  MessageCircle,
  Monitor,
  HelpCircle,
  Sparkle,
  AlignLeft,
  Quote,
  Zap,
  UploadCloud,
} from "lucide-react";

import Link from "next/link";

const faq = [
  {
    icon: Type,
    question: "What is the Brat Font Generator?",
    answer:
      "It's a tool to generate bold, condensed text mimicking the style of Charli XCX's Brat album. Type your own words and see the Brat magic.",
  },
  {
    icon: Paintbrush,
    question: "Can I change text color and blur?",
    answer:
      "Yes! You can customize font color, add blur, and adjust spacing to match the Brat aesthetic.",
  },
  {
    icon: Eye,
    question: "Does it preview in real time?",
    answer:
      "Absolutely. You can see all your styling updates live before downloading.",
  },
  {
    icon: Download,
    question: "What format does the output download in?",
    answer:
      "Your generated font design will download as a high-quality PNG image.",
  },
  {
    icon: Smartphone,
    question: "Can I use this on mobile?",
    answer:
      "Yes, Brat Font Generator is optimized for iPhone, Android, and tablet devices.",
  },
  {
    icon: Layout,
    question: "Can I use this in combination with the cover generator?",
    answer:
      "Yes. Generate fonts here and use them in Brat Generator Green, Pink, or Black versions.",
  },
  {
    icon: Text,
    question: "Can I change the font itself?",
    answer:
      "Currently we use a narrow sans-serif that closely mimics the Brat look, but more options are coming soon.",
  },
  {
    icon: FileText,
    question: "Is there a limit to how much text I can input?",
    answer:
      "Nope! You can type long quotes, full lyrics, or short bratty captions.",
  },
  {
    icon: BadgeCheck,
    question: "Is this free to use?",
    answer: "Yes. No watermarks, no logins, no paywalls — just brat.",
  },
  {
    icon: Instagram,
    question: "Can I share this on IG or TikTok?",
    answer:
      "Definitely. Tag your creations with #bratfont or mention @bratgenerator.",
  },
  {
    icon: MessageCircle,
    question: "Can I use emojis in the text?",
    answer: "Yes, emojis like 💅🧠💔 fit perfectly in Brat-style messages.",
  },
  {
    icon: Monitor,
    question: "Is this desktop compatible?",
    answer: "Yes. Works across Chrome, Safari, Firefox, and other browsers.",
  },
  {
    icon: HelpCircle,
    question: "Where can I submit feedback or bug reports?",
    answer:
      "You can reach us through the contact page or DM us on Twitter @bratgenerator.",
  },
  {
    icon: Sparkle,
    question: "Is there a way to animate the text?",
    answer:
      "Not yet, but we’re exploring animated brat text generators for IG stories and Reels.",
  },
  {
    icon: AlignLeft,
    question: "Can I left-align or center my text?",
    answer:
      "Yes! You can choose between left, center, or justified text alignment.",
  },
  {
    icon: Quote,
    question: "Can I use this to create lyric graphics?",
    answer:
      "Absolutely. Try combining this with our Brat Lyrics Generator for the perfect combo.",
  },
  {
    icon: Zap,
    question: "Why does the text look blurry?",
    answer:
      "It’s part of the Brat visual identity — you can reduce or remove blur in settings.",
  },
  {
    icon: UploadCloud,
    question: "Can I export as SVG or add my own background?",
    answer:
      "Currently, PNG is supported. SVG and custom uploads are in our roadmap.",
  },
  {
    icon: Layout,
    question: "How is this different from Brat Generator Pink?",
    answer:
      "Pink focuses on full album cover design. This tool is more typography-focused.",
  },
  {
    icon: BadgeCheck,
    question: "Can I use the font design commercially?",
    answer:
      "Yes, for non-commercial use. For merch or business use, please review fair-use policy.",
  },
];

export const metadata: Metadata = {
  title: "Brat Font Generator – Create Charli XCX-Inspired Text Styles Online",
  description:
    "Design bold, bratty text just like Charli XCX’s Brat album using the Brat Font Generator. Customize fonts, styles, and themes for memes, covers, and lyrics. Free & watermark-free.",
  alternates: {
    canonical: "https://bratgenerator.blog/brat-font-generator",
  },
  openGraph: {
    type: "website",
    url: "https://bratgenerator.blog/brat-font-generator",
    title:
      "Brat Font Generator – Create Charli XCX-Inspired Text Styles Online",
    description:
      "Design bold, bratty text just like Charli XCX’s Brat album using the Brat Font Generator. Customize fonts, styles, and themes for memes, covers, and lyrics. Free & watermark-free.",
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
      "Brat Font Generator – Create Charli XCX-Inspired Text Styles Online",
    site: "https://bratgenerator.blog/brat-font-generator",
    description:
      "Design bold, bratty text just like Charli XCX’s Brat album using the Brat Font Generator. Customize fonts, styles, and themes for memes, covers, and lyrics. Free & watermark-free.",
    images: ["https://bratgenerator.blog/logo.png"],
  },
};

export default function HomePage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Brat Font Generator – Create Charli XCX-Inspired Text Styles Online
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Design bold, bratty text just like Charli XCX’s Brat album using the
          Brat Font Generator. Customize fonts, styles, and themes for memes,
          covers, and lyrics. Free & watermark-free.
        </p>
      </section>

      <BratGenerator />

      <section className="max-w-3xl mx-auto mt-10 text-lg space-y-6">
        <h2 className="text-2xl font-bold mb-4 text-center">
          What is Brat Font Generator?
        </h2>
        <p>
          <strong>Brat Font Generator</strong> is a free online tool designed to
          help you create bold, bratty, and condensed text styles inspired by{" "}
          <Link
            href="/charli-xcx-brat-generator"
            title="Charli XCX Brat Generator"
            className="underline text-pink-600"
          >
            Charli XCX’s viral Brat album
          </Link>
          . It captures the iconic typography seen on Brat-themed graphics and
          memes.
        </p>
        <p>
          This generator lets you fully customize your brat-style text — from
          color and blur to font weight and spacing. It pairs perfectly with{" "}
          <Link
            href="/brat-generator-pink"
            title="Brat Generator Pink"
            className="underline text-pink-500"
          >
            Brat Generator Pink
          </Link>{" "}
          for album-style layouts, or{" "}
          <Link
            href="/brat-lyrics-generator"
            title="Brat Lyrics Generator"
            className="underline text-green-600"
          >
            Brat Lyrics Generator
          </Link>{" "}
          for lyrical expressions.
        </p>
        <p>
          Whether you&apos;re designing a TikTok meme, custom profile text, or a
          bold-branded statement, Brat Font Generator gives you the freedom to
          create bratty visuals in seconds — no watermark, no login, just pure
          brat energy.
        </p>
      </section>

      <FAQ04
        heading="Frequently Asked Questions About Brat Font Generator"
        description="Curious how to style bratty text like Charli XCX? Want to know how blur works, what font is used, or how to download your meme? This FAQ answers it all for Brat Font Generator."
        faq={faq}
      />
    </main>
  );
}
