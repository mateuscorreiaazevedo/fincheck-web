import { type ComponentProps, memo } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { Spinner } from './Spinner';

const buttonVariants = tv({
  base: 'flex items-center justify-center gap-2 px-6 transition-all disabled:cursor-not-allowed disabled:bg-gray-1 disabled:text-gray-4',
  variants: {
    variant: {
      none: 'bg-transparent',
      danger:
        'bg-red-9 font-medium text-white outline-red-7 active:bg-red-8 enabled:hover:bg-red-7',
      default:
        'bg-teal-8 font-medium text-white outline-teal-9 active:bg-teal-9 enabled:hover:bg-teal-7',
      ghostGray:
        'text-teal-9 outline-gray-2 active:bg-gray-2 enabled:hover:bg-gray-1',
      ghostTeal:
        'text-white outline-teal-9 active:bg-teal-9 enabled:hover:bg-teal-8',
      gradient: 'from-gray-1 to-transparent text-gray-5 outline-teal-9',
      secondary:
        'font-medium text-gray-8 text-sm tracking-[-0.5px] hover:bg-gray-2',
    },
    size: {
      default: 'h-12 text-base',
      icon: 'size-fill p-1',
    },
    radius: {
      none: 'rounded-none',
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

export const Button = memo(
  ({
    className,
    variant,
    size,
    radius,
    disabled,
    isLoading,
    children,
    isLoadingLabel,
    ...props
  }: ButtonProps) => (
    <button
      {...props}
      aria-busy={isLoading}
      aria-disabled={isLoading || disabled}
      className={buttonVariants({ size, className, variant, radius })}
      disabled={isLoading || disabled}
      type={props.type || 'button'}
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
  )
);
