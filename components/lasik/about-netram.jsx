"use client";

import Image from "next/image";
import { useContactDialog } from "./contact-dialog-provider";
import { ShimmerButton } from "@/components/magicui/shimmer-button";

export default function AboutNetram() {
  const { openContactDialog } = useContactDialog();

  const cards = [
    {
      title: "2,50,000+ Surgeries",
      subtitle: "Over 50 Years of collective experience",
      image: {
        src: "/m-3.jpg",
        alt: "Dr. Anchal Gupta and team",
      },
      cta: "Claim Free Consultation",
    },
    {
      title: "99.8% Success Rate",
      subtitle: "Clear Vision in less than 5 minutes*",
      image: {
        src: "/m-1.jpg",
        alt: "Advanced LASIK Technology",
      },
      cta: "Free Counselling Session",
      hasLaserEffect: true,
    },
  ];

  return (
    <section className="relative py-16 px-4 bg-theme-secondary theme-transition">
      <div className="mx-auto max-w-6xl">
        <h2
          id="why-netram-title"
          className="text-3xl md:text-4xl font-extrabold text-center mb-8 md:mb-10 theme-heading text-theme-on-light"
        >
          Why Netram Eye Centre
        </h2>

        <p className="text-lg md:text-xl font-medium text-center leading-relaxed max-w-5xl mx-auto text-theme-on-light/90 mb-12 theme-body">
          Our vision is to provide quality eye care to everyone — whether they
          can{" "}
          <span className="font-bold text-theme-on-light">
            pay, pay less, or not pay at all.
          </span>{" "}
          At Netram, compassionate care meets advanced technology.
        </p>

        {/* Two Panels - Now Horizontally Scrollable on Mobile */}
        <div className="flex md:grid md:grid-cols-2 gap-3 md:gap-8 overflow-x-auto pb-6 md:pb-0 snap-x snap-mandatory no-scrollbar -mx-4 md:mx-0 px-4 md:px-0">
          {cards.map((card, index) => (
            <article
              key={index}
              className="group rounded-3xl p-6 md:p-8 relative overflow-hidden focus-within:ring-2 focus-within:ring-theme-on-dark/80 bg-theme-primary text-theme-on-dark w-[85%] md:w-auto snap-center flex-shrink-0 md:flex-shrink theme-transition"
            >
              {/* Top Section - Statistics */}
              <div className="mb-6">
                <p className="text-3xl md:text-5xl font-extrabold mb-1 leading-none theme-heading">
                  {card.title}
                </p>
                <p className="text-base md:text-xl mb-5 text-theme-on-dark/90 theme-body font-medium">
                  {card.subtitle}
                </p>

                <ShimmerButton
                  onClick={openContactDialog}
                  className="hidden md:inline-flex items-center gap-2 text-base md:text-xl px-6 md:px-8 py-3 md:py-4 text-theme-on-light theme-body"
                  background="var(--beige)"
                  shimmerColor="rgba(0, 0, 0, 0.1)"
                  shimmerSize="0.2em"
                  aria-label={card.cta}
                >
                  <span className="text-center font-semibold leading-none tracking-tight inline-flex items-center gap-2">
                    {card.cta}
                    <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </ShimmerButton>
              </div>

              {/* Bottom Section - Image */}
              <div className="aspect-[16/10] rounded-2xl bg-theme-on-dark/10 flex items-center justify-center border border-theme-on-dark/30 transition-colors relative overflow-hidden">
                <div className="relative w-full h-full">
                  <Image
                    src={card.image.src}
                    alt={card.image.alt}
                    fill
                    className="object-cover rounded-2xl"
                  />
                  {card.hasLaserEffect && (
                    <>
                      {/* Laser effect overlay with reduced motion respect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-transparent pointer-events-none rounded-2xl" />
                      <div className="absolute top-1/2 right-1/4 w-1 h-8 bg-orange-400/70 motion-safe:animate-pulse pointer-events-none rounded-full" />
                    </>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="md:hidden mt-8">
          <ShimmerButton
            onClick={openContactDialog}
            className="inline-flex w-full items-center justify-center gap-2 text-base md:text-xl px-6 md:px-8 py-3 md:py-4 text-theme-on-light theme-body"
            background="var(--beige)"
            shimmerColor="rgba(0, 0, 0, 0.1)"
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
