// components/BratLyricsButton.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const funnyLyrics = [
  "I woke up like a brat 💅",
  "No sleep, just brat dreams 🛌",
  "Main character energy all day 🎬",
  "Starbucks spelled my name wrong again ☕",
  "Crying in Helvetica Neue 😭",
  "Born to be loud, paid to be petty 💸",
  "WiFi unstable like my emotions 📶",
  "I don’t chase—I attract brat moments ✨",
  "Scrolling through drama like it’s cardio 📱",
  "My vibe? Bratcore only 💚",
  "I skipped leg day but not drama",
  "My ex texts more than my mom",
  "No job, no sleep, still slaying",
  "Hot girl attitude, broke girl budget",
  "Emotionally unavailable but aesthetically pleasing",
  "I’m not toxic, I’m iconic",
  "404: Feelings not found",
  "Brat in the streets, chaos in the tweets",
  "Who needs therapy when you have main character energy",
  "Manifesting followers and emotional stability",
  // 更多搞笑歌词：
  "Late to everything except my glow-up",
  "Cancel plans, save energy, repeat",
  "Sass level: CEO of snark",
  "I put the ‘pro’ in procrastination",
  "Dripping in attitude and cheap coffee",
  "Less talk, more savage vibes",
  "Sorry not sorry, that’s just me",
  "Running on caffeine and bad decisions",
  "Blessed with looks, cursed with feelings",
  "Queen of my own little chaos",
  "Powered by sarcasm and sheer will",
  "I flex my flaws like a boss",
  "Allergic to drama but I sneeze anyway",
  "Too glam to give a damn",
  "Running on empty but still fabulous",
  "Fake it till you make it? Nah, I just own it",
  "My mood depends on my wifi",
  "Sassy since birth, savage by choice",
  "I’m the plot twist your life needs",
  "Fluent in eye rolls and shade",
  "Brains, beauty, and a bit of brat",
  "My vibe? Unbothered and unapologetic",
  "Master of ignoring responsibilities",
  "If being bratty was a crime, I’d be guilty",
  "I speak fluent sarcasm and memes",
  "More drama than a reality show",
  "Hot mess but make it fashion",
  "Don’t mistake my kindness for weakness",
  "I came. I saw. I snapped.",
  "Zero apologies, all confidence",
  "Serving looks, spilling tea",
  "Too lit to quit",
  "Not short, just concentrated attitude",
  "Queen of my own reality",
  "Breaking hearts and breaking rules",
  "No time for your negativity",
  "Stylish, savage, and a little bit crazy",
  "Mood: caffeinated chaos",
  "Don’t follow me, I’m lost too",
  "Professional overthinker, amateur adult",
  "Slayin’ all day, chillin’ all night",
  "Drama magnet with a PhD in sass",
  "Born to stand out, not fit in",
  "Sarcasm is my love language",
  "Hotter than your ex’s new flame",
  "Unbothered and thriving",
  "I put the ‘art’ in smartass",
];

export default function BratLyricsButton({
  onGenerate,
}: {
  onGenerate: (text: string) => void;
}) {
  const handleClick = () => {
    const random = funnyLyrics[Math.floor(Math.random() * funnyLyrics.length)];
    onGenerate(random);
  };

  return (
    <Button
      onClick={handleClick}
      className="mb-4 cursor-pointer"
      variant="outline"
    >
      <Sparkles className="w-4 h-4 mr-2" />
      Generate Funny Brat Lyric
    </Button>
  );
}
