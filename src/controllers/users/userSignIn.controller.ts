import { Request, Response } from "express";
import { signInService } from "../../services/users/userSignIn.service";

export const signInController = async (req: Request, res: Response) => {
  try {
    const token = await signInService(req.body);

    return res.status(201).json({ token });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};
