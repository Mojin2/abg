"use client";
import useCharacter from "@/libs/client/useCharacter";
import { Box, Image, useColorModeValue } from "@chakra-ui/react";

interface Props {
  name: string;
}
export default function CustomCard(props: Props) {
  const { profile, equipment } = useCharacter(props.name);
  const imgsrc = profile?.CharacterImage;
  return (
    <div className="flex flex-row items-center">
      <div className=" bg-slate-200 shadow-md rounded-md row-span-4 sm:row-span-3 relative overflow-hidden w-80 h-80">
        <Image
          src={imgsrc}
          className="rounded-md object-none w-full h-full absolute "
        />
      </div>
      <div className="flex flex-col space-y-2">
        <div className=" bg-slate-300 shadow-md rounded-md w-[300px] h-[50px]"></div>
        <div className=" bg-slate-300 shadow-md rounded-md w-[300px] h-[150px]"></div>
      </div>
    </div>
  );
}
