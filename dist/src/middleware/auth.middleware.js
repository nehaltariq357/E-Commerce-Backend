import jwt from "jsonwebtoken";
import { env } from "../config/env.js";
import { verifyAccessToken } from "../utlis/jwt.js";
export const authenticate = (req, res, next) => {
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
    }
    catch (error) {
        console.error("Error in auth middleware", error);
        return res.status(401).json({
            success: false,
            message: "Invalid or expired token",
        });
    }
};
//# sourceMappingURL=auth.middleware.js.map