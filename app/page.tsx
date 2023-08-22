import { getServerSession } from "next-auth";
import Link from "next/link";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { LoginButton, LogoutButton } from "./auth";
import ClientSession from "./clientSession";
import DataFetchingSWR from "./dataFetching";
import DataFetching from "./dataFetching";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <div className="mt-16 p-4 space-x-4">
      <LoginButton />
      <LogoutButton />
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/board">Board</Link>
      <h2>Session Server Side</h2>
      <div>{JSON.stringify(session)}</div>
      <h2>Session Client Side</h2>
      <ClientSession />
      <div className="mt-6">
        <h2>Data Fetching</h2>
        <DataFetchingSWR />
      </div>
    </div>
  );
}
