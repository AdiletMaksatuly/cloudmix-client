import { ChatModel } from '@/chat/models/chat.model';
import mockUsers from '@/chat/mocks/users.mock';

export const unreadMessagesCount = 3;

export const mockChats: ChatModel[] = [
  {
    id: 1,
    participants: [mockUsers[0], mockUsers[3]],
    unreadMessages: 0,
    lastMessage: {
      id: 1,
      text: 'Hi, how is going now?',
      sender: mockUsers[0],
      timestamp: Date.now() - 60000,
    },
  },
  {
    id: 2,
    participants: [mockUsers[1], mockUsers[3]],
    unreadMessages: 1,
    lastMessage: {
      id: 2,
      text: 'Yo bro I got some info for you',
      sender: mockUsers[1],
      timestamp: Date.now() - 120000,
    },
  },
  {
    id: 3,
    participants: [mockUsers[2], mockUsers[3]],
    unreadMessages: 0,
    lastMessage: {
      id: 3,
      text: 'Send nudes',
      sender: mockUsers[2],
      timestamp: Date.now() - 180000,
    },
  },
];
