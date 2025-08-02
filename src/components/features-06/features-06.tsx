import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const features = [
  {
    title: "🖼 Memes",
    details:
      "Easily create “Brat but it’s the same” memes or remix trending headlines like “Brat Generation Text” or “Brat Deluxe Generator.”",
    button: "Brat Memes Generator",
    buttonTitle:
      "Create funny and viral Brat-style memes with Brat Memes Generator",
    tutorialLink: "/brat-summer-meme-generator",
    imageUrl: "/images/brat-memes.png",
    imageAlt: "Example of a Brat-style meme created with Brat Generator",
  },
  {
    title: "🎶 Music Covers",
    details:
      "Emerging musicians use it to generate Brat-style artwork for SoundCloud and Spotify thumbnails.",
    button: "Brat Music Covers Generator",
    buttonTitle:
      "Design your own Brat-style album covers inspired by Charli XCX",
    tutorialLink: "/brat-album-cover-generator",
    imageUrl: "/images/brat-music-covers.png",
    imageAlt: "Custom Brat-style album cover inspired by Charli XCX",
  },
  {
    title: "👕 Merchandise",
    details:
      "Create your own Brat-style image with the Brat Generator and turn it into custom T-shirts, wallpapers, or stickers using any print-on-demand service.",
    button: "Brat Generator",
    buttonTitle:
      "Generate Brat-style images for your own T-shirts, posters, and more",
    tutorialLink: "/",
    imageUrl: "/images/brat.png",
    imageAlt: "Brat-style graphic printed on a T-shirt mockup",
  },
  {
    title: "🖼️ Pop Culture & Meme Phenomenon",
    details:
      "Yes, people have used the Brat Generator to create viral parody visuals, remixing album titles or band names with the iconic aesthetic. The minimalist style—bold color and fuzzy text—makes it perfect for viral fan edits, subtle sarcasm, or even nostalgic band name generators.",
    button: "Brat Culture Generator",
    buttonTitle:
      "Remix pop culture with Brat-style visuals and aesthetic edits",
    tutorialLink: "/charli-xcx-brat-generator",
    imageUrl: "/images/brat-culture.png",
    imageAlt: "Pop culture remix visual using the Brat aesthetic",
  },
];

const Features = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-screen-lg w-full py-10 px-6">
        <h2 className="text-4xl md:text-5xl md:leading-[3.5rem] font-bold tracking-tight max-w-2xl md:text-center md:mx-auto">
          Real-World Uses and Examples
        </h2>
        <div className="mt-8 md:mt-16 w-full mx-auto space-y-20">
          {features.map((feature, key) => (
            <div
              key={key}
              className="flex flex-col md:flex-row items-center gap-x-20 gap-y-6 md:odd:flex-row-reverse"
            >
              {/* <div className="w-full aspect-[6/4] bg-muted rounded-xl border border-border/50 basis-1/2" /> */}

              <div className="w-full aspect-square relative overflow-hidden rounded-xl border border-border/50 basis-1/2">
                <Image
                  src={feature.imageUrl}
                  alt={feature.imageAlt}
                  width={500} // 可以自定义宽高
                  height={500}
                  className="absolute top-0 left-0 w-full h-full object-cover"
                />
              </div>
              <div className="basis-1/2 shrink-0">
                <h4 className="my-3 text-3xl font-semibold tracking-tight">
                  {feature.title}
                </h4>
                <p className="text-muted-foreground text-[17px]">
                  {feature.details}
                </p>
                <Button
                  asChild
                  className="mt-6 rounded-full min-w-40 text-[15px]"
                >
                  <Link title={feature.buttonTitle} href={feature.tutorialLink}>
                    {feature.button} <ArrowRight />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
