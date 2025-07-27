import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface NeonButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  glowing?: boolean;
}

export const NeonButton = forwardRef<HTMLButtonElement, NeonButtonProps>(
  ({ className, variant = 'primary', size = 'md', glowing = false, children, ...props }, ref) => {
    const baseClasses = "relative overflow-hidden font-kantumruy font-semibold transition-all duration-300 transform border-2";
    
    const variants = {
      primary: "bg-primary text-primary-foreground border-cyber-border hover:bg-primary/90",
      secondary: "bg-secondary text-secondary-foreground border-cyber-border hover:bg-secondary/90",
      danger: "bg-destructive text-destructive-foreground border-red-500 hover:bg-destructive/90"
    };

    const sizes = {
      sm: "px-4 py-2 text-sm rounded-md",
      md: "px-6 py-3 text-base rounded-lg",
      lg: "px-8 py-4 text-lg rounded-xl"
    };

    const glowClass = glowing ? "neon-glow" : "";

    return (
      <button
        ref={ref}
        className={cn(
          baseClasses,
          variants[variant],
          sizes[size],
          glowClass,
          "hover:scale-105 hover:shadow-[0_0_30px_rgba(0,255,0,0.5)] active:scale-95",
          "before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-matrix-glow/20 before:to-transparent",
          "before:translate-x-[-100%] before:transition-transform before:duration-500 hover:before:translate-x-[100%]",
          className
        )}
        {...props}
      >
        <span className="relative z-10">{children}</span>
      </button>
    );
  }
);

NeonButton.displayName = "NeonButton";