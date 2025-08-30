import { Link } from 'react-router';
import { Input } from '@/app/components/ui/Input';

export default function LoginPage() {
  return (
    <main>
      <header className="mb-[60px] flex flex-col items-center gap-4">
        <h1 className="font-bold text-2xl text-gray-9 tracking-[-1px]">
          Entre em sua conta
        </h1>
        <span className="space-x-2 text-gray-7 tracking-[-0.5px]">
          Novo por aqui?{' '}
          <Link
            className="font-medium text-teal-9 hover:underline"
            to="/register"
          >
            Crie uma conta
          </Link>
        </span>
      </header>
      <form className="flex w-full flex-col gap-4">
        <Input name="email" placeholder="Email" type="email" />
        <Input name="password" placeholder="Senha" type="password" />
        <button type="submit">Entrar</button>
      </form>
    </main>
  );
}
