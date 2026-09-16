import { prisma } from "../../lib/prisma.js";
// Find a user by their email address
export const findUserByEmail = async (email) => {
    return await prisma.user.findUnique({
        where: {
            email
        }
    });
};
// Create a new user in the database
export const createUser = async (data) => {
    return await prisma.user.create({
        data
    });
};
// find user by id
export const findUserById = async (userId) => {
    return await prisma.user.findUnique({
        where: {
            id: userId
        },
        select: {
            id: true,
            name: true,
            email: true,
            role: true,
            phone: true,
            profileImage: true,
            isEmailVerified: true,
            addresses: true,
            createdAt: true,
        }
    });
};
//# sourceMappingURL=auth.repository.js.map