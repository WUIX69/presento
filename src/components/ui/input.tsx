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
        <text className="text-sm font-medium text-gray-700 ml-1">{label}</text>
      )}
      <input
        type={
          type as 'text' | 'number' | 'digit' | 'password' | 'tel' | 'email'
        }
        placeholder={placeholder}
        className={`h-10 border border-gray-300 rounded-md px-3 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-white ${className}`}
      />
    </view>
  );
}
