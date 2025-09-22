// biome-ignore lint/performance/noNamespaceImport: for use headless components
import * as Dialog from '@radix-ui/react-dialog';
import type { ComponentType, ReactNode } from 'react';
import type { IconProps } from '@/shared/types';
import { cn } from '@/shared/utils';
import { CrossIcon } from '../icons';
import ModalContent from './ModalContent';

interface ModalProps {
  open: boolean;
  onChangeOpen?: (value: boolean) => void;
  children?: ReactNode;
  title: string;
  rightIcon?: ComponentType<IconProps>;
  rightIconAction?: VoidFunction;
}

function Modal({
  onChangeOpen,
  open,
  children,
  title,
  rightIcon: RightIcon,
  rightIconAction,
}: ModalProps) {
  return (
    <Dialog.Root onOpenChange={onChangeOpen} open={open}>
      <Dialog.Portal>
        <Dialog.Overlay
          className={cn(
            'fixed inset-0 z-40 bg-black/80 backdrop-blur-sm',
            'data-[state=open]:animate-overlayShow'
          )}
        />
        <Dialog.Content
          className={cn(
            '-translate-x-1/2 -translate-y-1/2 fixed top-1/2 left-1/2 z-50 outline-none',
            'data-[state=open]:animate-contentShow',
            'w-full max-w-[400px] space-y-10 rounded-2xl bg-white p-6 shadow-default'
          )}
        >
          <header className="flex h-12 items-center justify-between text-gray-8">
            <Dialog.Close className="flex size-12 items-center justify-center outline-none">
              <CrossIcon />
            </Dialog.Close>
            <Dialog.Title asChild>
              <h3 className="font-bold text-lg tracking-[-1px]">{title}</h3>
            </Dialog.Title>
            <button
              className="flex size-12 items-center justify-center"
              onClick={rightIconAction}
              type="button"
            >
              {RightIcon && <RightIcon />}
            </button>
          </header>

          {children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

Modal.Content = ModalContent;

export { Modal };
