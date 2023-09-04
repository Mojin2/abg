"use client";
import BottomNav from "@/components/BottomNav";
import Navbar from "@/components/navbar";
import { useState } from "react";
import ContentLayout from "../contentLayout";
import InfoCard from "./infocard";
import InfoInsta from "./infoinsta";

export default function Charinfo() {
  return (
    <div>
      <ContentLayout>
        <div className="flex items-center justify-center w-full h-full bg-violet-500 text-white font-extrabold text-5xl">
          Character
        </div>
      </ContentLayout>
      <BottomNav />
    </div>
  );
}
// export default function CharInfo() {
//   const [name, setName] = useState("");
//   const [nameList, setNameList] = useState<string[]>([]);
//   const onSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setNameList((cur) => {
//       const oldnameList = nameList;
//       const newname = name;
//       cur = [...oldnameList, newname];
//       return cur;
//     });
//     console.log("Added!");
//     setName("");
//   };
//   return (
//     <div>
//       <ContentLayout>
//         <div className="flex flex-col mt-2 space-y-2">
//           <div className="flex w-full justify-end">
//             <form onSubmit={onSubmit} className="px-3 space-x-2">
//               <input
//                 onChange={(e) => setName(e.target.value)}
//                 required
//                 value={name}
//                 id="name"
//                 type="text"
//                 className=" appearance-none px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500"
//               />
//               <button
//                 type="submit"
//                 className=" mt-3 bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 focus:outline-none"
//               >
//                 추가
//               </button>
//             </form>
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-2 gap-x-2 px-3 justify-center items-center">
//             {nameList.map((name, idx) => (
//               <InfoCard name={name} key={idx} />
//             ))}
//           </div>
//         </div>
//         <BottomNav />
//       </ContentLayout>
//     </div>
//   );
// }
