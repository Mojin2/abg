"use client";
import BottomNav from "@/components/BottomNav";
import CharPic from "@/components/charpic";
import CustomCard from "@/components/CustomCard";
import Header from "@/components/Header";
import { getServerSession } from "next-auth";
import { useState } from "react";
import { authOptions } from "./api/auth/[...nextauth]/route";
import ClientSession from "./clientSession";
import ContentLayout from "./contentLayout";

export default function Home() {
  const [charName, setCharName] = useState("");
  const [nameList, setNameList] = useState<string[]>([]);
  const [isSetting, setIsSetting] = useState(false);
  const [mainChar, setMainChar] = useState<string[]>([]);
  const onSubmitHandle = (e: React.FormEvent) => {
    if (isSetting) {
      e.preventDefault();
      setNameList((cur) => {
        const oldnameList = nameList;
        const newname = charName;
        cur = [...oldnameList, newname];
        return cur;
      });
      setMainChar((cur) => {
        const newname = charName;
        cur = [newname];
        return cur;
      });
    } else {
      e.preventDefault();
    }
  };
  console.log(isSetting);
  console.log(mainChar[0]);
  return (
    <div>
      <Header title="DashBoard" detail="Custom your dashboard" />
      <ContentLayout>
        <div>
          <form onSubmit={onSubmitHandle}>
            <input
              placeholder="대표캐릭터 이름"
              value={charName}
              onChange={(e) => setCharName(e.target.value)}
              type="text"
              disabled={isSetting}
            />
            {isSetting ? (
              <input
                type="submit"
                value="수정"
                onClick={() => setIsSetting(false)}
              />
            ) : (
              <input
                type="submit"
                value="설정"
                onClick={() => setIsSetting(true)}
              />
            )}
          </form>
          <div className="py-5">
            {mainChar?.map((name, idx) => (
              <CharPic name={name} key={idx} />
            ))}
            {/* {isSetting ? <CharPic name={mainChar[0]} /> : null} */}
          </div>
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
