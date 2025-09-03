import Lottie from 'lottie-react';
import { cn } from '../utils';

interface IAnimationProps {
  source?: unknown;
  looping?: boolean;
  autoplay?: boolean;
  className?: string;
}

export function Animation({
  source,
  autoplay,
  looping,
  className,
}: IAnimationProps) {
  return (
    <div className={cn('h-full w-full', className)}>
      <Lottie
        animationData={source}
        autoPlay={autoplay}
        className="h-full w-full"
        loop={looping}
      />
    </div>
  );
}
