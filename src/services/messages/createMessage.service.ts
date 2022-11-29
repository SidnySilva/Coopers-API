import { prisma } from "../../app";

export const createMessageService = async ({
  username,
  email,
  telephone,
  message,
}) => {

    return await prisma.getInTouch.create({data:{
        username:username,
        email:email,
        telephone:telephone,
        message:message
    }})

};
