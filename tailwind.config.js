/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          50: '#ebf5ff',
          100: '#e1efff',
          200: '#c3ddff',
          300: '#a4caff',
          400: '#76acff',
          500: '#3490dc', // primary blue
          600: '#2779bd', // secondary blue
          700: '#1c64d2',
          800: '#1a56db',
          900: '#1e429f',
        },
        green: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#38c172', // primary green
          600: '#1f9d55', // secondary green
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        purple: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#9561e2', // primary purple
          600: '#794acf', // secondary purple
          700: '#7e22ce',
          800: '#6b21a8',
          900: '#581c87',
        },
        coral: {
          50: '#fff1f2',
          100: '#ffe4e6',
          200: '#fecdd3',
          300: '#fda4af',
          400: '#fb7185',
          500: '#f66d9b', // primary coral
          600: '#eb5286', // secondary coral
          700: '#e11d48',
          800: '#be123c',
          900: '#9f1239',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        heading: ['Poppins', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-rainbow': 'linear-gradient(90deg, var(--color-primary-blue), var(--color-primary-green), var(--color-primary-purple), var(--color-primary-coral))',
        'gradient-rainbow-light': 'linear-gradient(90deg, var(--color-light-blue), var(--color-light-green), var(--color-light-purple), var(--color-light-coral))',
      },
      boxShadow: {
        'inner-light': 'inset 0 2px 4px 0 rgba(255, 255, 255, 0.06)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'bounce-slow': 'bounce 2s infinite',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}