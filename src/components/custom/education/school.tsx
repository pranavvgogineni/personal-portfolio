"use client";
import React from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import Image from "next/image";

export function BackgroundGradientDemo1() {
  return (
    <div className="w-80"> {/* Fixed width for consistency */}
      <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-gray-900 dark:bg-zinc-900">
        <div className="flex justify-center items-center">
          <Image
            src="data:image/jpeg;base64,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"
            alt="Emory University Logo"
            width={300}
            height={300}
            className="object-contain h-40" // Ensure the image fits within the card
          />
        </div>
        <p className="text-base sm:text-xl text-white mt-4 mb-2 dark:text-neutral-200">
          Emory University
        </p>
        <p className="text-sm text-white-600 dark:text-neutral-400">
          Attended from 2022 to 2024
        </p>
      </BackgroundGradient>
    </div>
  );
}

export function BackgroundGradientDemo2() {
  return (
    <div className="w-80"> {/* Fixed width for consistency */}
      <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-gray-900 dark:bg-zinc-900">
        <div className="flex justify-center items-center">
          <Image
                        src="data:image/png;base64,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"

            alt="Northwestern University Logo"
            width={300}
            height={300}
            className="object-contain h-40" // Ensure the image fits within the card
          />
        </div>
        <p className="text-base sm:text-xl text-white mt-4 mb-2 dark:text-neutral-200">
          Northwestern University
        </p>
        <p className="text-sm text-white dark:text-neutral-400">
          Attending from 2024 to 2026
        </p>
      </BackgroundGradient>
    </div>
  );
}
