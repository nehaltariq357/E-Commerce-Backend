import type { OrderStatus } from "../../../generated/prisma/client.js";
import { prisma } from "../../lib/prisma.js";


export const findCartByUserId = async (
  userId: number
) => {
  return prisma.cart.findUnique({
    where: {
      userId,
    },
    include: {
      cartItems: {
        include: {
          product: true,
          variant: true,
        },
      },
    },
  });
};

export const findAddressByIdAndUserId = async (
  addressId: number,
  userId: number
) => {
  return prisma.address.findFirst({
    where: {
      id: addressId,
      userId,
    },
  });
};


export const createOrder = async (data: {
  userId: number;
  addressId: number;
  totalAmount: number;
}) => {
  return prisma.order.create({
    data: {
      userId: data.userId,
      addressId: data.addressId,
      totalAmount: data.totalAmount,
    },
  });
};

export const createOrderItems = async (
  items: {
    orderId: number;
    productId: number;
    variantId?: number;
    productName: string;
    price: number;
    quantity: number;
  }[]
) => {
  return prisma.orderItem.createMany({
    data: items,
  });
};

export const createPayment = async (data: {
  orderId: number;
  amount: number;
}) => {
  return prisma.payment.create({
    data: {
      orderId: data.orderId,
      amount: data.amount,
      method: "COD",
      status: "PENDING",
    },
  });


};

export const deleteAllCartItems = async (
  userId: number
) => {
  return prisma.cartItem.deleteMany({
    where: {
      cart: {
        userId,
      },
    },
  });
};


export const findOrdersByUserId = async (
  userId: number
) => {
  return prisma.order.findMany({
    where: {
      userId,
    },
    include: {
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

export const findOrderByIdAndUserId = async (
  orderId: number,
  userId: number
) => {
  return prisma.order.findFirst({
    where: {
      id: orderId,
      userId,
    },
    include: {
      address: true,

      ordersItems: {
        include: {
          variant: true,
        },
      },

      payments: true,
    },
  });
};

export const updateOrderStatus = async(orderId:number,status:OrderStatus)=>{

  return prisma.order.update({
    where:{
      id:orderId
    },
    data:{
      status:status
    }
  })
}