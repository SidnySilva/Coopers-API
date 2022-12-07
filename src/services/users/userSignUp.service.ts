import bcrypt from "bcrypt";
import AppError from "../../helpers/error.helper";
import { prisma } from "../../app";
import { Iuser } from "../../interfaces";

export const signUpService = async ({
  username,
  email,
  password,
  confirmPassword,
}: Iuser) => {
  const user = await prisma.user.findUnique({ where: { email: email } });

  if (user) {
    throw new AppError("User already exists!", 400);
  }

  if (password !== confirmPassword) {
    throw new AppError("Different password!", 403);
  }

  const hashPassword = bcrypt.hashSync(password, 10);

  await prisma.user.create({
    data: {
      username: username,
      email: email,
      password: hashPassword,
    },
  });

  return "User created with success";
};
