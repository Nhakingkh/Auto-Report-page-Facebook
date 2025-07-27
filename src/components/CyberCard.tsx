import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CyberCardProps {
  children: ReactNode;
  className?: string;
  glowing?: boolean;
  animated?: boolean;
}

export const CyberCard = ({ children, className, glowing = false, animated = false }: CyberCardProps) => {
  return (
    <div
      className={cn(
        "relative bg-card text-card-foreground rounded-lg border-2 border-cyber-border p-6",
        "before:absolute before:inset-0 before:rounded-lg before:border-2 before:border-transparent",
        "before:bg-gradient-to-r before:from-cyber-border before:via-cyber-accent before:to-cyber-border",
        "before:bg-[length:200%_100%] before:animate-[cyber-scan_3s_infinite]",
        glowing && "shadow-[0_0_20px_rgba(0,255,0,0.3)]",
        animated && "transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(0,255,0,0.5)]",
        className
      )}
    >
      <div className="relative z-10 backdrop-blur-sm">
        {children}
      </div>
    </div>
  );
};