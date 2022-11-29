import { Request, Response } from "express";
import { deleteTasksService } from "../../services/tasks/deleteTask.service";

export const deleteTasksController = async (req: Request, res: Response) => {
  try {
    const decoded = req.decoded;
    const id = req.params.id;

    const task = await deleteTasksService(id, decoded);

    return res.status(204).json(task);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};
