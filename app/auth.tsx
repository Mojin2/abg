"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export const LoginButton = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const onClickLogin = () => {
    if (session?.user) {
      router.push("/");
      alert("Already Logined!");
    } else {
      signIn();
    }
  };
  return <button onClick={onClickLogin}>Sign in</button>;
};

export const LogoutButton = () => {
  return <button onClick={() => signOut()}>Sign out</button>;
};
