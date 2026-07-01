/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-premium': '#0D1117',
        'dark-secondary': '#161B22',
        'electric-blue': '#0066FF',
        'neon-purple': '#7B2EFF',
        'neon-green': '#00FF88',
        'gold': '#FFD700',
        'vibrant-red': '#FF3131',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': {
            boxShadow: '0 0 5px rgba(0, 102, 255, 0.5), 0 0 10px rgba(0, 102, 255, 0.3)',
          },
          '100%': {
            boxShadow: '0 0 20px rgba(0, 102, 255, 0.8), 0 0 30px rgba(0, 102, 255, 0.5)',
          },
        },
      },
    },
  },
  plugins: [],
}