"use client";
import React from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import Image from "next/image";

export function BackgroundGradientWork() {
  return (
    <div className="w-140 bg-gray-900 dark:bg-zinc-900 rounded-[22px] p-6 shadow-md">
      <div className="flex items-center mb-4">
        <div className="ml-4">
          <p className="text-xl font-bold text-white dark:text-neutral-200">
            Software/Tech Intern
          </p>
          <p className="text-2xl font-bold text-white dark:text-neutral-200">
            Sectra
          </p>
          <p className="text-sm text-white dark:text-neutral-400">
            June 2023 - October 2023
          </p>
        </div>
      </div>
      <ul className="list-disc ml-5 text-sm text-white dark:text-neutral-400">
        <li>Optimized an AI model in Python, enhancing algorithm efficiency and boosting query accuracy by 30%.</li>
        <li>Developed a user-friendly front end for the AI model using React, leading to a 25% increase in operational efficiency.</li>
        <li>Leveraged Azure cloud services for deploying and scaling applications, improving system reliability and performance.</li>
      </ul>
      <div className="mt-4 text-sm text-white dark:text-neutral-400">
        <span className="font-bold">Skills:</span> Python, React, Azure
      </div>
    </div>
  );
}
