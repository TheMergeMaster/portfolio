/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.svelte"
  ],
  theme: {
    extend: {
      white: "var(--clr-white)",
      black: "var(--clr-black)",
    },
  },
  plugins: [],
}

