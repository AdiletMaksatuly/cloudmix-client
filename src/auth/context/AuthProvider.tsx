'use client';

import {
  PropsWithChildren, useEffect, useMemo, useState,
} from 'react';
import { usePathname, useRouter } from 'next/navigation';
import APP_ROUTES from '@/consts/routes.const';
import { AuthContext } from '@/auth/context/auth.context';
import { User } from '@/auth/models/user.model';
import { LoginUser, RegisterUser } from '@/auth/models/auth.model';

const mockUser: User = {
  id: 1,
  username: 'Name',
  email: 'email@gmail.com',
};

export default function AuthProvider({ children }: PropsWithChildren<unknown>) {
  const router = useRouter();
  const pathname = usePathname();

  const [currentUser, setCurrentUser] = useState<User | null>(mockUser);

  const isLoggedIn = !!currentUser;

  const login = (loginUser: LoginUser) => {
    setCurrentUser({
      id: 1,
      username: 'Name',
      email: loginUser.email,
    });
  };

  const register = (user: RegisterUser) => {
    setCurrentUser({
      id: 1,
      username: user.username,
      email: user.email,
    });
  };

  const logout = () => {
    setCurrentUser(null);
  };

  const contextValue = useMemo(
    () => ({
      currentUser,
      isLoggedIn,
      login,
      logout,
      register,
    }),
    [currentUser, isLoggedIn, login, logout, register],
  );

  useEffect(() => {
    if (
      isLoggedIn
      && (pathname === APP_ROUTES.Login || pathname === APP_ROUTES.Register)
    ) {
      router.push(APP_ROUTES.Chats);
      return;
    }

    if (isLoggedIn && pathname === '/') {
      router.push(APP_ROUTES.Chats);
      return;
    }

    if (
      !isLoggedIn
      && pathname !== APP_ROUTES.Login
      && pathname !== APP_ROUTES.Register
    ) {
      router.push(APP_ROUTES.Login);
    }
  }, [isLoggedIn, pathname, router]);

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}
