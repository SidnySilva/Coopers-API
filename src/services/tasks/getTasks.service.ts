import { User } from "@prisma/client";
import { prisma } from "../../app";

export const getTasksService = async (decoded: Partial<User>) => {
  const user = await prisma.user.findUnique({
    where: { email: decoded.email },
  });

  return await prisma.tasks.findMany({
    where: {
      userId: user.id,
    },
  });
};
