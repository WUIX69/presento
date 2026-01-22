interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'destructive';
}

export const Badge = ({
  children,
  className = '',
  variant = 'default',
}: BadgeProps) => {
  const variants = {
    default: 'bg-muted text-muted-foreground',
    primary: 'bg-primary/10 text-primary',
    success: 'bg-green-500/10 text-green-600',
    warning: 'bg-yellow-500/10 text-yellow-600',
    destructive: 'bg-destructive/10 text-destructive',
  };

  return (
    <view
      className={`px-2.5 py-0.5 rounded-full self-start ${variants[variant]} ${className}`}
    >
      <text className="text-xs font-semibold">{children}</text>
    </view>
  );
};
