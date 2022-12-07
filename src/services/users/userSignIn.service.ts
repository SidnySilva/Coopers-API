import jwt from "jsonwebtoken";
import AppError from "../../helpers/error.helper";
import bcrypt from "bcrypt";
import { prisma } from "../../app";
import { Iuser } from "../../interfaces";

export const signInService = async ({ email, password }: Iuser) => {
  const user = await prisma.user.findUnique({ where: { email: email } });

  if (!user) {
    throw new AppError("Wrong user or password!", 400);
  }

  if (!bcrypt.compareSync(password, user.password)) {
    throw new AppError("Wrong user or password!", 400);
  }

  const token = jwt.sign({ email: email }, String(process.env.SECRET), {
    expiresIn: "1d",
  });

  return token;
};
