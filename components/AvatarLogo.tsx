"use client";
import { Avatar, AvatarBadge } from "@chakra-ui/react";

export default function AvatarLogo() {
  return (
    <Avatar size="sm">
      <AvatarBadge boxSize="1.25em" bg="green.500" />
    </Avatar>
  );
}
