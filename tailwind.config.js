// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // NEW Kid-Friendly Palette
        'primary-blue': {
          DEFAULT: '#38bdf8', // sky-400
          '50': '#f0f9ff',    // sky-50
          '100': '#e0f2fe',   // sky-100
          '200': '#bae6fd',   // sky-200
          '300': '#7dd3fc',   // sky-300
          '400': '#38bdf8',   // sky-400 (Primary)
          '500': '#0ea5e9',   // sky-500 (Slightly darker)
          '600': '#0284c7',   // sky-600 (Secondary/Hover)
          '700': '#0369a1',   // sky-700
          '800': '#075985',   // sky-800
          '900': '#0c4a6e',   // sky-900
        },
        'primary-orange': {
          DEFAULT: '#fb923c', // orange-400
          '50': '#fff7ed',    // orange-50
          '100': '#ffedd5',   // orange-100
          '200': '#fed7aa',   // orange-200
          '300': '#fdba74',   // orange-300
          '400': '#fb923c',   // orange-400 (Primary)
          '500': '#f97316',   // orange-500 (Secondary/Hover)
          '600': '#ea580c',   // orange-600
          '700': '#c2410c',   // orange-700
          '800': '#9a3412',   // orange-800
          '900': '#7c2d12',   // orange-900
        },
        // Keep grayscale or adjust if needed
        gray: { // Example: Tailwind's default gray
          50: '#f9fafb', 100: '#f3f4f6', 200: '#e5e7eb', 300: '#d1d5db',
          400: '#9ca3af', 500: '#6b7280', 600: '#4b5563', 700: '#374151',
          800: '#1f2937', 900: '#11182c',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        heading: ['Poppins', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
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