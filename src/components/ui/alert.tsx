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
    default: 'bg-primary/5 border-primary/20 text-primary',
    destructive: 'bg-red-500/5 border-red-500/20 text-red-600',
    success: 'bg-green-500/5 border-green-500/20 text-green-600',
    warning: 'bg-yellow-500/5 border-yellow-500/20 text-yellow-600',
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
    <text className={`font-semibold text-sm mb-1 text-foreground ${className}`}>
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
  return (
    <text className={`text-sm text-muted-foreground ${className}`}>
      {children}
    </text>
  );
}
