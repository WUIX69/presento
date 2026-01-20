import { useState } from '@lynx-js/react';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function Accordion({ title, children, className = '' }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <view className={`border-b border-gray-200 w-full ${className}`}>
      <view
        className="py-4 flex-row justify-between items-center active:bg-gray-50"
        bindtap={() => setIsOpen(!isOpen)}
      >
        <text className="font-medium text-gray-900">{title}</text>
        <text className="text-gray-400 text-xl">{isOpen ? '−' : '+'}</text>
      </view>
      {isOpen && (
        <view className="pb-4 px-1">
          <text className="text-gray-600 text-sm leading-6">{children}</text>
        </view>
      )}
    </view>
  );
}
