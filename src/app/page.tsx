"use client";
import React from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import  {FloatingNavDemo} from "@/components/custom/navbar";
import { TextGenerateEffectDemo } from "@/components/custom/text-effect";


export default function HomePage() {
  return (
    <div>
      <FloatingNavDemo />
      <AuroraBackground>
        <div className="text-center">
          <TextGenerateEffectDemo />
        </div>
      </AuroraBackground>
      <div className="bg-white dark:bg-black text-black dark:text-white p-8">
        <h2 className="text-2xl font-bold">Main Content</h2>
        <p>This is the main content below the Aurora background.</p>
      </div>
    </div>
  );
}
