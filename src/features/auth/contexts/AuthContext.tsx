import {
  createContext,
  type PropsWithChildren,
  useCallback,
  useEffect,
  useState,
} from 'react';
import toast from 'react-hot-toast';
import { type IMeResponse, useQueryMe } from '@/features/users';
import { SplashScreen } from '@/shared';
import { tokensUtil } from '../utils/tokensUtil';

interface AuthContextValue {
  signedIn: boolean;
  signin(accessToken: string, refreshToken: string): void;
  signout(): void;
  loggedUser?: IMeResponse;
}

export const AuthContext = createContext({} as AuthContextValue);

export function AuthProvider({ children }: PropsWithChildren) {
  const { accessToken } = tokensUtil.getTokens();
  const [signedIn, setSignedIn] = useState(() => {
    return !!accessToken;
  });

  const { user, isError, isFetching, isSuccess, removeQuery } = useQueryMe({
    enabled: signedIn,
  });

  const signin = useCallback((access_token: string, refresh_token: string) => {
    setSignedIn(true);
    tokensUtil.setTokens({
      accessToken: access_token,
      refreshToken: refresh_token,
    });
  }, []);

  const signout = useCallback(() => {
    setSignedIn(false);
    tokensUtil.removeTokens();
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
        signedIn: isSuccess && signedIn,
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
