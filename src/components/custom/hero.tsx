"use client";
import React from 'react';
import { TextGenerateEffect } from "../ui/text-generate-effect";

const words = `Hi, my name is Pranav Gogineni. I am a Computer Science student at Northwestern University. 
Thank you for visiting my portfolio :)`;

export function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words} />;
}

const Hero: React.FC = () => {
  return (
    <section id="hero" className="h-screen flex items-center justify-center bg-gradient-to-r from-slate-950 to-black text-white">
      <div className="text-center">
        <div className="mt-4 text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-purple-600">
          <TextGenerateEffectDemo />
        </div>
      </div>
    </section>
  );
};

export default Hero;
