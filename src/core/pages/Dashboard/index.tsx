import { useAuth } from '@/features/auth';
import { Button } from '@/shared';

export default function DashboardPage() {
  const { signout, user } = useAuth();

  return (
    <div>
      <h1>Olá {user?.firstName}</h1>
      <Button onClick={signout}>Sair</Button>
    </div>
  );
}
