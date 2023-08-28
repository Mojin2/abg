"use client";

import useCharacter from "@/libs/client/useCharacter";
import { Image, Spinner } from "@chakra-ui/react";
import { GiCrestedHelmet } from "react-icons/gi";
interface NameProps {
  name: string;
}
export default function InfoCard(props: NameProps) {
  const { profile, equipment } = useCharacter(props.name);
  const imgsrc = profile?.CharacterImage;
  return (
    <div className="relative bg-slate-950 w-full h-0 overflow-hidden pb-[95%] rounded-[10px] text-white shadow-lg">
      {profile ? (
        <div>
          {/* Image */}
          <div className="mix-blend-lighten bg-transparent w-full h-0 pb-[95%]">
            <Image
              src={imgsrc}
              className="absolute left-[20%] bg-transparent scale-[1.4] top-[20%]"
            />
          </div>
          <div className="absolute top-0 bottom-0 left-0 w-1/2 opacity-[45%] bg-gradient-to-r to-transparent from-[#F25068]" />
          {/* Upside Info */}
          <div className="absolute top-0 left-0 h-1/2 w-fullrounded-[10px] space-y-4 pt-6 pl-3 sm:space-y-1 md:pt-3">
            <div className="font-semibold text-xl sm:text-lg md:text-base">{`Lv. ${profile?.CharacterLevel} ${profile?.CharacterClassName} @${profile?.ServerName}`}</div>
            <div className="font-extrabold text-4xl sm:text-2xl md:text-2xl">{`${profile?.CharacterName}`}</div>
            <div className="font-extrabold text-2xl flex flex-row items-center sm:text-xl md:text-2xl">
              <GiCrestedHelmet /> {`${profile?.ItemAvgLevel}`}
            </div>
          </div>
          {/* Downside Info */}
          <div className="absolute bottom-0 left-0 h-1/2 w-full rounded-[10px] space-y-1 md:space-y-0">
            <div className="flex flex-col w-full h-full justify-end pl-3 pb-3">
              <div className="flex flex-row items-center justify-start space-x-2 font-bold text-xl sm:text-lg md:text-sm">
                <div className="rounded-full px-2 text-white bg-slate-900 text-sm sm:text-xs">
                  원정대
                </div>
                <div>{profile?.ExpeditionLevel}</div>
              </div>
              <div className="flex flex-row items-center justify-start space-x-2 font-bold text-xl sm:text-lg md:text-sm">
                <div className="rounded-full px-2 text-white bg-slate-900 text-sm sm:text-xs">
                  칭호
                </div>
                <div>{profile?.Title}</div>
              </div>
              <div className="flex flex-row items-center justify-start space-x-2 font-bold text-xl sm:text-lg md:text-sm">
                <div className="rounded-full px-2 text-white bg-slate-900 text-sm sm:text-xs">
                  길드
                </div>
                <div>{profile?.GuildName}</div>
              </div>
              <div className="flex flex-row items-center justify-start space-x-2 font-bold text-xl sm:text-lg md:text-sm">
                <div className="rounded-full px-2 text-white bg-slate-900 text-sm sm:text-xs">
                  PVP
                </div>
                <div>
                  {profile?.PvpGradeName ? `${profile?.PvpGradeName}` : " "}
                </div>
              </div>
              <div className="flex flex-row items-center justify-start space-x-2 font-bold text-xl sm:text-lg md:text-sm">
                <div className="rounded-full px-2 text-white bg-slate-900 text-sm sm:text-xs">
                  영지
                </div>
                <div>{`Lv.${profile?.TownLevel} ${profile?.TownName}`}</div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center mt-[40%] justify-center">
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.800"
            color="white.500"
            size="xl"
          />
        </div>
      )}
    </div>
  );
}
