export interface RegisterInput {
    name: string;
    email: string;
    password: string;
}
export interface LoginInput {
    email: string;
    password: string;
}
export interface AuthenticatedUser {
    userId: number;
    role: "USER" | "ADMIN";
}
//# sourceMappingURL=auth.types.d.ts.map