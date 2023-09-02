"use client";
import { Tooltip } from "@chakra-ui/react";

interface Props {
  children: React.ReactNode;
  label: string;
}
export default function TooltipInfo(props: Props) {
  return (
    <Tooltip hasArrow openDelay={100} label={props.label}>
      {props.children}
    </Tooltip>
  );
}
