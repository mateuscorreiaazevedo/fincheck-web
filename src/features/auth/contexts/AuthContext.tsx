import {
  createContext,
  type PropsWithChildren,
  useCallback,
  useState,
} from 'react';
import { tokensUtil } from '../utils/tokensUtil';

interface AuthContextValue {
  signedIn: boolean;
  signin(accessToken: string, refreshToken: string): void;
  signout(): void;
}

export const AuthContext = createContext({} as AuthContextValue);

export function AuthProvider({ children }: PropsWithChildren) {
  const [signedIn, setSignedIn] = useState(!!tokensUtil.accessToken);

  const signin = useCallback((accessToken: string, refreshToken: string) => {
    setSignedIn(!!accessToken && !!refreshToken);
    tokensUtil.setTokens({
      accessToken,
      refreshToken,
    });
  }, []);

  const signout = useCallback(() => {
    setSignedIn(false);
    tokensUtil.removeTokens();
  }, []);

  return (
    <AuthContext.Provider value={{ signedIn, signin, signout }}>
      {children}
    </AuthContext.Provider>
  );
}
