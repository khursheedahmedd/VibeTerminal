
import * as React from "react";
import { motion, MotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

// NeonButton Props
type NeonButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  asChild?: boolean;
  whileHover?: MotionProps["whileHover"];
  whileTap?: MotionProps["whileTap"];
  "aria-label"?: string;
};

const neonGlow = {
  initial: { boxShadow: "0 0 0px 0px #7AFBED, 0 0 0px 0px #00FFD1" },
  animate: {
    boxShadow: [
      "0 0 0px 0px #7AFBED, 0 0 0px 0px #00FFD1",
      "0 0 16px 4px #7AFBED, 0 0 2px 0px #00FFD1"
    ]
  }
};

export const NeonButton = React.forwardRef<HTMLButtonElement, NeonButtonProps>(
  (
    {
      className,
      children,
      whileHover,
      whileTap,
      asChild,
      "aria-label": ariaLabel,
      ...props
    },
    ref
  ) => {
    return (
      <motion.button
        ref={ref}
        className={cn(
          "cta-target relative z-10 isolate select-none px-6 py-3 rounded-xl font-semibold text-base bg-primary-neon text-base hover:shadow-neon focus-visible:ring-2 focus-visible:ring-accent focus:outline-none transition-all duration-150",
          "border border-accent shadow-glass backdrop-blur-glass",
          "aria-label:outline-none",
          "hover:scale-105 active:scale-95",
          "focus-visible:ring-offset-2",
          className
        )}
        style={{
          color: "#0D0D0D",
          background: "linear-gradient(90deg, #7AFBED 0%, #00FFD1 100%)",
          minWidth: 48,
          minHeight: 48,
          borderRadius: 12
        }}
        tabIndex={0}
        aria-label={ariaLabel}
        initial="initial"
        animate="animate"
        whileHover={whileHover ?? { scale: 1.05, filter: "brightness(1.1)" }}
        whileTap={whileTap ?? { scale: 0.95 }}
        variants={neonGlow}
        {...props}
      >
        {children}
        <span className="sr-only">{ariaLabel}</span>
      </motion.button>
    );
  }
);
NeonButton.displayName = "NeonButton";
