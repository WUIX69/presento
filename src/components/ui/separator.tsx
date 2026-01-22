interface SeparatorProps {
  className?: string;
  orientation?: "horizontal" | "vertical";
}

export function Separator({
  className = "",
  orientation = "horizontal",
}: SeparatorProps) {
  return (
    <view
      className={`bg-border ${
        orientation === "horizontal" ? "h-px w-full" : "w-px h-full"
      } ${className}`}
    />
  );
}
