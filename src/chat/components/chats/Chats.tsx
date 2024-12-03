import { Chat } from '@/chat/models/chat.model';
import { User } from '@/auth/models/user.model';
import dayjs from 'dayjs';
import Link from 'next/link';
import APP_ROUTES from '@/consts/routes.const';
import styles from './Chats.module.scss';

export interface ChatsProps {
  className: string;
}

const formatTime = (timestamp: number) => dayjs(timestamp).format('hh:mm');

const unreadMessagesCount = 3;

const mockUsers: User[] = [
  { id: 1, username: 'Aslan', email: 'alice@example.com' },
  { id: 2, username: 'Moana', email: 'bob@example.com' },
  { id: 3, username: 'Dragon Love', email: 'charlie@example.com' },
  {
    id: 4,
    username: 'Me',
    email: 'me@email.com',
  },
];

const mockChats: Chat[] = [
  {
    id: 1,
    participants: [mockUsers[0], mockUsers[4]],
    unreadMessages: 0,
    lastMessage: {
      id: 1,
      text: 'Hi, how is going now?',
      senderId: mockUsers[0].id,
      timestamp: Date.now() - 60000,
    },
  },
  {
    id: 2,
    participants: [mockUsers[1], mockUsers[4]],
    unreadMessages: 1,
    lastMessage: {
      id: 2,
      text: 'Yo bro I got some info for you',
      senderId: mockUsers[1].id,
      timestamp: Date.now() - 120000,
    },
  },
  {
    id: 3,
    participants: [mockUsers[2], mockUsers[4]],
    unreadMessages: 0,
    lastMessage: {
      id: 3,
      text: 'Send nudes',
      senderId: mockUsers[2].id,
      timestamp: Date.now() - 180000,
    },
  },
];

export default function Chats({ className }: ChatsProps) {
  const chatsCssClasses = [className, styles.chats].filter(Boolean).join(' ');

  return (
    <section className={chatsCssClasses}>
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
