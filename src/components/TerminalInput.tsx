import { InputHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface TerminalInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const TerminalInput = forwardRef<HTMLInputElement, TerminalInputProps>(
  ({ className, label, error, ...props }, ref) => {
    return (
      <div className="space-y-2">
        {label && (
          <label className="text-sm font-kantumruy font-medium neon-text">
            {label}
          </label>
        )}
        <div className="relative">
          <input
            ref={ref}
            className={cn(
              "w-full px-4 py-3 bg-card text-foreground border-2 border-cyber-border rounded-lg",
              "font-kantumruy placeholder:text-muted-foreground",
              "focus:outline-none focus:border-matrix-primary focus:ring-2 focus:ring-matrix-glow/20",
              "transition-all duration-300",
              "hover:border-cyber-accent hover:shadow-[0_0_10px_rgba(0,255,0,0.2)]",
              error && "border-destructive focus:border-destructive",
              className
            )}
            {...props}
          />
          <div className="absolute inset-0 border-2 border-transparent rounded-lg pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-matrix-glow/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
          </div>
        </div>
        {error && (
          <p className="text-sm text-destructive font-kantumruy">{error}</p>
        )}
      </div>
    );
  }
);

TerminalInput.displayName = "TerminalInput";