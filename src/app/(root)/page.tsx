"use client";

import Image from "next/image";
import { useSession, signOut } from "next-auth/react";
import { useRouter, redirect } from "next/navigation";
import { YoutubeSearch } from "@/components/YoutubeSearch";

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();

  // Redirect to login if not authenticated
  if (status === "unauthenticated") {
    redirect("/sign-in");
    return null; // Prevents rendering before redirect
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">

      <h1 className="text-2xl font-bold">Youtube Search</h1>
      <YoutubeSearch />
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image className="dark:invert" src="/next.svg" alt="Next.js logo" width={180} height={38} priority />

        <ol className="list-decimal text-sm text-center sm:text-left">
          <li className="mb-2">Get started by editing <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded">src/app/page.tsx</code>.</li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className="flex gap-4 flex-col sm:flex-row">
          <a className="rounded-full border border-transparent bg-black text-white p-2 hover:bg-gray-700" href="https://vercel.com/new" target="_blank">Deploy now</a>
          <a className="rounded-full border border-gray-300 p-2 hover:bg-gray-100 dark:hover:bg-gray-800" href="https://nextjs.org/docs" target="_blank">Read our docs</a>
        </div>
      </main>

      <button onClick={() => signOut()}>
        sign-out
      </button>

      <footer className="row-start-3 flex gap-6 items-center justify-center">
        <a className="hover:underline" href="https://nextjs.org/learn" target="_blank">Learn</a>
        <a className="hover:underline" href="https://vercel.com/templates?framework=next.js" target="_blank">Examples</a>
        <a className="hover:underline" href="https://nextjs.org" target="_blank">Go to nextjs.org →</a>
      </footer>

      
    </div>
  );
}
