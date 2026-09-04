import jwt, { type SignOptions } from "jsonwebtoken";
import dotenv from "dotenv";
import type { AuthenticatedUser } from "../modules/auth/auth.types.js";
dotenv.config();

const accessTokenSecret = process.env.JWT_ACCESS_SECRET as string;
const refreshTokenSecret = process.env.JWT_REFRESH_SECRET as string;
const accessTokenExpiresIn = process.env.JWT_ACCESS_EXPIRES_IN;
const refreshTokenExpiresIn = process.env.JWT_REFRESH_EXPIRES_IN;
if (!accessTokenExpiresIn) {
  throw new Error(
    "JWT access token expiration time is not defined in the environment variables",
  );
}
if (!refreshTokenExpiresIn) {
  throw new Error(
    "JWT refresh token expiration time is not defined in the environment variables",
  );
}
if (!accessTokenSecret || !refreshTokenSecret) {
  throw new Error("JWT secrets are not defined in the environment variables");
}

// access token

export const generateAccessToken = (payload: object) => {
  return jwt.sign(payload, accessTokenSecret, {
    expiresIn: accessTokenExpiresIn as SignOptions["expiresIn"],
    algorithm: "HS256",
  });
};

// refresh token

export const generateRefreshToken = (payload: object) => {
  return jwt.sign(payload, refreshTokenSecret, {
    expiresIn: refreshTokenExpiresIn as SignOptions["expiresIn"],
    algorithm: "HS256",
  });
};

// verify refresh token

export const verifyRefreshToken = (token: string) => {
  return jwt.verify(token, process.env.JWT_REFRESH_SECRET as string, {
    algorithms: ["HS256"],
  }) as AuthenticatedUser;
};
