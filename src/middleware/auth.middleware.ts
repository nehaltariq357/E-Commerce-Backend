
import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { env } from "../config/env.js";
import type { AuthenticatedUser } from "../modules/auth/auth.types.js";
import {verifyAccessToken} from "../utlis/jwt.js";
export const authenticate = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.cookies?.accessToken;

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Authentication required",
      });
    }

    const decoded = verifyAccessToken(token);

    req.user = {
      userId: decoded.userId,
      role: decoded.role,
    };

    next();
  } catch (error) {
    console.error("Error in auth middleware",error);

    return res.status(401).json({
      success: false,
      message: "Invalid or expired token",
    });
  }
};

