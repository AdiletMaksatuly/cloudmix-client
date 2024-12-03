import Chats from '@/chat/components/chats/Chats';
import { PropsWithChildren } from 'react';
import styles from './ChatsLayout.module.scss';

export default function ChatsLayout({ children }: PropsWithChildren<unknown>) {
  return (
    <section className={styles.chats}>
      <Chats className={styles['chats-list']} />

      <section className={styles.chat}>{children}</section>
    </section>
  );
}
