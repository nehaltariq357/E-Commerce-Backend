import type { OrderStatus } from "../../../generated/prisma/client.js";
import { prisma } from "../../lib/prisma.js";

// find cart by user id
export const findCartByUserId = async (userId: number) => {
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

// find address by order id and user id
export const findAddressByIdAndUserId = async (
  addressId: number,
  userId: number,
) => {
  return prisma.address.findFirst({
    where: {
      id: addressId,
      userId,
    },
  });
};

// create order
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

// create order items
export const createOrderItems = async (
  items: {
    orderId: number;
    productId: number;
    variantId?: number;
    productName: string;
    price: number;
    quantity: number;
    variantSize?: string | null;
    variantColor?: string | null;
  }[],
) => {
  return prisma.orderItem.createMany({
    data: items,
  });
};

// create payment
export const createPayment = async (data: {
  orderId: number;
  amount: number;
  transactionId?: string | null;
  stripeSessionId?: string | null;
}) => {
  return prisma.payment.create({
    data: {
      orderId: data.orderId,
      amount: data.amount,
      method: "COD",
      status: "PENDING",
      ...(data.transactionId !== undefined && {
        transactionId: data.transactionId,
      }),
      ...(data.stripeSessionId !== undefined && {
        stripeSessionId: data.stripeSessionId,
      }),
    },
  });
};

// delete all cart items
export const deleteAllCartItems = async (userId: number) => {
  return prisma.cartItem.deleteMany({
    where: {
      cart: {
        userId,
      },
    },
  });
};

// find orders by user id
export const findOrdersByUserId = async (userId: number) => {
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

// find order by order id
export const findOrderByIdAndUserId = async (
  orderId: number,
  userId: number,
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


// get all orders for admin

export const findAllOrders = async()=>{
  return prisma.order.findMany({
    include:{
      address:true,
      orderItems:{
        include:{
          product:true,
          variant:true
        }
      },
      payments:true,
      user:{
        select:{
          id:true,
          name:true,
          email:true
        }
      }
    },
    orderBy:{
      createdAt:"desc"
    }
  });
}

// get single order for admin

export const findOrderById = async(orderId:number)=>{
  return prisma.order.findUnique({
    where:{
      id:orderId
    },
    include:{
      address:true,

      orderItems:{
        include:{
          product:true,
          variant:true,
        }
      },
      payments:true,
      user:{
        select:{
          id:true,
          name:true,
          email:true
        }
      }
    }
  })
}

// update order status
export const updateOrderStatus = async (
  orderId: number,
  status: OrderStatus,
) => {
  return prisma.order.update({
    where: {
      id: orderId,
    },
    data: {
      status: status,
    },
  });
};