/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lude: {
          DEFAULT: '#121212', 
          100: '#1a1a1a', 
          200: '#242424', 
          300: '#2e2e2e', 
          400: '#383838', 
          500: '#424242', 
          600: '#4c4c4c', 
          700: '#565656', 
          800: '#606060', 
          900: '#6a6a6a',
        }
      },
      keyframes: {
        slideRight: {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(0%)" },
        },
        slideLeft: {
          from: { transform: "translateX(50%)" },
          to: { transform: "translateX(0)" }, // Move to the left
        },
        slideToTop: {
          from: { transform: "translateY(100%)" },
          to: { transform: "translateY(0)" },
        },
      },
      animation: {
        slideRight: "slideRight 1s ease-in-out forwards",
        slideLeft: "slideLeft 2s ease-in-out forwards",
        slideToTop: "slideToTop 1s ease-in-out forwards",
      },
      boxShadow: {
        default: "0px 0px 10px 5px red",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".box-shadow": {
          boxShadow: "0px 0px 10px 5px #22d3ee",
        },
      });
    },
  ],
}

