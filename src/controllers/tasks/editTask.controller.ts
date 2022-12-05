import { Request, Response } from "express";
import { editTasksService } from "../../services/tasks/editTask.service";

export const editTasksController = async (req: Request, res: Response) => {
  try {
    const data = { id: req.params.id, decoded: req.decoded };
    const body = req.body
    
    const task = await editTasksService(data, body);

    return res.status(200).json(task);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};
