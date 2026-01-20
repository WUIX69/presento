import type { Config } from 'tailwindcss';
import lynxPreset from '@lynx-js/tailwind-preset';

export default {
  // 1. Use the official Lynx preset
  presets: [lynxPreset],
  // 2. Point to your source files
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;
