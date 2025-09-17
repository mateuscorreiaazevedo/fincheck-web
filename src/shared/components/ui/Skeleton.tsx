import { cn } from '@/shared/utils';

function Skeleton({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn('animate-pulse rounded-md bg-teal-8', className)}
      data-slot="skeleton"
      {...props}
    />
  );
}

export { Skeleton };
