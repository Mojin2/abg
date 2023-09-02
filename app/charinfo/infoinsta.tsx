"use client";

import useCharacter from "@/libs/client/useCharacter";
import { Image, Spinner } from "@chakra-ui/react";
import { useEffect } from "react";
import { BiBookmark, BiHeart, BiMessage } from "react-icons/bi";
import { BsPersonCircle, BsThreeDots } from "react-icons/bs";
import { GiCrestedHelmet } from "react-icons/gi";
import { IoIosPaperPlane } from "react-icons/io";
import { IoPaperPlaneOutline } from "react-icons/io5";

interface NameProps {
  name: string;
}
export default function InfoInsta(props: NameProps) {
  const { profile, equipment } = useCharacter(props.name);
  console.log(profile);
  const imgsrc = profile?.CharacterImage;
  return <div></div>;
}
