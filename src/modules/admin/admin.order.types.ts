import { z } from "zod"
import { updateOrderStatusSchema } from "./admin.order.validation.js"

export type UpdateOrderStatusInput = z.infer<typeof updateOrderStatusSchema>