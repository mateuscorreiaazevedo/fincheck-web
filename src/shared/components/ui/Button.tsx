import type { ComponentProps } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { Spinner } from './Spinner';

const buttonVariants = tv({
  base: 'flex items-center justify-center gap-2 transition-all disabled:cursor-not-allowed disabled:bg-gray-1 disabled:text-gray-4',
  variants: {
    variant: {
      default:
        'bg-teal-8 font-medium text-white outline-teal-9 hover:bg-teal-7 active:bg-teal-9',
      ghostGray: 'text-teal-9 outline-gray-2 hover:bg-gray-1 active:bg-gray-2',
      ghostTeal: 'text-white outline-teal-9 hover:bg-teal-8 active:bg-teal-9',
    },
    size: {
      default: 'h-12 text-base',
      icon: 'size-fill p-1',
    },
    radius: {
      default: 'rounded-2xl',
      pill: 'rounded-full',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
    radius: 'default',
  },
});

type ButtonProps = ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    isLoading?: boolean;
    isLoadingLabel?: string;
  };

export function Button({
  className,
  variant,
  size,
  radius,
  disabled,
  isLoading,
  children,
  isLoadingLabel,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={buttonVariants({ size, className, variant, radius })}
      disabled={isLoading || disabled}
    >
      {isLoading && (
        <>
          <Spinner />

          {isLoadingLabel && (
            <span className="text-teal-7">{isLoadingLabel}</span>
          )}
        </>
      )}
      {!isLoading && children}
    </button>
  );
}
