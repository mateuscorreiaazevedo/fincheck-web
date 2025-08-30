import { AuthHeader } from '@/app/components/features/auth/AuthHeader';
import { Button } from '@/app/components/ui/Button';
import { Input } from '@/app/components/ui/Input';

export default function LoginPage() {
  return (
    <main>
      <AuthHeader
        linkHref="/register"
        linkLabel="Crie sua conta"
        subtitle="Novo por aqui?"
        title="Entre em sua conta"
      />
      <form className="flex w-full flex-col gap-4">
        <Input name="email" placeholder="Email" type="email" />
        <Input name="password" placeholder="Senha" type="password" />
        <Button type="submit">Criar conta</Button>
      </form>
    </main>
  );
}
