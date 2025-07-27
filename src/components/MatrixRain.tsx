import { useEffect, useRef } from 'react';

// Khmer characters for matrix effect
const khmerChars = 'កខគឃងចឆជឈញដឋឌឍណតថទធនបផពភមយរលវសហឡអឥឦឧឨឩឪឫឬឭឮឯឰឱឲឳ';

export const MatrixRain = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Matrix rain parameters
    const fontSize = 16;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = new Array(columns).fill(0);

    // Animation function
    const animate = () => {
      // Semi-transparent black background for trail effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Matrix green color
      ctx.fillStyle = '#00ff00';
      ctx.font = `${fontSize}px 'Kantumruy Pro', monospace`;

      // Draw characters
      for (let i = 0; i < drops.length; i++) {
        const char = khmerChars[Math.floor(Math.random() * khmerChars.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        ctx.fillText(char, x, y);

        // Reset drop if it reaches bottom or randomly
        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    };

    const interval = setInterval(animate, 50);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-10"
      style={{ background: 'transparent' }}
    />
  );
};