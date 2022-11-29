import { Express } from "express";
import { userRouter } from "./users.routes"; 
import { taskRouter } from "./tasks.routes";
import { messageRouter } from "./message.route";

const router = (app: Express) => {
  app.use("/user", userRouter);
  app.use("/tasks", taskRouter);
  app.use("/messages", messageRouter);
};

export default router;