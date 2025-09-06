import { cn } from '@/shared/utils';
import { CrossCircleIcon } from './icons';

type ErrorProps = {
  error: string;
  className?: string;
};

export function ErrorUI({ error, className }: ErrorProps) {
  return (
    <div
      className={cn('mt-2 flex items-center gap-2 pl-2 text-red-9', className)}
    >
      <CrossCircleIcon className="size-4" />
      <span className="font-normal text-xs">{error}</span>
    </div>
  );
}
