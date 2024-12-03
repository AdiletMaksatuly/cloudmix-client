import { User } from '@/auth/models/user.model';

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

export default mockUsers;
