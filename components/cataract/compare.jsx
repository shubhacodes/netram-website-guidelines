"use client";

import { CheckCircle } from "lucide-react";
import { useContactDialog } from "./contact-dialog-provider";
import { SkeumorphicButton } from "../ui/skeumorphic-button";

export default function Compare() {
  const { openContactDialog } = useContactDialog();
  const green = "#386641";
  const cream = "#fefae0";

  return (
    <section id="compare" className="py-14" style={{ backgroundColor: cream }}>
      <div className="mx-auto max-w-6xl px-4">
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-10"
          style={{ fontFamily: '"Bona Nova", serif', color: green }}
        >
          Others vs Netram
        </h2>

        <div className="grid md:grid-cols-2 gap-6 items-stretch">
          {/* OTHERS */}
          <article className="relative rounded-3xl border bg-white/90 shadow-sm overflow-hidden flex flex-col items-center text-center">
            <header className="pt-8 px-6 md:px-10">
              <h3
                className="text-2xl md:text-3xl font-bold"
                style={{ fontFamily: '"Bona Nova", serif' }}
              >
                Others
              </h3>
              <p className="mt-2 text-base md:text-lg text-slate-600">
                Generic clinics with inconsistent quality
              </p>
            </header>

            <ul className="px-8 md:px-12 py-8 space-y-4 text-base md:text-lg text-slate-800">
              <li>✗ Longer recovery windows</li>
              <li>✗ Blade-based or outdated tech</li>
              <li>✗ Opaque pricing and hidden add-ons</li>
              <li>✗ Limited post-op follow-ups</li>
            </ul>

            <div className="mt-auto w-full pb-8 flex justify-center">
              <button
                className="px-6 py-3 rounded-2xl font-semibold border bg-white text-slate-700"
                style={{ borderColor: "#e5e7eb" }}
              >
                Not ideal for LASIK
              </button>
            </div>
          </article>

          {/* NETRAM */}
          <article className="relative rounded-3xl overflow-hidden ring-1 ring-[rgba(56,102,65,0.20)] bg-white flex flex-col items-center text-center min-h-[560px] md:min-h-[640px]">
            {/* Centered ribbon */}
            <div
              className="absolute top-4 left-1/2 -translate-x-1/2 z-10 text-white text-xs px-3 py-1 rounded-full font-semibold shadow-sm"
              style={{ backgroundColor: green }}
            >
              Recommended
            </div>

            {/* Decorative header band */}
            <div
              className="h-24 w-full"
              style={{
                background: `linear-gradient(135deg, ${green}, #2b4f33)`,
              }}
            />

            <div className="px-6 md:px-10 -mt-10 w-full">
              {/* Title block */}
              <div className="mx-auto max-w-xl rounded-2xl px-6 py-5 shadow-md bg-white border">
                <h3
                  className="text-2xl md:text-3xl font-bold"
                  style={{ fontFamily: '"Bona Nova", serif', color: green }}
                >
                  Netram Eye Centre
                </h3>
                <p className="mt-2 text-base md:text-lg text-slate-600">
                  Powered by MICRON M7 – Advanced German Excimer Laser
                </p>
              </div>

              {/* Feature list with icons */}
              <ul className="mx-auto max-w-2xl mt-8 space-y-5 text-base md:text-lg text-slate-900">
                {[
                  "Safe German technology – no blades, no stress",
                  "Clear vision for most patients within a day",
                  "Advanced eye tracking and precise beam delivery",
                  "High precision with minimal tissue heating",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center justify-center gap-3"
                  >
                    <CheckCircle
                      size={22}
                      style={{ color: green }}
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Machine highlight band */}
              <div
                className="mx-auto max-w-xl mt-8 rounded-2xl px-6 py-5 text-white"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(56,102,65,0.95), rgba(56,102,65,0.85))",
                }}
              >
                <p className="text-base md:text-lg font-semibold">
                  MICRON M7 Excimer Laser
                </p>
                <p className="text-sm md:text-base opacity-95">
                  German precision, compact design, trusted worldwide.
                </p>
              </div>

              {/* Centered Skeumorphic CTA */}
              <div className="mt-8 mb-10 flex justify-center">
                <SkeumorphicButton
                  size="lg"
                  className="inline-flex items-center justify-center gap-2 text-base md:text-lg"
                  style={{ backgroundColor: green, color: cream }}
                  onClick={openContactDialog}
                >
                  Choose Netram
                </SkeumorphicButton>
              </div>
            </div>

            {/* Soft footer tint to elongate */}
            <div
              className="mt-auto h-16 w-full"
              style={{
                background: `linear-gradient(0deg, ${green}0F, transparent)`,
              }}
            />
          </article>
        </div>

        <p className="mt-4 text-xs text-center text-slate-600">
          *Results vary by clinical evaluation.
        </p>
      </div>
    </section>
  );
}
