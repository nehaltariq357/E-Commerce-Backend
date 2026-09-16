import z from "zod";
export declare const orderSchema: z.ZodObject<{
    addressId: z.ZodNumber;
}, z.z.core.$strip>;
export declare const updateOrderStatusSchema: z.ZodObject<{
    status: z.ZodEnum<{
        PENDING: "PENDING";
        PROCESSING: "PROCESSING";
        SHIPPED: "SHIPPED";
        DELIVERED: "DELIVERED";
        CANCELLED: "CANCELLED";
    }>;
}, z.z.core.$strip>;
//# sourceMappingURL=order.validation.d.ts.map