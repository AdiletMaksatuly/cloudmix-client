import { User } from '@/auth/models/user.model';
import { LoginUser } from '@/auth/models/auth.model';

export interface AuthContextType {
  currentUser: User | null;
  isLoggedIn: boolean;
  login: (loginUser: LoginUser) => void;
  register: (loginUser: LoginUser) => void;
  logout: () => void;
}
