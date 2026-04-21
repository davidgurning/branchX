/** @type {import('tailwindcss').Config} */
export default {
  // Aktifkan dark mode berbasis class (class="dark")
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Tambahkan font Inter sebagai font utama
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
      },
      // Tambahkan animasi kustom
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        fadeInUp: "fadeInUp 0.5s ease-out both",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        shimmer: "shimmer 1.5s infinite",
      },
      // Warna brand Mandiri kustom
      colors: {
        mandiri: {
          yellow: "#F5A623",
          dark: "#003D7C",
        },
      },
    },
  },
  plugins: [],
};
