import { tv } from 'tailwind-variants';
import type { IconNames } from '../../../types/IconNames';
import type { TransactionType } from '../../../types/TransactionType';
import { iconsMap } from '../../../utils/iconsMap';

interface IconProps {
  icon: IconNames;
  type: TransactionType;
}

const bgVariants = tv({
  base: 'flex size-11 items-center justify-center rounded-full border-2 border-white',
  variants: {
    type: {
      INCOME: '',
      EXPENSE: '',
    },
    icon: {
      travel: '',
      food: 'bg-red-0',
      home: 'bg-pink-0',
      education: 'bg-grape-0',
      fun: 'bg-violet-0',
      grocery: 'bg-indigo-0',
      clothes: 'bg-blue-0',
      transport: 'bg-yellow-0',
      freelance: 'bg-green-0',
      other: '',
    },
  },
  compoundVariants: [
    { type: 'EXPENSE', icon: 'travel', className: 'bg-orange-0' },
    { type: 'INCOME', icon: 'travel', className: 'bg-lime-0' },
    { type: 'EXPENSE', icon: 'other', className: 'bg-indigo-0' },
    { type: 'INCOME', icon: 'other', className: 'bg-teal-0' },
  ],
  defaultVariants: {
    icon: 'other',
    type: 'INCOME',
  },
});

const iconVariants = tv({
  base: 'size-6',
  variants: {
    type: {
      INCOME: '',
      EXPENSE: '',
    },
    icon: {
      travel: '',
      food: 'text-red-5',
      home: 'text-pink-5',
      education: 'text-grape-5',
      fun: 'text-violet-5',
      grocery: 'text-indigo-5',
      clothes: 'text-blue-5',
      transport: 'text-yellow-5',
      freelance: 'text-green-5',
      other: '',
    },
  },
  defaultVariants: {
    icon: 'other',
    type: 'INCOME',
  },
  compoundVariants: [
    { type: 'EXPENSE', icon: 'travel', className: 'text-orange-5' },
    { type: 'INCOME', icon: 'travel', className: 'text-lime-6' },
    { type: 'EXPENSE', icon: 'other', className: 'text-indigo-9' },
    { type: 'INCOME', icon: 'other', className: 'text-teal-6' },
  ],
});

export function Icon({ icon, type }: IconProps) {
  const IconByType = iconsMap(icon, type);

  return (
    <div className={bgVariants({ icon, type })}>
      <IconByType className={iconVariants({ icon, type })} />
    </div>
  );
}
