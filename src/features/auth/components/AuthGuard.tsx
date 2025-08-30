import { Navigate, Outlet } from 'react-router';

interface AuthGuardProps {
  isPrivate: boolean;
}

export function AuthGuard({ isPrivate }: AuthGuardProps) {
  const isSignedIn = false;

  if (!isSignedIn && isPrivate) {
    return <Navigate replace to="/login" />;
  }

  if (!isPrivate && isSignedIn) {
    return <Navigate replace to="/" />;
  }

  return <Outlet />;
}
