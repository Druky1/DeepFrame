// components/UserProvider.tsx
"use client";
import { useUser } from "@clerk/nextjs";

export default function UserProvider({ children }: { children: (user: any) => React.ReactNode }) {
  const { user } = useUser();
  return <>{children(user)}</>;
}
