"use client";

import useCharacter from "@/libs/client/useCharacter";
import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Icon,
  chakra,
  Tooltip,
} from "@chakra-ui/react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { GiCrestedHelmet } from "react-icons/gi";

function ProductAddToCart() {
  const { profile, equipment } = useCharacter();
  const imgsrc = profile?.CharacterImage;
  return (
    <div className="relative bg-slate-950 w-full h-0 overflow-hidden pb-[95%] rounded-[10px] text-white shadow-lg">
      {/* Image */}
      <div className="mix-blend-lighten bg-transparent w-full h-0 pb-[95%]">
        <Image
          src={imgsrc}
          className="absolute left-[20%] bg-transparent scale-[1.4] top-[20%]"
        />
      </div>
      <div className="absolute top-0 bottom-0 left-0 w-1/2 opacity-[65%] bg-gradient-to-r to-transparent from-[#F25068]" />
      {/* Upside Info */}
      <div className="absolute top-0 left-0 h-1/2 w-fullrounded-[10px] space-y-4 pt-6 pl-3">
        <div className="font-semibold text-xl">{`Lv. ${profile?.CharacterLevel} ${profile?.CharacterClassName} @${profile?.ServerName}`}</div>
        <div className="font-extrabold text-6xl">{`${profile?.CharacterName}`}</div>
        <div className="font-extrabold text-4xl flex flex-row items-center">
          <GiCrestedHelmet /> {`${profile?.ItemAvgLevel}`}
        </div>
      </div>
      {/* Downside Info */}
      <div className="absolute bottom-0 left-0 h-1/2 w-full rounded-[10px]">
        <div className="flex flex-row items-center justify-start space-x-2 font-bold text-2xl">
          <Badge className="rounded-full px-2 text-white bg-slate-900">
            원정대
          </Badge>
          <div>{profile?.ExpeditionLevel}</div>
        </div>
        <div className="flex flex-row items-center justify-start space-x-2 font-bold text-2xl">
          <Badge className="rounded-full px-2 text-white bg-slate-900">
            칭호
          </Badge>
          <div>{profile?.Title}</div>
        </div>
        <div className="flex flex-row items-center justify-start space-x-2 font-bold text-2xl">
          <Badge className="rounded-full px-2 text-white bg-slate-900">
            길드
          </Badge>
          <div>{profile?.GuildName}</div>
        </div>
        <div className="flex flex-row items-center justify-start space-x-2 font-bold text-2xl">
          <Badge className="rounded-full px-2 text-white bg-slate-900">
            PVP
          </Badge>
          <div>{profile?.PvpGradeName ? `${profile?.PvpGradeName}` : " "}</div>
        </div>
        <div className="flex flex-row items-center justify-start space-x-2 font-bold text-2xl">
          <Badge className="rounded-full px-2 text-white bg-slate-900">
            영지
          </Badge>
          <div>{`Lv.${profile?.TownLevel} ${profile?.TownName}`}</div>
        </div>
      </div>
    </div>
  );
}

export default ProductAddToCart;
