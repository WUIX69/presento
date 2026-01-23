import { type ReactNode } from "@lynx-js/react";

interface LabelProps {
  children: ReactNode;
  className?: string;
  required?: boolean;
}

export function Label({ children, className = "", required }: LabelProps) {
  return (
    <text className={`text-sm font-medium text-gray-700 ${className}`}>
      {children}
      {required && <text className="text-red-500 ml-0.5">*</text>}
    </text>
  );
}
