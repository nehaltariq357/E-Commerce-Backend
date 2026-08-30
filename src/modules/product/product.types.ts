import { z } from "zod";
import {
  createProductSchema,
  updateProductSchema,
  addProductImageSchema,
  addProductVarientSchema,
  updateProductVariantSchema,
} from "./product.validation.js";

export type CreateProductInput = z.infer<typeof createProductSchema>;
export type UpdateProductInput = z.infer<typeof updateProductSchema>;
export type AddProductImageInput = z.infer<typeof addProductImageSchema>
export type AddProductVarientInput = z.infer < typeof addProductVarientSchema>
export type UpdateProductVariantInput = z.infer<typeof updateProductVariantSchema>