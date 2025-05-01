// app/lib/auth.ts
import { signIn } from 'next-auth/react';

export const authenticateUser = async (credentials: { username: string; password: string }) => {
  const response = await signIn('credentials', {
    redirect: false,
    username: credentials.username,
    password: credentials.password,
  });

  if (response?.error) {
    throw new Error('Authentication failed');
  }
  return response;
};
