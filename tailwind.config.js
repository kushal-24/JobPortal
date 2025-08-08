/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)', // ✅ Use CSS variable in Tailwind theme
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
      },
      screens: {
        '3xl': '1920px',
      },
    },
  },
  plugins: [],
}

