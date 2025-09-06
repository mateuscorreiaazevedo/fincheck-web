import { twMerge } from 'tailwind-merge';
import { Button, EyeClosedIcon, EyeOpenedIcon } from '@/shared';

interface PasswordIconButtonProps {
  onClick?: VoidFunction;
  visible?: boolean;
}

export function PasswordIconButton({
  onClick,
  visible,
}: PasswordIconButtonProps) {
  const Icon = visible ? EyeOpenedIcon : EyeClosedIcon;

  return (
    <Button
      onClick={onClick}
      radius="pill"
      size="icon"
      type="button"
      variant="ghostGray"
    >
      <Icon
        className={twMerge('size-5 text-gray-7', !visible && 'translate-y-0.5')}
      />
    </Button>
  );
}
