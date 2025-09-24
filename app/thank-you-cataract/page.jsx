"use client";

import { useRouter } from "next/navigation";
import { SkeumorphicButton } from "../../components/ui/skeumorphic-button";
import { CheckCircle } from "lucide-react";
import { useRef } from "react";

export default function ThankYouPage() {
  const router = useRouter();
  const scrollContainerRef = useRef(null);

  const videos = [
    "https://www.youtube.com/shorts/CYCUcLeFn40",
    "https://www.youtube.com/shorts/l0AtUNHC2t8",
    "https://www.youtube.com/watch?v=XeMGeBWOVCA",
    "https://www.youtube.com/watch?v=27i7c8rtF-I",
    "https://www.youtube.com/watch?v=jUurdDHD0HM",
  ];

  // Convert YouTube URLs (watch, shorts, youtu.be) to embed URLs
  const getEmbedUrl = (url) => {
    try {
      const u = new URL(url);
      // watch?v=VIDEOID
      if (u.hostname.includes("youtube.com") && u.pathname === "/watch") {
        const id = u.searchParams.get("v");
        return id ? `https://www.youtube.com/embed/${id}` : url;
      }
      // shorts/VIDEOID
      if (u.hostname.includes("youtube.com") && u.pathname.startsWith("/shorts/")) {
        const id = u.pathname.split("/shorts/")[1]?.split("?")[0];
        return id ? `https://www.youtube.com/embed/${id}` : url;
      }
      // youtu.be/VIDEOID
      if (u.hostname === "youtu.be") {
        const id = u.pathname.slice(1);
        return id ? `https://www.youtube.com/embed/${id}` : url;
      }
      return url;
    } catch {
      return url;
    }
  };

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
    <main className="min-h-screen bg-[#fefae0]">
      <div className="container mx-auto min-h-screen flex flex-col items-center justify-center p-4 sm:p-6">
        <div className="w-full max-w-2xl text-center">
          <div className="flex justify-center mb-6 sm:mb-8">
            <CheckCircle size={48} className="sm:w-16 sm:h-16 text-[#386641]" />
          </div>

          <h1
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-3 sm:mb-4 font-freight text-[#386641]"
          >
            Thank You for Choosing Netram!
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-700 mb-6 sm:mb-8 leading-relaxed font-proxima font-medium px-2">
            We have received your information and our team will contact you
            shortly to schedule your free screening worth ₹5000.
          </p>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-8 md:p-10 mb-6 sm:mb-8 shadow-lg mx-2">
            <h2
              className="text-lg sm:text-xl md:text-2xl font-extrabold mb-4 sm:mb-6 font-freight text-[#386641]"
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
                      className="inline-flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full text-white text-sm flex-shrink-0 mt-0.5 shadow-sm bg-[#386641]"
                    >
                      ✓
                    </span>
                    <span className="text-slate-700 text-base sm:text-lg leading-relaxed text-left font-proxima font-medium">{step}</span>
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
            className="inline-flex items-center gap-2 mb-8 sm:mb-16 text-base sm:text-lg bg-[#386641] text-[#fefae0]"
          >
            Return to Home
          </SkeumorphicButton>

          {/* Testimonials Section */}
          <div className="w-full max-w-6xl mx-auto px-2">
            <h2
              className="text-lg sm:text-xl md:text-2xl font-extrabold mb-6 sm:mb-8 font-freight text-[#386641]"
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
                  {videos.map((url, i) => (
                    <div
                      key={i}
                      className="w-[280px] sm:w-[350px] h-[480px] sm:h-[600px] flex-shrink-0 bg-[#1e3a2a] rounded-xl overflow-hidden"
                    >
                      <iframe
                        src={getEmbedUrl(url)}
                        title={`Cataract Testimonial ${i + 1}`}
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
          </div>
        </div>
      </div>
    </main>
  );
}
