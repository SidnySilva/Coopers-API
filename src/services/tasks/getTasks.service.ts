import { prisma } from "../../app";
import { IAuth } from "../../interfaces";


export const getTasksService = async (decoded) =>{
    const user = await prisma.user.findUnique({where:{email:decoded.email}})
    
   return await prisma.tasks.findMany({where:{
    userId:user.id
   }})
}