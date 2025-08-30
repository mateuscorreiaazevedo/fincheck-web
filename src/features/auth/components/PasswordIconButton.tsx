import { EyeClosedIcon, EyeOpenIcon } from '@radix-ui/react-icons';
import { twMerge } from 'tailwind-merge';
import { Button } from '@/shared';

interface PasswordIconButtonProps {
  onClick?: VoidFunction;
  visible?: boolean;
}

export function PasswordIconButton({
  onClick,
  visible,
}: PasswordIconButtonProps) {
  const Icon = visible ? EyeOpenIcon : EyeClosedIcon;

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
