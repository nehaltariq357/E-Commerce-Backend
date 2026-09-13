import type { Request, Response } from "express";

import { loginSchema, registerSchema } from "../auth/auth.validation.js";
import { loginUser, registerUser,refreshAccessToken,getCurrentUser } from "../auth/auth.service.js";
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

    // set the access token and refresh token cookies
    res.cookie("accessToken",
      result.accessToken,
      {
        httpOnly: true,
        secure: false,
        sameSite: "lax", // to prevent CSRF attacks
        maxAge: 15 * 60 * 1000, // 15 minutes
      }
    )
    //refresh token cookie
    res.cookie("refreshToken",
      result.refreshToken,
      {
        httpOnly: true,
        secure: false,
        sameSite: "lax", // to prevent CSRF attacks,
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
      }
    )
    return res.status(200).json({
      success: true,
      message: "Login Sucessful",
      data: result.user, // return the user object 
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


// ===============================
// Refresh Access Token
// ===============================
export const refresh = async (
  req: Request,
  res: Response
) => {
  try {
    // 1. Get refresh token from cookie
    const refreshToken =
      req.cookies?.refreshToken;

    // 2. Check refresh token exists
    if (!refreshToken) {
      return res.status(401).json({
        success: false,
        message: "Refresh token not found",
      });
    }

    // 3. Verify refresh token and generate new access token
    const accessToken =
      await refreshAccessToken(
        refreshToken
      );

    // 4. Set new access token cookie
    res.cookie(
      "accessToken",
      accessToken,
      {
        httpOnly: true,
        secure: false,
        sameSite: "lax",
        maxAge: 15 * 60 * 1000,
      }
    );

    return res.status(200).json({
      success: true,
      message:
        "Access token refreshed successfully",
    });
  } catch (error) {
    console.error(error);

    return res.status(401).json({
      success: false,
      message:
        "Invalid or expired refresh token",
    });
  }
};


// logout 
export const logout = async(req:Request, res:Response)=>{
try{

  res.clearCookie("accessToken", {
    httpOnly: true,
    secure: false,
    sameSite: "lax",
  })
  res.clearCookie("refreshToken", {
    httpOnly: true,
    secure: false,
    sameSite: "lax",
  })

  return res.status(200).json({
    success: true,
    message: "Logout successful",
  });
}catch(error){

}
}

export const me = async(req:Request,res:Response)=>{
try{
  if(!req.user){
    return res.status(401).json({
      success: false,
      message: "Authentication required",
    })
  }

  const user = await getCurrentUser(req.user.userId);

  return res.status(200).json({
    success: true,
    message: "User profile fetched successfully",
    data: user
  })
}catch(error){
  console.error(error)

  return res.status(404).json({
    success: false,
    message: error instanceof Error ? error.message : "User not found",
  })
}
}