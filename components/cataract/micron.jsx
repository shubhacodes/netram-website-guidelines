"use client";

import { useState } from "react";
import Image from "next/image";
import { useContactDialog } from "./contact-dialog-provider";
import { CheckCircle } from "lucide-react";
import { ShimmerButton } from "@/components/magicui/shimmer-button";

export default function MicronM7() {
  const { openContactDialog } = useContactDialog();

  const features = [
    "Blade-free laser capsulotomy for precise opening",
    "Gentle lens fragmentation for smoother removal",
    "Better IOL centration and reproducibility",
    "Stitchless, minimally invasive technique",
    "Faster recovery with minimal discomfort"
  ];

  return (
    <section className="py-16 bg-[#fefae0]">
      <div className="mx-auto max-w-6xl px-4">
        {/* Title */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold mx-auto max-w-4xl font-freight text-[#386641]">
            <span className="block md:inline">Femtosecond Laser Assisted Cataract Surgery (FLACS)</span>
          </h2>
        </div>

        {/* UNIFIED SPLIT-SECTION HERO - Single cohesive component */}
        <div className="relative rounded-2xl overflow-hidden bg-white border-2 border-[#1e3a2a] mb-8 md:mb-12">
          {/* Mobile Image - Only visible on mobile */}
          <div className="md:hidden relative w-full h-[400px]">
            <Image
              src="/machine_cataract.png"
              alt="FLACS Cataract System"
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
                src="/machine_cataract.png"
                alt="FLACS Cataract System"
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
                <span className="px-4 py-1 rounded-full text-sm font-semibold bg-[#386641] text-[#fefae0]">
                  Blade-free FLACS Technology
                </span>
              </div>

              <h3 className="text-4xl font-extrabold mb-6 font-freight text-[#386641]">
                Precision Cataract Surgery at Netram
              </h3>

              <ul className="w-full max-w-xl space-y-5">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-left">
                    <CheckCircle
                      aria-hidden="true"
                      size={28}
                      className="mt-1 flex-shrink-0 text-[#386641]"
                    />
                    <span className="text-xl font-medium text-[#386641] leading-snug font-proxima">
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
              <span className="px-4 py-1 rounded-full text-sm font-semibold bg-[#386641] text-[#fefae0]">
                Blade-free FLACS Technology
              </span>
            </div>

            <h3 className="text-2xl font-extrabold mb-6 font-freight text-[#386641]">
              Precision Cataract Surgery at Netram
            </h3>

            <ul className="w-full space-y-4">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <CheckCircle
                    aria-hidden="true"
                    size={24}
                    className="flex-shrink-0 text-[#386641] mt-1"
                  />
                  <span className="text-base font-medium text-[#386641] leading-snug font-proxima">
                    {f}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Process Steps - Commented Out */}
        {/* <div className="mt-16 relative">
          <h3 className="text-2xl md:text-4xl font-extrabold text-center mb-8 md:mb-12 font-freight text-[#386641]">
            Your Cataract Surgery Journey
          </h3>

          <div className="relative overflow-x-auto -mx-4 px-4 scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex md:grid md:grid-cols-4 gap-6">
              <div className="w-[280px] md:w-auto flex-shrink-0 text-center">
                <div className="mb-4 h-64 flex items-center justify-center">
                  <Image
                    src="/p-1.png"
                    alt="Admission and preparation"
                    width={200}
                    height={200}
                    className="object-contain"
                  />
                </div>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <div className="w-6 h-6 rounded-full bg-[#386641] text-[#fefae0] text-sm font-bold flex items-center justify-center">
                    1
                  </div>
                </div>
                <h4 className="text-xl font-bold text-[#386641] mb-2 font-freight">
                  Admission & Preparation
                </h4>
                <p className="text-base text-[#386641]/80 font-proxima font-medium">
                  Simple admission and pre-op checks for your comfort and safety.
                </p>
              </div>

              <div className="w-[280px] md:w-auto flex-shrink-0 text-center">
                <div className="mb-4 h-64 flex items-center justify-center">
                  <Image
                    src="/p-2.png"
                    alt="Laser capsulotomy"
                    width={200}
                    height={200}
                    className="object-contain"
                  />
                </div>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <div className="w-6 h-6 rounded-full bg-[#386641] text-[#fefae0] text-sm font-bold flex items-center justify-center">
                    2
                  </div>  
                </div>
                <h4 className="text-xl font-semibold text-[#386641] mb-2">
                  Laser Capsulotomy
                </h4>
                <p className="text-base text-[#386641]/80">
                  Blade-free laser creates a precise opening and softens the lens.
                </p>
              </div>

              <div className="w-[280px] md:w-auto flex-shrink-0 text-center">
                <div className="mb-4 h-64 flex items-center justify-center">
                  <Image
                    src="/p-3.png"
                    alt="Phacoemulsification and IOL implant"
                    width={200}
                    height={200}
                    className="object-contain"
                  />
                </div>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <div className="w-6 h-6 rounded-full bg-[#386641] text-[#fefae0] text-sm font-bold flex items-center justify-center">
                    3
                  </div>
                </div>
                <h4 className="text-xl font-semibold text-[#386641] mb-2">
                  Phaco & IOL Implant
                </h4>
                <p className="text-base text-[#386641]/80">
                  Ultrasound removes the softened lens; a premium IOL is precisely implanted.
                </p>
              </div>

              <div className="w-[280px] md:w-auto flex-shrink-0 text-center">
                <div className="mb-4 h-64 flex items-center justify-center">
                  <Image
                    src="/p-4.png"
                    alt="Recovery and discharge"
                    width={200}
                    height={200}
                    className="object-contain"
                  />
                </div>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <div className="w-6 h-6 rounded-full bg-[#386641] text-[#fefae0] text-sm font-bold flex items-center justify-center">
                    4
                  </div>
                </div>
                <h4 className="text-xl font-semibold text-[#386641] mb-2">
                  Recovery & Discharge
                </h4>
                <p className="text-base text-[#386641]/80">Day-care procedure with guidance for a smooth, quick recovery.</p>
              </div>
            </div>
          </div>
        </div> */}
        <div className="text-center mt-12 flex items-center justify-center">
          <ShimmerButton
            onClick={openContactDialog}
            className="px-6 py-3 md:px-10 md:py-5"
          >
            <span className="whitespace-pre-wrap text-center text-lg md:text-2xl font-semibold leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 inline-flex items-center gap-2">
              Book a Free Consultation
              <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
            </span>
          </ShimmerButton>
        </div>
      </div>
    </section>
  );
}
