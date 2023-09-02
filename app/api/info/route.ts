import prisma from "@/libs/server/prisma";
import { hash } from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { profile } = await req.json();
    console.log(profile);
    return NextResponse.json({
      profile,
    });
  } catch (err: any) {
    return new NextResponse(JSON.stringify({ error: err.message }), {
      status: 500,
    });
  }
}
