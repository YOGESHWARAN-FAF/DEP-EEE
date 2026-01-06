/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-space': '#050A14', // Deep navy/black
        'electric-blue': '#00F0FF',
        'electric-yellow': '#FFD700',
        'neon-purple': '#BD00FF',
        'glass-white': 'rgba(255, 255, 255, 0.1)',
      },
      backgroundImage: {
        'circuit-grid': "url('/circuit-pattern.svg')", // Placeholder, will generate or use CSS
        'radial-glow': 'radial-gradient(circle, rgba(0, 240, 255, 0.15) 0%, rgba(5, 10, 20, 0) 70%)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        orbitron: ['Orbitron', 'sans-serif'], // For headers if I was adding fonts, but user said "Clean, professional typography" so Inter is good. Maybe Orbitron for "EEE TECHNICAL QUIZ" 
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-fast': 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 12s linear infinite',
        'shock': 'shock 0.5s ease-in-out',
        'glow-slide': 'glow-slide 3s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shock: {
          '0%, 100%': { transform: 'scale(1)' },
          '10%, 90%': { transform: 'scale(0.95) translate(-1px, 1px)' },
          '20%, 80%': { transform: 'scale(1.05) translate(1px, -1px)' },
          '30%, 50%, 70%': { transform: 'scale(1.05) translate(-2px, 2px)' },
          '40%, 60%': { transform: 'scale(1.05) translate(2px, -2px)' },
        },
        'glow-slide': {
          '0%': { backgroundPosition: '200% center' },
          '100%': { backgroundPosition: '-200% center' },
        }
      }
    },
  },
  plugins: [],
}
