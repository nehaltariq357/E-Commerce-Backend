import { OrderStatus } from "../../../generated/prisma/client.js";
export declare const findAllOrders: () => Promise<({
    user: {
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
    };
    address: {
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
    } | null;
    orderItems: ({
        product: {
            name: string;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            price: import("@prisma/client-runtime-utils").Decimal;
            description: string;
            isActive: boolean;
            slug: string;
            categoryId: number | null;
        };
        variant: {
            id: number;
            productId: number;
            sku: string;
            size: string | null;
            stock: number;
            color: string | null;
        } | null;
    } & {
        id: number;
        orderId: number;
        productId: number;
        variantId: number | null;
        productName: string;
        price: import("@prisma/client-runtime-utils").Decimal;
        quantity: number;
        variantSize: string | null;
        variantColor: string | null;
    })[];
    payments: {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        status: import("../../../generated/prisma/enums.js").PaymentStatus;
        orderId: number;
        amount: import("@prisma/client-runtime-utils").Decimal;
        method: import("../../../generated/prisma/enums.js").PaymentMethod;
        transactionId: string | null;
        stripeSessionId: string | null;
    } | null;
} & {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    userId: number;
    status: OrderStatus;
    addressId: number | null;
    totalAmount: import("@prisma/client-runtime-utils").Decimal;
})[]>;
export declare const findOrderById: (orderId: number) => Promise<({
    user: {
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
    };
    address: {
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
    } | null;
    orderItems: ({
        product: {
            name: string;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            price: import("@prisma/client-runtime-utils").Decimal;
            description: string;
            isActive: boolean;
            slug: string;
            categoryId: number | null;
        };
        variant: {
            id: number;
            productId: number;
            sku: string;
            size: string | null;
            stock: number;
            color: string | null;
        } | null;
    } & {
        id: number;
        orderId: number;
        productId: number;
        variantId: number | null;
        productName: string;
        price: import("@prisma/client-runtime-utils").Decimal;
        quantity: number;
        variantSize: string | null;
        variantColor: string | null;
    })[];
    payments: {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        status: import("../../../generated/prisma/enums.js").PaymentStatus;
        orderId: number;
        amount: import("@prisma/client-runtime-utils").Decimal;
        method: import("../../../generated/prisma/enums.js").PaymentMethod;
        transactionId: string | null;
        stripeSessionId: string | null;
    } | null;
} & {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    userId: number;
    status: OrderStatus;
    addressId: number | null;
    totalAmount: import("@prisma/client-runtime-utils").Decimal;
}) | null>;
export declare const updateOrderStatus: (orderId: number, status: OrderStatus) => Promise<{
    user: {
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
    };
    address: {
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
    } | null;
    orderItems: ({
        product: {
            name: string;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            price: import("@prisma/client-runtime-utils").Decimal;
            description: string;
            isActive: boolean;
            slug: string;
            categoryId: number | null;
        };
        variant: {
            id: number;
            productId: number;
            sku: string;
            size: string | null;
            stock: number;
            color: string | null;
        } | null;
    } & {
        id: number;
        orderId: number;
        productId: number;
        variantId: number | null;
        productName: string;
        price: import("@prisma/client-runtime-utils").Decimal;
        quantity: number;
        variantSize: string | null;
        variantColor: string | null;
    })[];
    payments: {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        status: import("../../../generated/prisma/enums.js").PaymentStatus;
        orderId: number;
        amount: import("@prisma/client-runtime-utils").Decimal;
        method: import("../../../generated/prisma/enums.js").PaymentMethod;
        transactionId: string | null;
        stripeSessionId: string | null;
    } | null;
} & {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    userId: number;
    status: OrderStatus;
    addressId: number | null;
    totalAmount: import("@prisma/client-runtime-utils").Decimal;
}>;
//# sourceMappingURL=admin.order.repository.d.ts.map