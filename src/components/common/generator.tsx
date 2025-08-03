"use client";

import { useEffect, useRef, useCallback, useState } from "react";
import { usePathname } from "next/navigation";
import BratLyricsButton from "./lyrics-generator";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toPng } from "html-to-image";

const themes = {
  pink: {
    bg: "bg-[#ff90e8]",
    text: "text-black",
  },
  green: {
    bg: "bg-[#8ACF00]",
    text: "text-black",
  },
  white: {
    bg: "bg-white",
    text: "text-black",
  },
  black: {
    bg: "bg-black",
    text: "text-white",
  },
};

export default function BratGenerator({
  defaultTheme = "green",
}: {
  defaultTheme?: "pink" | "green" | "white" | "black";
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLParagraphElement | null>(null);
  const inputRef = useRef<HTMLTextAreaElement | null>(null);
  const [hasInput, setHasInput] = useState(false);
  const pathname = usePathname(); // 👈 获取当前路由
  const [externalText, setExternalText] = useState("");

  const showLyricsButton = pathname.includes("lyrics");

  // 设置自动歌词
  useEffect(() => {
    if (externalText && inputRef.current) {
      inputRef.current.value = externalText;
      updateText();
    }
  }, [externalText]);

  const adjustTextSize = useCallback(() => {
    const container = containerRef.current;
    const text = textRef.current;
    if (!container || !text) return;

    text.style.fontSize = "100px";
    text.style.lineHeight = "normal";

    const textClone = text.cloneNode(true) as HTMLElement;
    textClone.style.visibility = "hidden";
    textClone.style.position = "absolute";
    textClone.style.whiteSpace = "pre-wrap";
    textClone.style.lineHeight = "normal";
    textClone.style.width = container.clientWidth + "px";
    container.appendChild(textClone);

    let fontSize = parseInt(window.getComputedStyle(text).fontSize, 10);
    const containerHeight = container.clientHeight;
    const containerWidth = container.clientWidth;
    let textHeight: number, textWidth: number;

    do {
      textHeight = textClone.scrollHeight;
      textWidth = textClone.scrollWidth;

      if (textHeight > containerHeight || textWidth > containerWidth) {
        fontSize -= 1;
        textClone.style.fontSize = fontSize + "px";
      } else {
        break;
      }
    } while (fontSize > 0);

    text.style.fontSize = fontSize + "px";
    textClone.style.fontSize = fontSize + "px";
    textHeight = textClone.scrollHeight;
    const newLineHeight = containerHeight / (textHeight / fontSize);
    text.style.lineHeight =
      newLineHeight > fontSize ? `${newLineHeight}px` : `${fontSize}px`;

    container.removeChild(textClone);
  }, []);

  const updateText = useCallback(() => {
    const input = inputRef.current;
    const text = textRef.current;
    const container = containerRef.current;
    if (!input || !text || !container) return;

    const rawText = input.value.trim();
    const finalText = rawText || "brat";

    const fontSize = parseInt(window.getComputedStyle(text).fontSize, 10);
    const containerWidth = container.clientWidth - 16;

    // 两端对齐处理
    const justifiedText = justifyAndFillText(
      finalText,
      containerWidth,
      fontSize
    );
    text.textContent = justifiedText;

    adjustTextSize();
  }, [adjustTextSize]);

  const justifyAndFillText = (
    input: string,
    containerWidth: number,
    fontSize: number,
    fontFamily = "Arial"
  ) => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) return input;
    ctx.font = `${fontSize}px ${fontFamily}`;

    const words = input.trim().split(/\\s+/);
    const lines: string[] = [];
    let lineWords: string[] = [];

    for (let i = 0; i < words.length; i++) {
      lineWords.push(words[i]);
      const testLine = lineWords.join(" ");
      const testWidth = ctx.measureText(testLine).width;

      setHasInput(containerWidth < testWidth);

      if (testWidth > containerWidth && lineWords.length > 1) {
        lineWords.pop();
        const baseLine = lineWords.join(" ");
        const baseWidth = ctx.measureText(baseLine).width;
        const spacesToAdd = lineWords.length - 1;
        const extraSpace = containerWidth - baseWidth;

        let justifiedLine = "";
        if (spacesToAdd > 0) {
          const evenSpace = Math.floor(extraSpace / spacesToAdd);
          const spaceString = " ".repeat(
            1 + Math.floor(evenSpace / ctx.measureText(" ").width)
          );
          justifiedLine = lineWords.join(spaceString);
        } else {
          justifiedLine = lineWords[0];
        }

        lines.push(justifiedLine);
        lineWords = [words[i]];
      }
    }

    if (lineWords.length > 0) {
      lines.push(lineWords.join(" "));
    }

    return lines.join("\n");
  };

  const handleDownload = async () => {
    if (!containerRef.current) return;

    try {
      const dataUrl = await toPng(containerRef.current, {
        cacheBust: true,
        // backgroundColor: "transparent", // 支持透明背景
      });

      const link = document.createElement("a");
      link.download = "brat-cover.png";
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error("Error generating image", err);
    }
  };

  useEffect(() => {
    adjustTextSize();
    window.addEventListener("resize", adjustTextSize);
    return () => window.removeEventListener("resize", adjustTextSize);
  }, [adjustTextSize]);

  return (
    <div className="flex flex-col items-center justify-center px-4 py-8">
      <Input
        ref={inputRef as any}
        onInput={updateText}
        placeholder="Input Some Text To Generate Your Custom Brat Cover"
        className="w-full max-w-[500px] w-full mb-4"
      />

      {/* 条件显示按钮 👇 */}
      {showLyricsButton && <BratLyricsButton onGenerate={setExternalText} />}

      <Card
        ref={containerRef}
        className={`w-full max-w-[500px] aspect-square p-4 flex rounded-none ${
          hasInput ? "items-start" : ""
        } justify-center overflow-hidden select-none ${
          themes[defaultTheme].bg ?? themes["green"].bg
        }`}
      >
        <p
          ref={textRef}
          className={`font-sans font-semibold text-[100px] ${
            hasInput ? "text-justify" : "text-center"
          } whitespace-pre-wrap blur-[1.5px] ${
            themes[defaultTheme].text ?? themes["green"].text
          }`}
        >
          brat
        </p>
      </Card>

      <div className="mt-6">
        <Button className="cursor-pointer" onClick={handleDownload}>
          Download Image
        </Button>
      </div>
    </div>
  );
}
