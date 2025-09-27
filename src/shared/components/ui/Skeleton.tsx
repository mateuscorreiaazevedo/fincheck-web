import { cn } from '@/shared/utils';

function Skeleton({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-md bg-teal-8',
        "after:-left-full after:absolute after:top-0 after:right-0 after:bottom-0 after:animate-skeleton after:bg-gradient-to-r after:from-transparent after:via-teal-4/40 after:to-transparent after:content-['']",
        className
      )}
      data-slot="skeleton"
      {...props}
    />
  );
}

export { Skeleton };
