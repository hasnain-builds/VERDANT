/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          DEFAULT: '#879780',
          50: '#F4F6F3',
          100: '#E6EAE4',
          200: '#CCD5C9',
          300: '#B2BFAE',
          400: '#9CAA96',
          500: '#879780',
          600: '#6E7E67',
          700: '#55624F',
          800: '#3D4638',
          900: '#262B22',
        },
        ivory: {
          DEFAULT: '#F8F5ED',
          light: '#FCFAF5',
          dark: '#F0EAE0',
        },
        cream: {
          DEFAULT: '#EAE5D9',
          light: '#F3F0E8',
          dark: '#DDD6C5',
        },
        olive: {
          DEFAULT: '#626F52',
          light: '#768564',
          dark: '#4F5A41',
        },
        forest: {
          DEFAULT: '#26372D',
          light: '#354C3E',
          dark: '#18231C',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
