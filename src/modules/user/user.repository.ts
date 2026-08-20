import { prisma } from "../../lib/prisma.js";

export const findUserById = async (userId: number) => {
  return prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      phone: true,
      isEmailVerified: true,
      profileImage: true,
      addresses: true,
      Cart: true,
      orders: true,
      createdAt: true,
      updatedAt: true,
    },
  });
};
