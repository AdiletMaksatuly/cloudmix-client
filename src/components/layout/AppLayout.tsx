import { PropsWithChildren } from 'react';
import AuthProvider from '@/auth/context/AuthProvider';
import AppHeader from '@/components/layout/header/AppHeader';
import styles from './AppLayout.module.scss';

export default function AppLayout({ children }: PropsWithChildren) {
  return (
    <AuthProvider>
      <main className={styles.layout}>
        <AppHeader />
        <section className={styles.content}>{children}</section>
      </main>
    </AuthProvider>
  );
}
