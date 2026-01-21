import { useCallback, useEffect, useState } from '@lynx-js/react';
import { ThemeProviderContext } from '@/hooks/use-theme';
import type { Theme, ThemeProviderProps } from '@/types/theme';

export function ThemeProvider({
  children,
  defaultTheme = 'system',
  storageKey = 'lynx-ui-theme',
  ...props
}: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(defaultTheme);
  const [activeTheme, setActiveTheme] = useState<'dark' | 'light'>('dark');

  // Helper to safely get system theme
  const getSystemTheme = useCallback((): 'dark' | 'light' => {
    try {
      // @ts-expect-error - lynx may be typed as UnsafeLynx
      if (typeof lynx !== 'undefined' && lynx.getSystemInfoSync) {
        // @ts-expect-error - Lynx system info
        const info = lynx.getSystemInfoSync();
        console.info('System Info:', JSON.stringify(info));
        const systemTheme = info?.theme;
        if (systemTheme === 'dark') return 'dark';
        if (systemTheme === 'light') return 'light';
      }
    } catch (e) {
      console.error('getSystemTheme error:', e);
    }
    return 'light'; // Default to light if detection fails
  }, []);

  // Sync theme with storage and system
  useEffect(() => {
    // 1. Initial Load from Storage
    try {
      // @ts-expect-error - lynx storage
      if (typeof lynx !== 'undefined' && lynx.getStorage) {
        // @ts-expect-error - lynx storage
        lynx.getStorage({
          key: storageKey,
          success: (res: { data: string }) => {
            if (res.data) setThemeState(res.data as Theme);
          },
        });
      }
    } catch (e) {
      console.error('Theme initial load error:', e);
    }
  }, [storageKey]);

  // 2. Derive Active Theme based on 'theme' state and actual system theme
  useEffect(() => {
    if (theme === 'system') {
      setActiveTheme(getSystemTheme());
      return;
    }
    setActiveTheme(theme);
  }, [theme, getSystemTheme]);

  const setTheme = useCallback(
    (newTheme: Theme) => {
      setThemeState(newTheme);
      try {
        // @ts-expect-error - lynx storage
        if (typeof lynx !== 'undefined' && lynx.setStorage) {
          // @ts-expect-error - lynx storage
          lynx.setStorage({
            key: storageKey,
            data: newTheme,
          });
        }
      } catch (e) {
        console.error('Theme save error:', e);
      }
    },
    [storageKey],
  );

  return (
    <ThemeProviderContext.Provider
      {...props}
      value={{
        theme,
        activeTheme,
        setTheme,
      }}
    >
      {children}
    </ThemeProviderContext.Provider>
  );
}
