"use client";

import { useMediaQuery } from "@/components/ui/use-media-query";

export default function DesktopStickyFooter() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  if (isMobile) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#fefae0] py-3 shadow-lg z-50 border-t border-[#283618]">
      <div className="container mx-auto flex justify-between items-center px-4">
        <button 
          onClick={() => window.location.href='#eligibility'} 
          className="text-lg font-medium text-black hover:text-gray-700 transition-colors flex-1 text-center"
        >
          Check LASIK Eligibility
        </button>
        
        <div className="h-8 w-px bg-blue-800/80"></div>
        
        <button 
          onClick={() => window.location.href='#simulator'} 
          className="text-lg font-medium text-black hover:text-gray-700 transition-colors flex-1 text-center"
        >
          Eyesight Simulator
        </button>
        
        <div className="h-8 w-px bg-blue-800/80"></div>
        
        <button 
          onClick={() => window.location.href='#calculator'} 
          className="text-lg font-medium text-black hover:text-gray-700 transition-colors flex-1 text-center"
        >
          LASIK Cost Calculator
        </button>
        
        <div className="h-8 w-px bg-blue-800/80"></div>
        
        <button 
          onClick={() => window.location.href='#consultation'} 
          className="text-lg font-medium text-black hover:text-gray-700 transition-colors flex-1 text-center"
        >
          Book a LASIK Consultation
        </button>
      </div>
    </div>
  );
} 