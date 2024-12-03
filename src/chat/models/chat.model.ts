import { User } from '@/auth/models/user.model';

export interface ChatMessage {
  id: number;
  text: string;
  senderId: number;
  timestamp: number;
}

export interface Chat {
  id: number;
  participants: User[];
  unreadMessages: number;
  lastMessage: ChatMessage;
}
