import { User } from '@/auth/models/user.model';
import { LoginUser, RegisterUser } from '@/auth/models/auth.model';

export interface AuthContextType {
  currentUser: User | null;
  isLoggedIn: boolean;
  login: (loginUser: LoginUser) => void;
  register: (registerUser: RegisterUser) => void;
  logout: () => void;
}
