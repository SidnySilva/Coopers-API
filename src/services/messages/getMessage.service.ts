import { prisma } from "../../app"

export const getMessageService = async() =>{
    return await prisma.getInTouch.findMany()
}