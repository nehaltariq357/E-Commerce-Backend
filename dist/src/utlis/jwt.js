import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const accessTokenSecret = process.env.JWT_ACCESS_SECRET;
const refreshTokenSecret = process.env.JWT_REFRESH_SECRET;
const accessTokenExpiresIn = process.env.JWT_ACCESS_EXPIRES_IN;
const refreshTokenExpiresIn = process.env.JWT_REFRESH_EXPIRES_IN;
if (!accessTokenSecret || !refreshTokenSecret) {
    throw new Error("JWT secrets are not defined in the environment variables");
}
if (!accessTokenExpiresIn) {
    throw new Error("JWT access token expiration time is not defined in the environment variables");
}
if (!refreshTokenExpiresIn) {
    throw new Error("JWT refresh token expiration time is not defined in the environment variables");
}
// generate access token
export const generateAccessToken = (payload) => {
    const options = {
        expiresIn: accessTokenExpiresIn,
        algorithm: "HS256",
    };
    return jwt.sign(payload, accessTokenSecret, options);
};
// generate refresh token
export const generateRefreshToken = (payload) => {
    const options = {
        expiresIn: refreshTokenExpiresIn,
        algorithm: "HS256",
    };
    return jwt.sign(payload, refreshTokenSecret, options);
};
// verify access token
export const verifyAccessToken = (token) => {
    return jwt.verify(token, accessTokenSecret, {
        algorithms: ["HS256"],
    });
};
// verify refresh token
export const verifyRefreshToken = (token) => {
    return jwt.verify(token, refreshTokenSecret, {
        algorithms: ["HS256"],
    });
};
//# sourceMappingURL=jwt.js.map