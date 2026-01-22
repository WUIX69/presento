import type { ReactNode } from "@lynx-js/react";
import { createRootRoute, Outlet } from "@tanstack/react-router";
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
 * Wraps all routes with theme provider and layout
 */
function RootComponent() {
  return (
    <ThemeProvider>
      <LayoutContent>
        <Outlet />
      </LayoutContent>
    </ThemeProvider>
  );
}

/**
 * Root Route
 * TanStack Router root route definition
 */
export const Route = createRootRoute({
  component: RootComponent,
});
