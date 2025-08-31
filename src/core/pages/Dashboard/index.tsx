import { useAuth } from '@/features/auth';
import { Button } from '@/shared';

export default function DashboardPage() {
  const { signout, loggedUser } = useAuth();

  return (
    <div>
      <h1>Olá {loggedUser?.firstName}</h1>
      <Button onClick={signout}>Sair</Button>
    </div>
  );
}
