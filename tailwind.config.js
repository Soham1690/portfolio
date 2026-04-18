/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "450px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        midnight: "#060814",
        navy: "#0b1028",
        storm: "#111426",
        sand: "#f5d7a1",
        indigo: "#171b52",
        "white-100": "#f3f3f3",
        "black-100": "#100d25",
      },
      boxShadow: {
        premium: "0 24px 80px rgba(0, 0, 0, 0.35)",
      },
      keyframes: {
        orbit: {
          "0%": {
            transform:
              "rotate(var(--angle)) translateY(var(--radius)) rotate(var(--negative-angle))",
          },
          "100%": {
            transform:
              "rotate(calc(var(--angle) + 360deg)) translateY(var(--radius)) rotate(calc(var(--negative-angle) - 360deg))",
          },
        },
      },
      animation: {
        orbit: "orbit calc(var(--duration) * 1s) linear infinite",
      },
    },
  },
  plugins: [],
};