import { z } from "zod";

export const addToCartSchema = z.object({
  productId: z.number().int().positive(),

  variantId: z.number().int().positive().optional(),

  quantity: z.number().int().positive(),
});



export const updateCartItemSchema = z.object({
  quantity: z.number().int().positive(),
});