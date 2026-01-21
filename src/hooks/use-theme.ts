import { createContext, useContext } from '@lynx-js/react';
import type { ThemeProviderState } from '@/types/theme';

export const ThemeProviderContext = createContext<
  ThemeProviderState | undefined
>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
};
