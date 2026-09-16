import z from "zod";
export const updateOrderStatusSchema = z.object({
    status: z.enum([
        "PENDING",
        "PROCESSING",
        "SHIPPED",
        "DELIVERED",
        "CANCELLED",
    ]),
});
//# sourceMappingURL=admin.order.validation.js.map