import { SymbolIcon } from '@radix-ui/react-icons';
import { Controller } from 'react-hook-form';
import {
  AuthHeader,
  PasswordIconButton,
  useRegisterController,
} from '@/features/auth';
import { Button, ErrorMessage, Input } from '@/shared';

export default function RegisterPage() {
  const {
    control,
    handleSubmit,
    handleTogglePassword,
    isPending,
    showPassword,
    error,
  } = useRegisterController();

  return (
    <main>
      <AuthHeader
        linkHref="/login"
        linkLabel="Fazer login"
        subtitle="Já possui uma conta?"
        title="Crie sua conta"
      />
      <form className="flex w-full flex-col gap-4" onSubmit={handleSubmit}>
        <ErrorMessage className="mt-0 justify-center" error={error} />
        <Controller
          control={control}
          name="firstName"
          render={({ field, fieldState }) => (
            <Input
              {...field}
              error={fieldState.error?.message}
              placeholder="Nome"
            />
          )}
        />
        <Controller
          control={control}
          name="lastName"
          render={({ field, fieldState }) => (
            <Input
              {...field}
              error={fieldState.error?.message}
              placeholder="Sobrenome"
            />
          )}
        />
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
              {...field}
              endComponent={
                <PasswordIconButton
                  onClick={handleTogglePassword}
                  visible={showPassword}
                />
              }
              error={fieldState.error?.message}
              placeholder="Senha"
              type={showPassword ? 'text' : 'password'}
            />
          )}
        />

        <Button className="mt-2" disabled={isPending} type="submit">
          {!isPending && 'Criar conta'}
          {isPending && (
            <>
              <SymbolIcon className="animate-spin" />
              Criando sua conta...
            </>
          )}
        </Button>
      </form>
    </main>
  );
}
