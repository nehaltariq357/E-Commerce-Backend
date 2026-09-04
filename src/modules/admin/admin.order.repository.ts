
import { prisma } from "../../lib/prisma.js";
import { OrderStatus } from "../../../generated/prisma/client.js";

// ==================================
// Get All Orders
// ==================================
export const findAllOrders = async () => {
  return prisma.order.findMany({
    include: {
      user: true,

      address: true,

      ordersItems: {
        include: {
          product: true,
          variant: true,
        },
      },

      payments: true,
    },

    orderBy: {
      createdAt: "desc",
    },
  });
};

// ==================================
// Get Single Order
// ==================================
export const findOrderById = async (
  orderId: number
) => {
  return prisma.order.findUnique({
    where: {
      id: orderId,
    },

    include: {
      user: true,

      address: true,

      ordersItems: {
        include: {
          product: true,
          variant: true,
        },
      },

      payments: true,
    },
  });
};

// ==================================
// Update Order Status
// ==================================
export const updateOrderStatus = async (
  orderId: number,
  status: OrderStatus
) => {
  return prisma.order.update({
    where: {
      id: orderId,
    },

    data: {
      status,
    },
  });
};

