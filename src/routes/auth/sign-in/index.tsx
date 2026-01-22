import { useCallback, useState } from "@lynx-js/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface SignInPageProps {
  onNavigate?: (
    page: "home" | "sign-in" | "sign-up" | "student" | "teacher",
  ) => void;
}

/**
 * Sign In Page Component
 * Centered layout matching the light theme design
 */
const SignInPage = ({ onNavigate }: SignInPageProps) => {
  const [role, setRole] = useState<"Student" | "Admin">("Student");
  const [showPassword, setShowPassword] = useState(false);

  const handleRoleChange = useCallback((newRole: "Student" | "Admin") => {
    "background only";
    setRole(newRole);
  }, []);

  const togglePassword = useCallback(() => {
    "background only";
    setShowPassword((prev) => !prev);
  }, []);

  return (
    <view className="min-h-screen flex items-center justify-center p-6">
      <view className="w-full max-w-md">
        {/* Header */}
        <view className="flex flex-row items-center justify-center mb-12 relative">
          <view
            className="absolute left-0 size-12 flex items-center justify-center active:opacity-50"
            bindtap={() => onNavigate?.("home")}
          >
            <text className="text-2xl text-foreground">‹</text>
          </view>
          <text className="text-xl font-semibold text-primary">Presento</text>
        </view>

        {/* Icon + Heading */}
        <view className="flex flex-col items-center mb-10">
          <view className="w-24 h-24 bg-primary/10 rounded-[28%] flex items-center justify-center mb-6">
            <text className="text-5xl">🎓</text>
          </view>
          <text className="text-3xl font-bold text-foreground">
            Welcome back
          </text>
          <text className="text-base text-muted-foreground mt-2">
            Sign in to continue
          </text>
        </view>

        {/* Role Selector */}
        <view className="w-full mb-10">
          <view className="flex flex-row h-12 w-full items-center rounded-xl bg-muted p-1">
            <view
              className={`flex-1 h-full items-center justify-center rounded-lg ${role === "Student" ? "bg-primary" : ""}`}
              bindtap={() => handleRoleChange("Student")}
            >
              <text
                className={`font-semibold ${role === "Student" ? "text-primary-foreground" : "text-muted-foreground"}`}
              >
                Student
              </text>
            </view>
            <view
              className={`flex-1 h-full items-center justify-center rounded-lg ${role === "Admin" ? "bg-primary" : ""}`}
              bindtap={() => handleRoleChange("Admin")}
            >
              <text
                className={`font-semibold ${role === "Admin" ? "text-primary-foreground" : "text-muted-foreground"}`}
              >
                Admin
              </text>
            </view>
          </view>
        </view>

        {/* Form */}
        <view className="flex flex-col gap-5">
          {/* ID/Email Input */}
          <view className="gap-2">
            <text className="text-sm font-medium text-foreground">
              ID Number or Email
            </text>
            <view className="relative">
              <Input
                placeholder="Enter your ID or email"
                className="pl-12 bg-card border-border rounded-xl h-14 text-foreground placeholder:text-muted-foreground"
              />
              <view className="absolute left-4 top-4">
                <text className="text-xl text-muted-foreground">👤</text>
              </view>
            </view>
          </view>

          {/* Password Input */}
          <view className="gap-2">
            <text className="text-sm font-medium text-foreground">
              Password
            </text>
            <view className="relative">
              <Input
                placeholder="••••••••"
                type={showPassword ? "text" : "password"}
                className="pl-12 pr-12 bg-card border-border rounded-xl h-14 text-foreground placeholder:text-muted-foreground"
              />
              <view className="absolute left-4 top-4">
                <text className="text-xl text-muted-foreground">🔒</text>
              </view>
              <view
                className="absolute right-4 top-4 active:opacity-50"
                bindtap={togglePassword}
              >
                <text className="text-xl text-muted-foreground">
                  {showPassword ? "👁️" : "👁️‍🗨️"}
                </text>
              </view>
            </view>
          </view>

          {/* Forgot Password */}
          <view className="flex flex-row justify-end">
            <text className="text-sm font-semibold text-primary active:opacity-50">
              Forgot Password?
            </text>
          </view>

          {/* Sign In Button */}
          <Button className="w-full bg-primary text-primary-foreground py-4 rounded-xl mt-2 h-14 active:opacity-90">
            <text className="text-primary-foreground font-bold text-base">
              Sign In →
            </text>
          </Button>
        </view>

        {/* OAuth Section */}
        <view className="mt-12">
          <view className="flex flex-row items-center gap-4 mb-6">
            <view className="h-px bg-border flex-1" />
            <text className="text-xs text-muted-foreground uppercase tracking-wider">
              OR SIGN IN WITH
            </text>
            <view className="h-px bg-border flex-1" />
          </view>

          <view className="flex items-center justify-center">
            <view className="w-16 h-16 bg-card border border-border rounded-2xl flex items-center justify-center active:bg-muted">
              <text className="text-3xl">😊</text>
            </view>
          </view>
        </view>

        {/* Footer */}
        <view className="mt-12 flex flex-row justify-center">
          <text className="text-sm text-muted-foreground">
            Don't have an account?{" "}
          </text>
          <text
            className="text-sm font-bold text-primary ml-1 active:underline"
            bindtap={() => onNavigate?.("sign-up")}
          >
            Contact Admin
          </text>
        </view>
      </view>
    </view>
  );
};

export default SignInPage;
