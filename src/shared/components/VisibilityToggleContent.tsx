import type { PropsWithChildren } from 'react';
import { useVisibilityValueStore } from '../stores';
import { cn } from '../utils';

interface VisibilityToggleContentProps {
  className?: string;
}

export function VisibilityToggleContent({
  children,
  className,
}: PropsWithChildren<VisibilityToggleContentProps>) {
  const { value: isVisible } = useVisibilityValueStore();

  return <div className={cn(!isVisible && 'blur', className)}>{children}</div>;
}
