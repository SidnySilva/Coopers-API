import { Request,Response } from "express";
import { ErrorHandler,handleError} from "../../helpers/error.helper";
import { deleteTasksService } from "../../services/tasks/deleteTask.controller";

export const deleteTasksController = async (req: Request, res:Response) =>{
    try {

        const cashOut = await deleteTasksService();

        return res.status(200).json(cashOut)
    } catch (err) {
        if(err instanceof ErrorHandler){
            return handleError(err,res)
        }
    }
}