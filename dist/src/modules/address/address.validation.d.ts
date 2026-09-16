import zod from "zod";
export declare const createAddressSchema: zod.ZodObject<{
    fullName: zod.ZodString;
    phone: zod.ZodString;
    addressLine: zod.ZodString;
    city: zod.ZodString;
    state: zod.ZodOptional<zod.ZodString>;
    postalCode: zod.ZodString;
    country: zod.ZodString;
    isDefault: zod.ZodOptional<zod.ZodBoolean>;
}, zod.z.core.$strip>;
export declare const updateAddressSchema: zod.ZodObject<{
    fullName: zod.ZodOptional<zod.ZodString>;
    phone: zod.ZodOptional<zod.ZodString>;
    addressLine: zod.ZodOptional<zod.ZodString>;
    city: zod.ZodOptional<zod.ZodString>;
    state: zod.ZodOptional<zod.ZodOptional<zod.ZodString>>;
    postalCode: zod.ZodOptional<zod.ZodString>;
    country: zod.ZodOptional<zod.ZodString>;
    isDefault: zod.ZodOptional<zod.ZodOptional<zod.ZodBoolean>>;
}, zod.z.core.$strip>;
//# sourceMappingURL=address.validation.d.ts.map