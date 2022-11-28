import { Router } from "express";
import { createTaskController } from "../controllers/tasks/createTask.controller";
import { deleteTasksController } from "../controllers/tasks/deleteTask.controller";
import { editTasksController } from "../controllers/tasks/editTask.controller";
import { getTasksController } from "../controllers/tasks/getTasks.controller";

import validateToken from "../middlewares/auth.middleware";

export const transactionRouter = Router();

transactionRouter.post("/cashin", validateToken, createTaskController);
transactionRouter.patch("/cashout", validateToken, editTasksController);
transactionRouter.delete("/cashout", validateToken, deleteTasksController);
transactionRouter.get("/:string", validateToken, getTasksController);
