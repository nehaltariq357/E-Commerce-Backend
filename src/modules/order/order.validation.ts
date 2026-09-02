import z from "zod"

export const orderSchema = z.object({
    addressId: z.number().int().positive(),
})