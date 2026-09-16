export declare const findCartByUserId: (userId: number) => Promise<{
    id: number;
    createdAt: Date;
    updatedAt: Date;
    userId: number;
} | null>;
export declare const createCart: (userId: number) => Promise<{
    id: number;
    createdAt: Date;
    updatedAt: Date;
    userId: number;
}>;
export declare const findCartItem: (cartId: number, productId: number, variantId?: number) => Promise<{
    id: number;
    createdAt: Date;
    updatedAt: Date;
    productId: number;
    variantId: number | null;
    quantity: number;
    cartId: number;
} | null>;
export declare const createCartItem: (cartId: number, productId: number, quantity: number, variantId?: number) => Promise<{
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
export declare const updateCartItem: (cartItemId: number, quantity: number) => Promise<{
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
export declare const findCartWithItemsByUserId: (userId: number) => Promise<({
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
}) | null>;
export declare const findCartItemByIdAndUserId: (cartItemId: number, userId: number) => Promise<({
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
}) | null>;
export declare const findCartItemByIdAndUserIdDelete: (cartItemId: number, userId: number) => Promise<{
    id: number;
    createdAt: Date;
    updatedAt: Date;
    productId: number;
    variantId: number | null;
    quantity: number;
    cartId: number;
} | null>;
export declare const deleteCartItem: (cartItemId: number) => Promise<{
    id: number;
    createdAt: Date;
    updatedAt: Date;
    productId: number;
    variantId: number | null;
    quantity: number;
    cartId: number;
}>;
export declare const deleteAllCartItems: (userId: number) => Promise<import("../../../generated/prisma/internal/prismaNamespace.js").BatchPayload>;
//# sourceMappingURL=cart.repository.d.ts.map