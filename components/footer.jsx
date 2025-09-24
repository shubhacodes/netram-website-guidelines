"use client";

import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  const green = "#386641";
  const cream = "#fefae0";

  return (
    <div className="bg-[#1f2937] -mt-1">  {/* Added wrapper with background and negative margin */}
      <footer className="pb-[72px] md:pb-[68px]">
        <div className="mx-auto max-w-6xl px-4 py-6 sm:py-8">
          {/* Mobile Contact Info */}
          <div className="md:hidden space-y-4 text-lg font-proxima flex flex-col items-center mb-6 text-center">
            <div className="flex flex-col items-center gap-2">
              <MapPin size={20} className="text-gray-400 flex-shrink-0" />
              <span className="text-gray-400 text-sm font-medium">
                E-98, Inder Mohan Bhardwaj Marg, Block E, GK II, New Delhi
              </span>
            </div>

            <div className="flex items-center gap-3">
              <Phone size={20} className="text-gray-400 flex-shrink-0" />
              <span className="text-gray-400 text-sm font-medium">+91 9319909455</span>
            </div>

            <div className="flex items-center gap-3">
              <Mail size={20} className="text-gray-400 flex-shrink-0" />
              <span className="text-gray-400 text-sm font-medium">
                info@netrameyefoundation.com
              </span>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center mb-4 sm:mb-6">
            <p className="text-gray-400 text-xs sm:text-sm font-proxima font-medium">
              © 2025 – Netram Eye Foundation | All rights reserved
            </p>
          </div>

          {/* Policy Links */}
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-4 sm:gap-6 justify-center text-center">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm font-proxima font-medium"
            >
              Terms and Conditions
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm font-proxima font-medium"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm font-proxima font-medium"
            >
              Cookie Policy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm font-proxima font-medium"
            >
              Ethics Policy
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
