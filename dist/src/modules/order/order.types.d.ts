import { orderSchema } from "./order.validation.js";
import { z } from "zod";
export type OrderInput = z.infer<typeof orderSchema>;
//# sourceMappingURL=order.types.d.ts.map