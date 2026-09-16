import type { OrderStatus } from "../../../generated/prisma/client.js";
export declare const findCartByUserId: (userId: number) => Promise<({
    cartItems: ({
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
        createdAt: Date;
        updatedAt: Date;
        productId: number;
        variantId: number | null;
        quantity: number;
        cartId: number;
    })[];
} & {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    userId: number;
}) | null>;
export declare const findAddressByIdAndUserId: (addressId: number, userId: number) => Promise<{
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
} | null>;
export declare const createOrder: (data: {
    userId: number;
    addressId: number;
    totalAmount: number;
}) => Promise<{
    id: number;
    createdAt: Date;
    updatedAt: Date;
    userId: number;
    status: OrderStatus;
    addressId: number | null;
    totalAmount: import("@prisma/client-runtime-utils").Decimal;
}>;
export declare const createOrderItems: (items: {
    orderId: number;
    productId: number;
    variantId?: number;
    productName: string;
    price: number;
    quantity: number;
    variantSize?: string | null;
    variantColor?: string | null;
}[]) => Promise<import("../../../generated/prisma/internal/prismaNamespace.js").BatchPayload>;
export declare const createPayment: (data: {
    orderId: number;
    amount: number;
    transactionId?: string | null;
    stripeSessionId?: string | null;
}) => Promise<{
    id: number;
    createdAt: Date;
    updatedAt: Date;
    status: import("../../../generated/prisma/enums.js").PaymentStatus;
    orderId: number;
    amount: import("@prisma/client-runtime-utils").Decimal;
    method: import("../../../generated/prisma/enums.js").PaymentMethod;
    transactionId: string | null;
    stripeSessionId: string | null;
}>;
export declare const deleteAllCartItems: (userId: number) => Promise<import("../../../generated/prisma/internal/prismaNamespace.js").BatchPayload>;
export declare const findOrdersByUserId: (userId: number) => Promise<({
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
export declare const findOrderByIdAndUserId: (orderId: number, userId: number) => Promise<({
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
export declare const findAllOrders: () => Promise<({
    user: {
        name: string;
        email: string;
        id: number;
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
        id: number;
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
    id: number;
    createdAt: Date;
    updatedAt: Date;
    userId: number;
    status: OrderStatus;
    addressId: number | null;
    totalAmount: import("@prisma/client-runtime-utils").Decimal;
}>;
//# sourceMappingURL=order.repository.d.ts.map