import { useEffect } from 'react';
import { Moon } from 'lucide-react';
import { NeonButton } from './NeonButton';

export const ThemeToggle = () => {
  useEffect(() => {
    // Force dark mode only
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }, []);

  return (
    <NeonButton
      variant="secondary"
      size="sm"
      className="flex items-center space-x-2 cursor-default"
      glowing={false}
    >
      <Moon className="w-4 h-4" />
      <span>ងងឹតប៉ុណ្ណោះ</span>
    </NeonButton>
  );
};