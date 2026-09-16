import z, { number } from "zod";
export const createProductSchema = z.object({
    name: z.string().min(2, "Product name must be at least 2 characters"),
    description: z.string().min(10, "Description must be at least 10 characters"),
    slug: z
        .string()
        .min(2, "Slug must at least 2 characters")
        .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Invalid slug format"),
    price: z.number().positive("Price must be greater than 0"),
    categoryId: z.number().int().positive().optional(),
});
export const updateProductSchema = z.object({
    name: z
        .string()
        .min(2, "Product name must be at least 2 characters")
        .optional(),
    description: z
        .string()
        .min(10, "Description must be at least 10 characters")
        .optional(),
    slug: z
        .string()
        .min(2, "Slug must be at least 2 characters")
        .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Invalid slug format")
        .optional(),
    price: z.number().positive("Price must be greater than 0").optional(),
    categoryId: z.number().int().positive().nullable().optional(),
    isActive: z.boolean().optional(),
});
export const addProductImageSchema = z.object({
    productId: z.number().int().positive(),
    imageUrl: z.url({
        error: "Invalid Image URL",
    }),
});
export const addProductVarientSchema = z.object({
    productId: z.number().int().positive(),
    size: z.string().min(1).optional(),
    stock: z.number().int().min(0).positive(),
    color: z.string().min(1).optional(),
    sku: z.string().min(2)
});
export const updateProductVariantSchema = z.object({
    size: z.string().min(1).optional(),
    stock: z.number().int().min(0).optional(),
    color: z.string().min(1).optional(),
    sku: z.string().min(2).optional(),
});
//# sourceMappingURL=product.validation.js.map