import BratGenerator from "@/components/common/generator";
import FAQ04 from "@/components/faq-04/faq-04";
import Image from "next/image";
import type { Metadata } from "next";

import {
  Image as ImageIcon,
  Paintbrush,
  Type,
  Download,
  Smartphone,
  Settings,
  Eye,
  BadgeCheck,
  FileDown,
  Layout,
  Palette,
  Instagram,
  MessageCircle,
  FileText,
  Zap,
  LoaderCircle,
  Monitor,
  UploadCloud,
  Users,
  HelpCircle,
} from "lucide-react";
import Link from "next/link";

const faq = [
  {
    icon: ImageIcon,
    question: "What is the Brat Lyrics Generator?",
    answer:
      "A free tool inspired by Charli XCX’s *Brat* that converts your lyrics or quotes into striking lyric images with green or custom background styles.",
  },
  {
    icon: Paintbrush,
    question: "How do I enter lyrics or quotes?",
    answer:
      "Simply type your desired text in the input box – whether it’s a lyric, a quote, or your own bratty phrase.",
  },
  {
    icon: Type,
    question: "Can I include multiple lines of lyrics?",
    answer:
      "Yes! You can enter multiline lyrics or phrases. The generator auto-adjusts font size and formatting to fit the style.",
  },
  {
    icon: Download,
    question: "How do I download the lyric image?",
    answer:
      "Press 'Download Image' to get a high-quality PNG file that you can share or repurpose instantly.",
  },
  {
    icon: Smartphone,
    question: "Does it work on mobile devices?",
    answer:
      "Yes, the Brat Lyrics Generator is optimized for mobile. It works smoothly on iPhone, Android, and other browsers.",
  },
  {
    icon: Settings,
    question: "Can I customize colors and blur effects?",
    answer:
      "Absolutely. You can choose between Brat green, pink, black, white—or enter your own hex code—and adjust blur intensity.",
  },
  {
    icon: Eye,
    question: "Does it show a live preview?",
    answer:
      "Yes, as you type or adjust options, the preview updates instantly so you can see exactly what the final image will look like.",
  },
  {
    icon: BadgeCheck,
    question: "Is the lyrics generator free to use?",
    answer:
      "Yes, it’s completely free — no sign-up, no hidden fees, and no watermark on downloads.",
  },
  {
    icon: FileDown,
    question: "Can I export with transparent background?",
    answer:
      "Yes! Toggle the transparency option before downloading for use in overlays or design compositions.",
  },
  {
    icon: Layout,
    question: "How is the text formatted?",
    answer:
      "Initially centered; once lyrics are entered, text is justified to fill the line, matching the iconic Brat album style.",
  },
  {
    icon: Palette,
    question: "What themes are available?",
    answer:
      "Themes include Brat green, black, pink, white, and custom hex colors for full personalization.",
  },
  {
    icon: Instagram,
    question: "Can I share lyric images on Instagram or TikTok?",
    answer:
      "Definitely! Users often post lyric visuals with #bratlyrics, mention @bratgenerator, or use on TikTok.",
  },
  {
    icon: MessageCircle,
    question: "Can I include emojis or punctuation?",
    answer:
      "Yes — emojis, symbols, punctuation, and even special characters are supported in your lyric text.",
  },
  {
    icon: FileText,
    question: "Does it match Charli XCX’s font style?",
    answer:
      "It mimics ultra-condensed sans-serif fonts like Arial Narrow, matching the gritty minimalist styling of the original.",
  },
  {
    icon: Zap,
    question: "Why does the text resize automatically?",
    answer:
      "To ensure lyrics fit inside the graphic frame without overflow, text is auto-scaled and spaced line-by-line.",
  },
  {
    icon: LoaderCircle,
    question: "What is the purpose of the blur effect?",
    answer:
      "Blur adds a vintage, minimal aesthetic reminiscent of the Brat album design. You can remove or customize it.",
  },
  {
    icon: Monitor,
    question: "Can I use this on desktop browsers?",
    answer:
      "Yes, it works on all modern browsers including Chrome, Firefox, Safari, and Edge for desktop users.",
  },
  {
    icon: UploadCloud,
    question: "Can I upload custom background or image?",
    answer:
      "Not yet — currently, only text, color, and blur are customizable. Image uploads may be supported in future updates.",
  },
  {
    icon: Users,
    question: "Is commercial use allowed?",
    answer:
      "Personal use is encouraged. For commercial use (e.g., print or resale), ensure you have permission—this is a fan-made parody tool.",
  },
  {
    icon: HelpCircle,
    question: "Where can I report bugs or request features?",
    answer:
      "Reach out via GitHub issues, Twitter, or use the site’s feedback form to share your suggestions.",
  },
];

export const metadata: Metadata = {
  title: "Brat Lyrics Generator – Create Viral Brat‑Style Lyric Images",
  description:
    "Free Brat Lyrics Generator inspired by Charli XCX. Type lyrics or quotes, pick a theme, and download bold, minimalist lyric images in seconds.",
  alternates: {
    canonical: "https://bratgenerator.blog/brat-lyrics-generator",
  },
  openGraph: {
    type: "website",
    url: "https://bratgenerator.blog/brat-lyrics-generator",
    title: "Brat Lyrics Generator – Create Viral Brat‑Style Lyric Images",
    description:
      "Free Brat Lyrics Generator inspired by Charli XCX. Type lyrics or quotes, pick a theme, and download bold, minimalist lyric images in seconds.",
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
    title: "Brat Lyrics Generator – Create Viral Brat‑Style Lyric Images",
    site: "https://bratgenerator.blog/brat-lyrics-generator",
    description:
      "Free Brat Lyrics Generator inspired by Charli XCX. Type lyrics or quotes, pick a theme, and download bold, minimalist lyric images in seconds.",
    images: ["https://bratgenerator.blog/logo.png"],
  },
};

export default function HomePage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Brat Lyrics Generator – Create Viral Brat‑Style Lyric Images
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Create bold lyric graphics inspired by Charli XCX’s *Brat* aesthetic.
          Just type your lyrics or quotes, customize effects, and download
          high-quality lyric images instantly.
        </p>
      </section>

      <BratGenerator />

      <section className="prose max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-center">
          What is the Brat Lyrics Generator?
        </h2>
        <p>
          The{" "}
          <strong>
            <Link
              href="/brat-lyrics-generator"
              title="Create Viral Brat‑Style Lyric Images"
              className="underline"
            >
              Brat Lyrics Generator
            </Link>
          </strong>{" "}
          lets you turn your chaotic thoughts, hot takes, or meme-worthy phrases
          into bold, bratty lyric-style visuals—just like Charli XCX’s viral
          album aesthetic. Whether you want to parody a love song, drop a
          sarcastic line, or shout into the internet void, this tool turns your
          words into Brat-style statements in seconds.
        </p>
        <p>
          With just a few clicks, you can type your lyric, pick a brat theme
          (like{" "}
          <Link
            href="/brat-generator-pink"
            title="Brat Generator Pink"
            className="underline font-bold"
          >
            Pink
          </Link>
          ,{" "}
          <Link
            href="/"
            title="Brat Generator Green"
            className="underline font-bold"
          >
            Green
          </Link>
          ,{" "}
          <Link
            href="/brat-generator-black"
            title="Brat Generator Black"
            className="underline font-bold"
          >
            Black
          </Link>
          , or{" "}
          <Link
            href="/brat-generator-white"
            title="Brat Generator White"
            className="underline font-bold"
          >
            White
          </Link>
          ), and download your image—perfect for memes, reactions, or even
          merch.
        </p>
        <p>
          Want more brat? Try our{" "}
          <Link
            href="/"
            title="Brat Text Generator"
            className="underline font-bold"
          >
            Text Generator
          </Link>{" "}
          to create simple brat phrases, or go full design mode with the{" "}
          <Link
            href="/brat-album-cover-generator"
            title="Brat Album Cover Generator"
            className="underline font-bold"
          >
            Album Cover Generator
          </Link>
          . For font lovers, explore the{" "}
          <Link
            href="/brat-font-generator"
            title="Brat Font Generator"
            className="underline font-bold"
          >
            Font Generator
          </Link>
          , or remix pop culture moments using the{" "}
          <Link
            href="/brat-meme-generator"
            title="Brat Meme Generator"
            className="underline font-bold"
          >
            Meme Generator
          </Link>
          .
        </p>
      </section>

      <section className="max-w-4xl mx-auto mt-12">
        <h3 className="text-xl font-semibold mb-4">
          Generated Brat-Style Lyric Memes
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="aspect-square bg-muted border rounded-xl overflow-hidden">
            <Image
              src="/images/brat-lyrics-generator/lyric-funny-1.png"
              alt="Brat lyric: I skipped leg day but not drama"
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-square bg-muted border rounded-xl overflow-hidden">
            <Image
              src="/images/brat-lyrics-generator/lyric-funny-2.png"
              alt="Brat meme lyric: My ex texts more than my mom"
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-square bg-muted border rounded-xl overflow-hidden">
            <Image
              src="/images/brat-lyrics-generator/lyric-funny-3.png"
              alt="Funny brat lyrics: Emotionally unavailable but aesthetically pleasing"
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-square bg-muted border rounded-xl overflow-hidden">
            <Image
              src="/images/brat-lyrics-generator/lyric-funny-4.png"
              alt="Charli XCX brat style lyric: No job, no sleep, still slaying"
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <FAQ04
        heading="Frequently Asked Questions About Brat Lyrics Generator"
        description="Everything you need to know about generating Charli XCX-style brat lyrics, auto-filling, meme-making, and more."
        faq={faq}
      />
    </main>
  );
}
