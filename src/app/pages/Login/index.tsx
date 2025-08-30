import { Controller } from 'react-hook-form';
import { AuthHeader, PasswordIconButton } from '@/app/components/features/auth';
import { Button, Input } from '@/app/components/ui';
import { useLoginController } from './useLoginController';

export default function LoginPage() {
  const { control, handleSubmit, handleTogglePassword, showPassword } =
    useLoginController();

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

        <Button type="submit">Entrar</Button>
      </form>
    </main>
  );
}
