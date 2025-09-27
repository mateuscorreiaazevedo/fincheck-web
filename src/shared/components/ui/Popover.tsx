// biome-ignore lint/performance/noNamespaceImport: for UI
import * as RdxPopover from '@radix-ui/react-popover';
import { cn } from '@/shared/utils';

<RdxPopover.Root>
  <RdxPopover.Trigger />
  <RdxPopover.Anchor />
  <RdxPopover.Portal>
    <RdxPopover.Content>
      <RdxPopover.Close />
      <RdxPopover.Arrow />
    </RdxPopover.Content>
  </RdxPopover.Portal>
</RdxPopover.Root>;

function Popover(props: RdxPopover.PopoverProps) {
  return <RdxPopover.Root {...props} />;
}

function PopoverContent({
  className,
  ...props
}: RdxPopover.PopoverContentProps) {
  return (
    <RdxPopover.Portal>
      <RdxPopover.Content
        className={cn(
          'h-auto w-full rounded-2xl border border-gray-1 bg-white shadow-default transition-all data-[side=bottom]:mt-2 data-[side=left]:mr-2 data-[side=top]:mb-2 data-[side-right]:ml-2 data-[side=bottom]:animate-slideUpAndFade data-[side=top]:animate-slideDownAndFade',
          className
        )}
        {...props}
      />
    </RdxPopover.Portal>
  );
}

Popover.Trigger = RdxPopover.Trigger;
Popover.Content = PopoverContent;

export { Popover };
