import { useVisibilityValueStore } from '../stores';
import { cn } from '../utils';
import { Button, EyeClosedIcon, EyeOpenedIcon } from './ui';

export function VisibilityToggleButton() {
  const { setValue, value: isVisible } = useVisibilityValueStore();

  function toggleVisibility() {
    setValue(!isVisible);
  }

  const Icon = isVisible ? EyeOpenedIcon : EyeClosedIcon;

  return (
    <Button
      className="size-8"
      onClick={toggleVisibility}
      size="icon"
      variant="ghostTeal"
    >
      <Icon
        className={cn('size-6 text-white', !isVisible && 'translate-y-0.5')}
      />
    </Button>
  );
}
