import { createFileRoute, useNavigate } from "@tanstack/react-router";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ModeToggle } from "@/components/ui/mode-toggle";

/**
 * Landing Page Component
 * Simple navigation page with 3 cards
 */
function LandingPage() {
  const navigate = useNavigate();

  return (
    <view className="min-h-screen p-8 ">
      {/* Header: Title (left) + Theme Toggle (right) */}
      <view className="flex flex-row justify-between items-start mb-8">
        <view className="gap-2">
          <text className="text-4xl font-bold text-foreground">Presento</text>
          <text className="text-base text-muted-foreground">
            Smart Attendance Management System
          </text>
        </view>
        <ModeToggle />
      </view>

      {/* Navigation Cards */}
      <view className="flex flex-col gap-4 max-w-2xl">
        {/* Auth Card */}
        <view bindtap={() => navigate({ to: "/auth/sign-in" })}>
          <Card className="active:scale-[0.98] transition-transform">
            <CardHeader className="p-5">
              <view className="flex flex-row items-center gap-4">
                <view className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <text className="text-3xl">🔐</text>
                </view>
                <view className="flex-1">
                  <CardTitle>Authentication</CardTitle>
                  <CardDescription>
                    Sign in to your account or create a new one
                  </CardDescription>
                </view>
              </view>
            </CardHeader>
          </Card>
        </view>

        {/* Student Card */}
        <view bindtap={() => navigate({ to: "/student" })}>
          <Card className="active:scale-[0.98] transition-transform">
            <CardHeader className="p-5">
              <view className="flex flex-row items-center gap-4">
                <view className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <text className="text-3xl">🎓</text>
                </view>
                <view className="flex-1">
                  <CardTitle>Student Portal</CardTitle>
                  <CardDescription>
                    Mark attendance and view your records
                  </CardDescription>
                </view>
              </view>
            </CardHeader>
          </Card>
        </view>

        {/* Teacher Card */}
        <view bindtap={() => navigate({ to: "/teacher" })}>
          <Card className="active:scale-[0.98] transition-transform">
            <CardHeader className="p-5">
              <view className="flex flex-row items-center gap-4">
                <view className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <text className="text-3xl">👨‍🏫</text>
                </view>
                <view className="flex-1">
                  <CardTitle>Teacher Portal</CardTitle>
                  <CardDescription>
                    Manage classes, students, and attendance
                  </CardDescription>
                </view>
              </view>
            </CardHeader>
          </Card>
        </view>
      </view>
    </view>
  );
}

export const Route = createFileRoute("/")({
  component: LandingPage,
});
