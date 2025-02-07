"use client";

import { useUser } from "@clerk/nextjs";
import React, { useEffect } from "react";
import { checkAndInsertUser } from "@/app/actions/user";

const Provider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = useUser();

  useEffect(() => {
    if (user?.primaryEmailAddress?.emailAddress) {
      checkAndInsertUser(
        user.fullName ?? "",
        user.primaryEmailAddress.emailAddress,
        user.imageUrl ?? ""
      );
    }
  }, [user]);

  return (
    <>
    {children}
    </>
  );
};

export default Provider;
