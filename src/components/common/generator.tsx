"use client";

import { useEffect, useRef, useCallback, useState } from "react";
import { usePathname } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toPng } from "html-to-image";
import {
  Anton,
  Bangers,
  Bebas_Neue,
  Creepster,
  Indie_Flower,
  Inter,
  Lato,
  Lobster,
  Luckiest_Guy,
  Merriweather,
  Metal_Mania,
  Nosifer,
  Oswald,
  Pacifico,
  Permanent_Marker,
  Playfair_Display,
  Roboto,
  Roboto_Mono,
  Source_Code_Pro,
  Special_Elite,
} from "next/font/google";

// --- FONT DEFINITIONS (UNCHANGED) ---
const anton = Anton({ subsets: ["latin"], weight: "400" });
const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });
const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });
const oswald = Oswald({ subsets: ["latin"] });
const bebasNeue = Bebas_Neue({ subsets: ["latin"], weight: "400" });
const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const playfairDisplay = Playfair_Display({ subsets: ["latin"] });
const robotoMono = Roboto_Mono({ subsets: ["latin"] });
const sourceCodePro = Source_Code_Pro({ subsets: ["latin"] });
const creepster = Creepster({ subsets: ["latin"], weight: "400" });
const nosifier = Nosifer({ subsets: ["latin"], weight: "400" });
const metalMania = Metal_Mania({ subsets: ["latin"], weight: "400" });
const bangers = Bangers({ subsets: ["latin"], weight: "400" });
const luckiestGuy = Luckiest_Guy({ subsets: ["latin"], weight: "400" });
const permanentMarker = Permanent_Marker({ subsets: ["latin"], weight: "400" });
const lobster = Lobster({ subsets: ["latin"], weight: "400" });
const pacifico = Pacifico({ subsets: ["latin"], weight: "400" });
const indieFlower = Indie_Flower({ subsets: ["latin"], weight: "400" });
const specialElite = Special_Elite({ subsets: ["latin"], weight: "400" });

const fonts = {
  "Brat (Anton)": anton,
  "Meme (Bebas Neue)": bebasNeue,
  "Comic (Bangers)": bangers,
  "Bold (Luckiest Guy)": luckiestGuy,
  "Halloween (Creepster)": creepster,
  "Horror (Nosifier)": nosifier,
  "Metal (Metal Mania)": metalMania,
  "Marker (Permanent Marker)": permanentMarker,
  "Cursive (Pacifico)": pacifico,
  "Fancy (Lobster)": lobster,
  "Handwriting (Indie Flower)": indieFlower,
  "Typewriter (Special Elite)": specialElite,
  "Modern Sans (Inter)": inter,
  "Classic Sans (Roboto)": roboto,
  "Elegant Sans (Lato)": lato,
  "Condensed (Oswald)": oswald,
  "Classic Serif (Merriweather)": merriweather,
  "Elegant Serif (Playfair Display)": playfairDisplay,
  "Modern Mono (Roboto Mono)": robotoMono,
  "Code (Source Code Pro)": sourceCodePro,
};

// --- THEMES AND DEFAULTS (UNCHANGED) ---
const themes = {
  pink: { bg: "#ff90e8", text: "#000000" },
  green: { bg: "#8ACF00", text: "#000000" },
  white: { bg: "#ffffff", text: "#000000" },
  black: { bg: "#000000", text: "#ffffff" },
};
const DEFAULT_BLUR = 1.5;

// --- MODIFIED: Added defaultText to props interface ---
interface BratGeneratorProps {
  defaultTheme?: "pink" | "green" | "white" | "black";
  title?: string;
  description?: string;
  defaultBgColor?: string;
  defaultTextColor?: string;
  defaultText?: string; // New prop for the default text
}

export default function BratGenerator({
  defaultTheme = "green",
  title = "Brat Cover Generator",
  description = "Customize your own cover art.",
  defaultBgColor,
  defaultTextColor,
  defaultText = "brat", // MODIFIED: Accept and provide a fallback for defaultText
}: BratGeneratorProps) {
  // --- STATE AND REFS (UNCHANGED) ---
  const containerRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLParagraphElement | null>(null);
  const inputRef = useRef<HTMLTextAreaElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [hasInput, setHasInput] = useState(false);
  const pathname = usePathname();
  const [externalText, setExternalText] = useState("");
  const [bgColor, setBgColor] = useState(
    defaultBgColor ?? themes[defaultTheme].bg
  );
  const [textColor, setTextColor] = useState(
    defaultTextColor ?? themes[defaultTheme].text
  );
  const [blurAmount, setBlurAmount] = useState(DEFAULT_BLUR);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isDrawing, setIsDrawing] = useState(false);
  const [brushColor, setBrushColor] = useState("#000000");
  const [brushSize, setBrushSize] = useState(5);
  const [isErasing, setIsErasing] = useState(false);
  const showLyricsButton = pathname.includes("lyrics");
  const [fontKey, setFontKey] = useState("Brat (Anton)");

  // ================================================================
  //                LOGIC SECTION (MODIFIED)
  // ================================================================

  const adjustTextSize = useCallback(() => {
    // This function remains unchanged
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

  const justifyAndFillText = (
    input: string,
    containerWidth: number,
    fontSize: number,
    fontFamily = "Arial"
  ) => {
    // This function remains unchanged
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

  const updateText = useCallback(() => {
    const input = inputRef.current;
    const text = textRef.current;
    const container = containerRef.current;
    if (!input || !text || !container) return;
    const rawText = input.value.trim();
    // MODIFIED: Use the defaultText prop as a fallback instead of "brat"
    const finalText = rawText || defaultText;
    const fontSize = parseInt(window.getComputedStyle(text).fontSize, 10);
    const fontStyle = window.getComputedStyle(text).fontFamily;
    const containerWidth = container.clientWidth - 16;
    const justifiedText = justifyAndFillText(
      finalText,
      containerWidth,
      fontSize,
      fontStyle
    );
    text.textContent = justifiedText;
    adjustTextSize();
    // MODIFIED: Add defaultText to the dependency array
  }, [adjustTextSize, justifyAndFillText, defaultText]);

  // All other logic functions (useEffect, drawing, download, reset) remain the same...

  useEffect(() => {
    if (externalText && inputRef.current) {
      inputRef.current.value = externalText;
      updateText();
    }
  }, [externalText, updateText]);

  const getCanvasContext = () => {
    const canvas = canvasRef.current;
    return canvas ? canvas.getContext("2d") : null;
  };

  const getMousePos = (
    canvas: HTMLCanvasElement,
    event: React.MouseEvent<HTMLCanvasElement>
  ) => {
    const rect = canvas.getBoundingClientRect();
    return {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };
  };

  const startDrawing = (event: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    const ctx = getCanvasContext();
    if (!canvas || !ctx) return;
    const { x, y } = getMousePos(canvas, event);
    setIsDrawing(true);
    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const draw = (event: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    const ctx = getCanvasContext();
    if (!canvas || !ctx) return;
    const { x, y } = getMousePos(canvas, event);
    ctx.globalCompositeOperation = isErasing
      ? "destination-out"
      : "source-over";
    ctx.strokeStyle = isErasing ? "rgba(0,0,0,1)" : brushColor;
    ctx.lineWidth = brushSize;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    const ctx = getCanvasContext();
    if (ctx) ctx.closePath();
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = getCanvasContext();
    if (canvas && ctx) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  };

  const handleDownload = async () => {
    if (!containerRef.current || !canvasRef.current) return;
    try {
      const baseImage = await toPng(containerRef.current, {
        cacheBust: true,
        pixelRatio: 2,
      });
      const finalCanvas = document.createElement("canvas");
      const ctx = finalCanvas.getContext("2d");
      if (!ctx) return;
      const doodleCanvas = canvasRef.current;
      finalCanvas.width = doodleCanvas.width * 2;
      finalCanvas.height = doodleCanvas.height * 2;
      const img = new Image();
      img.src = baseImage;
      img.onload = () => {
        ctx.drawImage(img, 0, 0, finalCanvas.width, finalCanvas.height);
        ctx.drawImage(
          doodleCanvas,
          0,
          0,
          finalCanvas.width,
          finalCanvas.height
        );
        const dataUrl = finalCanvas.toDataURL("image/png");
        const link = document.createElement("a");
        link.download = "brat-cover-with-doodle.png";
        link.href = dataUrl;
        link.click();
      };
    } catch (err) {
      console.error("Error generating image", err);
    }
  };

  const handleReset = () => {
    setBgColor(defaultBgColor ?? themes[defaultTheme].bg);
    setTextColor(defaultTextColor ?? themes[defaultTheme].text);
    setBlurAmount(DEFAULT_BLUR);
    setIsFlipped(false);
    clearCanvas();
    setFontKey("Brat (Anton)");
    if (inputRef.current) {
      inputRef.current.value = "";
    }
    updateText();
  };

  useEffect(() => {
    const handleResize = () => {
      const container = containerRef.current;
      const canvas = canvasRef.current;
      if (container && canvas) {
        const { width, height } = container.getBoundingClientRect();
        canvas.width = width;
        canvas.height = height;
      }
      adjustTextSize();
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [adjustTextSize]);

  useEffect(() => {
    updateText();
  }, [updateText, fontKey]);

  // ================================================================
  //                JSX / RENDER SECTION (UNCHANGED)
  // ================================================================

  return (
    <div className="flex items-center justify-center w-full min-h-screen p-4 sm:p-6 md:p-8">
      <div className="flex flex-col items-center justify-center w-full">
        <div className="flex flex-col md:flex-row md:items-center w-full max-w-screen-xl gap-8">
          <div className="w-full md:w-[380px] md:flex-shrink-0 flex flex-col gap-5">
            <div className="space-y-1">
              <h2 className="text-3xl font-bold">{title}</h2>
              <p className="text-muted-foreground">{description}</p>
            </div>

            <Input
              ref={inputRef as any}
              onInput={updateText}
              placeholder="Type your text here..."
              className="w-full"
            />

            <div>
              <label htmlFor="font" className="text-sm font-medium mb-2 block">
                Font Style
              </label>
              <select
                id="font"
                value={fontKey}
                onChange={(e) => setFontKey(e.target.value)}
                className="w-full p-2 border-input bg-background h-10 rounded-md border"
              >
                {Object.keys(fonts).map((name) => (
                  <option key={name} value={name}>
                    {name}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="bgColor"
                  className="text-sm font-medium mb-2 block"
                >
                  Background Color
                </label>
                <Input
                  id="bgColor"
                  type="color"
                  value={bgColor}
                  onChange={(e) => setBgColor(e.target.value)}
                  className="p-1 h-10 w-full cursor-pointer"
                />
              </div>
              <div>
                <label
                  htmlFor="textColor"
                  className="text-sm font-medium mb-2 block"
                >
                  Text Color
                </label>
                <Input
                  id="textColor"
                  type="color"
                  value={textColor}
                  onChange={(e) => setTextColor(e.target.value)}
                  className="p-1 h-10 w-full cursor-pointer"
                />
              </div>
            </div>

            <div>
              <label htmlFor="blur" className="text-sm font-medium mb-2 block">
                Blur Amount: {blurAmount.toFixed(1)}px
              </label>
              <Input
                id="blur"
                type="range"
                min="0"
                max="10"
                step="0.1"
                value={blurAmount}
                onChange={(e) => setBlurAmount(parseFloat(e.target.value))}
                className="w-full cursor-pointer"
              />
            </div>

            <div className="p-4 border rounded-lg space-y-4">
              <h3 className="text-base font-semibold text-center">
                Doodle Zone
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="brushColor"
                    className="text-sm font-medium mb-2 block"
                  >
                    Brush
                  </label>
                  <Input
                    id="brushColor"
                    type="color"
                    value={brushColor}
                    onChange={(e) => setBrushColor(e.target.value)}
                    className="p-1 h-10 w-full cursor-pointer"
                    disabled={isErasing}
                  />
                </div>
                <div>
                  <label
                    htmlFor="brushSize"
                    className="text-sm font-medium mb-2 block"
                  >
                    Size: {brushSize}px
                  </label>
                  <Input
                    id="brushSize"
                    type="range"
                    min="1"
                    max="50"
                    step="1"
                    value={brushSize}
                    onChange={(e) => setBrushSize(parseFloat(e.target.value))}
                    className="w-full cursor-pointer"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Button
                  variant={isErasing ? "secondary" : "outline"}
                  className="w-full"
                  onClick={() => setIsErasing(!isErasing)}
                >
                  Eraser
                </Button>
                <Button
                  variant="destructive"
                  className="w-full"
                  onClick={clearCanvas}
                >
                  Clear
                </Button>
              </div>
            </div>

            <Button
              variant="outline"
              className="w-full"
              onClick={() => setIsFlipped(!isFlipped)}
            >
              Flip Text
            </Button>
          </div>

          <div className="w-full flex-grow flex items-center justify-center">
            <div className="relative w-full max-w-[500px] md:max-w-full lg:max-w-[700px] aspect-square">
              <Card
                ref={containerRef}
                className={`w-full h-full p-4 flex rounded-none ${
                  hasInput ? "items-start" : "items-center"
                } justify-center overflow-hidden select-none`}
                style={{ backgroundColor: bgColor }}
              >
                <p
                  ref={textRef}
                  className={`font-semibold text-[100px] ${
                    hasInput ? "text-justify" : "text-center"
                  } whitespace-pre-wrap break-words ${
                    fonts[fontKey as keyof typeof fonts].className
                  }`}
                  style={{
                    color: textColor,
                    filter: `blur(${blurAmount}px)`,
                    transform: isFlipped ? "scaleX(-1)" : "none",
                  }}
                >
                  {/* Text is dynamically inserted */}
                </p>
              </Card>
              <canvas
                ref={canvasRef}
                className="absolute top-0 left-0 w-full h-full cursor-crosshair"
                onMouseDown={startDrawing}
                onMouseMove={draw}
                onMouseUp={stopDrawing}
                onMouseLeave={stopDrawing}
              />
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center w-full max-w-screen-xl">
          <Button
            variant="outline"
            className="cursor-pointer w-full sm:w-auto"
            onClick={handleReset}
          >
            Reset
          </Button>
          <Button
            className="cursor-pointer w-full sm:w-auto"
            onClick={handleDownload}
          >
            Download Image
          </Button>
        </div>
      </div>
    </div>
  );
}
