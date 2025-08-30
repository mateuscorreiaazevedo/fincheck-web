import { Navigate, Outlet } from 'react-router';
import { useAuth } from '../hooks/useAuth';

interface AuthGuardProps {
  isPrivate: boolean;
}

export function AuthGuard({ isPrivate }: AuthGuardProps) {
  const { signedIn } = useAuth();

  if (!signedIn && isPrivate) {
    return <Navigate replace to="/login" />;
  }

  if (!isPrivate && signedIn) {
    return <Navigate replace to="/" />;
  }

  return <Outlet />;
}
