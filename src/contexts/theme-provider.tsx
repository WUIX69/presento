import { useCallback, useEffect, useState } from '@lynx-js/react';
import { ThemeProviderContext } from '@/hooks/use-theme';
import type { Theme, ThemeProviderProps } from '@/types/theme';

export function ThemeProvider({
  children,
  defaultTheme = 'system',
  storageKey = 'lynx-ui-theme',
  ...props
}: ThemeProviderProps) {
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

  const [theme, setThemeState] = useState<Theme>(defaultTheme);
  // Initialize activeTheme based on defaultTheme
  const [activeTheme, setActiveTheme] = useState<'dark' | 'light'>(() => {
    if (defaultTheme === 'system') {
      return getSystemTheme();
    }
    return defaultTheme;
  });

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
    console.log('Theme changed to:', theme);
    if (theme === 'system') {
      const systemTheme = getSystemTheme();
      console.log('Using system theme:', systemTheme);
      setActiveTheme(systemTheme);
      return;
    }
    console.log('Setting active theme to:', theme);
    setActiveTheme(theme);
  }, [theme, getSystemTheme]);

  // 3. Listen for system theme changes when in system mode
  useEffect(() => {
    if (theme !== 'system') return;

    try {
      // @ts-expect-error - lynx global event
      if (typeof lynx !== 'undefined' && lynx.addGlobalEventListener) {
        const handleSystemThemeChange = (event: {
          theme: 'dark' | 'light';
        }) => {
          console.log('System theme changed:', event.theme);
          setActiveTheme(event.theme);
        };

        // @ts-expect-error - lynx global event
        lynx.addGlobalEventListener('themechange', handleSystemThemeChange);

        return () => {
          // @ts-expect-error - lynx global event
          lynx.removeGlobalEventListener(
            'themechange',
            handleSystemThemeChange,
          );
        };
      }
    } catch (e) {
      console.error('Failed to listen for system theme changes:', e);
    }
  }, [theme]);

  const setTheme = useCallback(
    (newTheme: Theme) => {
      console.log('setTheme called with:', newTheme);
      setThemeState(newTheme);
      try {
        // @ts-expect-error - lynx storage
        if (typeof lynx !== 'undefined' && lynx.setStorage) {
          // @ts-expect-error - lynx storage
          lynx.setStorage({
            key: storageKey,
            data: newTheme,
          });
          console.log('Theme saved to storage:', newTheme);
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
