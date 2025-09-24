"use client";

import Image from "next/image";
import { useContactDialog } from "./contact-dialog-provider";
import { ShimmerButton } from "@/components/magicui/shimmer-button";

export default function AboutNetram() {
  const { openContactDialog } = useContactDialog();

  return (
    <section className="relative py-16 px-4 bg-[#386641]">
      <div className="mx-auto max-w-6xl">
        <h2
          id="why-netram-title"
          className="text-3xl md:text-4xl font-extrabold text-center mb-8 md:mb-10 font-freight text-[#fefae0]"
        >
          Why Netram Eye Centre
        </h2>

        <p className="text-lg md:text-xl font-medium text-center leading-relaxed max-w-5xl mx-auto text-[#fefae0]/90 mb-12 font-proxima">
          Our vision is to provide quality eye care to everyone — whether
          they can <span className="font-bold text-[#fefae0]">pay, pay less, or not pay at all.</span> At Netram,
          compassionate care meets advanced technology.
        </p>

        {/* Two Panels - Now Horizontally Scrollable on Mobile */}
        <div className="flex md:grid md:grid-cols-2 gap-3 md:gap-8 overflow-x-auto pb-6 md:pb-0 snap-x snap-mandatory no-scrollbar -mx-4 md:mx-0 px-4 md:px-0">
          {/* Left Panel */}
          <article
            className="group rounded-3xl p-6 md:p-8 relative overflow-hidden focus-within:ring-2 focus-within:ring-white/80 bg-[#1e3a2a] text-[#fefae0] w-[85%] md:w-auto snap-center flex-shrink-0 md:flex-shrink"
          >
            {/* Top Section - Statistics */}
            <div className="mb-6">
              <p className="text-3xl md:text-5xl font-extrabold mb-1 leading-none font-freight">
                2,50,000+ Surgeries 
              </p>
              <p className="text-base md:text-xl mb-5 text-[#fefae0]/90 font-proxima font-medium">
                Over <strong> 50 Years</strong> of collective experience
              </p>

              <ShimmerButton
                onClick={openContactDialog}
                className="hidden md:inline-flex items-center gap-2 text-base md:text-xl px-6 md:px-8 py-3 md:py-4 text-[#1e3a2a]"
                background="#fefae0"
                shimmerColor="rgba(0, 0, 0)"
                shimmerSize="0.2em"
                aria-label="Book a free pre-surgery consultation"
              >
                <span className="text-center font-semibold leading-none tracking-tight inline-flex items-center gap-2">
                  Claim Free Consultation
                  <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
                </span>
              </ShimmerButton>
            </div>

            {/* Bottom Section - Doctors Photo */}
            <div className="aspect-[16/10] rounded-2xl bg-white/10 flex items-center justify-center border border-white/30 transition-colors relative overflow-hidden">
              <div className="relative w-full h-full">
                <Image
                  src="/m-3.jpg"
                  alt="Dr. Anchal Gupta and team"
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
            </div>
          </article>

          {/* Right Panel */}
          <article
            className="group rounded-3xl p-6 md:p-8 relative overflow-hidden focus-within:ring-2 focus-within:ring-white/80 bg-[#1e3a2a] text-[#fefae0] w-[85%] md:w-auto snap-center flex-shrink-0 md:flex-shrink"
          >
            {/* Top Section - Success Rate */}
            <div className="mb-6">
              <p className="text-3xl md:text-5xl font-extrabold mb-1 leading-none font-freight">
                99.8% Success Rate
              </p>
              <p className="text-base md:text-xl mb-5 text-[#fefae0]/90 font-proxima font-medium">
                <span className="hidden md:inline">Clear Vision in less than 5 minutes*</span>
                <span className="md:hidden whitespace-pre-line block">Clear Vision in just{'\n'}5.1 minutes*</span>
              </p>

              <ShimmerButton
                onClick={openContactDialog}
                className="hidden md:inline-flex items-center gap-2 text-base md:text-xl px-6 md:px-8 py-3 md:py-4 text-[#1e3a2a]"
                background="#fefae0"
                shimmerColor="rgba(0, 0, 0)"
                shimmerSize="0.2em"
                aria-label="Book a free pre-surgery consultation"
              >
                <span className="text-center font-semibold leading-none tracking-tight inline-flex items-center gap-2">
                  Free Counselling Session
                  <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
                </span>
              </ShimmerButton>
            </div>

            {/* Bottom Section - Patient Image */}
            <div className="aspect-[16/10] rounded-2xl bg-white/10 flex items-center justify-center border border-white/30 relative overflow-hidden">
              <div className="relative w-full h-full">
                <Image
                  src="/m-1.jpg"
                  alt="Advanced LASIK Technology"
                  fill
                  className="object-cover rounded-2xl"
                />
                {/* Laser effect overlay with reduced motion respect */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-transparent pointer-events-none rounded-2xl" />
                <div className="absolute top-1/2 right-1/4 w-1 h-8 bg-orange-400/70 motion-safe:animate-pulse pointer-events-none rounded-full" />
              </div>
            </div>
          </article>
        </div>

        {/* Mobile CTA */}
        <div className="md:hidden mt-8">
          <ShimmerButton
            onClick={openContactDialog}
            className="inline-flex w-full items-center justify-center gap-2 text-base md:text-xl px-6 md:px-8 py-3 md:py-4 text-[#1e3a2a]"
            background="#fefae0"
            shimmerColor="rgba(0, 0, 0)"
            shimmerSize="0.2em"
            aria-label="Book a free consultation"
          >
            <span className="whitespace-pre-wrap text-center font-semibold leading-none tracking-tight">
              Book Your Free Consultation
            </span>
            <svg 
              className="w-5 h-5 md:w-6 md:h-6" 
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

        {/* Add custom style for hiding scrollbar */}
        <style jsx global>{`
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
      </div>
    </section>
  );
}
