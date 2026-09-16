import type { addToCartInput } from "./cart.types.js";
export declare const addToCartService: (userId: number, input: addToCartInput) => Promise<{
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
}>;
export declare const getCartService: (userId: number) => Promise<({
    cartItems: ({
        product: {
            productImages: {
                id: number;
                productId: number;
                imageUrl: string;
            }[];
        } & {
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
}) | {
    id: null;
    userId: number;
    cartItems: never[];
}>;
export declare const updateCartItemService: (userId: number, cartItemId: number, quantity: number) => Promise<{
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
}>;
export declare const removeCartItemService: (userId: number, cartItemId: number) => Promise<{
    id: number;
    createdAt: Date;
    updatedAt: Date;
    productId: number;
    variantId: number | null;
    quantity: number;
    cartId: number;
}>;
export declare const clearCartService: (userId: number) => Promise<import("../../../generated/prisma/internal/prismaNamespace.js").BatchPayload>;
//# sourceMappingURL=cart.service.d.ts.map