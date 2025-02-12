"use server";

import { db } from '@/db/index';
import { Users} from '@/db/schema';
import { eq } from 'drizzle-orm';

export const checkAndInsertUser = async (name: string, email: string, imageUrl: string) => {
  if (!email) return;

  try {
    const result = await db.select().from(Users).where(eq(Users.email, email));
    if (result.length === 0) {
      await db.insert(Users).values({ name, email, imageUrl });
    }
  } catch (error) {
    console.error('Error checking/creating user:', error);
  }
};
