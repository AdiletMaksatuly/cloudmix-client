'use client';

import { PropsWithChildren } from 'react';
import clsx from 'clsx';
import { useParams } from 'next/navigation';
import styles from './ChatsLayout.module.scss';

export interface ChatsLayoutParams {
  Chats: React.ReactNode;
}

export default function ChatsLayout({
  children,
  Chats,
}: PropsWithChildren<ChatsLayoutParams>) {
  const params = useParams();

  const selectedChatId = params?.id;

  return (
    <section className={styles.chats}>
      <div
        className={clsx(styles['chats-list'], {
          [styles['chats-list--hidden']]: !!selectedChatId,
        })}
      >
        {Chats}
      </div>

      <section
        className={clsx(styles.chat, {
          [styles['chat--hidden']]: !selectedChatId,
        })}
      >
        {children}
      </section>
    </section>
  );
}
