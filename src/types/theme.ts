import type { ReactNode } from '@lynx-js/react';

export type Theme = 'dark' | 'light' | 'system';

export interface ThemeProviderProps {
  children: ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
}

export interface ThemeProviderState {
  theme: Theme;
  activeTheme: 'dark' | 'light';
  setTheme: (theme: Theme) => void;
}
