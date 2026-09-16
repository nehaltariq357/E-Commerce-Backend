import type { Request, Response, NextFunction } from "express";
import { Role } from "../../generated/prisma/client.js";
export declare const requireRole: (requiredRole: Role) => (req: Request, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
//# sourceMappingURL=role.middleware.d.ts.map