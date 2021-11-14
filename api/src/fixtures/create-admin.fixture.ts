import { PrismaClient } from ".prisma/client";
import readline from "readline-sync";
import bcrypt from "bcrypt";
import dotenv from "dotenv";

dotenv.config();

const email = readline.question("Email: ");
const password = readline.question("Password: ", { hideEchoBack: true });
const firstname = readline.question("Firstname: ");
const lastname = readline.question("Lastname: ");

const prisma = new PrismaClient();

prisma.user
  .create({
    data: {
      email,
      password: bcrypt.hashSync(password, +process.env.SALT_ROUNDS),
      firstname,
      lastname,
      admin: true,
    },
  })
  .then((user) => {
    console.log(`Administrateur créé, id ${user.id}, email ${user.email}`);
  });
