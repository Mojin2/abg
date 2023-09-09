"use client";
import useCharPic from "@/libs/client/useCharPic";
import CharPicDetail from "./CharPicDetail";

interface Props {
  name: string;
}
interface CharListProps {
  ServerName: string;
  CharacterName: string;
  CharacterLevel: number;
  CharacterClassName: string;
  ItemAvgLevel: string;
  ItemMaxLevel: string;
}

export default function CharPic(props: Props) {
  let { charList } = useCharPic(props.name);
  let charListSort = charList?.sort((a, b) => {
    if (a.ItemMaxLevel < b.ItemMaxLevel) return 1;
    if (a.ItemMaxLevel > b.ItemMaxLevel) return -1;
    return 0;
  });
  const charListSortArr = charListSort?.filter(
    (char) => char.ItemMaxLevel.length >= 8
  );

  return (
    <div className="bg-yellow-200 mb-5 flex-row grid grid-cols-3  md:grid-cols-5 lg:grid-cols-7 gap-1.5 p-5">
      {charListSortArr?.map((char, idx) => (
        <CharPicDetail key={idx} name={char.CharacterName} />
      ))}
    </div>
  );
}
