import { Request, Response } from "express";
import { signUpService } from "../../services/users/userSignUp.service";

export const signUpController = async (req: Request, res: Response) => {
  try {
    const user = await signUpService(req.body);

    return res.status(200).json({ message: user });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};
