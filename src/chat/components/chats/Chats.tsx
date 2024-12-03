import dayjs from 'dayjs';
import Link from 'next/link';
import APP_ROUTES from '@/consts/routes.const';
import { mockChats, unreadMessagesCount } from '@/chat/mocks/chats.mock';
import clsx from 'clsx';
import styles from './Chats.module.scss';

export interface ChatsProps {
  className?: string;
}

const formatTime = (timestamp: number) => dayjs(timestamp).format('hh:mm');

export default function Chats({ className }: ChatsProps) {
  return (
    <section className={clsx(className, styles.chats)}>
      <header className={styles.header}>
        <h2 className={styles.title}>
          Messages(
          {unreadMessagesCount}
          )
        </h2>
      </header>
      <ul className={styles['chats-list']}>
        {mockChats.map((chat) => (
          <li key={chat.id} className={styles.chat}>
            <Link
              className={styles['chat-link']}
              href={`${APP_ROUTES.Chats}/${chat.id}`}
            >
              <header className={styles['chat-header']}>
                <span
                  title={chat.participants[0].username}
                  className={styles['chat-sender']}
                >
                  {chat.participants[0].username}
                </span>
                {!!chat.unreadMessages && (
                  <span className={styles['chat-unread-messages']}>
                    {chat.unreadMessages}
                  </span>
                )}
              </header>
              <footer className={styles['chat-footer']}>
                <span
                  title={chat.lastMessage.text}
                  className={styles['chat-text']}
                >
                  {chat.lastMessage.text}
                </span>
                <span className={styles['chat-last-message-time']}>
                  {formatTime(chat.lastMessage.timestamp)}
                </span>
              </footer>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
