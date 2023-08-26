import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);
  return (
    <div className="bg-yellow-400 top-16 relative md:left-60 left-0 w-screen h-screen">
      DashBoard
    </div>
  );
}
