import { useCallback, useState } from "@lynx-js/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface SignInPageProps {
  onNavigate?: (
    page: "gallery" | "sign-in" | "sign-up" | "student" | "teacher",
  ) => void;
}

/**
 * Sign In Page Component
 *
 * Authentication page for students and admins.
 * This will be the /auth/sign-in route when using a router.
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
    <view className="flex-1 flex flex-col items-center px-6 pt-6 pb-12 w-full max-w-[480px] mx-auto">
      {/* Header */}
      <view className="flex flex-row items-center w-full mb-8">
        {/* TODO: Replace with router navigation */}
        <view
          className="text-primary size-12 flex items-center justify-start active:opacity-50"
          bindtap={() => onNavigate?.("gallery")}
        >
          <text className="font-bold text-2xl">{"<"}</text>
        </view>
        <view className="flex-1 items-center">
          <text className="font-serif-logo text-2xl tracking-tight text-primary">
            Presento
          </text>
        </view>
        {/* TODO: ModeToggle will be in Navbar */}
        <view className="size-12" />
      </view>

      {/* Hero Icon */}
      <view className="mb-12 flex flex-col items-center">
        <view className="w-24 h-24 bg-primary/10 rounded-[28%] flex items-center justify-center mb-8 relative ring-1 ring-primary/40">
          <view className="absolute inset-0 bg-primary/5 blur-xl rounded-full" />
          <view className="relative z-10">
            <text className="text-5xl">📱</text>
          </view>
        </view>
        <text className="text-white text-3xl font-bold tracking-tight">
          Sign In
        </text>
        <text className="text-slate-500 mt-2 font-medium">
          Manage your attendance with ease
        </text>
      </view>

      {/* Role Switcher */}
      <view className="w-full mb-10">
        <view className="flex h-12 flex-row w-full items-center rounded-xl bg-input-bg p-1 border border-white/5">
          <view
            className={`flex-1 h-full items-center justify-center rounded-lg ${role === "Student" ? "bg-primary" : ""}`}
            bindtap={() => handleRoleChange("Student")}
          >
            <text
              className={`font-semibold ${role === "Student" ? "text-white" : "text-slate-400"}`}
            >
              Student
            </text>
          </view>
          <view
            className={`flex-1 h-full items-center justify-center rounded-lg ${role === "Admin" ? "bg-primary" : ""}`}
            bindtap={() => handleRoleChange("Admin")}
          >
            <text
              className={`font-semibold ${role === "Admin" ? "text-white" : "text-slate-400"}`}
            >
              Admin
            </text>
          </view>
        </view>
      </view>

      {/* Form */}
      <view className="w-full gap-6">
        <view className="gap-2">
          <text className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.15em] ml-1">
            ID Number or Email
          </text>
          <view className="relative">
            <Input
              placeholder="e.g. 202410293"
              className="pl-12 bg-input-bg border-white/5 rounded-2xl h-14 text-white placeholder:text-slate-700 focus:ring-2 focus:ring-primary/50 focus:border-primary/50"
            />
            <text className="absolute left-4 top-4 text-slate-600">@</text>
          </view>
        </view>

        <view className="gap-2">
          <text className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.15em] ml-1">
            Password
          </text>
          <view className="relative">
            <Input
              placeholder="••••••••"
              type={showPassword ? "text" : "password"}
              className="pl-12 pr-12 bg-input-bg border-white/5 rounded-2xl h-14 text-white placeholder:text-slate-700 focus:ring-2 focus:ring-primary/50 focus:border-primary/50"
            />
            <text className="absolute left-4 top-4 text-slate-600">🔒</text>
            <view
              className="absolute right-4 top-4 active:text-primary"
              bindtap={togglePassword}
            >
              <text className="text-slate-600 text-xs">
                {showPassword ? "👁️" : "👁️"}
              </text>
            </view>
          </view>
        </view>

        <view className="flex-row justify-end px-1 mt-2">
          <text className="text-primary text-sm font-semibold active:text-secondary">
            Forgot Password?
          </text>
        </view>

        <Button className="w-full bg-primary text-white py-4 rounded-2xl mt-4 h-16 shadow-lg shadow-primary/40 hover:brightness-110 active:scale-[0.98] transition-all">
          <text className="text-white font-bold text-lg">Enter Portal</text>
          <text className="text-white ml-2">→</text>
        </Button>
      </view>

      {/* Quick Access */}
      <view className="mt-14 flex flex-col items-center gap-6 w-full">
        <view className="flex flex-row items-center gap-4 w-full px-4">
          <view className="h-[1px] bg-white/5 flex-1" />
          <text className="text-slate-600 text-[10px] font-bold uppercase tracking-[0.2em]">
            Quick Access
          </text>
          <view className="h-[1px] bg-white/5 flex-1" />
        </view>
        <view className="flex flex-row gap-6">
          <view className="items-center justify-center size-16 rounded-2xl bg-input-bg border border-white/5 active:bg-primary/10 active:scale-95 transition-all">
            <text className="text-3xl text-primary">👤</text>
          </view>
          <view className="items-center justify-center size-16 rounded-2xl bg-input-bg border border-white/5 active:bg-primary/10 active:scale-95 transition-all">
            <text className="text-3xl text-primary">☝️</text>
          </view>
        </view>
      </view>

      {/* Footer */}
      <view className="mt-auto pt-12 text-center flex-row">
        <text className="text-slate-500 text-sm">New user? </text>
        <text
          className="text-primary font-bold ml-1 active:underline"
          bindtap={() => onNavigate?.("sign-up")}
        >
          Contact Administration
        </text>
      </view>
    </view>
  );
};

export default SignInPage;
