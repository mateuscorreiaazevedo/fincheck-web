import {
  AuthHeader,
  PasswordIconButton,
  useRegisterController,
} from '@/features/auth';
import { Button, Input } from '@/shared';

export default function RegisterPage() {
  const {
    fieldErrors,
    register,
    handleSubmit,
    handleTogglePassword,
    isPending,
    showPassword,
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
        <Input
          {...register('firstName')}
          error={fieldErrors.firstName?.message}
          placeholder="Nome"
        />
        <Input
          {...register('lastName')}
          error={fieldErrors.lastName?.message}
          placeholder="Sobrenome"
        />
        <Input
          {...register('email')}
          error={fieldErrors.email?.message}
          placeholder="Email"
        />
        <Input
          {...register('password')}
          endComponent={
            <PasswordIconButton
              onClick={handleTogglePassword}
              visible={showPassword}
            />
          }
          error={fieldErrors.password?.message}
          placeholder="Senha"
          type={showPassword ? 'text' : 'password'}
        />
        <Button
          className="mt-2"
          isLoading={isPending}
          isLoadingLabel="Criando sua conta..."
          type="submit"
        >
          Criar conta
        </Button>
      </form>
    </main>
  );
}
