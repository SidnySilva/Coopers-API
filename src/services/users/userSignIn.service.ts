
import jwt from "jsonwebtoken";
import { prisma } from "../../app";
import { ErrorHandler } from "../../helpers/error.helper";
import { Iuser } from "../../interfaces";
import bcrypt from "bcrypt"
import { Response } from "express";

export const signInService = async (res:Response, {email,password}:Iuser) =>{

    const user = await prisma.user.findUnique({where:{email:email}})

    if(!user){
        return res.status(401).json({message:"Wrong user or password!"})
    }

    if(!bcrypt.compareSync(password, user.password)){
        return res.status(401).json({message:"Wrong user or password!"})
    }

    const token = jwt.sign({email:email},String(process.env.SECRET),{expiresIn:"1d"})

    return token
}