// app/components/landing/youtube-testimonials.jsx
"use client";

import { useRef } from "react";
import { useContactDialog } from "./contact-dialog-provider";
import { ShimmerButton } from "@/components/magicui/shimmer-button";

export default function YouTubeTestimonials() {
  const { openContactDialog } = useContactDialog();
  const scrollContainerRef = useRef(null);

  // Using theme variables instead of hardcoded colors

  /** YouTube shorts URLs */
  const shorts = [
    "https://www.youtube.com/shorts/YDnwkj6W_a8",
    "https://www.youtube.com/shorts/rGbS-8X0XAk",
    "https://www.youtube.com/shorts/3FhAD0R1_cY",
    "https://www.youtube.com/shorts/CPb6xJcRxuE",
  ];

  // Convert YouTube shorts URLs to embed URLs
  const getEmbedUrl = (url) => {
    const videoId = url.split("/shorts/")[1];
    return `https://www.youtube.com/embed/${videoId}`;
  };

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const isMobile = window.innerWidth < 640; // sm breakpoint
      const scrollAmount =
        direction === "left" ? (isMobile ? -300 : -400) : isMobile ? 300 : 400;

      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="testimonials" className="bg-theme-primary theme-transition">
      <div className="mx-auto max-w-6xl px-4 py-16">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-8 sm:mb-12 theme-heading text-theme-on-dark">
          Hear&nbsp;from&nbsp;Our&nbsp;Patients
        </h2>

        {/* Scrollable video cards with navigation */}
        <div className="relative">
          {/* Navigation arrows - Hide on mobile */}
          <div className="hidden sm:block">
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
          </div>

          {/* Scrollable container */}
          <div
            className="overflow-x-auto -mx-4 px-4 mb-8 sm:mb-12 scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            ref={scrollContainerRef}
          >
            <div className="flex gap-4 sm:gap-8 py-4">
              {shorts.map((url, i) => (
                <div
                  key={i}
                  className="w-[280px] sm:w-[350px] h-[480px] sm:h-[600px] flex-shrink-0 bg-[#1e3a2a] rounded-lg overflow-hidden"
                >
                  <iframe
                    src={getEmbedUrl(url)}
                    title={`Patient Testimonial ${i + 1}`}
                    width="100%"
                    height="100%"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA button */}
        <div className="flex justify-center pb-8 sm:pb-16">
          <ShimmerButton
            onClick={openContactDialog}
            className="inline-flex items-center gap-2 text-base sm:text-lg md:text-xl px-6 sm:px-8 py-3 sm:py-4"
            background="var(--beige)"
          >
            <span className="whitespace-pre-wrap text-center font-semibold leading-none tracking-tight text-theme-on-light">
              Book a Free Consultation
            </span>
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6"
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
