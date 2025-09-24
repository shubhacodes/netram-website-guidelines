"use client";

import Image from "next/image";
import Link from "next/link";
import { useContactDialog } from "./contact-dialog-provider";
import { ShimmerButton } from "@/components/magicui/shimmer-button";

export default function Doctor() {
  const { openContactDialog } = useContactDialog();

  return (
    <section id="doctor" className="py-16 px-4 bg-[#386641]">
      <h2
        id="why-netram-title"
        className="text-3xl md:text-5xl font-extrabold text-center mb-8 md:mb-10 font-freight text-[#fefae0]"
      >
        Guiding Light of Netram
      </h2>
        <div className="mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-0 overflow-hidden rounded-3xl shadow-lg border-2 border-[#fefae0]">
            {/* Left Panel - Doctor Image with overlay - Hidden on mobile */}
            <div className="relative hidden md:flex items-end">
              <Image
                src="/anchal.png"
                alt="Dr. Anchal"
                fill
                className="object-cover"
                priority
              />
              {/* Instagram Handle Overlay */}
              <Link
                href="https://www.instagram.com/ankhonkidoctor"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg hover:bg-white transition-colors duration-200 cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-pink-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  <span className="text-sm font-medium text-slate-700">
                    @ankhonkidoctor
                  </span>
                </div>
              </Link>
            </div>

            {/* Right Panel - Cream Background with Details */}
            <div
              className="p-6 md:p-12 bg-[#386641]"
          >
            {/* Section Title */}
            <h3
              className="text-xl md:text-3xl font-extrabold mb-4 text-[#fefae0] font-freight"
            >
              Meet Your Surgeon
            </h3>

            {/* Mobile Doctor Image - Only visible on mobile */}
            <div className="md:hidden relative w-full h-[400px] mb-6 rounded-2xl overflow-hidden">
              <Image
                src="/anchal.png"
                alt="Dr. Anchal"
                fill
                className="object-cover"
                priority
              />
              {/* Instagram Handle Overlay */}
              <Link
                href="https://www.instagram.com/ankhonkidoctor"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg hover:bg-white transition-colors duration-200 cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-pink-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  <span className="text-sm font-medium text-slate-700">
                    @ankhonkidoctor
                  </span>
                </div>
              </Link>
            </div>

            {/* Doctor's Full Name */}
            <h4
              className="text-lg md:text-2xl font-bold mb-2 text-[#fefae0] font-freight"
            >
              Dr. Anchal Gupta
            </h4>

            {/* Specialization */}
            <p className="text-sm md:text-base text-[#fefae0]/80 mb-4 font-proxima font-medium">
              Fellowship in Cornea & Refractive Surgery
            </p>

            {/* Quote Section */}
            <div className="mb-4">
              <div className="flex">
                <div
                  className="w-1 mr-4 rounded-full bg-[#fefae0]"
                ></div>
                <blockquote className="text-sm md:text-base text-[#fefae0]/90 italic font-proxima font-medium">
                  "Choosing Cataract Surgery is a big step—I treat every eye with the same precision and care I would for my own family, always prioritizing your safety and comfort."
                </blockquote>
              </div>
            </div>


            {/* Statistics Cards */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="p-4 rounded-xl bg-[#fefae0]/10">
                <div
                  className="text-xl md:text-3xl font-extrabold mb-1 text-[#fefae0] font-freight"
                >
                  19+
                </div>
                <div className="text-xs md:text-sm text-[#fefae0]/80 font-proxima font-medium">
                  Years of Experience
                </div>
              </div>
              <div className="p-4 rounded-xl bg-[#fefae0]/10">
                <div
                  className="text-xl md:text-3xl font-extrabold mb-1 text-[#fefae0] font-freight"
                >
                  2,50,000+
                </div>
                <div className="text-xs md:text-sm text-[#fefae0]/80 font-proxima font-medium">
                  Successful Procedures
                </div>
              </div>
            </div>

            {/* Achievements Section */}
            <div className="mb-8 p-6 rounded-xl bg-[#fefae0]/10">
            <h5 className="text-xl md:text-2xl font-extrabold mb-4 text-[#fefae0] font-freight">
                Achievements & Highlights
              </h5>
              <div className="grid gap-3">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-[#fefae0]"></div>
                  <p className="text-sm md:text-base text-[#fefae0]/90 font-proxima font-medium">
                    Among Fastest Surgeon in the World.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-[#fefae0]"></div>
                  <p className="text-sm md:text-base text-[#fefae0]/90 font-proxima font-medium">
                    Expert in Cataract, Refractive (LASIK) and Cornea Procedures.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-[#fefae0]"></div>
                  <p className="text-sm md:text-base text-[#fefae0]/90 font-proxima font-medium">
                    Thousands of successful vision correction surgeries.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-[#fefae0]"></div>
                  <p className="text-sm md:text-base text-[#fefae0]/90 font-proxima font-medium">
                    Trainer to many Eye Surgeons Internationally.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-[#fefae0]"></div>
                  <p className="text-sm md:text-base text-[#fefae0]/90 font-proxima font-medium">
                    Winner of many prestigious awards.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-[#fefae0]"></div>
                  <p className="text-sm md:text-base text-[#fefae0]/90 font-proxima font-medium">
                    Known for Precision, Empathy, and Ethical care.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <ShimmerButton
              onClick={openContactDialog}
              className="w-full md:w-auto inline-flex items-center justify-center gap-2 text-base md:text-xl px-6 md:px-8 py-3 md:py-4"
            >
              <span className="whitespace-pre-wrap text-center font-semibold leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10">
                Start Your Journey
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
        </div>
      </div>
    </section>
  );
}
