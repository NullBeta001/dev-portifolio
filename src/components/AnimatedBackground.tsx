import React from 'react';
import { useTheme } from 'next-themes';

const AnimatedBackground: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <>
      {/* Primeira camada de background */}
      <div
        className="fixed inset-0 -z-10 animate-slide opacity-50"
        style={{
          backgroundImage: isDark
            ? 'linear-gradient(-60deg, rgba(124, 58, 237, 0.5) 50%, rgba(59, 130, 246, 0.5) 50%)'
            : 'linear-gradient(-60deg, rgba(240, 245, 255, 0.8) 50%, rgba(230, 235, 255, 0.7) 50%)',
          left: '-50%',
          right: '-50%',
        }}
      />

      {/* Segunda camada com direção reversa e duração diferente */}
      <div
        className="fixed inset-0 -z-10 animate-slide-reverse opacity-50"
        style={{
          backgroundImage: isDark
            ? 'linear-gradient(-60deg, rgba(124, 58, 237, 0.5) 50%, rgba(59, 130, 246, 0.5) 50%)'
            : 'linear-gradient(-60deg, rgba(240, 245, 255, 0.8) 50%, rgba(230, 235, 255, 0.7) 50%)',
          left: '-50%',
          right: '-50%',
        }}
      />

      {/* Terceira camada com duração mais longa */}
      <div
        className="fixed inset-0 -z-10 animate-slide-slow opacity-50"
        style={{
          backgroundImage: isDark
            ? 'linear-gradient(-60deg, rgba(124, 58, 237, 0.5) 50%, rgba(59, 130, 246, 0.5) 50%)'
            : 'linear-gradient(-60deg, rgba(240, 245, 255, 0.8) 50%, rgba(230, 235, 255, 0.7) 50%)',
          left: '-50%',
          right: '-50%',
        }}
      />

      {/* Overlay com noise texture para dar mais profundidade */}
      <div
        className="fixed inset-0 -z-10 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </>
  );
};

export default AnimatedBackground; 