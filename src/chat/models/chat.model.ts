import { User } from '@/auth/models/user.model';

export interface ChatMessage {
  id: number;
  text: string;
  sender: User;
  timestamp: number;
}

export interface ChatModel {
  id: number;
  participants: User[];
  unreadMessages: number;
  lastMessage: ChatMessage;
}
