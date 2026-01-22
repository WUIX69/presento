import { type ReactNode } from "@lynx-js/react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export const Card = ({ children, className = "" }: CardProps) => (
  <view
    className={`bg-card border border-border rounded-xl shadow-sm ${className}`}
  >
    {children}
  </view>
);

interface CardHeaderProps {
  children: ReactNode;
  className?: string;
  showBorder?: boolean;
}

export const CardHeader = ({
  children,
  className = "",
  showBorder = false,
}: CardHeaderProps) => (
  <view
    className={`p-4 ${showBorder ? "border-b border-border" : ""} ${className}`}
  >
    {children}
  </view>
);

interface CardContentProps {
  children: ReactNode;
  className?: string;
}

export const CardContent = ({ children, className = "" }: CardContentProps) => (
  <view className={`p-4 ${className}`}>{children}</view>
);

interface CardTitleProps {
  children: ReactNode;
  className?: string;
}

export const CardTitle = ({ children, className = "" }: CardTitleProps) => (
  <text className={`text-lg font-semibold text-foreground ${className}`}>
    {children}
  </text>
);

interface CardDescriptionProps {
  children: ReactNode;
  className?: string;
}

export const CardDescription = ({
  children,
  className = "",
}: CardDescriptionProps) => (
  <text className={`text-sm text-muted-foreground mt-1 ${className}`}>
    {children}
  </text>
);

interface CardFooterProps {
  children: ReactNode;
  className?: string;
  showBorder?: boolean;
}

export const CardFooter = ({
  children,
  className = "",
  showBorder = false,
}: CardFooterProps) => (
  <view
    className={`p-4 ${showBorder ? "border-t border-border" : ""} flex-row gap-2 ${className}`}
  >
    {children}
  </view>
);
