import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import ContentLayout from "../contentLayout";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);
  return <ContentLayout>DashBoard</ContentLayout>;
}
