import { Router } from "express"
import { createMessageController } from "../controllers/message/createMessage.controller"
import { getMessageController } from "../controllers/message/getMessage.controller"
import { validateSchemaMiddleware } from "../middlewares/validateShema.middleware"
import { messageCreateSchema } from "../schema/messages.schema"

export const messageRouter = Router()

messageRouter.get("/",getMessageController)
messageRouter.post("/",validateSchemaMiddleware(messageCreateSchema),createMessageController)
