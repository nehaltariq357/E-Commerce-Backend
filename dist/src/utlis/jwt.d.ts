import type { AuthenticatedUser } from "../modules/auth/auth.types.js";
export declare const generateAccessToken: (payload: object) => string;
export declare const generateRefreshToken: (payload: object) => string;
export declare const verifyAccessToken: (token: string) => AuthenticatedUser;
export declare const verifyRefreshToken: (token: string) => AuthenticatedUser;
//# sourceMappingURL=jwt.d.ts.map