import { PrismaClient } from "@prisma/client";
import express, {json, NextFunction, Request, Response} from "express"
import cors from "cors"
import router from "./routes";
import AppError from "./helpers/error.helper";

export const prisma = new PrismaClient()

export const app = express()

app.use(cors())
app.use(json())

router(app)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return res.status(err.statusCode).send(err.message);
    }
  
    console.log(err);
  
    return res.status(500).send({ message: "Internal server error" });
  });