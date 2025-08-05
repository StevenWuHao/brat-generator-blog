import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface NavItem {
  title: string;
  describe: string;
  href: string;
}

const navItems: NavItem[] = [
  {
    title: "Home",
    describe: "Free Online Create Brat Text, MEME, Image",
    href: "/",
  },
  {
    title: "Contact Us",
    describe: "Email us at steve20200512@gmail.com",
    href: "/contact-us",
  },
];

export default function Header() {
  return (
    <header>
      <nav className="mx-auto flex h-20 w-full items-center gap-6 px-6 lg:max-w-7xl">
        <Link
          href="/"
          title="Brat Generator"
          className="inline-flex flex-1 items-center gap-2"
        >
          <Image
            src="/logo.png"
            className="max-h-8"
            alt="Brat Generator Logo"
            width={32}
            height={32}
          />
          <h2 className="text-2xl/none font-bold tracking-tight">
            Brat Generator
          </h2>
        </Link>
        <div className="hidden gap-2 lg:inline-flex">
          {navItems.map((item: NavItem) => (
            <Button key={item.title} asChild variant={"ghost"}>
              <Link title={item.describe} href={item.href}>
                {item.title}
              </Link>
            </Button>
          ))}
        </div>
        <div className="hidden flex-1 justify-end gap-2 lg:inline-flex">
          {/* <Button asChild variant={"outline"}>
            <a href="#">Log in</a>
          </Button>
          <Button asChild>
            <a href="#">Sign up</a>
          </Button> */}
        </div>
        <Sheet>
          <SheetTrigger asChild className="ml-auto lg:hidden">
            <Button variant="outline" size="icon" aria-label="Open Menu">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="flex w-[90%] max-w-sm flex-col px-6 py-6"
          >
            <SheetTitle>
              <Link
                href="/"
                title="Brat Generator"
                className="inline-flex items-center gap-2"
              >
                <Image
                  src="/logo.png"
                  className="max-h-8"
                  alt="Brat Generator Logo"
                  width={32}
                  height={32}
                />
                <span className="text-2xl font-bold tracking-tight">
                  BratGenerator
                </span>
              </Link>
            </SheetTitle>
            <nav className="-mx-4 my-6 flex flex-1 flex-col gap-2">
              {navItems.map((item: NavItem) => (
                <Button
                  key={item.title}
                  asChild
                  className="justify-start text-base"
                  variant={"ghost"}
                >
                  <Link title={item.describe} href={item.href}>
                    {item.title}
                  </Link>
                </Button>
              ))}
            </nav>
            {/* <div className="mt-auto grid gap-2"> */}
            {/* <Button variant={"outline"} asChild>
                <a href="#">Log in</a>
              </Button>
              <Button asChild>
                <a href="#">Get Started</a>
              </Button> */}
            {/* </div> */}
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
