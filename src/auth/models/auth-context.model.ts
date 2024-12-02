import { CurrentUser } from '@/auth/models/current-user.model';
import { LoginUser } from '@/auth/models/login-user.model';

export interface AuthContextType {
  currentUser: CurrentUser | null;
  isLoggedIn: boolean;
  login: (loginUser: LoginUser) => void;
  logout: () => void;
}
