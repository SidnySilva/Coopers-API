import { Router } from "express"
import { signInController } from "../controllers/users/userSignIn.controller"
import { signUpController } from "../controllers/users/userSignUp.controller"
import { validateSchemaMiddleware } from "../middlewares/validateShema.middleware"
import { userCreateSchema } from "../schema/user.schema"

export const userRouter = Router()

userRouter.post("/signup",validateSchemaMiddleware(userCreateSchema),signUpController)
userRouter.post("/signin",signInController)
