"use client";

import { signIn, useSession } from "next-auth/react";
import { saveUserData } from "@/lib/actions/user.actions";
import { useEffect } from "react";

export default function SignIn() {
  const { data: session } = useSession();

  useEffect(() => {
    if (session?.user) {
      console.log(`This is the Session: ${session}`);
      saveUserData({
        user_id: session.user.email!,
        name: session.user.name!,
        email: session.user.email!,
        avatar: session.user.image!,
      });
    }
  }, [session]);

  return (
    <div className="h-screen bg-amber-50 w-full flex justify-center items-center">
      <button
        onClick={() => {
          const result = signIn("google");
          console.log(`This is the Returned Response: ${result}`);
          return result;
        }}
        className="bg-black text-white p-2 rounded"
      >
        Sign in With Google
      </button>
    </div>
  );
}
