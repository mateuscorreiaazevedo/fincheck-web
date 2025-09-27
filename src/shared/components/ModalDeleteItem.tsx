import { Button, Modal, RoundedIcon, TrashIcon } from './ui';

interface Props {
  open: boolean;
  onClose(): void;
  onSubmit(): void;
  description: string;
  caption?: string;
}

export function ModalDeleteItem({
  description,
  onClose,
  onSubmit,
  open,
  caption,
}: Props) {
  return (
    <Modal onChangeOpen={onClose} open={open} title="Excluir">
      <main className="flex flex-col items-center justify-center gap-6">
        <RoundedIcon className="bg-red-0">
          <TrashIcon className="text-red-9" />
        </RoundedIcon>
        <strong className="font-bold text-base text-gray-8 tracking-[-0.50px]">
          {description}
        </strong>
        {!!caption && (
          <span className="font-normal text-base text-gray-8 tracking-[-0.50px]">
            {caption}
          </span>
        )}
      </main>
      <footer className="flex flex-col gap-4">
        <Button onClick={onSubmit} variant="danger">
          Sim, desejo excluir
        </Button>
        <Modal.Close asChild>
          <Button
            className="border border-gray-8 text-gray-8"
            variant="ghostGray"
          >
            Cancelar
          </Button>
        </Modal.Close>
      </footer>
    </Modal>
  );
}
