import {
  Button,
  ContentView,
  LeftIcon,
  RightIcon,
  VisibilityToggleButton,
  VisibilityToggleContent,
} from '@/shared';

export function BankAccountsResume() {
  return (
    <ContentView className="flex flex-col bg-teal-9">
      <div>
        <span className="text-white tracking-[-0.5px]">Saldo total</span>
        <div className="flex items-center gap-2">
          <VisibilityToggleContent>
            <strong className="text-2xl text-white tracking-[-1px]">
              R$ 1000,00
            </strong>
          </VisibilityToggleContent>
          <VisibilityToggleButton />
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-end">
        <div className="flex items-center justify-between">
          <strong className="text-lg text-white tracking-[-1px]">
            Minhas contas
          </strong>
          <div className="flex items-center gap-1">
            <Button
              className="py-3 pr-3.5 pl-2.5 disabled:bg-transparent disabled:opacity-40"
              disabled
              radius="pill"
              size="icon"
              variant="ghostTeal"
            >
              <LeftIcon className="size-6 text-white" />
            </Button>
            <Button
              className="py-3 pr-2.5 pl-3.5 disabled:bg-transparent disabled:opacity-40"
              radius="pill"
              size="icon"
              variant="ghostTeal"
            >
              <RightIcon className="size-6 text-white" />
            </Button>
          </div>
        </div>
        <div>Sidebar</div>
      </div>
    </ContentView>
  );
}
