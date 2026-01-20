interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'outline' | 'destructive' | 'ghost';
  onTap?: () => void;
}

export function Button({
  children,
  className = '',
  variant = 'primary',
  onTap,
}: ButtonProps) {
  const variants = {
    primary: 'bg-blue-600 active:bg-blue-700 text-white',
    outline:
      'border border-gray-300 bg-transparent active:bg-gray-100 text-gray-900',
    destructive: 'bg-red-500 active:bg-red-600 text-white',
    ghost: 'bg-transparent active:bg-gray-100 text-gray-700',
  };

  return (
    <view
      className={`px-4 py-2.5 rounded-lg flex-row justify-center items-center ${variants[variant]} ${className}`}
      bindtap={onTap}
    >
      <text
        className={`font-semibold text-sm ${variant === 'outline' || variant === 'ghost' ? 'text-gray-900' : 'text-white'}`}
      >
        {children}
      </text>
    </view>
  );
}
