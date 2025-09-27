import { cn, PlusIcon } from '@/shared';

interface ButtonOpenModalCreateBankAccountProps {
  onClick?(): void;
  isSlider?: boolean;
}

export function ButtonOpenModalCreateBankAccount({
  onClick,
  isSlider,
}: ButtonOpenModalCreateBankAccountProps) {
  return (
    <button
      className={cn(
        'flex h-[200px] flex-col items-center justify-center gap-4 rounded-2xl border-2 border-teal-6 border-dashed text-white',
        isSlider && 'w-full'
      )}
      onClick={onClick}
      type="button"
    >
      <div className="flex size-11 items-center justify-center rounded-full border-2 border-white border-dashed">
        <PlusIcon className="size-6" />
      </div>
      <span
        className={cn(
          'w-32 text-center font-medium tracking-[-0.5px]',
          isSlider && 'w-full'
        )}
      >
        Cadastre uma nova conta
      </span>
    </button>
  );
}
