import { prisma } from "../../app";

interface IMessage {
  username: string;
  email: string;
  telephone: string;
  message: string;
}

export const createMessageService = async ({
  username,
  email,
  telephone,
  message,
}: IMessage) => {
  return await prisma.getInTouch.create({
    data: {
      username: username?username:'Anonymous',
      email: email,
      telephone: telephone,
      message: message,
    },
  });
};
