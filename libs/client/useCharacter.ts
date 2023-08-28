"use client";

import { useEffect, useState } from "react";
interface CharProps {
  CharacterImage: "string";
  ExpeditionLevel: number;
  PvpGradeName: "string";
  TownLevel: null;
  TownName: "string";
  Title: "string";
  GuildMemberGrade: "string";
  GuildName: "string";
  UsingSkillPoint: number;
  TotalSkillPoint: number;
  Stats: [
    {
      Type: "string";
      Value: "string";
      Tooltip: ["string"];
    }
  ];
  Tendencies: [
    {
      Type: "string";
      Point: number;
      MaxPoint: number;
    }
  ];
  ServerName: "string";
  CharacterName: "string";
  CharacterLevel: number;
  CharacterClassName: "string";
  ItemAvgLevel: "string";
  ItemMaxLevel: "string";
}
interface EquProps {
  Type: string;
  Name: string;
  Icon: string;
  Grade: string;
  Tooltip: string;
}
const url = "https://developer-lostark.game.onstove.com";
export default function useCharacter(charname: string) {
  const [profile, setProfile] = useState<CharProps>();
  const [equipment, setEquipment] = useState<EquProps[]>();
  useEffect(() => {
    const api = "bearer " + process.env.NEXT_PUBLIC_LOSTARK_API_KEY;
    fetch(url + `/armories/characters/${charname}`, {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: api,
      },
    })
      .then((res) => res.json())
      .then((dat) => {
        // console.log(dat);
        setProfile(dat.ArmoryProfile);
        setEquipment(dat.ArmoryEquipment);
      });
    // fetch(url + `armories/characters/${charname}/equipment`)
  }, []);
  return { profile, equipment };
}
