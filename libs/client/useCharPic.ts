"use client";

import { useEffect, useState } from "react";

interface CharListProps {
  ServerName: string;
  CharacterName: string;
  CharacterLevel: number;
  CharacterClassName: string;
  ItemAvgLevel: string;
  ItemMaxLevel: string;
}

const url = "https://developer-lostark.game.onstove.com";
export default function useCharPic(charname: string) {
  const [charList, setCharList] = useState<CharListProps[]>();
  const api = "bearer " + process.env.NEXT_PUBLIC_LOSTARK_API_KEY;

  useEffect(() => {
    function FetchData() {
      fetch(url + `/characters/${charname}/siblings`, {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: api,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setCharList(data);
        });
    }
    FetchData();
  }, []);
  return { charList };
}
