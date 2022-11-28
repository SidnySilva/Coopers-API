import {prisma} from "../../app"
import { Iuser } from "../../interfaces"
import bcrypt from "bcrypt"
import { ErrorHandler } from "../../helpers/error.helper"

export const signUpService = async ({username,email,password,confirmPassword}:Iuser) =>{

    const user = await prisma.user.findUnique({where:{email:email}})

    if(user){
        throw new ErrorHandler(401,"User already exists!")
    }
    
    if(password !== confirmPassword){
        throw new ErrorHandler(401,"Different password!")
    }

    const hashPassword = bcrypt.hashSync(password,10)

    await prisma.user.create({
        data:{
            username:username,
            email:email,
            password:hashPassword,
        },
    })

    return "User created with success"
}