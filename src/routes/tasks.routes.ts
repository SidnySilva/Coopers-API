import { Router } from "express";
import { createTaskController } from "../controllers/tasks/createTask.controller";
import { deleteTasksController } from "../controllers/tasks/deleteTask.controller";
import { editTasksController } from "../controllers/tasks/editTask.controller";
import { getTasksController } from "../controllers/tasks/getTasks.controller";
import { validateSchemaMiddleware } from "../middlewares/validateShema.middleware"
import { taskCreateSchema, taskUpdateSchema } from "../schema/task.schema";
import validateToken from "../middlewares/auth.middleware";

export const taskRouter = Router();

taskRouter.get("/", validateToken, getTasksController);
taskRouter.post("/create", validateToken ,validateSchemaMiddleware(taskCreateSchema), createTaskController);
taskRouter.patch("/edit/:id", validateToken,validateSchemaMiddleware(taskUpdateSchema), editTasksController);
taskRouter.delete("/delete/:id", validateToken, deleteTasksController);
