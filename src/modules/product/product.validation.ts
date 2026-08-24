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
