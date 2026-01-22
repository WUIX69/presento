interface TeacherPageProps {
  onNavigate?: (page: 'gallery' | 'sign-in' | 'sign-up') => void;
}

/**
 * Teacher Index Page Component
 *
 * Welcome page for teachers after authentication.
 * This will be the /teacher route when using a router.
 */
const TeacherPage = ({ onNavigate }: TeacherPageProps) => {
  return (
    <view className="flex-1 flex flex-col items-center justify-center px-6 py-12 w-full max-w-[480px] mx-auto">
      {/* Welcome Icon */}
      <view className="mb-8 flex flex-col items-center">
        <view className="w-32 h-32 bg-primary/10 rounded-[28%] flex items-center justify-center mb-6 relative border border-primary/40">
          <view className="absolute inset-0 bg-primary/5 blur-xl rounded-full" />
          <view className="relative z-10">
            <text className="text-6xl">👨‍🏫</text>
          </view>
        </view>
        <text className="text-foreground text-4xl font-bold tracking-tight text-center">
          Hello, Welcome Back
        </text>
        <text className="text-primary text-3xl font-bold mt-2">Teacher</text>
        <text className="text-muted-foreground mt-4 text-center font-medium">
          Manage your classes and attendance
        </text>
      </view>

      {/* Quick Actions Placeholder */}
      <view className="w-full gap-4 mt-8">
        <view className="bg-card rounded-2xl p-6 border border-border">
          <text className="text-foreground font-semibold text-lg mb-2">
            Quick Actions
          </text>
          <text className="text-muted-foreground text-sm">
            Your dashboard features will appear here
          </text>
        </view>
      </view>

      {/* Back Button */}
      <view className="mt-12">
        <view
          className="px-6 py-3 bg-primary/10 rounded-xl border border-primary/40 active:bg-primary/20"
          bindtap={() => onNavigate?.('gallery')}
        >
          <text className="text-primary font-semibold">Back to Home</text>
        </view>
      </view>
    </view>
  );
};

export default TeacherPage;
