import { PropsWithChildren } from 'react';
import AppHeader from '@/shared/components/layout/header/AppHeader';
import styles from './AppLayout.module.scss';

export default function AppLayout({ children }: PropsWithChildren) {
  return (
    <main className={styles.layout}>
      <AppHeader />
      <section className={styles.content}>{children}</section>
    </main>
  );
}
