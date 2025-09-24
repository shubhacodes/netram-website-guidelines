// app/components/Testimonials.tsx
"use client";

import dynamic from "next/dynamic";
import { useRef } from "react";

import { SkeumorphicButton } from "../ui/skeumorphic-button";
import { useContactDialog } from "./contact-dialog-provider";
import { ShimmerButton } from "@/components/magicui/shimmer-button";

// ⬇️  SSR-safe dynamic import (InstagramEmbed is a class component)
const InstagramEmbed = dynamic(
  () => import("react-social-media-embed").then((m) => m.InstagramEmbed),
  { ssr: false }
);

export default function Testimonials() {
  const { openContactDialog } = useContactDialog();
  const scrollContainerRef = useRef(null);

  const green = "#386641";
  const cream = "#fefae0";

  /** 6 public Reels supplied by you */
  const reels = [
    "https://www.instagram.com/reel/DKcdUfhPjKb/",
    "https://www.instagram.com/reel/DDkAf7YvLfL/",
    "https://www.instagram.com/reel/DD2B_govWcW/",
    "https://www.instagram.com/reel/C_Vl7IfPtms/",
    "https://www.instagram.com/reel/C_Dhc7tPr73/",
  ];

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="testimonials" style={{ backgroundColor: green }}>
      <div className="mx-auto max-w-6xl px-4 py-16">
        {/* Heading */}
        <h2
          className="text-4xl md:text-5xl font-extrabold text-center mb-12 theme-heading"
          style={{ color: cream }}
        >
          Hear&nbsp;from&nbsp;Our&nbsp;Patients
        </h2>

        {/* Scrollable video cards with navigation */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white/90 hover:bg-white text-green-800 rounded-full p-2 shadow-lg transition-all"
            aria-label="Scroll left"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white/90 hover:bg-white text-green-800 rounded-full p-2 shadow-lg transition-all"
            aria-label="Scroll right"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Scrollable container */}
          <div
            className="overflow-x-auto -mx-4 px-4 mb-12 scroll-smooth"
            ref={scrollContainerRef}
          >
            <div className="flex gap-8 py-4">
              {reels.map((url, i) => (
                <div
                  key={i}
                  className="w-[350px] h-[600px] flex-shrink-0 bg-[#1e3a2a]"
                >
                  <InstagramEmbed
                    url={url}
                    width="100%"
                    height="100%"
                    captioned={false}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA button */}
        <div className="flex justify-center pb-16">
          <ShimmerButton
            onClick={openContactDialog}
            className="inline-flex items-center gap-2 text-lg md:text-xl px-8 py-4"
          >
            <span className="whitespace-pre-wrap text-center font-semibold leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10">
              Book a Free Consultation
            </span>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </ShimmerButton>
        </div>
      </div>
    </section>
  );
}
