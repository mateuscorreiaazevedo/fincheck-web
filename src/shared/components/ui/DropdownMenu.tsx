// biome-ignore lint/performance/noNamespaceImport: usenamespace in radix
import * as Dropdown from '@radix-ui/react-dropdown-menu';
import type { ComponentProps } from 'react';
import { cn } from '@/shared/utils';

function DropdownMenu(props: Dropdown.DropdownMenuProps) {
  return <Dropdown.Root {...props} />;
}

function DropdownMenuContent({
  className,
  ...props
}: Dropdown.DropdownMenuContentProps) {
  return (
    <Dropdown.Portal>
      <Dropdown.Content
        {...props}
        className={cn(
          'h-auto w-full rounded-2xl border border-gray-1 bg-white shadow-default transition-all data-[side=bottom]:animate-slideUpAndFade data-[side=top]:animate-slideDownAndFade',
          className
        )}
      />
    </Dropdown.Portal>
  );
}

function DropdownMenuItem({
  className,
  ...props
}: Dropdown.DropdownMenuItemProps) {
  return (
    <Dropdown.Item
      {...props}
      className={cn(
        'flex cursor-pointer items-center gap-2 rounded-lg px-4 py-2 text-gray-8 text-sm outline-none transition-all data-[highlighted]:bg-gray-1/50',
        className
      )}
    />
  );
}

function DropdownMenuLabel(props: Dropdown.DropdownMenuLabelProps) {
  return <Dropdown.Label {...props} />;
}

function DropdownMenuSeparator({
  className,
  ...props
}: Dropdown.DropdownMenuSeparatorProps) {
  return (
    <Dropdown.Separator
      {...props}
      className={cn('h-px bg-gray-1', className)}
    />
  );
}

function DropdownMenuHeader({ className, ...props }: ComponentProps<'div'>) {
  return <div {...props} className={cn('p-2 pb-1', className)} />;
}
function DropdownMenuBody({ className, ...props }: ComponentProps<'div'>) {
  return <div {...props} className={cn('p-2', className)} />;
}

DropdownMenu.Trigger = Dropdown.Trigger;
DropdownMenu.Content = DropdownMenuContent;
DropdownMenu.Item = DropdownMenuItem;
DropdownMenu.Label = DropdownMenuLabel;
DropdownMenu.Separator = DropdownMenuSeparator;
DropdownMenu.Header = DropdownMenuHeader;
DropdownMenu.Body = DropdownMenuBody;

export { DropdownMenu };
