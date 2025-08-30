import { createContext, type PropsWithChildren } from 'react';

interface AuthContextValue {
  signedIn: boolean;
}

export const AuthContext = createContext({} as AuthContextValue);

export function AuthProvider({ children }: PropsWithChildren) {
  return (
    <AuthContext.Provider value={{ signedIn: false }}>
      {children}
    </AuthContext.Provider>
  );
}
