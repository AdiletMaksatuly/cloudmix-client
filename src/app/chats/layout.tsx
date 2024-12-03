import ChatsLayout from '@/chat/components/layout/ChatsLayout';

export default function ChatsRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ChatsLayout>{children}</ChatsLayout>;
}
