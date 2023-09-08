import BottomNav from "@/components/BottomNav";
import CustomCard from "@/components/CustomCard";
import Header from "@/components/Header";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import ClientSession from "./clientSession";
import ContentLayout from "./contentLayout";

export default function Home() {
  return (
    <div>
      <Header title="DashBoard" detail="Custom your dashboard" />
      <ContentLayout>
        <CustomCard name="존나쎄보여" />
      </ContentLayout>
      <BottomNav />
    </div>
  );
}
// export default async function Home() {
//   const session = await getServerSession(authOptions);

//   return (
//     <div>
//       <ContentLayout>
//         <div>Session Server Side</div>
//         <div>{JSON.stringify(session)}</div>
//         <div>Session Client Side</div>
//         <ClientSession />
//         <BottomNav />
//       </ContentLayout>
//     </div>
//   );
// }
