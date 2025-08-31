import {
  createContext,
  type PropsWithChildren,
  useCallback,
  useEffect,
  useState,
} from 'react';
import toast from 'react-hot-toast';
import { type IMeResponse, useQueryMe } from '@/features/users';
import { tokensUtil } from '../utils/tokensUtil';

interface AuthContextValue {
  signedIn: boolean;
  signin(accessToken: string, refreshToken: string): void;
  signout(): void;
  user?: IMeResponse;
}

export const AuthContext = createContext({} as AuthContextValue);

export function AuthProvider({ children }: PropsWithChildren) {
  const { accessToken } = tokensUtil.getTokens();
  const [signedIn, setSignedIn] = useState(() => {
    return !!accessToken;
  });

  const signin = useCallback((access_token: string, refresh_token: string) => {
    setSignedIn(!!access_token);
    tokensUtil.setTokens({
      accessToken: access_token,
      refreshToken: refresh_token,
    });
  }, []);

  const signout = useCallback(() => {
    setSignedIn(false);
    tokensUtil.removeTokens();
  }, []);

  const { user, isError } = useQueryMe({
    enabled: signedIn,
  });

  useEffect(() => {
    if (isError) {
      toast.error('Sua sessão expirou!');
      signout();
    }
  }, [isError]);

  return (
    <AuthContext.Provider value={{ signedIn, signin, signout, user }}>
      {children}
    </AuthContext.Provider>
  );
}
