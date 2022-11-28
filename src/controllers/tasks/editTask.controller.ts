import { Request,Response } from "express";
import { ErrorHandler,handleError} from "../../helpers/error.helper";
import { editTasksService } from "../../services/tasks/editTask.controller";

export const editTasksController = async (req: Request, res:Response) =>{
    try {

        const cashOut = await editTasksService();

        return res.status(200).json(cashOut)
    } catch (err) {
        if(err instanceof ErrorHandler){
            return handleError(err,res)
        }
    }
}