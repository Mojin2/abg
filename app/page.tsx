import { getServerSession } from "next-auth";
import Link from "next/link";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { LoginButton, LogoutButton } from "./auth";
import ClientSession from "./clientSession";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <div className="mt-16 p-4 space-x-4">
      {/* <Link href="/signin">
        <button className="text-white text-xl font-extrabold">Signin</button>
      </Link>
      <Link href="/signup">
        <button className="text-white text-xl font-extrabold">Signup</button>
      </Link> */}
      <LoginButton />
      <LogoutButton />
      <h2>Server Side</h2>
      <div>{JSON.stringify(session)}</div>
      <h2>Client Side</h2>
      <ClientSession />
    </div>
  );
}
