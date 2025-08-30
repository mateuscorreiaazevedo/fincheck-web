import type { ComponentProps } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

const buttonVariants = tv({
  base: 'flex items-center justify-center gap-2 transition-all disabled:cursor-not-allowed disabled:bg-gray-1 disabled:text-gray-4',
  variants: {
    variant: {
      default:
        'bg-teal-8 font-medium text-white hover:bg-teal-7 active:bg-teal-9',
      ghost: 'text-teal-9 hover:bg-gray-1 active:bg-gray-2',
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
  VariantProps<typeof buttonVariants>;

export function Button({
  className,
  variant,
  size,
  radius,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={buttonVariants({ size, className, variant, radius })}
    />
  );
}
