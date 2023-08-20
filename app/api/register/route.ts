import { prisma } from "@/libs/server/prisma";
import { hash } from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, password } = await req.json();
  const hashed = await hash(password, 12);

  const user = await prisma.user.create({
    data: {
      email,
      password: hashed,
      name: "TEST USER",
    },
  });

  return NextResponse.json({
    user: {
      email: user.email,
    },
  });
}
