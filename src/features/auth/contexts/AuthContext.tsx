import {
  createContext,
  type PropsWithChildren,
  useCallback,
  useEffect,
} from 'react';
import toast from 'react-hot-toast';
import { type IMeResponse, useGetMe } from '@/features/users';
import { SplashScreen } from '@/shared';
import { authService } from '../services/httpClientAuthService';
import { useIsAuthenticatedStore } from '../stores/useIsAuthenticatedStore';

interface AuthContextValue {
  signedIn: boolean;
  signin(): void;
  signout(): void;
  loggedUser?: IMeResponse;
}

export const AuthContext = createContext({} as AuthContextValue);

export function AuthProvider({ children }: PropsWithChildren) {
  const { isAuthenticated, setIsAuthenticated } = useIsAuthenticatedStore();

  const { user, isFetching, isSuccess, isError, removeQuery } = useGetMe({
    enabled: isAuthenticated,
  });

  const signin = useCallback(() => {
    setIsAuthenticated(true);
  }, []);

  const signout = useCallback(async () => {
    await authService.logout();

    setIsAuthenticated(false);
    removeQuery();
  }, []);

  useEffect(() => {
    if (isError) {
      toast.error('Sua sessão expirou!');
      signout();
    }
  }, [isError]);

  return (
    <AuthContext.Provider
      value={{
        signedIn: isSuccess && isAuthenticated,
        signin,
        signout,
        loggedUser: user,
      }}
    >
      {!isFetching && children}
      <SplashScreen isLoading={isFetching} />
    </AuthContext.Provider>
  );
}
