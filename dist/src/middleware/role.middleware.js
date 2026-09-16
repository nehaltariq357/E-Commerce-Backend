import { Role } from "../../generated/prisma/client.js";
export const requireRole = (requiredRole) => {
    return (req, res, next) => {
        if (!req.user) {
            return res.status(401).json({
                success: false,
                message: "Authentication required"
            });
        }
        if (req.user.role !== requiredRole) {
            return res.status(403).json({
                success: false,
                message: "Access denied"
            });
        }
        next();
    };
};
//# sourceMappingURL=role.middleware.js.map