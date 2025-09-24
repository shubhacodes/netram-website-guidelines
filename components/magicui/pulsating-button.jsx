import React from "react";
import { cn } from "@/lib/utils";

export const PulsatingButton = React.forwardRef((
  {
    className,
    children,
    pulseColor = "#25D366",
    duration = "1.5s",
    ...props
  },
  ref,
) => {
  return (
    <div className="relative inline-block">
      {/* Radiating pulse rings */}
      <div 
        className="absolute inset-0 rounded-lg"
        style={{
          animation: `radiatingPulse ${duration} ease-out infinite`
        }}
      />
      <div 
        className="absolute inset-0 rounded-lg"
        style={{
          animation: `radiatingPulse ${duration} ease-out infinite 0.2s`
        }}
      />
      <div 
        className="absolute inset-0 rounded-lg"
        style={{
          animation: `radiatingPulse ${duration} ease-out infinite 0.4s`
        }}
      />
      
      <button
        ref={ref}
        className={cn(
          "relative flex cursor-pointer items-center justify-center gap-2 rounded-lg px-4 py-2 text-center text-white font-medium transition-all hover:scale-105",
          className
        )}
        style={{
          backgroundColor: pulseColor,
          "--pulse-color": pulseColor,
          "--duration": duration
        }}
        {...props}>
        <div className="relative z-10 flex items-center gap-2">
          {children}
        </div>
      </button>
    </div>
  );
});

PulsatingButton.displayName = "PulsatingButton";
