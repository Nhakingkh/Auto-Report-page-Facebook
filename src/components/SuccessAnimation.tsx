import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface SuccessAnimationProps {
  show: boolean;
  reportCount: number;
  onComplete?: () => void;
}

export const SuccessAnimation = ({ show, reportCount, onComplete }: SuccessAnimationProps) => {
  const [displayCount, setDisplayCount] = useState(0);
  const [showCheckmark, setShowCheckmark] = useState(false);
  const [showExplosion, setShowExplosion] = useState(false);
  const [stage, setStage] = useState(0); // 0: counting, 1: explosion, 2: celebration

  useEffect(() => {
    if (!show) {
      setDisplayCount(0);
      setShowCheckmark(false);
      setShowExplosion(false);
      setStage(0);
      return;
    }

    // Stage 0: Slower counting animation (30 seconds)
    const duration = 30000; // 30 seconds for counting
    const increment = reportCount / (duration / 50);
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= reportCount) {
        setDisplayCount(reportCount);
        clearInterval(timer);
        
        // Stage 1: Explosion effect
        setTimeout(() => {
          setShowExplosion(true);
          setStage(1);
        }, 500);
        
        // Stage 2: Celebration
        setTimeout(() => {
          setShowCheckmark(true);
          setStage(2);
        }, 2000);
        
        // Auto-close after 1 minute (60 seconds)
        setTimeout(() => {
          onComplete?.();
        }, 60000);
      } else {
        setDisplayCount(Math.floor(current));
      }
    }, 50);

    return () => clearInterval(timer);
  }, [show, reportCount, onComplete]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/95 backdrop-blur-lg z-50 flex items-center justify-center overflow-hidden">
      {/* Animated Matrix Background */}
      <div className="absolute inset-0">
        {Array.from({ length: 200 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-matrix-primary opacity-20 animate-pulse font-kantumruy"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 30 + 10}px`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 2 + 1}s`,
            }}
          >
            {['រ', 'ា', 'យ', 'ក', 'ា', 'រ', 'ណ', '៍', '✓', '●'][Math.floor(Math.random() * 10)]}
          </div>
        ))}
      </div>

      {/* Explosion Effect */}
      {showExplosion && (
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-matrix-primary rounded-full animate-ping"
              style={{
                left: `${45 + Math.random() * 10}%`,
                top: `${45 + Math.random() * 10}%`,
                animation: `explosion 2s ease-out forwards`,
                animationDelay: `${Math.random() * 0.5}s`,
                transform: `translate(${(Math.random() - 0.5) * 400}px, ${(Math.random() - 0.5) * 400}px)`,
              }}
            />
          ))}
        </div>
      )}

      <div className="text-center space-y-8 relative z-10">
        {/* Main Title with Enhanced Glitch */}
        <div className="relative">
          <h1 
            className={cn(
              "text-4xl md:text-7xl font-kantumruy font-bold transition-all duration-1000",
              stage === 0 && "text-white animate-pulse",
              stage === 1 && "text-matrix-primary animate-bounce scale-110",
              stage === 2 && "text-matrix-primary animate-pulse neon-glow scale-125"
            )}
            style={{
              textShadow: stage >= 1 ? '0 0 20px #00ff00, 0 0 40px #00ff00, 0 0 60px #00ff00' : 'none'
            }}
          >
            {stage >= 2 ? 'រាយការណ៍ទាំងអស់បានជោគជ័យ!' : 'កំពុងដំណើរការ...'}
          </h1>
          
          {/* Scanning line effect */}
          {stage === 0 && (
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-matrix-primary/30 to-transparent w-full h-full animate-pulse"></div>
            </div>
          )}
        </div>

        {/* Counter with Enhanced Effects */}
        <div className="space-y-6">
          <div className="relative">
            <div 
              className={cn(
                "text-6xl md:text-9xl font-kantumruy font-bold transition-all duration-500",
                stage === 0 && "text-white",
                stage === 1 && "text-matrix-primary scale-150 animate-bounce",
                stage === 2 && "text-matrix-primary scale-125 neon-glow"
              )}
              style={{
                textShadow: stage >= 1 ? '0 0 30px #00ff00, 0 0 60px #00ff00' : 'none',
                filter: stage >= 1 ? 'drop-shadow(0 0 20px #00ff00)' : 'none'
              }}
            >
              {displayCount.toLocaleString()}
            </div>
            
            {/* Orbiting particles around counter */}
            {stage >= 1 && (
              <div className="absolute inset-0 flex items-center justify-center">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-3 h-3 bg-matrix-primary rounded-full"
                    style={{
                      animation: `orbit 2s linear infinite`,
                      animationDelay: `${i * 0.25}s`,
                      transformOrigin: '150px',
                    }}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Progress Description */}
          <div className="space-y-4">
            <p className={cn(
              "text-xl md:text-3xl font-kantumruy transition-all duration-500",
              stage === 0 && "text-gray-400",
              stage >= 1 && "text-matrix-primary neon-text"
            )}>
              {stage === 0 && 'កំពុងដាក់ស្នើរាយការណ៍...'}
              {stage === 1 && 'ការដំណើរការបានបញ្ចប់!'}
              {stage === 2 && 'រាយការណ៍ទាំងអស់ត្រូវបានផ្ញើជោគជ័យ!'}
            </p>

            {/* Enhanced Progress Bar */}
            <div className="w-96 mx-auto">
              <div className="relative bg-gray-800 rounded-full h-6 border-2 border-cyber-border overflow-hidden">
                <div 
                  className={cn(
                    "h-full transition-all duration-300 relative",
                    stage === 0 && "bg-gradient-to-r from-blue-500 to-blue-600",
                    stage >= 1 && "bg-gradient-to-r from-matrix-primary to-matrix-glow neon-glow"
                  )}
                  style={{ width: `${Math.min((displayCount / reportCount) * 100, 100)}%` }}
                >
                  {/* Animated shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                </div>
              </div>
              <p className="text-center mt-2 font-kantumruy text-matrix-primary">
                {Math.round((displayCount / reportCount) * 100)}% បានបញ្ចប់
              </p>
            </div>
          </div>
        </div>

        {/* Success Checkmark with Enhanced Animation */}
        {showCheckmark && (
          <div className="relative">
            <div className="success-checkmark neon-glow animate-bounce mx-auto" 
                 style={{ 
                   boxShadow: '0 0 50px #00ff00, inset 0 0 50px rgba(0,255,0,0.3)' 
                 }}>
            </div>
            
            {/* Radiating waves */}
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="absolute inset-0 border-4 border-matrix-primary rounded-full animate-ping"
                style={{
                  animationDelay: `${i * 0.5}s`,
                  animationDuration: '2s',
                }}
              />
            ))}
          </div>
        )}

        {/* Live Report Messages */}
        {stage === 0 && displayCount > 0 && (
          <div className="terminal p-6 max-w-lg mx-auto text-left max-h-60 overflow-y-auto bg-black/70 border-2 border-matrix-primary rounded-lg neon-glow">
            <div className="space-y-1">
              {Array.from({ length: Math.min(displayCount, 10) }, (_, i) => {
                const reportNumber = displayCount - (9 - i);
                if (reportNumber <= 0) return null;
                return (
                  <div key={reportNumber} className="text-matrix-primary font-kantumruy animate-fade-in">
                    <span className="text-matrix-glow">{'>'}</span> {reportNumber} Success Report ✓
                  </div>
                );
              })}
              {displayCount > 10 && (
                <div className="text-matrix-primary/60 font-kantumruy text-sm">
                  ... {displayCount - 10} more reports completed
                </div>
              )}
            </div>
          </div>
        )}

        {/* Terminal Messages with Typewriter Effect */}
        {stage >= 2 && (
          <div className="terminal p-6 max-w-lg mx-auto text-left space-y-3 bg-black/70 border-2 border-matrix-primary rounded-lg neon-glow">
            <div className="text-matrix-primary font-kantumruy animate-pulse">
              <span className="animate-ping">{'>'}</span> ការដំណើរការបានបញ្ចប់ជោគជ័យ...
            </div>
            <div className="text-matrix-primary font-kantumruy animate-pulse">
              <span className="animate-ping">{'>'}</span> រាយការណ៍ទាំង ១០០០ ត្រូវបានផ្ញើ
            </div>
            <div className="text-matrix-primary font-kantumruy animate-pulse">
              <span className="animate-ping">{'>'}</span> សូមអរគុណសម្រាប់ការជួយការពារសហគមន៍
            </div>
            <div className="text-matrix-primary font-kantumruy animate-pulse">
              <span className="animate-ping">{'>'}</span> ការបេសកកម្មបានជោគជ័យ! 🎯
            </div>
          </div>
        )}
      </div>

    </div>
  );
};