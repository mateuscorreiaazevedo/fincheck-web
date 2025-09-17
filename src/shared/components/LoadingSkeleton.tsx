import type { PropsWithChildren } from 'react';
import { Skeleton } from './ui/Skeleton';

interface ILoadingSkeletonProps {
  isLoading: boolean;
  className?: string;
}

export function LoadingSkeleton({
  isLoading,
  children,
  className,
}: PropsWithChildren<ILoadingSkeletonProps>) {
  if (isLoading) {
    return <Skeleton className={className} />;
  }

  return children;
}
