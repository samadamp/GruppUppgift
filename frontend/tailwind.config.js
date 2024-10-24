/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      Primary: "#4aa1ed",
      Secondary: "#3598f0",
      from: "#00BCD4",
      to: "#b5e7f5",
      Accent: "#95c0f2",
      Background: "#d7d8d9",
      black: "#000000",
      white: "#ffffff",
      blue900: "#0D47A1",
      blue800: "#1565C0",
    },
    extend: {
      keyframes: {
        "card-animation": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "card-animation": "accordion-down 4s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [],
};
