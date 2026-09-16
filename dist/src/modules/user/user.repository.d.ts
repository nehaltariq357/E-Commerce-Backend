export declare const findUserById: (userId: number) => Promise<{
    name: string;
    email: string;
    id: number;
    role: import("../../../generated/prisma/enums.js").Role;
    phone: string | null;
    isEmailVerified: boolean;
    profileImage: string | null;
    createdAt: Date;
    updatedAt: Date;
    Cart: {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        userId: number;
    } | null;
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
    orders: {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        userId: number;
        status: import("../../../generated/prisma/enums.js").OrderStatus;
        addressId: number | null;
        totalAmount: import("@prisma/client-runtime-utils").Decimal;
    }[];
} | null>;
//# sourceMappingURL=user.repository.d.ts.map