import { prisma } from "../../app";
import AppError from "../../helpers/error.helper";

export const createTaskService = async ({description},decoded) => {

    const user = await prisma.user.findUnique({where:{email:decoded.email}})

    const task = await prisma.tasks.findFirst({where:{description:description}})

    if(task){
        throw new AppError( "This task already exists",400)
    }

    const newTask = await prisma.tasks.create({data:{
        description:description,
        userId:user.id
    }})

    return newTask
};
