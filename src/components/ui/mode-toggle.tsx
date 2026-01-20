import { useTheme } from '../../hooks/use-theme';
import { Button } from './button';
import { useCallback } from '@lynx-js/react';

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const handleToggle = useCallback(() => {
    if (theme === 'light') setTheme('dark');
    else if (theme === 'dark') setTheme('system');
    else setTheme('light');
  }, [theme, setTheme]);

  const getThemeLabel = () => {
    if (theme === 'light') return '☀️ Light';
    if (theme === 'dark') return '🌙 Dark';
    return '🌓 System';
  };

  return (
    <Button
      variant="outline"
      className="px-4 py-2 rounded-lg border border-border"
      onTap={handleToggle}
    >
      <text className="text-foreground font-medium text-sm">
        {getThemeLabel()}
      </text>
    </Button>
  );
}
