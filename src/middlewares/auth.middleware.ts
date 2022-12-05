import { User } from "@prisma/client";
import { NextFunction, Request, Response } from "express";
import { JwtPayload, verify, VerifyErrors } from "jsonwebtoken";

const validateToken = async (req: Request,res: Response,next: NextFunction) => {
  const token: string = req.headers?.authorization;

  if (!token) {
    return res.status(401).json({ message: "Missing authorization token." });
  }

  return verify(
    token,
    process.env.SECRET,
    (err: VerifyErrors, decoded: string | JwtPayload) => {
      if (err) {
       return res.status(401).json({message:err.message});
      }
      req.decoded = decoded as Partial<User>;

      return next();
    }
  );
};

export default validateToken;