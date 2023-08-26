import Navbar from "@/components/navbar";
import SideNavbar from "@/components/sidebar";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { LoginButton, LogoutButton } from "./auth";
import ClientSession from "./clientSession";
import ContentLayout from "./contentLayout";
import DataFetchingSWR from "./dataFetching";
import DataFetching from "./dataFetching";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <div>
      <Navbar />
      <ContentLayout>
        <div>Session Server Side</div>
        <div>{JSON.stringify(session)}</div>
        <div>Session Client Side</div>
        <ClientSession />
      </ContentLayout>
    </div>
  );
}
