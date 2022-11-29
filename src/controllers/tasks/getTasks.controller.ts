import { Request, Response } from "express";
import { getTasksService } from "../../services/tasks/getTasks.service";

export const getTasksController = async (req: Request, res: Response) => {
  try {
    const tasks = await getTasksService(req.decoded);

    return res.status(200).json(tasks);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};
