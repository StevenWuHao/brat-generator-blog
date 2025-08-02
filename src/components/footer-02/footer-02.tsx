import { Separator } from "@/components/ui/separator";
import {
  DribbbleIcon,
  GithubIcon,
  TwitchIcon,
  TwitterIcon,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const footerSections = [
  {
    title: "Product",
    links: [
      {
        title: "Brat Generator Pink",
        href: "/brat-generator-pink",
      },
      {
        title: "Brat Generator Green",
        href: "/",
      },
      {
        title: "Brat Generator Black",
        href: "/brat-generator-black",
      },
      {
        title: "Brat Generator White",
        href: "/brat-generator-white",
      },
      {
        title: "brat lyrics generator",
        href: "/brat-lyrics-generator",
      },
      {
        title: "brat text generator",
        href: "/",
      },
      {
        title: "brat font generator",
        href: "/brat-font-generator",
      },
      {
        title: "brat album cover generator",
        href: "/brat-album-cover-generator",
      },
      {
        title: "charli xcx brat generator​",
        href: "/charli-xcx-brat-generator",
      },
      {
        title: "brat summer meme generator",
        href: "/brat-summer-meme-generator",
      },
    ],
  },
  // {
  //   title: "Company",
  //   links: [
  //     {
  //       title: "About us",
  //       href: "/about-us",
  //     },
  //   ],
  // },
  // {
  //   title: "Resources",
  //   links: [
  //     {
  //       title: "Blog",
  //       href: "/blog",
  //     },
  //   ],
  // },
  {
    title: "Legal",
    links: [
      {
        title: "Terms",
        href: "/terms",
      },
      {
        title: "Privacy",
        href: "/privacy",
      },
      {
        title: "Contact Us",
        href: "contact-us",
      },
    ],
  },
];

const Footer01Page = () => {
  return (
    <div className="flex flex-col">
      <div className="grow bg-muted" />
      <footer>
        <div className="max-w-screen-xl mx-auto">
          <div className="py-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-x-8 gap-y-10 px-6 xl:px-0">
            <div className="col-span-full xl:col-span-2">
              {/* Logo */}
              <div className="flex items-center space-x-2">
                <Image
                  src="/logo.png"
                  alt="Brat Generator Logo"
                  width={32}
                  height={32}
                />
                <h2 className="text-2xl font-bold">Brat Generator</h2>
              </div>

              <p className="mt-4 text-muted-foreground">
                Brat Generator is a free online tool that lets you create bold,
                bratty images inspired by Charli XCX’s iconic album style —
                perfect for memes, music covers, and viral content.
              </p>
            </div>

            {footerSections.map(({ title, links }) => (
              <div key={title}>
                <h6 className="font-semibold">{title}</h6>
                <ul className="mt-6 space-y-4">
                  {links.map(({ title, href }) => (
                    <li key={title}>
                      <Link
                        href={href}
                        title={title}
                        className="text-muted-foreground hover:text-foreground"
                      >
                        {title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <Separator />
          <div className="py-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6 xl:px-0">
            {/* Copyright */}
            <span className="text-muted-foreground">
              &copy; 2025{" "}
              <Link href="/" title="Brat Generator" target="_blank">
                Brat Generator
              </Link>
              . All rights reserved.
            </span>

            {/* <div className="flex items-center gap-5 text-muted-foreground">
              <Link href="#" target="_blank">
                <TwitterIcon className="h-5 w-5" />
              </Link>
              <Link href="#" target="_blank">
                <DribbbleIcon className="h-5 w-5" />
              </Link>
              <Link href="#" target="_blank">
                <TwitchIcon className="h-5 w-5" />
              </Link>
              <Link href="#" target="_blank">
                <GithubIcon className="h-5 w-5" />
              </Link>
            </div> */}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer01Page;
