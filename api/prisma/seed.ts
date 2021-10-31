import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      email: "admin@groupomania.fr",
      firstname: "Admin",
      lastname: "Groupomania",
      password: bcrypt.hashSync("admin", process.env.SALT_ROUNDS),
      admin: true,
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
