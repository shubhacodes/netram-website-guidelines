"use client";

import Image from "next/image";
import ContactForm from "./contact-form";
import { useTheme } from "@/app/contexts/ThemeContext";

export default function HeroWithStats() {
  const { currentTheme } = useTheme();

  const stats = [
    {
      value: "19+",
      label: "Years, Worldwide Trust",
    },
    {
      value: "10k+",
      label: "LASIK Surgeries",
    },
    {
      value: "4.9",
      label: "2000+ reviews",
      extra: (
        <div className="flex items-center gap-1">
          <Image
            src="/google_logo.png"
            alt="Google"
            width={22}
            height={22}
            className="object-contain"
          />
          <div className="flex text-[#ffd700]">
            <span>★★★★</span>
            <div className="relative">
              <span className="opacity-30">★</span>
              <span className="absolute left-0 top-0 overflow-hidden w-[90%]">
                ★
              </span>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const features = [
    "Rated in 10 Best Eye Hospitals in NCR",
    "100% Touchless LASIK",
    "Glasses-free life",
    "Less than 5 minutes Surgery",
    "Resume work in ~24 hours",
    "No Cost EMI Options",
    "All Major TPAs",
  ];

  return (
    <section className="relative min-h-[90vh] pt-16 sm:pt-36 sm:h-[calc(100vh+10rem)] flex items-center theme-transition">
      {/* Mobile Background */}
      <div className="absolute inset-0 bg-theme-primary sm:hidden" />

      {/* Desktop Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden sm:block"
        style={{
          backgroundImage: "url('/hero_eye_2.png')",
          filter: "brightness(0.4)",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-theme-primary-opacity" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 py-6 sm:py-16 w-full">
        <div className="grid md:grid-cols-2 gap-6 sm:gap-10 items-center">
          {/* Left */}
          <div className="relative text-center md:text-left">
            <img
              src="/hero_mobile_cover01.svg"
              alt="Cataract Surgery - See Clearly Again"
              className="sm:hidden w-full max-w-md mx-auto rounded-xl overflow-hidden"
            />
            <h1 className="hidden sm:block text-3xl sm:text-4xl md:text-5xl font-bold leading-tight theme-heading text-theme-on-dark">
              Experience Life in
              <br className="mb-1 sm:mb-2" />
              <span className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-theme-on-light bg-theme-secondary mt-1 sm:mt-2 inline-block">
                High Definition
              </span>
            </h1>

            {/* Features List */}
            <ul className="mt-4 sm:mt-6 space-y-2 sm:space-y-3 text-lg sm:text-xl md:text-2xl theme-body hidden sm:inline-flex sm:flex-col md:block">
              {features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-2 sm:gap-3 justify-center md:justify-start"
                >
                  <span className="inline-flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full text-theme-on-light bg-theme-secondary">
                    ✓
                  </span>
                  <span className="text-theme-on-dark">{feature}</span>
                </li>
              ))}
            </ul>

            {/* Contact Form - Mobile */}
            <div className="mt-6 md:hidden">
              <ContactForm />
            </div>

            {/* Stats Section - Mobile */}
            <div className="mt-6 md:hidden rounded-xl border p-3 border-theme-light bg-theme-primary-opacity backdrop-blur-sm">
              <div className="grid grid-cols-3 gap-2">
                {stats.map((stat) => (
                  <div key={stat.value} className="text-center">
                    <h3 className="text-xl font-extrabold text-theme-on-dark theme-heading">
                      {stat.value}
                    </h3>
                    <p className="text-xs text-theme-on-dark-opacity theme-body font-medium">
                      {stat.label}
                    </p>
                    {stat.extra}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Contact Form - Desktop */}
          <div className="hidden md:block">
            <ContactForm />
          </div>
        </div>

        {/* Stats Section - Desktop */}
        <div className="hidden md:block mt-10 rounded-2xl border p-6 md:p-8 border-theme-light bg-theme-primary-opacity backdrop-blur-sm">
          <div className="grid grid-cols-3 gap-6 text-center">
            {stats.map((stat) => (
              <div key={stat.value}>
                <h3 className="text-3xl font-extrabold text-theme-on-dark theme-heading">
                  {stat.value}
                </h3>
                <p className="text-base md:text-lg text-theme-on-dark-opacity theme-body font-medium">
                  {stat.label}
                </p>
                {stat.extra}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
