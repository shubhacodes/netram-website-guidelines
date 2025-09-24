"use client";

import Image from "next/image";
import { PulsatingButton } from "@/components/magicui/pulsating-button";
import { useState, useEffect } from "react";
import Link from "next/link";
import { selectGoogleLanguage as importedSelect } from "@/components/google-translate";
import ThemeTabs from "@/components/theme/ThemeTabs";

export default function Header({ hideNav = false }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [lang, setLang] = useState("en");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const m = document.cookie.match(/(?:^|; )googtrans=\/[^/]+\/([^;]+)/);
    const cookieLang = m ? decodeURIComponent(m[1]) : "en";
    setLang(cookieLang || "en");
  }, []);

  const switchLang = (target) => {
    if (target === lang) return;
    setLang(target);

    // prefer imported helper; fallback to global
    const fn =
      typeof importedSelect === "function"
        ? importedSelect
        : (typeof window !== "undefined" && window.__selectGoogleLanguage) ||
          null;

    if (fn) fn(target);
  };

  return (
    <div
      className={`fixed w-full top-0 z-50 transition-all duration-300 bg-[#fefae0]/80 backdrop-blur-sm border-b border-[#386641]/10 ${
        !isScrolled
          ? "sm:bg-transparent sm:backdrop-blur-none sm:border-none"
          : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-2 sm:py-4">
        <nav className="flex items-center justify-between gap-2 sm:gap-4">
          <div className="flex items-center gap-4">
            <a
              href="/"
              className="relative h-12 w-32 sm:h-20 sm:w-48 transition-transform hover:scale-[0.98]"
            >
              <Image
                src="/netram-logo.png"
                alt="Netram Eye Centre"
                fill
                className={`object-contain transition-all duration-300 ${
                  isScrolled
                    ? "brightness-100"
                    : "sm:brightness-0 sm:invert brightness-100"
                }`}
                priority
              />
            </a>
          </div>

          <div className="flex items-center gap-2 sm:gap-6">
            {!hideNav && (
              <>
                <ThemeTabs />
                <div className="hidden sm:flex items-center gap-6">
                  <div className="relative h-16 w-16">
                    <Image
                      src="/nabh.png"
                      alt="NABH Certified"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="relative h-16 w-16">
                    <Image
                      src="/cghs.png"
                      alt="CGHS Empanelled"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                {/* Language toggle (shielded from translation) */}
                <div
                  className="notranslate flex items-center rounded-md border border-[#386641]/20 bg-white/70 backdrop-blur px-1 py-1"
                  role="group"
                  aria-label="Language toggle"
                  translate="no"
                >
                  <button
                    type="button"
                    onClick={() => switchLang("en")}
                    aria-pressed={lang === "en"}
                    className={`px-2 py-1 text-xs sm:text-sm rounded theme-body font-semibold ${
                      lang === "en"
                        ? "bg-[#386641] text-white"
                        : "text-[#386641] hover:bg-[#386641]/10"
                    }`}
                  >
                    <span className="notranslate" translate="no" lang="en">
                      EN
                    </span>
                  </button>
                  <button
                    type="button"
                    onClick={() => switchLang("hi")}
                    aria-pressed={lang === "hi"}
                    className={`px-2 py-1 text-xs sm:text-sm rounded theme-body font-semibold ${
                      lang === "hi"
                        ? "bg-[#386641] text-white"
                        : "text-[#386641] hover:bg-[#386641]/10"
                    }`}
                  >
                    <span className="notranslate" translate="no" lang="en">
                      HI
                    </span>
                  </button>
                </div>

                <Link
                  href="https://wa.me/919319909455"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Book consultation on WhatsApp"
                >
                  <PulsatingButton
                    pulseColor="#25D366"
                    duration="2s"
                    className={`text-white text-sm sm:text-base px-3 sm:px-4 py-2 theme-body font-semibold ${
                      isScrolled ? "" : "sm:bg-[#386641]"
                    }`}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="w-4 h-4 sm:w-5 sm:h-5 fill-white"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488" />
                    </svg>
                    <span className="hidden sm:inline">Book Consultation</span>
                    <span className="sm:hidden">Book Now</span>
                  </PulsatingButton>
                </Link>
              </>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
}
