import { PropsWithChildren } from 'react';
import AuthProvider from '@/providers/AuthProvider';
import AppHeader from '@/components/layout/header/AppHeader';

export default function AppLayout({ children }: PropsWithChildren) {
  return (
    <AuthProvider>
      <main>
        <AppHeader />
        <section>{children}</section>
      </main>
    </AuthProvider>
  );
}
