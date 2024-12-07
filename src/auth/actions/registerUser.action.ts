'use server'

import { RegisterUser } from '@/auth/models/auth.model';
import APP_ROUTES from '@/shared/consts/routes.const';
import { z } from 'zod';
import { redirect } from 'next/navigation';
import BASE_URL from '@/shared/consts/api.const';

const schema = z.object({
  username: z.string().min(4, 'Username must be at least 4 characters long'),
  email: z.string().email('Invalid email format'),
  password: z.string().min(8, 'Password must be at least 8 characters long'),
  confirmPassword: z.string(),
}).superRefine(({ confirmPassword, password }, ctx) => {
  if (confirmPassword !== password) {
    ctx.addIssue({
      code: "custom",
      message: "The passwords did not match",
      path: ['confirmPassword']
    });
  }
});

export const registerUser = async (
  prevState: { message: string; },
  formData: FormData
) => {
  const validatedFields = schema.safeParse({
    username: formData.get('username'),
    email: formData.get('email'),
    password: formData.get('password'),
    confirmPassword: formData.get('confirmPassword'),
  });

  if (!validatedFields.success) {
    return { message: validatedFields.error.errors.map((error) => error.message).join('\n') };
  }

  try {
    const user: RegisterUser = {
      email: validatedFields.data.email,
      password: validatedFields.data.password,
      username: validatedFields.data.username
    };


    const response = await fetch(`${BASE_URL}/auth/register`, {
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

  } catch (error) {
    console.error(error);

    return { message: 'Failed to register' };
  }

  redirect(APP_ROUTES.Login);
}
