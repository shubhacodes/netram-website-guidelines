import { cn } from "../../lib/utils";
import { forwardRef } from "react";

const SkeumorphicButton = forwardRef(
  ({ className, size = "default", variant = "default", ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          {
            "h-10 px-4 py-2": size === "default",
            "h-9 rounded-md px-3": size === "sm",
            "h-11 rounded-md px-8": size === "lg",
            "bg-primary text-primary-foreground hover:bg-primary/90":
              variant === "default",
            "border border-input bg-background hover:bg-accent hover:text-accent-foreground":
              variant === "outline",
          },
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

SkeumorphicButton.displayName = "SkeumorphicButton";

export { SkeumorphicButton };
