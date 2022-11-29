import { User } from "@prisma/client";

export interface Iuser{
    username:string;
    email:string;
    password:string;
    confirmPassword:string;
}

export interface IAuth{
    id?:string;
    decoded:Partial<User>
}