import type { Config } from 'tailwindcss';
import lynxPreset from '@lynx-js/tailwind-preset';

export default {
  // 1. Use the official Lynx preset
  presets: [lynxPreset],
  // 2. Point to your source files
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        border: 'var(--border)',
        input: 'var(--input)',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: {
          DEFAULT: '#8b5cf6', // Vibrant Violet
          foreground: '#ffffff',
        },
        secondary: {
          DEFAULT: '#a78bfa', // Lighter Violet
          foreground: '#ffffff',
        },
        card: {
          DEFAULT: 'var(--card)',
          foreground: 'var(--card-foreground)',
        },
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)',
        },
        // Old Colors for compatibility during refactor
        'near-black': '#0a0510',
        'input-bg': '#1a1025',
        charcoal: '#121212',
        'charcoal-light': '#1e1e1e',
        'field-border': '#333333',
      },
      fontFamily: {
        display: ['Lexend', 'sans-serif'],
        'serif-logo': ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
