
import jwt from "jsonwebtoken";
import { prisma } from "../../app";
import AppError from "../../helpers/error.helper";
import { Iuser } from "../../interfaces";
import bcrypt from "bcrypt"
import { Response } from "express";

export const signInService = async (res:Response, {email,password}:Iuser) =>{

    const user = await prisma.user.findUnique({where:{email:email}})

    if(!user){
        throw new AppError("Wrong user or password!",401)
    }

    if(!bcrypt.compareSync(password, user.password)){
        throw new AppError("Wrong user or password!",401)
    }

    const token = jwt.sign({email:email},String(process.env.SECRET),{expiresIn:"1d"})

    return token
}