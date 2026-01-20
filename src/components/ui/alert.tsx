interface AlertProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'destructive' | 'success' | 'warning';
}

export function Alert({
  children,
  className = '',
  variant = 'default',
}: AlertProps) {
  const variants = {
    default: 'bg-blue-50 border-blue-200 text-blue-900',
    destructive: 'bg-red-50 border-red-200 text-red-900',
    success: 'bg-green-50 border-green-200 text-green-900',
    warning: 'bg-yellow-50 border-yellow-200 text-yellow-900',
  };

  return (
    <view className={`border rounded-lg p-4 ${variants[variant]} ${className}`}>
      {children}
    </view>
  );
}

interface AlertTitleProps {
  children: React.ReactNode;
  className?: string;
}

export function AlertTitle({ children, className = '' }: AlertTitleProps) {
  return (
    <text className={`font-semibold text-sm mb-1 ${className}`}>
      {children}
    </text>
  );
}

interface AlertDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

export function AlertDescription({
  children,
  className = '',
}: AlertDescriptionProps) {
  return <text className={`text-sm ${className}`}>{children}</text>;
}
