import AppError from "../../helpers/error.helper";
import { prisma } from "../../app";
import { IAuth } from "../../interfaces";

export const deleteTasksService = async ({ id, decoded }: IAuth) => {
  const user = await prisma.user.findUnique({
    where: { email: decoded.email },
  });

  if(id === 'true' || id === "false"){
    await prisma.tasks.deleteMany({where:{done:JSON.parse(id),userId:user.id}})
    return;
  }

  const task = await prisma.tasks.findUnique({ where: { id: id } });
  
  if (!task) {
    throw new AppError("Task not found", 404);
  }

  if (user.id !== task.userId) {
    throw new AppError("would you like the others to mess up your stuff?", 203);
  }

  await prisma.tasks.delete({ where: { id: id } });

  return;
};
