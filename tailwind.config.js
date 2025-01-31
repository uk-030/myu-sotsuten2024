/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      fontFamily: {
        kabel: ["neue-kabel"],
        sans: ["source-han-sans-japanese", "sans-serif"],
        self: ["serif"],
      },
      height: { svh: "100svh" },
      minHeight: { svh: "100svh" },
      colors: {
        "primary-100": "#DEF2FC",
        "primary-400": "#0081CC",
        "primary-500": "#0081CC",
        "primary-900": "#183A66",
      },
    },
  },
  plugins: [],
};
