export interface RegisterUser {
  username: string;
  email: string;
  password: string;
}

export type LoginUser = Omit<RegisterUser, 'username'>;
