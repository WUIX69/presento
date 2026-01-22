import { useCallback } from "@lynx-js/react";
import { useTheme } from "@/hooks/use-theme";
import { Button } from "./button";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const handleToggle = useCallback(() => {
    "background only";
    console.log("Current theme:", theme);
    if (theme === "light") {
      console.log("Switching to dark");
      setTheme("dark");
    } else if (theme === "dark") {
      console.log("Switching to system");
      setTheme("system");
    } else {
      console.log("Switching to light");
      setTheme("light");
    }
  }, [theme, setTheme]);

  const getThemeLabel = () => {
    if (theme === "light") return "☀️";
    if (theme === "dark") return "🌙";
    return "🌓";
  };

  return (
    <Button variant="ghost" onTap={handleToggle}>
      <text className="text-foreground font-medium text-xl">
        {getThemeLabel()}
      </text>
    </Button>
  );
}
