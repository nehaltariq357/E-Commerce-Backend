import type { RegisterInput, LoginInput } from "./auth.types.js";
export declare const registerUser: (data: RegisterInput) => Promise<{
    id: number;
    name: string;
    email: string;
    role: import("../../../generated/prisma/enums.js").Role;
}>;
export declare const loginUser: (data: LoginInput) => Promise<{
    user: {
        id: number;
        name: string;
        email: string;
        role: import("../../../generated/prisma/enums.js").Role;
    };
    accessToken: string;
    refreshToken: string;
}>;
export declare const refreshAccessToken: (refreshToken: string) => Promise<string>;
export declare const getCurrentUser: (userId: number) => Promise<{
    name: string;
    email: string;
    id: number;
    role: import("../../../generated/prisma/enums.js").Role;
    phone: string | null;
    isEmailVerified: boolean;
    profileImage: string | null;
    createdAt: Date;
    addresses: {
        id: number;
        phone: string;
        createdAt: Date;
        updatedAt: Date;
        userId: number;
        fullName: string;
        addressLine: string;
        city: string;
        state: string | null;
        postalCode: string;
        country: string;
        isDefault: boolean;
    }[];
}>;
//# sourceMappingURL=auth.service.d.ts.map