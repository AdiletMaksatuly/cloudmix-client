import { useContext } from 'react';
import { AuthContext } from '@/auth/context/auth.context';
import { AuthContextType } from '@/auth/models/auth-context.model';

export default function useAuth(): AuthContextType {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}
