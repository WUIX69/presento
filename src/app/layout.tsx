import type { ReactNode } from '@lynx-js/react';
import { ThemeProvider } from '../contexts/theme-provider';
import { useTheme } from '../hooks/use-theme';

interface RootLayoutProps {
  children: ReactNode;
}

function LayoutContent({ children }: RootLayoutProps) {
  const { activeTheme } = useTheme();

  return (
    <view
      className={`flex-1 bg-background font-display relative overflow-hidden ${activeTheme}`}
      style={{ height: '100%' }}
    >
      {/* Background Gradients */}
      <view className="absolute top-0 right-0 -translate-y-1/3 translate-x-1/3 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <view className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Global Scroll View */}
      <scroll-view
        className="flex-1 h-full"
        scroll-y
        style={{ height: '100%' }}
      >
        <view className="flex-1">{children}</view>
      </scroll-view>
    </view>
  );
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <ThemeProvider>
      <LayoutContent>{children}</LayoutContent>
    </ThemeProvider>
  );
}
