import { Request, Response } from "express";
import { prisma } from "../../app";
import { ErrorHandler, handleError } from "../../helpers/error.helper";
import { createTaskService } from "../../services/tasks/createTask.controller";

export const createTaskController = async (req: Request, res: Response) => {
  try {
    const param = req.params;
    const decoded = req.decoded;

    const data = await createTaskService();

    return res.status(200).json(data);
  } catch (err) {
    if (err instanceof ErrorHandler) {
      return handleError(err, res);
    }
  }
};
