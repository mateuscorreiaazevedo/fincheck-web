import {
  createContext,
  type PropsWithChildren,
  useCallback,
  useEffect,
} from 'react';
import toast from 'react-hot-toast';
import { SplashScreen } from '@/shared';
import { useGetMe } from '../hooks/useGetMe';
import { authService } from '../services/HttpClientAuthService';
import { useIsAuthenticatedStore } from '../stores/useIsAuthenticatedStore';
import type { IMeResponse } from '../types/HttpGetMeResponse';

interface AuthContextValue {
  signedIn: boolean;
  signin(): void;
  signout(): void;
  authenticatedUser?: IMeResponse;
}

export const AuthContext = createContext({} as AuthContextValue);

export function AuthProvider({ children }: PropsWithChildren) {
  const { isAuthenticated, setIsAuthenticated } = useIsAuthenticatedStore();

  const { authenticatedUser, isFetching, isSuccess, isError, removeQuery } =
    useGetMe({
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
        authenticatedUser,
      }}
    >
      {!isFetching && children}
      <SplashScreen isLoading={isFetching} />
    </AuthContext.Provider>
  );
}
