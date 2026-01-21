import { useState } from '@lynx-js/react';
import lynxLogo from '@/assets/lynx-logo.png';
import reactLogo from '@/assets/react-logo.png';

export const App = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    'background only';
    setCount((prev) => prev + 1);
  };

  const handleReset = () => {
    'background only';
    setCount(0);
  };

  return (
    <scroll-view className="flex-1 h-full" scroll-y>
      <view className="flex flex-col items-center p-8 min-h-full bg-gradient-to-b from-background to-muted">
        {/* Header Section */}
        <view className="flex flex-col items-center mb-12 gap-4">
          <view className="flex flex-row items-center justify-center gap-8 mb-4">
            <image
              src={lynxLogo}
              className="w-30 h-30 object-contain animate-spin-slow"
            />
            <image
              src={reactLogo}
              className="w-30 h-30 object-contain animate-spin-reverse"
            />
          </view>
          <text className="text-5xl font-bold text-foreground text-center tracking-tight">
            Lynx + React
          </text>
          <text className="text-2xl text-muted-foreground text-center leading-10">
            Build native mobile apps with React and Lynx
          </text>
        </view>

        {/* Counter Card */}
        <view className="w-full max-w-xl bg-card rounded-xl border-2 border-border p-8 mb-8 shadow-lg">
          <view className="flex flex-col items-center gap-6">
            <text className="text-3xl font-semibold text-card-foreground text-center">
              Interactive Counter
            </text>
            <text className="text-7xl font-bold text-primary text-center leading-tight">
              {count}
            </text>
            <view className="flex flex-row gap-4 w-full">
              <view
                className="flex flex-row items-center justify-center px-8 py-6 rounded-lg flex-1 bg-primary border-2 border-primary transition-all"
                bindtap={handleIncrement}
                aria-label="Increment counter"
              >
                <text className="text-2xl font-medium text-primary-foreground text-center">
                  Count is {count}
                </text>
              </view>
              <view
                className="flex flex-row items-center justify-center px-8 py-6 rounded-lg flex-1 bg-transparent border-2 border-border transition-all"
                bindtap={handleReset}
                aria-label="Reset counter"
              >
                <text className="text-2xl font-medium text-foreground text-center">
                  Reset
                </text>
              </view>
            </view>
          </view>
        </view>

        {/* Info Section */}
        <view className="flex flex-col items-center mb-8 px-8">
          <text className="text-xl text-muted-foreground text-center leading-9">
            Edit{' '}
            <text className="font-mono text-lg text-primary bg-muted px-2 py-1 rounded">
              src/App.tsx
            </text>{' '}
            and save to test HMR
          </text>
        </view>

        {/* Links Section */}
        <view className="flex flex-col w-full max-w-xl gap-6 mb-8">
          <text className="text-3xl font-semibold text-foreground text-center">
            Learn More
          </text>
          <view className="flex flex-col gap-4">
            <view className="flex flex-col bg-card border-2 border-border rounded-lg p-6 gap-2 transition-all">
              <text className="text-2xl font-semibold text-card-foreground">
                📚 Documentation
              </text>
              <text className="text-xl text-muted-foreground leading-8">
                Learn about ReactLynx features and API
              </text>
            </view>
            <view className="flex flex-col bg-card border-2 border-border rounded-lg p-6 gap-2 transition-all">
              <text className="text-2xl font-semibold text-card-foreground">
                🚀 Quick Start
              </text>
              <text className="text-xl text-muted-foreground leading-8">
                Get started with your first Lynx app
              </text>
            </view>
            <view className="flex flex-col bg-card border-2 border-border rounded-lg p-6 gap-2 transition-all">
              <text className="text-2xl font-semibold text-card-foreground">
                💡 Examples
              </text>
              <text className="text-xl text-muted-foreground leading-8">
                Explore sample projects and demos
              </text>
            </view>
            <view className="flex flex-col bg-card border-2 border-border rounded-lg p-6 gap-2 transition-all">
              <text className="text-2xl font-semibold text-card-foreground">
                🛠️ DevTools
              </text>
              <text className="text-xl text-muted-foreground leading-8">
                Debug and optimize your application
              </text>
            </view>
          </view>
        </view>

        {/* Footer */}
        <view className="flex flex-col items-center p-8 mt-auto">
          <text className="text-xl text-muted-foreground text-center leading-8">
            Click on the Lynx and React logos to learn more
          </text>
        </view>

        {/* Bottom Spacing for scroll */}
        <view className="h-20" />
      </view>
    </scroll-view>
  );
};
