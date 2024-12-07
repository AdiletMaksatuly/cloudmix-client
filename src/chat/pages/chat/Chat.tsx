import Button from '@/shared/components/ui/button/Button';
import Image from 'next/image';
import { mockChats } from '@/chat/mocks/chats.mock';
import Messages from '@/chat/components/messages/Messages';
import Link from 'next/link';
import styles from './Chat.module.scss';

export interface ChatProps {
  chatId: number;
}

export default function Chat({ chatId }: ChatProps) {
  const mockChat = mockChats.find((chat) => chat.id === +chatId);

  if (!mockChat) {
    return <div>Chat not found</div>;
  }

  const contactUser = mockChat.participants[0];
  const me = mockChat.participants[1];

  return (
    <section className={styles.chat}>
      <header className={styles['chat-header']}>
        <Link href="../" className={styles['chat-header-back-btn']}>
          <Image
            src="/assets/icons/icon-chevron-left.svg"
            alt="Go back"
            width={24}
            height={24}
          />
        </Link>
        <div className={styles['chat-header-info']}>
          <span className={styles['chat-header-contact-name']}>
            {mockChat.participants[0].username}
          </span>
          <span className={styles['chat-header-contact-status']}>Online</span>
        </div>
      </header>

      <Messages me={me} contactUser={contactUser} />

      <form className={styles['chat-send-message-form']}>
        <label
          htmlFor="message"
          className={styles['chat-send-message-label']}
          aria-label="Message"
        >
          <textarea
            id="message"
            className={styles['chat-send-message-input']}
            name="message"
            placeholder="Write a message ..."
          />
        </label>
        <Button className={styles['chat-send-message-btn']} type="submit">
          <Image
            src="/assets/icons/icon-send.svg"
            alt="Send message"
            width={24}
            height={24}
          />
        </Button>
      </form>
    </section>
  );
}
