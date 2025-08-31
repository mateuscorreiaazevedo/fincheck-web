import {
  AuthHeader,
  PasswordIconButton,
  useLoginController,
} from '@/features/auth';
import { Button, Input } from '@/shared';

export default function LoginPage() {
  const {
    handleSubmit,
    handleTogglePassword,
    showPassword,
    isPending,
    fieldErrors,
    register,
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
        <Input
          {...register('email')}
          error={fieldErrors.email?.message}
          placeholder="Email"
        />
        <Input
          type={showPassword ? 'text' : 'password'}
          {...register('password')}
          endComponent={
            <PasswordIconButton
              onClick={handleTogglePassword}
              visible={showPassword}
            />
          }
          error={fieldErrors.password?.message}
          placeholder="Senha"
        />
        <Button
          className="mt-2"
          isLoading={isPending}
          isLoadingLabel="Entrando..."
          type="submit"
        >
          Entrar
        </Button>
      </form>
    </main>
  );
}
