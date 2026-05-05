import plugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,json}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Sora', 'Inter', 'ui-sans-serif', 'system-ui'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        night: '#050816',
        ink: '#0b1020',
        aurora: '#7c3aed',
        cyanlite: '#22d3ee',
        gold: '#facc15',
      },
      boxShadow: {
        glow: '0 0 70px rgba(124, 58, 237, 0.35)',
        card: '0 24px 80px rgba(2, 6, 23, 0.22)',
      },
      backgroundImage: {
        'radial-fade': 'radial-gradient(circle at top left, rgba(34,211,238,0.18), transparent 32%), radial-gradient(circle at 80% 20%, rgba(124,58,237,0.22), transparent 30%), radial-gradient(circle at 50% 100%, rgba(250,204,21,0.09), transparent 28%)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.55', transform: 'scale(1)' },
          '50%': { opacity: '0.9', transform: 'scale(1.08)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 3s linear infinite',
        pulseSoft: 'pulseSoft 5s ease-in-out infinite',
      },
    },
  },
  plugins: [
    plugin(({ addVariant }) => {
      addVariant('light', '.light &');
    }),
  ],
};
