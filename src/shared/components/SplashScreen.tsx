import { Transition } from '@headlessui/react';
import { LoaderAnimated } from './LoaderAnimated';
import { Logo } from './ui';

interface SplashScreenProps {
  isLoading?: boolean;
}

export function SplashScreen({ isLoading = false }: SplashScreenProps) {
  return (
    <Transition
      enter="transition-opacity duration-100"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-150"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
      show={isLoading}
    >
      <div className="fixed inset-0 flex flex-col items-center justify-center gap-4 bg-teal-9">
        <Logo className="h-10 translate-y-14 text-white" />
        <LoaderAnimated />
        {/* <Spinner className="size-10 fill-white text-teal-8/30" /> */}
      </div>
    </Transition>
  );
}
