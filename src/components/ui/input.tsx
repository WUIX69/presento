interface InputProps {
  placeholder?: string;
  className?: string;
  label?: string;
  type?: 'text' | 'number' | 'digit' | 'password' | 'tel' | 'email';
}

export function Input({
  placeholder,
  className = '',
  label,
  type = 'text',
}: InputProps) {
  return (
    <view className="gap-1.5 w-full">
      {label && (
        <text className="text-sm font-medium text-foreground ml-1">
          {label}
        </text>
      )}
      <input
        type={
          type as 'text' | 'number' | 'digit' | 'password' | 'tel' | 'email'
        }
        placeholder={placeholder}
        placeholder-style="color: var(--muted-foreground)"
        className={`h-10 border border-border rounded-md px-3 text-sm focus:border-primary focus:ring-1 focus:ring-primary bg-input text-foreground ${className}`}
      />
    </view>
  );
}
