'use client';

import {
  PropsWithChildren, useEffect, useMemo, useState,
} from 'react';
import { usePathname, useRouter } from 'next/navigation';
import APP_ROUTES from '@/consts/routes.const';
import { AuthContext } from '@/auth/context/auth.context';
import { CurrentUser } from '@/auth/models/current-user.model';
import { LoginUser } from '@/auth/models/login-user.model';

const mockUser: CurrentUser = {
  id: 1,
  name: 'Name',
  email: 'email@gmail.com',
};

export default function AuthProvider({ children }: PropsWithChildren<unknown>) {
  const router = useRouter();
  const pathname = usePathname();

  const [currentUser, setCurrentUser] = useState<CurrentUser | null>(mockUser);

  const isLoggedIn = !!currentUser;

  const login = (loginUser: LoginUser) => {
    setCurrentUser({
      id: 1,
      name: 'Name',
      email: loginUser.email,
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
    }),
    [currentUser, isLoggedIn, login, logout],
  );

  useEffect(() => {
    if (isLoggedIn) {
      router.push(APP_ROUTES.Chat);
      return;
    }

    if (pathname !== APP_ROUTES.Login && pathname !== APP_ROUTES.Register) {
      router.push(APP_ROUTES.Login);
    }
  }, [isLoggedIn, pathname, router]);

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}
