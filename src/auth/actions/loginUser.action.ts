'use server'

import { LoginUser } from '@/auth/models/auth.model';
import APP_ROUTES from '@/shared/consts/routes.const';
import { z } from 'zod';
import BASE_URL from '@/shared/consts/api.const';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import CookiesKeys from '@/shared/consts/cookies.const';

const schema = z.object({
  email: z.string().email('Invalid email format'),
  password: z.string(),
});

export const loginUser = async (
  prevState: { message: string; },
  formData: FormData
) => {
  const validatedFields = schema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
  });

  if (!validatedFields.success) {
    return { message: validatedFields.error.errors.map((error) => error.message).join('\n') };
  }

  try {
    const user: LoginUser = {
      email: validatedFields.data.email,
      password: validatedFields.data.password,
    };

    const response = await fetch(`${BASE_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });

    const data = await response.json();

    if (!response.ok) {
      return { message: Array.isArray(data.message) ? data.message.join('\n') : data.message };
    }

    const userCookie = cookies();
    userCookie.set(CookiesKeys.ACCESS_TOKEN, data.accessToken, { httpOnly: true, path: '/' });
    userCookie.set(CookiesKeys.REFRESH_TOKEN, data.refreshToken, { httpOnly: true, path: '/' });

  } catch (error) {
    console.error(error);

    return { message: 'Failed to login' };
  }

  redirect(APP_ROUTES.Chats);
}
