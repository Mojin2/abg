"use client";

import useUser from "@/libs/client/useUser";

interface ProfileProps {
  id: number;
  email: string;
  password: string;
  name: string;
}

export default function DataFetchingSWR() {
  const { profile, isLoading } = useUser();
  console.log(profile);
  return (
    <>
      <div>{`Profile : ${profile?.email}`}</div>
      <div>{`IsLoading : ${isLoading}`}</div>
    </>
  );
}
