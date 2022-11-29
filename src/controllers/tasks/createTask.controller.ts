import { Request, Response } from "express";
import { createTaskService } from "../../services/tasks/createTask.service";

export const createTaskController = async (req: Request, res: Response) => {
  try {
    const user = req.decoded

    const data = await createTaskService(req.body,user);

    return res.status(201).json(data);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};
