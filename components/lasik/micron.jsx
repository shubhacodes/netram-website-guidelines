"use client";

import { useState } from "react";
import Image from "next/image";
import { useContactDialog } from "./contact-dialog-provider";
import { CheckCircle } from "lucide-react";
import { ShimmerButton } from "@/components/magicui/shimmer-button";

export default function MicronM7() {
  const { openContactDialog } = useContactDialog();

  const features = [
    "100% Touchless Laser Procedure: Advanced technology where only the laser touches your eyes.",
    "No Flap. No Lenticule. No Complications.",
    "Beyond Just Eye Power: Corrects not only vision but also optical aberrations.",
    "SmartSurfACE Technology: A surface-based, flap-less technique that's safer and more comfortable.",
    "Robotic Eye Tracking with Micron-Level Precision: Ensures accuracy in every movement.",
    "Tailor-Made Treatment: Customised specifically for your eyes—because every eye is unique.",
    "Faster Healing & Recovery: Most patients return to normal activities within 24 hours",
  ];

  return (
    <section className="py-16 bg-theme-secondary theme-transition">
      <div className="mx-auto max-w-6xl px-4">
        {/* Title */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold theme-heading text-theme-on-light">
            <span className="block">Schwind Amaris</span>
            <span className="mt-0.5 md:mt-2 inline-block px-3 rounded-xl text-theme-on-dark bg-theme-primary w-fit">
              The Future of LASIK
            </span>
          </h2>
        </div>

        {/* UNIFIED SPLIT-SECTION HERO - Single cohesive component */}
        <div className="relative rounded-2xl overflow-hidden bg-white border-2 border-theme-primary mb-8 md:mb-12">
          {/* Mobile Image - Only visible on mobile */}
          <div className="md:hidden relative w-full h-[400px]">
            <Image
              src="/machine.png"
              alt="Schwind Amaris LASIK Machine"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:flex flex-row min-h-[600px]">
            {/* Background Image - Desktop only */}
            <div className="relative w-1/2">
              <Image
                src="/machine.png"
                alt="Schwind Amaris LASIK Machine"
                fill
                className="object-cover"
                priority
              />
              {/* Subtle overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/10 to-transparent" />
            </div>

            {/* Right Side Content - Desktop */}
            <div className="w-1/2 p-10 flex flex-col justify-center bg-white">
              <div className="mb-4">
                <span className="px-4 py-1 rounded-full text-sm font-semibold bg-theme-primary text-theme-on-dark theme-body">
                  Touchless LASIK
                </span>
              </div>

              <h3 className="text-4xl font-extrabold mb-6 theme-heading text-theme-on-light">
                SCHWIND AMARIS - Now at Netram
              </h3>

              <ul className="w-full max-w-xl space-y-5">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-left">
                    <CheckCircle
                      aria-hidden="true"
                      size={28}
                      className="mt-1 flex-shrink-0 text-theme-primary"
                    />
                    <span className="text-xl font-bold text-theme-on-light leading-snug theme-body">
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Mobile Content - Only visible on mobile */}
          <div className="md:hidden p-8 flex flex-col items-start text-left bg-white">
            <div className="mb-4">
              <span className="px-4 py-1 rounded-full text-md font-bold bg-theme-primary text-theme-on-dark theme-body">
                Touchless LASIK
              </span>
            </div>

            <h3 className="text-2xl font-extrabold mb-6 theme-heading text-theme-on-light">
              SCHWIND AMARIS - Now at Netram
            </h3>

            <ul className="w-full space-y-4">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <CheckCircle
                    aria-hidden="true"
                    size={24}
                    className="flex-shrink-0 text-theme-primary mt-1"
                  />
                  <span className="text-base font-bold text-theme-on-light leading-snug theme-body">
                    {f}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center mt-12 flex items-center justify-center">
          <ShimmerButton
            onClick={openContactDialog}
            className="px-6 py-3 md:px-10 md:py-5 theme-body"
            background="var(--primary-green)"
          >
            <span className="whitespace-pre-wrap text-center text-lg md:text-2xl font-bold leading-none tracking-tight text-theme-on-dark inline-flex items-center gap-2">
              Book a Free Consultation
              <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </span>
          </ShimmerButton>
        </div>
      </div>
    </section>
  );
}
