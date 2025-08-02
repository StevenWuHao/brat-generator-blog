// import {
//   Blocks,
//   Bot,
//   ChartPie,
//   Film,
//   MessageCircle,
//   Settings2,
// } from "lucide-react";
import { BadgeCheck, Smartphone, Type, Layers, ImageDown } from "lucide-react";
import React from "react";

const features = [
  {
    icon: BadgeCheck,
    title: "Free to Use",
    description:
      "It’s 100% free to use. No watermark, no sign-up, just instant bratty magic.",
  },
  {
    icon: Smartphone,
    title: "Mobile Optimized",
    description:
      "Brat Generator works seamlessly on iPhone, Android, and all mobile browsers.",
  },
  {
    icon: Type,
    title: "No Word Limit",
    description:
      "Unlike other generators, you’re free to write long lyrics, names, or jokes—no limits.",
  },
  {
    icon: Layers,
    title: "Transparent Background",
    description:
      "Generate brat-style images with a transparent background—perfect for overlays and design tools.",
  },
  {
    icon: ImageDown,
    title: "High Quality Output",
    description:
      "Export crisp, high-resolution PNGs ready for social media, print, or merch.",
  },
];

const Features01Page = () => {
  return (
    <div className="flex items-center justify-center py-12">
      <div>
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-center">
          What Makes This Brat Generator Unique?
        </h2>
        <div className="mt-10 sm:mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-screen-lg mx-auto px-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col border rounded-xl py-6 px-5"
            >
              <div className="mb-3 h-10 w-10 flex items-center justify-center bg-muted rounded-full">
                <feature.icon className="h-6 w-6" />
              </div>
              <span className="text-lg font-semibold">{feature.title}</span>
              <p className="mt-1 text-foreground/80 text-[15px]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features01Page;
