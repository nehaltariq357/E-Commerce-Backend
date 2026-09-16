import { prisma } from "../../lib/prisma.js";
// create address
export const createAddress = async (userId, data) => {
    return await prisma.address.create({
        data: {
            userId,
            fullName: data.fullName,
            phone: data.phone,
            addressLine: data.addressLine,
            city: data.city,
            state: data.state ?? null,
            postalCode: data.postalCode,
            country: data.country,
            isDefault: data.isDefault ?? false,
        },
    });
};
// find all addresses of a user
export const findAddressByUserId = async (userId) => {
    return await prisma.address.findMany({
        where: {
            userId,
        },
        orderBy: [
            {
                isDefault: "desc"
            },
            {
                createdAt: "desc"
            }
        ]
    });
};
// find one address belonging to the user
export const findAddressByIdAndUserId = async (addressId, userId) => {
    return await prisma.address.findFirst({
        where: {
            id: addressId,
            userId,
        },
    });
};
// update address
export const updateAddress = async (addressId, data) => {
    return await prisma.address.update({
        where: {
            id: addressId,
        },
        data: {
            ...(data.fullName !== undefined && {
                //  update only the fields that are present in the data
                fullName: data.fullName,
            }),
            ...(data.phone !== undefined && {
                phone: data.phone,
            }),
            ...(data.addressLine !== undefined && {
                addressLine: data.addressLine,
            }),
            ...(data.city !== undefined && {
                city: data.city,
            }),
            ...(data.state !== undefined && {
                state: data.state,
            }),
            ...(data.postalCode !== undefined && {
                postalCode: data.postalCode,
            }),
            ...(data.country !== undefined && {
                country: data.country,
            }),
            ...(data.isDefault !== undefined && {
                isDefault: data.isDefault,
            }),
        },
    });
};
// delete address
export const deleteAddress = async (addressId) => {
    return await prisma.address.delete({
        where: {
            id: addressId,
        },
    });
};
// remove default from all user addresses
export const unsetDefaultAddress = async (userId) => {
    return await prisma.address.updateMany({
        where: {
            userId,
            isDefault: true,
        },
        data: {
            isDefault: false,
        },
    });
};
// count user addresses
export const countAddressByUserId = async (userId) => {
    return await prisma.address.count({
        where: {
            userId,
        },
    });
};
//# sourceMappingURL=address.repository.js.map