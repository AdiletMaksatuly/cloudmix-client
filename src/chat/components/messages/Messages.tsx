'use client';

import styles from '@/chat/pages/chat/Chat.module.scss';
import clsx from 'clsx';
import { useLayoutEffect, useRef } from 'react';
import { ChatMessage } from '@/chat/models/chat.model';
import { User } from '@/auth/models/user.model';

export interface MessagesProps {
  me: User;
  contactUser: User;
}

export default function Messages({ me, contactUser }: MessagesProps) {
  const mockMessages: ChatMessage[] = [
    {
      id: 1,
      text: 'Hey, how are you?',
      sender: contactUser,
      timestamp: Date.now() - 60000, // 1 minute ago
    },
    {
      id: 2,
      text: "I'm good, thanks! How about you?",
      sender: me,
      timestamp: Date.now() - 55000, // 55 seconds ago
    },
    {
      id: 3,
      text: 'Doing well. Have you seen the latest updates?',
      sender: contactUser,
      timestamp: Date.now() - 30000, // 30 seconds ago
    },
    {
      id: 4,
      text: 'Not yet. Can you send me a link?',
      sender: me,
      timestamp: Date.now() - 10000, // 10 seconds ago
    },
    {
      id: 5,
      text: 'Hey, how are you?',
      sender: contactUser,
      timestamp: Date.now() - 60000, // 1 minute ago
    },
    {
      id: 6,
      text: "I'm good, thanks! How about you?",
      sender: me,
      timestamp: Date.now() - 55000, // 55 seconds ago
    },
    {
      id: 7,
      text: 'Doing well. Have you seen the latest updates?',
      sender: contactUser,
      timestamp: Date.now() - 30000, // 30 seconds ago
    },
    {
      id: 8,
      text: 'Not yet. Can you send me a link?',
      sender: me,
      timestamp: Date.now() - 10000, // 10 seconds ago
    },
  ];

  const chatWindowRef = useRef<HTMLUListElement | null>(null);

  useLayoutEffect(() => {
    if (!chatWindowRef.current) return;

    chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
  }, [mockMessages]);

  return (
    // TODO: virtual scroll here
    <ul ref={chatWindowRef} className={styles['chat-messages']}>
      {mockMessages.map((message) => (
        <li
          className={clsx(styles['chat-message'], {
            [styles['chat-message--sent']]: message.sender.id === me.id,
            [styles['chat-message--received']]:
              message.sender.id === contactUser.id,
          })}
          key={message.id}
        >
          {message.text}
        </li>
      ))}
    </ul>
  );
}
