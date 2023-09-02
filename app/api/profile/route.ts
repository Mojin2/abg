import prisma from "@/libs/server/prisma";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";

export async function GET(req: Request) {
  const session = await getServerSession(authOptions);
  const profile = await prisma.user.findUnique({
    where: { email: session?.user?.email! },
  });
  return NextResponse.json({ ok: true, profile });
}
