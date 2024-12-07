'use server'

import BASE_URL from '@/shared/consts/api.const';

export const refreshAccessToken = async (refreshToken: string) => {
  if (!refreshToken) {
    throw new Error('No refresh token found');
  }

  try {
    const response = await fetch(`${BASE_URL}/auth/refresh`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ refreshToken }),
    });

    const data = await response.json();

    if (response.ok) {
      return data.accessToken;
    }

    return
  } catch (error) {
    console.error(error);
  }
}
