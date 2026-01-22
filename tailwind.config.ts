import lynxPreset from '@lynx-js/tailwind-preset';
import type { Config } from 'tailwindcss';

export default {
  // 1. Use the official Lynx preset
  presets: [lynxPreset],
  // 2. Point to your source files
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'rgb(var(--primary) / <alpha-value>)',
          foreground: 'rgb(var(--primary-foreground) / <alpha-value>)',
        },
        'primary-alt': '#9d66ff', // Primary Purple (Sign Up specific)
        secondary: {
          DEFAULT: 'rgb(var(--secondary) / <alpha-value>)',
          foreground: 'rgb(var(--secondary-foreground) / <alpha-value>)',
        },
        'deep-violet': '#1e1b4b', // Deep background accent
        'near-black': '#0a0510', // Sign-in background
        'input-bg': '#1a1025', // Input background
        charcoal: '#121212', // Main background
        'card-dark': '#1a1a1a', // Card background
        'charcoal-light': '#1e1e1e', // Alt card/input
        'field-border': '#333333', // Border color
        'accent-violet': '#e0ccff', // Light accent

        // Standard Mappings for Compatibility
        border: 'rgb(var(--border) / <alpha-value>)',
        input: 'rgb(var(--input) / <alpha-value>)',
        ring: 'rgb(var(--ring) / <alpha-value>)',
        background: 'rgb(var(--background) / <alpha-value>)',
        foreground: 'rgb(var(--foreground) / <alpha-value>)',

        card: {
          DEFAULT: 'rgb(var(--card) / <alpha-value>)',
          foreground: 'rgb(var(--card-foreground) / <alpha-value>)',
        },
        muted: {
          DEFAULT: 'rgb(var(--muted) / <alpha-value>)',
          foreground: 'rgb(var(--muted-foreground) / <alpha-value>)',
        },
        accent: {
          DEFAULT: 'rgb(var(--accent) / <alpha-value>)',
          foreground: 'rgb(var(--accent-foreground) / <alpha-value>)',
        },
        popover: {
          DEFAULT: 'rgb(var(--popover) / <alpha-value>)',
          foreground: 'rgb(var(--popover-foreground) / <alpha-value>)',
        },
        destructive: {
          DEFAULT: 'rgb(var(--destructive) / <alpha-value>)',
          foreground: 'rgb(var(--destructive-foreground) / <alpha-value>)',
        },
      },
      fontFamily: {
        display: ['Lexend', 'sans-serif'],
        'serif-logo': ['Playfair Display', 'serif'],
      },
      borderRadius: {
        DEFAULT: '0.5rem',
        lg: '0.75rem',
        xl: '1rem',
        '2xl': '1.5rem',
        full: '9999px',
      },
      boxShadow: {
        'ios-shadow': '0 12px 24px -6px rgba(139, 92, 246, 0.4)',
      },
    },
  },
  plugins: [],
} satisfies Config;
