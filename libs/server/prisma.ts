import { PrismaClient } from "@prisma/client";

// const globalForPrisma = global as unknown as { prisma: PrismaClient };
// export const prisma =
//   globalForPrisma.prisma || new PrismaClient({ log: ["query"] });

// if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

declare global {
  var client: PrismaClient | undefined;
}

const prisma = global.client || new PrismaClient();

if (process.env.NODE_ENV === "development") global.client = prisma;

export default prisma;
