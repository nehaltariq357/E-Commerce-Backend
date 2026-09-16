import zod from "zod";
// Create address schema
export const createAddressSchema = zod.object({
    fullName: zod.string().min(2, "Full name must be at least 2 characters long"),
    phone: zod.string().min(10, "Phone number must be at least 10 characters long"),
    addressLine: zod.string().min(2, "Address line 1 must be at least 2 characters long"),
    city: zod.string().min(2, "City must be at least 2 characters long"),
    state: zod.string().min(2, "State must be at least 2 characters long").optional(),
    postalCode: zod.string().min(2, "Postal code must be at least 2 characters long"),
    country: zod.string().min(2, "Country must be at least 2 characters long"),
    isDefault: zod.boolean().optional(),
});
// Update address schema
export const updateAddressSchema = createAddressSchema.partial(); // make all fields optional
//# sourceMappingURL=address.validation.js.map