import type { AddProductImageInput, AddProductVarientInput, CreateProductInput, UpdateProductInput, UpdateProductVariantInput } from "./product.types.js";
export declare const createProductService: (data: CreateProductInput) => Promise<{
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
export declare const getallproductservice: () => Promise<({
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
export declare const getProductByIdService: (id: number) => Promise<{
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
}>;
export declare const updateproductservice: (id: number, data: UpdateProductInput) => Promise<{
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
export declare const deleteproductservice: (id: number) => Promise<{
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
export declare const addProductImageService: (data: AddProductImageInput) => Promise<{
    id: number;
    productId: number;
    imageUrl: string;
}>;
export declare const addProductVarientService: (data: AddProductVarientInput) => Promise<{
    id: number;
    productId: number;
    sku: string;
    size: string | null;
    stock: number;
    color: string | null;
}>;
export declare const getProductVariantService: (productId: number) => Promise<{
    id: number;
    productId: number;
    sku: string;
    size: string | null;
    stock: number;
    color: string | null;
}[]>;
export declare const updateProductVariantService: (id: number, data: UpdateProductVariantInput) => Promise<{
    id: number;
    productId: number;
    sku: string;
    size: string | null;
    stock: number;
    color: string | null;
}>;
export declare const deleteProductvariantService: (id: number) => Promise<{
    id: number;
    productId: number;
    sku: string;
    size: string | null;
    stock: number;
    color: string | null;
}>;
//# sourceMappingURL=product.service.d.ts.map