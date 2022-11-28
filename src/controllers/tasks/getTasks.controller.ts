import { Request,Response } from "express";
import { ErrorHandler,handleError} from "../../helpers/error.helper";
import { getTasksService } from "../../services/tasks/getTasks.controller";

export const getTasksController = async (req: Request, res:Response) =>{
    try {

        const cashOut = await getTasksService();

        return res.status(200).json(cashOut)
    } catch (err) {
        if(err instanceof ErrorHandler){
            return handleError(err,res)
        }
    }
}