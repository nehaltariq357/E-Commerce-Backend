import type { Request, Response } from "express";

import { loginSchema, registerSchema } from "../auth/auth.validation.js";
import { loginUser, registerUser } from "../auth/auth.service.js";

export const register = async (req: Request, res: Response) => {
  try {
    const data = registerSchema.parse(req.body);
    const user = await registerUser(data);
    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: user,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      success: false,
      message: error instanceof Error ? error.message : "Something went wrong",
    });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const data = loginSchema.parse(req.body);
    const result = await loginUser(data);
    return res.status(200).json({
      sucess: true,
      message: "Login Sucessful",
      data: result,
    });
  } catch (error) {
    console.error(error);
    return res.status(401).json({
      success: false,
      message:
        error instanceof Error ? error.message : "Invalid email or password",
    });
  }
};
