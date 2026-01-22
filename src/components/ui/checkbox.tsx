import { useState } from '@lynx-js/react';

interface CheckboxProps {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  className?: string;
  label?: string;
}

export function Checkbox({
  checked = false,
  onCheckedChange,
  className = '',
  label,
}: CheckboxProps) {
  const [internalChecked, setInternalChecked] = useState(checked);

  const toggle = () => {
    const next = !internalChecked;
    setInternalChecked(next);
    onCheckedChange?.(next);
  };

  return (
    <view className="flex-row items-center gap-2" bindtap={toggle}>
      <view
        className={`w-5 h-5 rounded border flex justify-center items-center ${
          internalChecked ? 'bg-primary border-primary' : 'bg-card border-input'
        } ${className}`}
      >
        {internalChecked && (
          <text className="text-white text-xs font-bold">✓</text>
        )}
      </view>
      {label && <text className="text-sm text-gray-700">{label}</text>}
    </view>
  );
}
