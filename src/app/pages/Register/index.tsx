import { AuthHeader } from '@/app/components/features/auth/AuthHeader';
import { Button } from '@/app/components/ui/Button';
import { Input } from '@/app/components/ui/Input';

export default function RegisterPage() {
  return (
    <main>
      <AuthHeader
        linkHref="/login"
        linkLabel="Fazer login"
        subtitle="Já possui uma conta?"
        title="Crie sua conta"
      />
      <form className="flex w-full flex-col gap-4">
        <Input name="firstName" placeholder="Nome" />
        <Input name="lastName" placeholder="Sobrenome" />
        <Input name="email" placeholder="Email" type="email" />
        <Input name="password" placeholder="Senha" type="password" />
        <Button type="submit">Entrar</Button>
      </form>
    </main>
  );
}
