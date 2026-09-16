import type { AddProductImageInput, AddProductVarientInput, CreateProductInput, UpdateProductInput, UpdateProductVariantInput } from "./product.types.js";
export declare const findCategoryById: (id: number) => Promise<{
    name: string;
    id: number;
    createdAt: Date;
    updatedAt: Date;
    description: string | null;
    isActive: boolean;
} | null>;
export declare const findProductBySlug: (slug: string) => Promise<{
    name: string;
    id: number;
    createdAt: Date;
    updatedAt: Date;
    price: import("@prisma/client-runtime-utils").Decimal;
    description: string;
    isActive: boolean;
    slug: string;
    categoryId: number | null;
} | null>;
export declare const createProduct: (data: CreateProductInput) => Promise<{
    name: string;
    id: number;
    createdAt: Date;
    updatedAt: Date;
    price: import("@prisma/client-runtime-utils").Decimal;
    description: string;
    isActive: boolean;
    slug: string;
    categoryId: number | null;
}>;
export declare const findallproduct: () => Promise<({
    category: {
        name: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        description: string | null;
        isActive: boolean;
    } | null;
    productImages: {
        id: number;
        productId: number;
        imageUrl: string;
    }[];
    productVariants: {
        id: number;
        productId: number;
        sku: string;
        size: string | null;
        stock: number;
        color: string | null;
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
})[]>;
export declare const findproductbyid: (id: number) => Promise<({
    category: {
        name: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        description: string | null;
        isActive: boolean;
    } | null;
    productImages: {
        id: number;
        productId: number;
        imageUrl: string;
    }[];
    productVariants: {
        id: number;
        productId: number;
        sku: string;
        size: string | null;
        stock: number;
        color: string | null;
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
}) | null>;
export declare const updateProduct: (id: number, data: UpdateProductInput) => Promise<{
    name: string;
    id: number;
    createdAt: Date;
    updatedAt: Date;
    price: import("@prisma/client-runtime-utils").Decimal;
    description: string;
    isActive: boolean;
    slug: string;
    categoryId: number | null;
}>;
export declare const deleteProduct: (id: number) => Promise<{
    name: string;
    id: number;
    createdAt: Date;
    updatedAt: Date;
    price: import("@prisma/client-runtime-utils").Decimal;
    description: string;
    isActive: boolean;
    slug: string;
    categoryId: number | null;
}>;
export declare const createProductImage: (data: AddProductImageInput) => Promise<{
    id: number;
    productId: number;
    imageUrl: string;
}>;
export declare const createProductVarient: (data: AddProductVarientInput) => Promise<{
    id: number;
    productId: number;
    sku: string;
    size: string | null;
    stock: number;
    color: string | null;
}>;
export declare const findVariantBySku: (sku: string) => Promise<{
    id: number;
    productId: number;
    sku: string;
    size: string | null;
    stock: number;
    color: string | null;
} | null>;
export declare const findVariantByProductId: (productId: number) => Promise<{
    id: number;
    productId: number;
    sku: string;
    size: string | null;
    stock: number;
    color: string | null;
}[]>;
export declare const updateProductVariant: (id: number, data: UpdateProductVariantInput) => Promise<{
    id: number;
    productId: number;
    sku: string;
    size: string | null;
    stock: number;
    color: string | null;
}>;
export declare const findVariantById: (id: number) => Promise<{
    id: number;
    productId: number;
    sku: string;
    size: string | null;
    stock: number;
    color: string | null;
} | null>;
export declare const deleteProductvariant: (id: number) => Promise<{
    id: number;
    productId: number;
    sku: string;
    size: string | null;
    stock: number;
    color: string | null;
}>;
//# sourceMappingURL=product.repository.d.ts.map