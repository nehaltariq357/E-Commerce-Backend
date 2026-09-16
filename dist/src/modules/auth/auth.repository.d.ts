import type { RegisterInput } from "./auth.types.js";
export declare const findUserByEmail: (email: string) => Promise<{
    name: string;
    email: string;
    password: string;
    id: number;
    role: import("../../../generated/prisma/enums.js").Role;
    phone: string | null;
    isEmailVerified: boolean;
    profileImage: string | null;
    createdAt: Date;
    updatedAt: Date;
} | null>;
export declare const createUser: (data: RegisterInput) => Promise<{
    name: string;
    email: string;
    password: string;
    id: number;
    role: import("../../../generated/prisma/enums.js").Role;
    phone: string | null;
    isEmailVerified: boolean;
    profileImage: string | null;
    createdAt: Date;
    updatedAt: Date;
}>;
export declare const findUserById: (userId: number) => Promise<{
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
} | null>;
//# sourceMappingURL=auth.repository.d.ts.map