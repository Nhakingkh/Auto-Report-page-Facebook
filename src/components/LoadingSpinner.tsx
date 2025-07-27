import { cn } from '@/lib/utils';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  text?: string;
  className?: string;
}

export const LoadingSpinner = ({ size = 'md', text, className }: LoadingSpinnerProps) => {
  const sizes = {
    sm: 'w-6 h-6',
    md: 'w-10 h-10',
    lg: 'w-16 h-16'
  };

  return (
    <div className={cn("flex flex-col items-center justify-center space-y-4", className)}>
      <div className={cn("relative", sizes[size])}>
        <div className="absolute inset-0 rounded-full border-4 border-border"></div>
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-matrix-primary animate-spin"></div>
        <div className="absolute inset-2 rounded-full border-2 border-transparent border-t-matrix-glow animate-spin duration-700 reverse"></div>
      </div>
      {text && (
        <p className="text-sm font-kantumruy text-muted-foreground neon-text animate-pulse">
          {text}
        </p>
      )}
    </div>
  );
};