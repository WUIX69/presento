import type { ReactNode } from "@lynx-js/react";
import { ThemeProvider } from "@/contexts/theme-provider";
import { useTheme } from "@/hooks/use-theme";

interface RootLayoutProps {
  children: ReactNode;
}

/**
 * Layout Content Component
 * Minimal wrapper that applies theme and provides scroll container
 */
function LayoutContent({ children }: RootLayoutProps) {
  const { activeTheme } = useTheme();

  return (
    <view
      className={`h-screen w-screen ${activeTheme === "dark" ? "dark" : "light"} bg-background text-foreground`}
    >
      <scroll-view scroll-y className="h-full w-full">
        {children}
      </scroll-view>
    </view>
  );
}

/**
 * Root Layout Component
 * Simplified layout that only provides theme context
 */
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <ThemeProvider>
      <LayoutContent>{children}</LayoutContent>
    </ThemeProvider>
  );
}
