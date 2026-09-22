/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          900: '#0a0a0b',
          800: '#111113',
          700: '#16161a',
          600: '#1e1e24',
          500: '#2a2a32',
          400: '#3a3a44',
          300: '#5a5a68',
          200: '#8a8a98',
          100: '#c8c8d0',
        },
        champagne: {
          50: '#fdfaf3',
          100: '#f7eed8',
          200: '#ecd9b0',
          300: '#e0c285',
          400: '#d4a858',
          500: '#c89b3e',
          600: '#b8852e',
          700: '#996e25',
          800: '#7a5820',
          900: '#5e4419',
        },
        accent: {
          400: '#e8c896',
          500: '#d4af6f',
          600: '#b8935a',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Jost', 'system-ui', 'sans-serif'],
      },
      spacing: {
        18: '4.5rem',
        88: '22rem',
      },
      fontSize: {
        'hero': ['clamp(2.5rem, 8vw, 6.5rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display': ['clamp(2rem, 5vw, 4rem)', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
        'section': ['clamp(1.75rem, 3.5vw, 2.75rem)', { lineHeight: '1.15' }],
      },
      animation: {
        'fade-up': 'fadeUp 1s ease-out forwards',
        'fade-in': 'fadeIn 1.2s ease-out forwards',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'scroll-down': 'scrollDown 2s ease-in-out infinite',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'slide-in-right': 'slideInRight 0.4s ease-out forwards',
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        shimmer: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        scrollDown: {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(12px)', opacity: '0' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
