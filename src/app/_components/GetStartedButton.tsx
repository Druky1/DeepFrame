"use client"; // Only this button is client-side

import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import React from "react";

const GetStartedButton = () => {
  const { isSignedIn } = useUser();
  const router = useRouter();

  const handleRedirect = () => {
    router.push(isSignedIn ? "/dashboard" : "/sign-in");
  };

  return (
    <Button
      onClick={handleRedirect}
      className="w-full rounded-lg bg-white border border-gray-300 shadow-sm text-black tracking-tight hover:bg-black hover:text-white"
    >
      Get started
    </Button>
  );
};

export default GetStartedButton;
