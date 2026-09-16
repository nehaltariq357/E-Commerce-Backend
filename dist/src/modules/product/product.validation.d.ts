import z from "zod";
export declare const createProductSchema: z.ZodObject<{
    name: z.ZodString;
    description: z.ZodString;
    slug: z.ZodString;
    price: z.ZodNumber;
    categoryId: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export declare const updateProductSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    slug: z.ZodOptional<z.ZodString>;
    price: z.ZodOptional<z.ZodNumber>;
    categoryId: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    isActive: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export declare const addProductImageSchema: z.ZodObject<{
    productId: z.ZodNumber;
    imageUrl: z.ZodURL;
}, z.core.$strip>;
export declare const addProductVarientSchema: z.ZodObject<{
    productId: z.ZodNumber;
    size: z.ZodOptional<z.ZodString>;
    stock: z.ZodNumber;
    color: z.ZodOptional<z.ZodString>;
    sku: z.ZodString;
}, z.core.$strip>;
export declare const updateProductVariantSchema: z.ZodObject<{
    size: z.ZodOptional<z.ZodString>;
    stock: z.ZodOptional<z.ZodNumber>;
    color: z.ZodOptional<z.ZodString>;
    sku: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
//# sourceMappingURL=product.validation.d.ts.map