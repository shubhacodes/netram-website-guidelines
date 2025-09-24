"use client";

import { MapPin, Phone, Mail } from "lucide-react";
import ContactForm from "./contact-form";

export default function CTA() {
  return (
    <section className="bg-theme-primary theme-transition relative">
      <div className="mx-auto max-w-6xl px-4 py-16 pb-32">
        <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
          {/* Left Section - Promotional Content */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 theme-heading text-theme-on-dark">
              Ready to See the World with New Eyes?
            </h2>

            <p className="text-lg md:text-xl mb-8 text-theme-on-dark leading-relaxed font-medium theme-body mx-auto md:mx-0 max-w-xl">
              Your journey to clarity starts today. A 5-minute, painless
              procedure is all that stands between you and a life of perfect
              vision. Schedule your FREE, no-obligation consultation to confirm
              your eligibility.
            </p>

            {/* Contact Information - Desktop Only */}
            <div className="hidden md:space-y-4 md:text-lg md:theme-body md:flex md:flex-col">
              <div className="flex items-center gap-3">
                <MapPin
                  size={24}
                  className="text-theme-on-dark/80 flex-shrink-0"
                />
                <span className="text-theme-on-dark font-medium theme-body">
                  E-98, GK II, New Delhi
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone
                  size={24}
                  className="text-theme-on-dark/80 flex-shrink-0"
                />
                <span className="text-theme-on-dark font-medium theme-body">
                  011 4104 6655, +91 93199 09455
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Mail
                  size={24}
                  className="text-theme-on-dark/80 flex-shrink-0"
                />
                <span className="text-theme-on-dark font-medium theme-body">
                  info@netrameyefoundation.com
                </span>
              </div>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <ContactForm />
        </div>

        {/* Mobile Contact Info & Copyright */}
        <div className="md:hidden space-y-3 mt-8 px-4 pb-12">
          <div className="flex items-center justify-center gap-3">
            <MapPin size={20} className="text-theme-on-dark/80 flex-shrink-0" />
            <p className="text-theme-on-dark font-medium theme-body">
              E-98, GK II, New Delhi
            </p>
          </div>
          <div className="flex items-center justify-center gap-3">
            <Phone size={20} className="text-theme-on-dark/80 flex-shrink-0" />
            <p className="text-theme-on-dark font-medium theme-body">
              011 4104 6655, +91 93199 09455
            </p>
          </div>
          <div className="flex items-center justify-center gap-3">
            <Mail size={20} className="text-theme-on-dark/80 flex-shrink-0" />
            <p className="text-theme-on-dark font-medium theme-body">
              info@netrameyefoundation.com
            </p>
          </div>
          <p className="text-theme-on-dark/70 text-sm mt-6 text-center theme-body">
            © 2025 – Netram Eye Foundation | All rights reserved
          </p>
        </div>
      </div>

      {/* Copyright text - Desktop Only */}
      <div className="hidden md:flex flex-col items-center absolute bottom-8 left-0 right-0">
        <div className="w-144 border-t-2 border-theme-on-dark/30 mt-16 mb-6"></div>
        <div className="text-center text-theme-on-dark/70 text-sm theme-body">
          © 2025 – Netram Eye Foundation | All rights reserved
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-theme-primary"></div>
    </section>
  );
}
