import type { Metadata } from 'next';
import styles from './AuthLayout.module.scss';

export const metadata: Metadata = {
  title: 'Authorize',
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <section className={styles.auth}>{children}</section>;
}
