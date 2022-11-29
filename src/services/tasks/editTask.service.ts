import { prisma } from "../../app";
import AppError from "../../helpers/error.helper";
import { IAuth } from "../../interfaces";


export const editTasksService = async (id,decoded,data) =>{

    const user = await prisma.user.findUnique({where:{email:decoded.email}})

    const task = await prisma.tasks.findUnique({where:{id:id}})

    if(!task){
        throw new AppError("Task not found",404)
    }

    if(user.id !== task.userId){
        throw new AppError("would you like the others to mess up your stuff?",203)
    }

    const editedTask = await prisma.tasks.update({where:{id:id},data:{
        done:data.done,
        description:data.description
    }})
    
    return editedTask

}