import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bharatPrimary: {
          50:  '#fdf4ee',
          100: '#fae3d0',
          200: '#f5c59d',
          300: '#eda168',
          400: '#e47e3c',
          500: '#AB5419',
          600: '#964915',
          700: '#7b3a11',
          800: '#622e0e',
          900: '#51260c',
        },
        bharatSecondary: {
          50:  '#fdf9f3',
          100: '#faf1e3',
          200: '#f4dfc3',
          300: '#ecc89a',
          400: '#E0B17D',
          500: '#d49a5a',
          600: '#c0813f',
          700: '#9f6832',
          800: '#80532c',
          900: '#694527',
        },
        bharatNeutral: {
          50:  '#f6f4f1',
          100: '#ece8e1',
          200: '#d9d2c5',
          300: '#c0b5a2',
          400: '#a89780',
          500: '#928464',
          600: '#7d7056',
          700: '#665b47',
          800: '#554c3c',
          900: '#474034',
        },
        bharatDark:   '#1A0F08',
        bharatDeep:   '#2C1A0E',
        bharatCream:  '#FDF6EE',
        bharatLight:  '#FBF0E4',
        bharatBorder: '#E8D5BC',
      },
      fontFamily: {
        display: ['var(--font-cinzel)', 'Georgia', 'serif'],
        body:    ['var(--font-inter)',  'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in':     'fadeIn 0.6s ease-out forwards',
        'slide-up':    'slideUp 0.6s ease-out forwards',
        'slide-right': 'slideRight 0.6s ease-out forwards',
        'scale-in':    'scaleIn 0.4s ease-out forwards',
        'shimmer':     'shimmer 2s linear infinite',
        'float':       'float 4s ease-in-out infinite',
        'pulse-warm':  'pulseWarm 2s ease-in-out infinite',
        'spin-slow':   'spin 8s linear infinite',
      },
      keyframes: {
        fadeIn:    { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        slideUp:   { '0%': { opacity: '0', transform: 'translateY(24px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        slideRight:{ '0%': { opacity: '0', transform: 'translateX(-24px)' }, '100%': { opacity: '1', transform: 'translateX(0)' } },
        scaleIn:   { '0%': { opacity: '0', transform: 'scale(0.92)' }, '100%': { opacity: '1', transform: 'scale(1)' } },
        shimmer:   { '0%': { backgroundPosition: '-200% center' }, '100%': { backgroundPosition: '200% center' } },
        float:     { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-10px)' } },
        pulseWarm: { '0%,100%': { boxShadow: '0 0 0 0 rgba(171,84,25,0.3)' }, '50%': { boxShadow: '0 0 0 12px rgba(171,84,25,0)' } },
      },
      boxShadow: {
        cultural: '0 20px 60px rgba(171,84,25,0.15)',
        warm:     '0 8px 30px rgba(171,84,25,0.12)',
        subtle:   '0 2px 12px rgba(171,84,25,0.08)',
        card:     '0 4px 24px rgba(26,15,8,0.08)',
      },
      backgroundImage: {
        'warm-gradient':  'linear-gradient(135deg, #AB5419 0%, #E0B17D 100%)',
        'dark-gradient':  'linear-gradient(180deg, #1A0F08 0%, #2C1A0E 100%)',
        'cream-gradient': 'linear-gradient(180deg, #FDF6EE 0%, #FBF0E4 100%)',
      },
    },
  },
  plugins: [],
};

export default config;
