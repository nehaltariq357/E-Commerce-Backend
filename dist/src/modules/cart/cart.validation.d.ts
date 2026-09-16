import { z } from "zod";
export declare const addToCartSchema: z.ZodObject<{
    productId: z.ZodNumber;
    variantId: z.ZodOptional<z.ZodNumber>;
    quantity: z.ZodNumber;
}, z.core.$strip>;
export declare const updateCartItemSchema: z.ZodObject<{
    quantity: z.ZodNumber;
}, z.core.$strip>;
//# sourceMappingURL=cart.validation.d.ts.map