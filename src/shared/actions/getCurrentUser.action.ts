'use server'

import { cookies } from 'next/headers';
import { User } from '@/auth/models/user.model';
import CookiesKeys from '@/shared/consts/cookies.const';
import BASE_URL from '@/shared/consts/api.const';

export default async function getUserInfo(): Promise<{
  currentUser: User | null,
  error: string,
}> {
  const token = cookies().get(CookiesKeys.ACCESS_TOKEN)?.value;

  if (!token) {
    throw new Error('No token provided');
  }

  try {
    const response = await fetch(`${BASE_URL}/users/me`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      return {
        currentUser: null,
        error: data,
      }
    }

    return {
      currentUser: data,
      error: '',
    };
  } catch (e) {
    console.error(e);

    return {
      currentUser: null,
      error: String(e),
    }
  }
}
