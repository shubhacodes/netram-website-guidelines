'use client';

import React from 'react';
import { Phone, Calendar } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useContactDialog } from "./contact-dialog-provider";

const MobileSticky = () => {
  const { openContactDialog } = useContactDialog();
  const pathname = usePathname();
  const BTN_COLOR = '#386641';        // Using the existing green color
  const BASE_HEIGHT = 68;             // consistent tap-target height

  return (
    <>
      {/* mobile-only fixed footer */}
      <footer className="md:hidden block" role="contentinfo" aria-label="mobile quick actions">
        <div
          className="fixed bottom-0 w-full z-50 border-t border-gray-100 bg-[#fefae0] shadow-[0_-2px_10px_rgba(0,0,0,0.08)]"
          style={{
            height: `calc(${BASE_HEIGHT}px + env(safe-area-inset-bottom, 0px))`,
            paddingBottom: 'env(safe-area-inset-bottom, 0px)',
            transform: 'translateZ(0)',
            backfaceVisibility: 'hidden',
          }}
        >
          {/* buttons */}
          <div className="grid h-[68px] grid-cols-3 px-4">
            <button
              type="button"
              onClick={openContactDialog}
              className="flex flex-col items-center justify-center relative"
              aria-label="Book an appointment now"
            >
              <Calendar className="h-6 w-6" style={{ color: BTN_COLOR }} />
              <span className="mt-1 text-xs font-medium" style={{ color: BTN_COLOR }}>Book Now</span>
              <div className="absolute right-0 top-[15%] bottom-[15%] w-px bg-gray-200" />
            </button>

            <Link
              href="https://wa.me/919319909455"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center relative"
              aria-label="Chat on WhatsApp"
            >
              <FaWhatsapp className="h-6 w-6" style={{ color: BTN_COLOR }} />
              <span className="mt-1 text-xs font-medium" style={{ color: BTN_COLOR }}>WhatsApp</span>
              <div className="absolute right-0 top-[15%] bottom-[15%] w-px bg-gray-200" />
            </Link>

            <Link
              href="tel:01141046655"
              className="flex flex-col items-center justify-center"
              aria-label="Call us now"
            >
              <Phone className="h-6 w-6" style={{ color: BTN_COLOR }} />
              <span className="mt-1 text-xs font-medium" style={{ color: BTN_COLOR }}>Call Now</span>
            </Link>
          </div>
        </div>
      </footer>

      {/* spacer div - only show on pages that need it */}
      {pathname !== '/' && (
        <div
          className="md:hidden block"
          aria-hidden="true"
          style={{ height: `calc(${BASE_HEIGHT}px + env(safe-area-inset-bottom, 0px))` }}
        />
      )}
    </>
  );
};

export default MobileSticky;
