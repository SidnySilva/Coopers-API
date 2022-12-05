import { Request, Response } from "express";
import {  deleteTasksService } from "../../services/tasks/deleteTask.service";

export const deleteTasksController = async (req: Request, res: Response) => {
  try {
    const data = { id: req.params.id, decoded: req.decoded };

   await deleteTasksService(data);

    return res.status(204).json();
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};
