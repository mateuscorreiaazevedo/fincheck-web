import { SymbolIcon } from '@radix-ui/react-icons';
import { Controller } from 'react-hook-form';
import {
  AuthHeader,
  PasswordIconButton,
  useLoginController,
} from '@/features/auth';
import { Button, ErrorMessage, Input } from '@/shared';

export default function LoginPage() {
  const {
    control,
    handleSubmit,
    handleTogglePassword,
    showPassword,
    isPending,
    error,
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
        <ErrorMessage className="mt-0 justify-center" error={error} />
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
