import type { ColorInputOption } from '@/features/bankAccounts/types/ColorInputOption';
import { DotIcon } from '@/shared';

export function ColorDropdownInputIconItem({ bg, color }: ColorInputOption) {
  return (
    <div
      className="rounded-full p-2"
      style={{
        color,
        backgroundColor: bg,
      }}
    >
      <DotIcon />
    </div>
  );
}
