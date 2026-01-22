interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card = ({ children, className = '' }: CardProps) => (
  <view
    className={`bg-card border border-border rounded-xl shadow-sm ${className}`}
  >
    {children}
  </view>
);

interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export const CardHeader = ({ children, className = '' }: CardHeaderProps) => (
  <view className={`p-4 border-b border-border ${className}`}>{children}</view>
);

interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

export const CardContent = ({ children, className = '' }: CardContentProps) => (
  <view className={`p-4 ${className}`}>{children}</view>
);

interface CardTitleProps {
  children: React.ReactNode;
  className?: string;
}

export const CardTitle = ({ children, className = '' }: CardTitleProps) => (
  <text className={`text-lg font-semibold text-foreground ${className}`}>
    {children}
  </text>
);

interface CardDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

export const CardDescription = ({
  children,
  className = '',
}: CardDescriptionProps) => (
  <text className={`text-sm text-muted-foreground mt-1 ${className}`}>
    {children}
  </text>
);

interface CardFooterProps {
  children: React.ReactNode;
  className?: string;
}

export const CardFooter = ({ children, className = '' }: CardFooterProps) => (
  <view className={`p-4 border-t border-border flex-row gap-2 ${className}`}>
    {children}
  </view>
);
