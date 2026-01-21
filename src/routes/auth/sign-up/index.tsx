import { useCallback, useState } from '@lynx-js/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface SignUpPageProps {
  onNavigate?: (page: 'gallery' | 'sign-in' | 'sign-up') => void;
}

/**
 * Sign Up Page Component
 *
 * Registration page for new students.
 * This will be the /auth/sign-up route when using a router.
 */
const SignUpPage = ({ onNavigate }: SignUpPageProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = useCallback(() => {
    setShowPassword((prev) => !prev);
  }, []);

  return (
    <view className="w-full flex-1 flex flex-col bg-background">
      {/* Header */}
      <view className="flex flex-row items-center bg-background/80 p-4 pb-2 justify-between sticky top-0 z-20">
        {/* TODO: Replace with router navigation */}
        <view
          className="text-foreground flex size-12 items-center justify-start active:opacity-50 transition-opacity"
          bindtap={() => onNavigate?.('sign-in')}
        >
          <text className="font-bold text-2xl">{'<'}</text>
        </view>
        <view className="flex flex-col items-center flex-1 pr-12">
          <text className="text-primary text-[11px] uppercase tracking-[0.25em] font-extrabold text-center">
            Presento
          </text>
          <text className="text-foreground text-lg font-semibold leading-tight tracking-tight text-center">
            Sign Up
          </text>
        </view>
      </view>

      {/* Content Area */}
      <view className="flex-1 flex flex-col w-full max-w-[480px] mx-auto pb-12">
        {/* Hero Section */}
        <view className="px-6 pt-6 pb-2">
          <text className="text-foreground tracking-tight text-[32px] font-bold leading-tight">
            Create Account
          </text>
          <text className="text-muted-foreground text-base font-normal leading-normal mt-2">
            Join Presento to track your attendance and keep your guardians
            updated.
          </text>
        </view>

        {/* Personal Information */}
        <view className="mt-8">
          <text className="text-primary text-[13px] font-bold uppercase tracking-widest px-6 pb-4">
            Personal Information
          </text>
          <view className="flex flex-col gap-5 px-6">
            <view className="gap-2">
              <text className="text-muted-foreground text-sm font-medium leading-normal">
                Full Name
              </text>
              <Input
                placeholder="John Doe"
                className="bg-input border-border border-[1.5px] rounded-xl h-14 text-foreground"
              />
            </view>

            <view className="gap-2">
              <text className="text-muted-foreground text-sm font-medium leading-normal">
                Student ID
              </text>
              <Input
                placeholder="ST-12345"
                className="bg-input border-border border-[1.5px] rounded-xl h-14 text-foreground"
              />
            </view>

            <view className="gap-2">
              <text className="text-muted-foreground text-sm font-medium leading-normal">
                Email
              </text>
              <Input
                placeholder="john@university.edu"
                className="bg-input border-border border-[1.5px] rounded-xl h-14 text-foreground"
              />
            </view>

            <view className="gap-2">
              <text className="text-muted-foreground text-sm font-medium leading-normal">
                Password
              </text>
              <view className="relative">
                <Input
                  placeholder="••••••••"
                  type={showPassword ? 'text' : 'password'}
                  className="bg-input border-border border-[1.5px] rounded-xl h-14 text-foreground pr-12"
                />
                <view
                  className="absolute right-4 top-4 active:text-primary"
                  bindtap={togglePassword}
                >
                  <text className="text-muted-foreground text-xs">
                    {showPassword ? 'HIDE' : 'SHOW'}
                  </text>
                </view>
              </view>
            </view>
          </view>
        </view>

        {/* Divider */}
        <view className="px-6 py-10">
          <view className="h-[1px] bg-border w-full" />
        </view>

        {/* Guardian Details */}
        <view className="mb-6">
          <view className="flex flex-row items-center px-6 pb-4 justify-between">
            <text className="text-primary text-[13px] font-bold uppercase tracking-widest">
              Guardian Details
            </text>
            <text className="text-primary/60 text-lg">?</text>
          </view>
          <view className="flex flex-col gap-5 px-6">
            <view className="gap-2">
              <text className="text-muted-foreground text-sm font-medium leading-normal">
                Guardian Name
              </text>
              <Input
                placeholder="Jane Doe"
                className="bg-input border-border border-[1.5px] rounded-xl h-14 text-foreground"
              />
            </view>

            <view className="gap-2">
              <text className="text-muted-foreground text-sm font-medium leading-normal">
                Guardian Mobile Number
              </text>
              <view className="relative">
                <view className="absolute left-4 top-1/2 -translate-y-1/2 flex-row items-center border-r border-border pr-3">
                  <text className="text-muted-foreground text-base font-medium">
                    +1
                  </text>
                </view>
                <Input
                  placeholder="555-0123"
                  className="bg-input border-border border-[1.5px] rounded-xl h-14 text-foreground pl-16"
                />
              </view>
              <view className="flex-row items-start gap-2 mt-3">
                <text className="text-primary mt-1">💬</text>
                <text className="text-muted-foreground text-xs italic leading-relaxed flex-1">
                  SMS alerts will be sent to this number automatically upon
                  scan.
                </text>
              </view>
            </view>
          </view>
        </view>

        {/* Submit Button */}
        <view className="px-6 pt-6 pb-5">
          <Button className="w-full bg-primary py-4 rounded-xl shadow-lg shadow-primary/20 active:scale-[0.97]">
            <text className="text-primary-foreground font-bold text-lg">
              Create Account
            </text>
          </Button>
        </view>

        {/* Login Link */}
        <view className="px-6 text-center flex-row justify-center pb-12">
          <text className="text-[15px] text-muted-foreground">
            Already have an account?{' '}
          </text>
          <text
            className="text-primary font-bold ml-1 active:underline"
            bindtap={() => onNavigate?.('sign-in')}
          >
            Log In
          </text>
        </view>
      </view>
    </view>
  );
};

export default SignUpPage;
