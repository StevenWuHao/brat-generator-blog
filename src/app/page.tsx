import BratGenerator from "@/components/common/generator";
import FAQ04 from "@/components/faq-04/faq-04";
import Features01Page from "@/components/features-01/features-01";
import Features from "@/components/features-06/features-06";
import type { Metadata } from "next";
import {
  Image,
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

export const metadata: Metadata = {
  title: "Brat Generator - Free Online Create Text, MEME, Image, Album Cover",
  description:
    "Instantly create your own Brat-style album cover inspired by Charli XCX. Type your text, pick a color, and download a viral graphic in seconds.",
  alternates: {
    canonical: "/",
  },
};

const faq = [
  {
    icon: Image,
    question: "What is the Brat Generator?",
    answer:
      "The Brat Generator is a free online tool that helps you create Brat-style images inspired by Charli XCX’s iconic album cover. It mimics the bold, minimalist aesthetic with custom text and styling.",
  },
  {
    icon: Paintbrush,
    question: "Can I customize the background color?",
    answer:
      "Yes! You can choose from preset colors like green, black, pink, or white—or select your own custom color using the color picker.",
  },
  {
    icon: Type,
    question: "Is there a word or character limit?",
    answer:
      "Nope! You can type long sentences, lyrics, or even full paragraphs. Our tool supports dynamic resizing to fit your text.",
  },
  {
    icon: Download,
    question: "How do I download my Brat image?",
    answer:
      "Simply click the 'Download Image' button after customizing your text and layout. Your image will be saved as a high-resolution PNG.",
  },
  {
    icon: Smartphone,
    question: "Does it work on mobile devices?",
    answer:
      "Absolutely! The Brat Generator is mobile-optimized and works flawlessly on both Android and iPhone browsers.",
  },
  {
    icon: Settings,
    question: "Can I adjust the font size or blur effect?",
    answer:
      "Yes, you can fine-tune the font size and blur intensity to match the signature Brat aesthetic or make your own spin.",
  },
  {
    icon: Eye,
    question: "Is there a preview before downloading?",
    answer:
      "Yes. The image preview updates instantly as you type or change settings, so you’ll always know exactly what you’re downloading.",
  },
  {
    icon: BadgeCheck,
    question: "Is the tool completely free?",
    answer:
      "Yes, it’s 100% free to use. There are no hidden fees, no watermark, and no sign-up required.",
  },
  {
    icon: FileDown,
    question: "Can I export the image with a transparent background?",
    answer:
      "Yes! There's an option to toggle transparency before downloading, making it perfect for overlays or use in design tools.",
  },
  {
    icon: Layout,
    question: "Can I center the text or justify it?",
    answer:
      "By default, the image starts centered. When you start typing, the text becomes justified for that iconic Brat album layout.",
  },
  {
    icon: Palette,
    question: "What themes are available?",
    answer:
      "The generator supports Green, Black, Pink, White, and even custom color themes. You can also adjust text and blur settings.",
  },
  {
    icon: Instagram,
    question: "Can I share it on social media?",
    answer:
      "Definitely! Users frequently share their creations on TikTok, Instagram, and X (Twitter) using #bratgenerator or tagging @bratgenerator.",
  },
  {
    icon: MessageCircle,
    question: "Can I use emojis or symbols in the text?",
    answer:
      "Yes, emojis and symbols are fully supported, so feel free to get expressive with your brat image.",
  },
  {
    icon: FileText,
    question: "Is this the same font used by Charli XCX?",
    answer:
      "Not exactly, but it’s a close match. The font used here mimics the condensed sans-serif style from the Brat album.",
  },
  {
    icon: Zap,
    question: "Why does the text resize automatically?",
    answer:
      "The auto-resizing ensures your text fits perfectly inside the image container without overflowing or clipping.",
  },
  {
    icon: LoaderCircle,
    question: "Why is the text blurred?",
    answer:
      "The Brat album design includes a signature blur effect. You can adjust or disable it for a cleaner look if you prefer.",
  },
  {
    icon: Monitor,
    question: "Can I use the generator on desktop browsers?",
    answer:
      "Yes, it works smoothly on all major browsers including Chrome, Firefox, Safari, and Edge.",
  },
  {
    icon: UploadCloud,
    question: "Can I upload my own background or logo?",
    answer:
      "Currently, you can only customize text and colors. Support for uploading custom assets may be added in the future.",
  },
  {
    icon: Users,
    question: "Can I use the images commercially?",
    answer:
      "Yes, but note that this tool is a parody of an existing aesthetic. Use with care if printing or selling merchandise.",
  },
  {
    icon: HelpCircle,
    question: "Where can I report bugs or give feedback?",
    answer:
      "You can reach out on GitHub, Twitter, or through the site’s contact form to suggest features or report issues.",
  },
];

export default function HomePage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Brat Generator - Free Online Create Text, MEME, Image, Album Cover
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Create your own Brat-style album cover in seconds — bold, bratty, and
          inspired by Charli XCX’s iconic aesthetic. Type your text and download
          instantly.
        </p>
      </section>

      <BratGenerator />

      <section className="max-w-3xl mx-auto px-4 py-12 text-left">
        <h2 className="text-3xl text-center md:text-4xl font-bold mb-4">
          What Is the Brat Generator?
        </h2>
        <p className="text-muted-foreground text-lg mb-4">
          The Brat Generator is an online tool that allows you to create custom
          images mimicking the bold, minimalist, and instantly recognizable
          aesthetic of Charli XCX's <strong>Brat</strong> album. Whether you're
          a fan of the "<em>offensive green</em>" meme or simply want to design
          your own Brat-style album cover, this generator gives you the tools to
          make viral, bratty content with just a few clicks.
        </p>
        <p className="text-muted-foreground text-lg">
          You can use the Brat Generator to craft album memes, reaction images,
          viral TikTok overlays, or even aesthetic social media posts. With full
          control over text input, background color (from classic green and
          black to pink, white, and custom), font size, and blur effects, the
          creative possibilities are endless.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-12 text-left">
        <h2 className="text-3xl text-center md:text-4xl font-bold mb-4">
          The Cultural Background and Viral Rise of Brat
        </h2>
        <p className="text-muted-foreground text-lg mb-4">
          Charli XCX’s 2024 release of Brat wasn’t just a music drop—it was a
          visual movement. The green, all-lowercase, sans-serif typography
          became an internet meme overnight. The combination of minimal design,
          blurry text, and sharp cultural commentary gave birth to countless
          parodies and recreations online.
        </p>
        <p className="text-muted-foreground text-lg">
          Soon after, memes like "Kamala Harris Brat Meme Generator", “Brat Text
          Generator”, and “Brat Summer Meme Generator” started trending. People
          wanted a Brat-style generator that mimicked the aesthetic of the album
          cover.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-12 text-left">
        <h2 className="text-3xl text-center md:text-4xl font-bold mb-6">
          How to Use the Brat Generator
        </h2>
        <p className="text-muted-foreground text-lg mb-6">
          Using the Brat Generator is as easy as writing your name—or your next
          viral hot take. Here's how:
        </p>
        <div className="space-y-6 text-base">
          <div>
            <h3 className="font-semibold text-lg mb-1">Enter Your Text</h3>
            <p className="text-muted-foreground">
              Whether it’s your name, a lyric, a joke, or a bold statement, just
              type it in.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-1">Pick a Theme</h3>
            <p className="text-muted-foreground">
              Choose from popular Brat themes like <em>Green</em>,{" "}
              <em>Black</em>, <em>Pink</em>, <em>White</em>, or create your own
              custom color scheme.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-1">Adjust Font & Blur</h3>
            <p className="text-muted-foreground">
              Use the sliders to tweak the font size and blur effect for maximum
              brat energy.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-1">Download Your Image</h3>
            <p className="text-muted-foreground">
              Click once to download a high-resolution PNG of your Brat meme.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-1">Share It</h3>
            <p className="text-muted-foreground">
              Post it to <em>Twitter, Instagram, TikTok</em>, or use it as your
              profile picture, wallpaper, or story background.
            </p>
          </div>
        </div>
      </section>

      <Features />

      <Features01Page />

      <section className="mt-16 max-w-2xl mx-auto text-left space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold">📣 Social Sharing</h2>
        <p className="text-muted-foreground">
          After downloading your Brat image, don’t forget to share it:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            On <strong>X (Twitter)</strong> with the tag{" "}
            <span className="text-primary font-medium">#bratgenerator</span>
          </li>
          <li>
            On <strong>Instagram</strong> with{" "}
            <span className="text-primary font-medium">@bratgenerator</span>{" "}
            mention
          </li>
          <li>
            On <strong>TikTok</strong> with your brat reaction
          </li>
        </ul>
        <p className="text-muted-foreground">
          Let the world know your brat energy is unmatched.
        </p>
      </section>

      <FAQ04
        heading="Frequently Asked Questions About Brat Generator"
        description="Whether you're wondering how to use the Brat text generator, what
          fonts are included, or how to download a transparent image, this FAQ
          section covers everything. Get quick answers about the Brat meme
          generator, album cover tools, and how to go viral with your own custom
          creation."
        faq={faq}
      />
    </main>
  );
}
