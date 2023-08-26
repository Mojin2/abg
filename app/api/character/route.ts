import { prisma } from "@/libs/server/prisma";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";

export async function GET(req: Request) {
  const character = await req.json();
  return NextResponse.json({ character });
}
