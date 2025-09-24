"use client";

import Image from "next/image";
import ContactForm from "./contact-form";

export default function HeroWithStats() {
  return (
    <>
      {/* HERO with background image and overlay */}
      <section className="relative min-h-[90vh] pt-16 sm:pt-36 sm:h-[calc(100vh+10rem)] flex items-center">
        {/* Mobile Background */}
        <div
          className="absolute inset-0 bg-[#1f3523] sm:hidden"
        />

        {/* Desktop Background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden sm:block"
          style={{
            backgroundImage: "url('/hero_eye_cataract_2.png')",
            filter: "brightness(0.4)"
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#386641]/20" />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-6xl px-4 py-6 w-full">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-10 items-center">
            {/* Left */}
            <div className="relative text-center md:text-left">
              <img
                src="/hero_mobile_cover_3.svg"
                alt="Cataract Surgery - See Clearly Again"
                className="sm:hidden w-full max-w-md mx-auto rounded-xl overflow-hidden"
              />
              <h1 className="hidden sm:block text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight font-freight text-[#fefae0]">
                See the World 
                <br className="mb-1 sm:mb-2" />
                <span className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-[#386641] bg-[#fefae0] mt-1 sm:mt-2 inline-block">
                Clearly Again
                </span>
              </h1>

             {/* 
              <p className="mt-3 sm:mt-4 md:mt-5 text-lg md:text-xl text-[#fefae0] max-w-lg mx-auto md:mx-0 font-proxima font-medium hidden sm:block">
                Blade-free, stitchless, and comfortable. Day-care cataract surgery with premium lenses and quick recovery.
              </p>
            */}

              <ul className="mt-4 sm:mt-6 space-y-2 sm:space-y-3 text-lg md:text-xl font-proxima font-medium hidden sm:inline-flex sm:flex-col md:block">
                {[
                  "Rated in 10 Best Eye Hospitals in NCR",
                  "Asia's Fastest Surgeon",
                  "Less than 5 minutes Surgery",
                  "Advanced FLACS/Femto Options",
                  "Smallest Incision, Blade-Free",
                  "No Injection, No Bandage, No Pain",
                  "No Cost EMI Options",
                  "All Major TPAs",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 sm:gap-3 justify-center md:justify-start">
                    <span className="inline-flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full text-[#386641] text-base sm:text-lg bg-[#fefae0]">
                      ✓
                    </span>
                    <span className="text-[#fefae0]">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Contact Form - Mobile */}
              <div className="mt-6 md:hidden">
                <ContactForm />
              </div>

              {/* Stats Section - Mobile */}
              <div className="mt-6 md:hidden rounded-xl border p-3 border-[#fefae0]/30 bg-[#386641]/60 backdrop-blur-sm">
                <div className="grid grid-cols-3 gap-2">
                  <div>
                    <h3 className="text-xl font-extrabold text-[#fefae0] font-freight">19+ </h3>
                    <p className="text-xs text-[#fefae0]/90 font-proxima font-medium">
                      Years, Worldwide Trust
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-[#fefae0] font-freight">30k+</h3>
                    <p className="text-xs text-[#fefae0]/90 font-proxima font-medium">
                      Cataract Surgeries
                    </p>
                  </div>
                  <div>
                    <div className="flex flex-col items-center gap-0.5">
                      <div className="flex items-center justify-center gap-1">
                        <h3 className="text-xl font-extrabold text-[#fefae0] font-freight">4.9</h3>
                        <div className="relative z-10">
                          <Image 
                            src="/google_logo.png" 
                            alt="Google" 
                            width={22} 
                            height={22} 
                            className="object-contain"
                          />
                        </div>
                      </div>
                      <div className="flex items-center justify-center text-[#ffd700] text-sm leading-none">
                        <span>★★★★</span>
                        <div className="relative">
                          <span className="text-[#ffd700]/30">★</span>
                          <span className="absolute left-0 top-0 overflow-hidden" style={{ width: '90%' }}>★</span>
                        </div>
                      </div>
                      <p className="text-xs text-[#fefae0]/90 font-proxima font-medium">
                        2000+ reviews
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Contact Form - Desktop */}
            <div className="hidden md:block">
              <ContactForm />
            </div>
          </div>

          {/* Stats Section - Desktop */}
          <div className="hidden md:block mt-10 rounded-2xl border p-6 md:p-8 border-[#fefae0]/30 bg-[#386641]/60 backdrop-blur-sm">
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <h3 className="text-3xl font-extrabold text-[#fefae0] font-freight">19+ </h3>
                <p className="text-base md:text-lg text-[#fefae0]/90 font-proxima font-medium">
                Years, Worldwide Trust
                </p>
              </div>
              <div>
                <h3 className="text-3xl font-extrabold text-[#fefae0] font-freight">30,000+</h3>
                <p className="text-base md:text-lg text-[#fefae0]/90 font-proxima font-medium">
                  Successful cataract surgeries
                </p>
              </div>
              <div>
                <div className="flex flex-col items-center gap-2">
                  <div className="flex items-center justify-center gap-2">
                    <div className="flex items-center gap-1">
                      <h3 className="text-3xl font-extrabold text-[#fefae0] font-freight">4.9</h3>
                      <div className="relative">
                        <Image 
                          src="/google_logo.png" 
                          alt="Google" 
                          width={28} 
                          height={28} 
                          className="object-contain"
                        />
                      </div>
                    </div>
                    <p className="text-base md:text-lg text-[#fefae0]/90 font-proxima font-medium">
                      2000+ reviews
                    </p>
                  </div>
                  <div className="flex text-[#ffd700] text-2xl leading-none">
                    <span>★★★★</span>
                    <div className="relative">
                      <span className="text-[#ffd700]/30">★</span>
                      <span className="absolute left-0 top-0 overflow-hidden" style={{ width: '90%' }}>★</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
