import Chat from '@/chat/pages/chat/Chat';

interface ProductDetailsPageParam {
  id: number;
}

interface ChatPageProps {
  params: ProductDetailsPageParam;
}

export default function ChatPage({ params }: ChatPageProps) {
  const { id } = params;

  return <Chat chatId={id} />;
}
