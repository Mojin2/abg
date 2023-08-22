"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import useSWR from "swr";
interface ProfileProps {
  id: number;
  email: string;
  password: string;
  name: string;
}
const fetcher = (url: string) => fetch(url).then((res) => res.json());
export default function useUser() {
  const { data, error } = useSWR("/api/profile", fetcher);
  const router = useRouter();
  useEffect(() => {
    if (data && !data.ok) {
      router.replace("/signin");
    }
  }, [data, router]);
  return { profile: data?.profile, isLoading: !data && !error };
}
