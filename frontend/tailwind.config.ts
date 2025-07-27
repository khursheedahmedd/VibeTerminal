
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: 'clamp(1rem, 4vw, 3rem)',
      screens: {
        '2xl': '1536px',
        'xl': '1280px',
        'lg': '1024px',
        'md': '768px',
        'sm': '360px',
      }
    },
    extend: {
      colors: {
        // Neon palette and dark glass theme
        base: "#0D0D0D",
        surface: "#1A1A1A",
        primary: {
          DEFAULT: "#7AFBED",
          neon: "#7AFBED",
          foreground: "#0D0D0D"
        },
        secondary: {
          DEFAULT: "#00FFD1",
          neon: "#00FFD1",
          foreground: "#0D0D0D"
        },
        accent: "#00FFD1",
        glass: "rgba(26,26,26,0.73)",
      },
      fontFamily: {
        inter: ['var(--font-inter)', 'Inter', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        xl: "12px",
      },
      boxShadow: {
        glass: '0 4px 48px 0 rgba(122,251,237,0.12)',
        neon: '0 0 8px 2px #7AFBED, 0 0 1px 0 #00FFD1',
      },
      backdropBlur: {
        glass: '8px',
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

