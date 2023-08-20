import { PrismaClient } from "@prisma/client";
import { hash } from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  const password = await hash("12", 12);
  const user = await prisma.user.upsert({
    where: { email: "test@naver.com" },
    update: {},
    create: {
      email: "test@naver.com",
      name: "Test User",
      password,
    },
  });
  console.log({ user });
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
