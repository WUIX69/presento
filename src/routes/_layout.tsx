import type { ReactNode } from '@lynx-js/react';
import { ThemeProvider } from '@/contexts/theme-provider';
import { useTheme } from '@/hooks/use-theme';

interface RootLayoutProps {
  children: ReactNode;
}

/**
 * Layout Content Component
 * Applies the theme class to the root view
 */
function LayoutContent({ children }: RootLayoutProps) {
  const { activeTheme, theme } = useTheme();

  console.log(
    'LayoutContent render - theme:',
    theme,
    'activeTheme:',
    activeTheme,
  );

  return (
    <view
      className={`h-screen w-screen flex font-display relative ${activeTheme} bg-background text-foreground`}
    >
      {/* Background Gradients - subtle purple glow */}
      <view
        className={`absolute top-0 right-0 -translate-y-1/3 translate-x-1/3 w-96 h-96 rounded-full blur-[100px] pointer-events-none ${
          activeTheme === 'dark' ? 'bg-primary/10' : 'bg-primary/10'
        }`}
      />
      <view
        className={`absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-96 h-96 rounded-full blur-[100px] pointer-events-none ${
          activeTheme === 'dark' ? 'bg-accent-violet/5' : 'bg-accent-violet/5'
        }`}
      />

      {/* Main Content with Scroll */}
      <scroll-view scroll-y className="flex-1">
        {children}
      </scroll-view>
    </view>
  );
}

/**
 * Root Layout Component
 *
 * Single layout that wraps the entire application with:
 * - ThemeProvider (automatically applies theme class)
 * - Background gradients
 * - Scroll container
 * - Navbar (future)
 * - Footer (future)
 *
 * Compatible with:
 * - TanStack Router: Use as root layout with <Outlet />
 * - React Router: Wrap <RouterProvider> with this component
 */
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <ThemeProvider>
      <LayoutContent>{children}</LayoutContent>
    </ThemeProvider>
  );
}
