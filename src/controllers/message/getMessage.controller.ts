import { Request, Response } from "express";
import { getMessageService } from "../../services/messages/getMessage.service";

export const getMessageController = async (req: Request, res: Response) => {
  try {
    const data = await getMessageService();

    return res.status(200).json(data);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};
