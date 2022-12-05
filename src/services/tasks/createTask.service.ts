import { prisma } from "../../app";
import { User } from "@prisma/client";

export const createTaskService = async ({description}:any, decoded:Partial<User>) => {
  const user = await prisma.user.findUnique({
    where: { email: decoded.email },
  });

  const newTask = await prisma.tasks.create({
    data: {
      description: description,
      userId: user.id,
    },
  });

  return newTask;
};
