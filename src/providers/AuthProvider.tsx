'use client';

import { PropsWithChildren, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import APP_ROUTES from '@/consts/routes.const';

export default function AuthProvider({ children }: PropsWithChildren<unknown>) {
  const router = useRouter();
  const pathname = usePathname();

  const isLoggedIn = true;

  useEffect(() => {
    if (isLoggedIn) {
      router.push(APP_ROUTES.Chat);
      return;
    }

    if (pathname !== APP_ROUTES.Login && pathname !== APP_ROUTES.Register) {
      router.push(APP_ROUTES.Login);
    }
  }, [isLoggedIn, pathname, router]);

  return children;
}
