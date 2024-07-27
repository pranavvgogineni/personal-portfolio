"use client";
import { TextGenerateEffect } from "../ui/text-generate-effect";

const words = `Hi, I am Pranav! I am a Computer Science student at Northwestern University. I am currently seeking internship opportunities for Summer 2025. Feel free to reach out to me!`;

export function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words} />;
}
