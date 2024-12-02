import { createContext } from 'react';
import { AuthContextType } from '@/auth/models/auth-context.model';

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);

export default AuthContext;
