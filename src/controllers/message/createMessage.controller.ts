import { Request, Response } from "express";
import AppError from "../../helpers/error.helper";
import { createMessageService } from "../../services/messages/createMessage.service";
import { createTaskService } from "../../services/tasks/createTask.service";

export const createMessageController = async (req: Request, res: Response) => {
  try {
    const data = await createMessageService(req.body);

    return res.status(200).json(data);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};
