import lynxPreset from "@lynx-js/tailwind-preset";
import type { Config } from "tailwindcss";

export default {
  // 1. Use the official Lynx preset
  presets: [lynxPreset],
  // 2. Point to your source files
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#9d66ff", // Primary purple (sign-up uses this)
        "primary-alt": "#8b5cf6", // Alternative primary (sign-in uses this)
        charcoal: "#121212", // Main background
        "charcoal-light": "#1e1e1e", // Cards, inputs
        "field-border": "#333333", // Borders
        "accent-violet": "#e0ccff", // Light purple accent
        "near-black": "#0a0510", // Near black background (sign-in)
        "input-bg": "#1a1025", // Input background (sign-in)
        secondary: "#a78bfa", // Secondary violet
        // Keep some compatibility colors
        border: "var(--border)",
        input: "var(--input)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
      },
      fontFamily: {
        display: ["Lexend", "sans-serif"],
        "serif-logo": ["Playfair Display", "serif"],
      },
      borderRadius: {
        DEFAULT: "0.5rem",
        lg: "0.75rem",
        xl: "1rem",
        "2xl": "1.5rem",
        full: "9999px",
      },
    },
  },
  plugins: [],
} satisfies Config;
