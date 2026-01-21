import type { ReactNode } from '@lynx-js/react';
import { ThemeProvider } from '@/contexts/theme-provider';

interface RootLayoutProps {
  children: ReactNode;
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
      <view className="h-screen w-screen flex bg-background font-display relative">
        {/* Background Gradients */}
        <view className="absolute top-0 right-0 -translate-y-1/3 translate-x-1/3 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
        <view className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

        {/* TODO: Add Navbar here */}
        {/* <Navbar /> */}

        {/* Main Content with Scroll */}
        <scroll-view scroll-y className="flex-1">
          {children}
        </scroll-view>

        {/* TODO: Add Footer here */}
        {/* <Footer /> */}
      </view>
    </ThemeProvider>
  );
}
