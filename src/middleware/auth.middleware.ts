import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { env } from "../config/env.js";
import type { AuthenticatedUser } from "../modules/auth/auth.types.js";

export const authenticate = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({
        success: false,
        message: "Authencation required",
      });
    }

    const [scheme, token] = authHeader.split(" ");

    if (scheme !== "Bearer" || !token) {
      return res.status(401).json({
        success: false,
        message: "Invalid authorization header",
      });
    }

    const decoded = jwt.verify(token, env.JWT_SECRET) as AuthenticatedUser;

    req.user = {
        userId:decoded.userId,
        role:decoded.role
    };
    next()
  } catch (error) {
    console.error(error)
    return res.status(401).json({
        success:false,
        message:"Invalid or expired token"
    })
  }
};
