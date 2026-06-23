/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // IESC brand — extraído da logomarca
        navy: {
          DEFAULT: "#162A52",
          50: "#eef1f7",
          100: "#d4dbe8",
          200: "#a9b6d1",
          300: "#7e91ba",
          400: "#4f648f",
          500: "#2c4373",
          600: "#1f335f",
          700: "#162A52",
          800: "#101f3d",
          900: "#0a1429",
        },
        orange: {
          DEFAULT: "#D65133",
          50: "#fdf1ed",
          100: "#fbe0d8",
          200: "#f5bfb0",
          300: "#ee9a83",
          400: "#e57655",
          500: "#D65133",
          600: "#bf3f23",
          700: "#9c321c",
          800: "#7c2917",
          900: "#5f2012",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["'Plus Jakarta Sans'", "Inter", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(22,42,82,0.18)",
        card: "0 20px 50px -20px rgba(22,42,82,0.28)",
        glow: "0 12px 36px -8px rgba(214,81,51,0.45)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseGlow: {
          "0%,100%": { boxShadow: "0 0 0 0 rgba(214,81,51,0.45)" },
          "50%": { boxShadow: "0 0 0 14px rgba(214,81,51,0)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.22,1,0.36,1) both",
        "fade-in": "fade-in 0.8s ease both",
        float: "float 6s ease-in-out infinite",
        pulseGlow: "pulseGlow 2.2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
