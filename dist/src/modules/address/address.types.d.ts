import { z } from "zod";
import { createAddressSchema, updateAddressSchema } from "./address.validation.js";
export type CreateAddressInput = z.infer<typeof createAddressSchema>;
export type UpdateAddressInput = z.infer<typeof updateAddressSchema>;
//# sourceMappingURL=address.types.d.ts.map