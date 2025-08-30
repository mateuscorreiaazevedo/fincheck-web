import { use } from 'react';
import { AuthContext } from '../contexts/AuthContext';

export function useAuth() {
  const context = use(AuthContext);

  if (!context) {
    throw new Error('Error on AuthContext.');
  }

  return { ...context };
}
