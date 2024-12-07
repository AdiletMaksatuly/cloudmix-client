import CookiesKeys from '@/shared/consts/cookies.const';
import BASE_URL from '@/shared/consts/api.const';
import { cookies } from 'next/headers';

export async function logout() {
  const token = cookies().get(CookiesKeys.ACCESS_TOKEN)?.value;

  if (!token) {
    throw new Error('No token found');
  }

  const response = await fetch(`${BASE_URL}/auth/logout`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify({}),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error('Failed to log out');
  }

  cookies().set(CookiesKeys.ACCESS_TOKEN, '', { maxAge: -1 });
  cookies().set(CookiesKeys.REFRESH_TOKEN, '', { maxAge: -1 });
}
