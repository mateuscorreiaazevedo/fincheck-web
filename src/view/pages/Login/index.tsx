import { SymbolIcon } from '@radix-ui/react-icons';
import { Controller } from 'react-hook-form';
import { useLoginController } from '@/core/features/auth';
import {
  AuthHeader,
  PasswordIconButton,
} from '@/view/components/features/auth';
import { Button, Input } from '@/view/components/ui';

export default function LoginPage() {
  const {
    control,
    handleSubmit,
    handleTogglePassword,
    showPassword,
    isPending,
  } = useLoginController();

  return (
    <main>
      <AuthHeader
        linkHref="/register"
        linkLabel="Crie sua conta"
        subtitle="Novo por aqui?"
        title="Entre em sua conta"
      />
      <form className="flex w-full flex-col gap-4" onSubmit={handleSubmit}>
        <Controller
          control={control}
          name="email"
          render={({ field, fieldState }) => (
            <Input
              {...field}
              error={fieldState.error?.message}
              placeholder="Email"
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          render={({ field, fieldState }) => (
            <Input
              type={showPassword ? 'text' : 'password'}
              {...field}
              endComponent={
                <PasswordIconButton
                  onClick={handleTogglePassword}
                  visible={showPassword}
                />
              }
              error={fieldState.error?.message}
              placeholder="Senha"
            />
          )}
        />

        <Button className="mt-2" disabled={isPending} type="submit">
          {isPending && (
            <>
              <SymbolIcon className="animate-spin" />
              Entrando...
            </>
          )}
          {!isPending && 'Entrar'}
        </Button>
      </form>
    </main>
  );
}
