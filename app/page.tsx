import BottomNav from "@/components/BottomNav";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import ClientSession from "./clientSession";
import ContentLayout from "./contentLayout";

export default function Home() {
  return (
    <div>
      <ContentLayout>
        <div className="flex items-center justify-center w-full h-full bg-blue-500 text-white font-extrabold text-5xl">
          Home
        </div>
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
