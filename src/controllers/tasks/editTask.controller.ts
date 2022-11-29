import { Request, Response } from "express";
import { editTasksService } from "../../services/tasks/editTask.service";

export const editTasksController = async (req: Request, res: Response) => {
  try {
    const decoded = req.decoded;
    const id = req.params.id;
    const data = req.body
    
    const task = await editTasksService(id, decoded, data);

    return res.status(200).json(task);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};
