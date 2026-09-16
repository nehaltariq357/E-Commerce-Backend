import z from "zod";
export declare const createCategorySchema: z.ZodObject<{
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
}, z.z.core.$strip>;
export type CreateCategoryInput = z.infer<typeof createCategorySchema>;
export declare const updateCategorySchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    isActive: z.ZodOptional<z.ZodBoolean>;
}, z.z.core.$strip>;
//# sourceMappingURL=category.validation.d.ts.map