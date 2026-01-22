import { type ReactNode } from "@lynx-js/react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "outline" | "destructive" | "ghost";
  onTap?: () => void;
}

export function Button({
  children,
  className = "",
  variant = "primary",
  onTap,
}: ButtonProps) {
  const variants = {
    primary: "bg-primary active:opacity-80 text-primary-foreground",
    outline:
      "border border-border bg-transparent active:bg-muted text-foreground",
    destructive: "bg-destructive active:opacity-80 text-destructive-foreground",
    ghost: "bg-transparent active:bg-muted text-foreground",
  };

  return (
    <view
      className={`px-4 py-2.5 rounded-lg flex-row justify-center items-center ${variants[variant]} ${className}`}
      bindtap={onTap}
    >
      <text
        className={`font-semibold text-sm ${variant === "outline" || variant === "ghost" ? "text-foreground" : "text-primary-foreground"}`}
      >
        {children}
      </text>
    </view>
  );
}
