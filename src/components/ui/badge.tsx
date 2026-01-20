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
    default: 'bg-gray-100 text-gray-600',
    primary: 'bg-blue-100 text-blue-700',
    success: 'bg-green-100 text-green-700',
    warning: 'bg-yellow-100 text-yellow-700',
    destructive: 'bg-red-100 text-red-700',
  };

  return (
    <view
      className={`px-2.5 py-0.5 rounded-full self-start ${variants[variant]} ${className}`}
    >
      <text className="text-xs font-semibold">{children}</text>
    </view>
  );
};
