import ChatsLayout from '@/chat/components/layout/ChatsLayout';
import Chats from '@/chat/components/chats/Chats';

export default async function ChatsRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ChatsLayout Chats={<Chats />}>{children}</ChatsLayout>;
}
