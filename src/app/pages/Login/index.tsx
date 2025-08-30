import { Controller } from 'react-hook-form';
import { AuthHeader } from '@/app/components/features/auth/AuthHeader';
import { Button } from '@/app/components/ui/Button';
import { Input } from '@/app/components/ui/Input';
import { useLoginController } from '@/core/features/auth';

export default function LoginPage() {
  const { control, handleSubmit } = useLoginController();

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
              {...field}
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
