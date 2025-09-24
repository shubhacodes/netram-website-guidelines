"use client";

import { useRouter } from "next/navigation";
import { SkeumorphicButton } from "../../components/ui/skeumorphic-button";
import { CheckCircle } from "lucide-react";
import { useRef } from "react";
import dynamic from "next/dynamic";

const InstagramEmbed = dynamic(
  () => import("react-social-media-embed").then((m) => m.InstagramEmbed),
  { ssr: false }
);

export default function ThankYouPage() {
  const router = useRouter();
  const scrollContainerRef = useRef(null);
  const green = "#386641";
  const cream = "#fefae0";

  const reels = [
    "https://www.instagram.com/reel/DKcdUfhPjKb/",
    "https://www.instagram.com/reel/DDkAf7YvLfL/",
    "https://www.instagram.com/reel/DD2B_govWcW/",
    "https://www.instagram.com/reel/C_Vl7IfPtms/",
    "https://www.instagram.com/reel/C_Dhc7tPr73/",
  ];

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300; // Reduced scroll amount for mobile
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <main className="min-h-screen" style={{ backgroundColor: cream }}>
      <div className="container mx-auto min-h-screen flex flex-col items-center justify-center p-4 sm:p-6">
        <div className="w-full max-w-2xl text-center">
          <div className="flex justify-center mb-6 sm:mb-8">
            <CheckCircle size={48} className="sm:w-16 sm:h-16" style={{ color: green }} />
          </div>

          <h1
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 font-freight"
            style={{ color: green }}
          >
            Thank You for Choosing Netram!
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-700 mb-6 sm:mb-8 leading-relaxed font-proxima px-2">
            We have received your information and our team will contact you
            shortly to schedule your free screening worth ₹5000.
          </p>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-8 md:p-10 mb-6 sm:mb-8 shadow-lg mx-2">
            <h2
              className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6 font-freight"
              style={{ color: green }}
            >
              What Happens Next?
            </h2>
            <div className="grid gap-2 max-w-xl mx-auto">
              {[
                "Our team will call you within 24 hours.",
                "Schedule your free screening at your convenience.",
                "Meet Dr. Anchal for personalized consultation.",
                "Get a detailed assessment of your eye condition.",
              ].map((step, index, array) => (
                <div key={index}>
                  <div 
                    className="flex items-start gap-3 sm:gap-4 p-2 sm:p-3 rounded-xl transition-all hover:bg-white/50"
                  >
                    <span
                      className="inline-flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full text-white text-sm flex-shrink-0 mt-0.5 shadow-sm"
                      style={{ backgroundColor: green }}
                    >
                      ✓
                    </span>
                    <span className="text-slate-700 text-base sm:text-lg leading-relaxed text-left">{step}</span>
                  </div>
                  {index < array.length - 1 && (
                    <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent my-2" />
                  )}
                </div>
              ))}
            </div>
          </div>

          <SkeumorphicButton
            onClick={() => router.push("/")}
            size="lg"
            className="inline-flex items-center gap-2 mb-8 sm:mb-16 text-base sm:text-lg"
            style={{ backgroundColor: green, color: cream }}
          >
            Return to Home
          </SkeumorphicButton>

          {/* Testimonials Section */}
          <div className="w-full max-w-6xl mx-auto px-2">
            <h2
              className="text-lg sm:text-xl md:text-2xl font-bold mb-6 sm:mb-8 font-freight"
              style={{ color: green }}
            >
              While we get back to you, here are some client stories from our journal. Follow us to always stay updated.
            </h2>

            {/* Scrollable video cards with navigation */}
            <div className="relative">
              {/* Left Arrow */}
              <button
                onClick={() => scroll('left')}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 z-10 bg-white/90 hover:bg-white text-green-800 rounded-full p-1.5 sm:p-2 shadow-lg transition-all"
                aria-label="Scroll left"
              >
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
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              {/* Right Arrow */}
              <button
                onClick={() => scroll('right')}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 z-10 bg-white/90 hover:bg-white text-green-800 rounded-full p-1.5 sm:p-2 shadow-lg transition-all"
                aria-label="Scroll right"
              >
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
              </button>

              {/* Scrollable container */}
              <div className="overflow-x-auto -mx-2 sm:-mx-4 px-2 sm:px-4 scroll-smooth" ref={scrollContainerRef}>
                <div className="flex gap-4 sm:gap-8 py-4">
                  {reels.map((url, i) => (
                    <div key={i} className="w-[280px] sm:w-[350px] h-[500px] sm:h-[600px] flex-shrink-0 bg-[#1e3a2a] rounded-xl">
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
          </div>
        </div>
      </div>
    </main>
  );
}
