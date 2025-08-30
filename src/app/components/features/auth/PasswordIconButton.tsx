import { twMerge } from 'tailwind-merge';
import { Button, EyeClosed, EyeOpen } from '../../ui';

interface PasswordIconButtonProps {
  onClick?: VoidFunction;
  visible?: boolean;
}

export function PasswordIconButton({
  onClick,
  visible,
}: PasswordIconButtonProps) {
  const Icon = visible ? EyeOpen : EyeClosed;

  return (
    <Button
      onClick={onClick}
      radius="pill"
      size="icon"
      type="button"
      variant="ghost"
    >
      <Icon
        className={twMerge('size-6 text-gray-7', !visible && 'translate-y-0.5')}
      />
    </Button>
  );
}
