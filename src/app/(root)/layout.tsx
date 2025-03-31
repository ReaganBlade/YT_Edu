'use client'

import React from "react";
import { useRouter, redirect } from "next/navigation";
import { useSession } from "next-auth/react";

const layout = ({ children }: { children: React.ReactNode }) => {
  const session = useSession();

  if (!session) redirect("/sign-in");
  return <div>{children}</div>;
};

export default layout;
