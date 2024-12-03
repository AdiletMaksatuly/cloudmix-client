interface ProductDetailsPageParam {
  id: number;
}

interface ChatPageProps {
  params: ProductDetailsPageParam;
}

export default function ChatPage({ params }: ChatPageProps) {
  const { id } = params;

  return (
    <section>
      Chat
      {id}
    </section>
  );
}
