"use client";

import { useSession } from "next-auth/react";

export default function ClientSession() {
  const { data: session } = useSession();
  return <div>{JSON.stringify(session)}</div>;
}
