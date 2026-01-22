import { useState } from '@lynx-js/react';

interface SwitchProps {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  className?: string;
}

export function Switch({
  checked = false,
  onCheckedChange,
  className = '',
}: SwitchProps) {
  const [internalChecked, setInternalChecked] = useState(checked);

  const toggle = () => {
    const next = !internalChecked;
    setInternalChecked(next);
    onCheckedChange?.(next);
  };

  return (
    <view
      className={`w-11 h-6 rounded-full p-1 ${
        internalChecked ? 'bg-primary' : 'bg-input'
      } ${className}`}
      bindtap={toggle}
    >
      <view
        className={`w-4 h-4 bg-white rounded-full shadow-sm ${
          internalChecked ? 'ml-5' : 'ml-0'
        }`}
        style={{ transition: 'margin-left 0.2s' }}
      />
    </view>
  );
}
