import { prisma } from "../../lib/prisma.js";
// find cart by user id
export const findCartByUserId = async (userId) => {
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
export const findAddressByIdAndUserId = async (addressId, userId) => {
    return prisma.address.findFirst({
        where: {
            id: addressId,
            userId,
        },
    });
};
// create order
export const createOrder = async (data) => {
    return prisma.order.create({
        data: {
            userId: data.userId,
            addressId: data.addressId,
            totalAmount: data.totalAmount,
        },
    });
};
// create order items
export const createOrderItems = async (items) => {
    return prisma.orderItem.createMany({
        data: items,
    });
};
// create payment
export const createPayment = async (data) => {
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
export const deleteAllCartItems = async (userId) => {
    return prisma.cartItem.deleteMany({
        where: {
            cart: {
                userId,
            },
        },
    });
};
// find orders by user id
export const findOrdersByUserId = async (userId) => {
    return prisma.order.findMany({
        where: {
            userId,
        },
        include: {
            address: true,
            orderItems: {
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
export const findOrderByIdAndUserId = async (orderId, userId) => {
    console.log("ORDER LOOKUP:", {
        orderId,
        userId,
    });
    return prisma.order.findFirst({
        where: {
            id: orderId,
            userId,
        },
        include: {
            address: true,
            orderItems: {
                include: {
                    variant: true,
                },
            },
            payments: true,
        },
    });
};
// get all orders for admin
export const findAllOrders = async () => {
    return prisma.order.findMany({
        include: {
            address: true,
            orderItems: {
                include: {
                    product: true,
                    variant: true
                }
            },
            payments: true,
            user: {
                select: {
                    id: true,
                    name: true,
                    email: true
                }
            }
        },
        orderBy: {
            createdAt: "desc"
        }
    });
};
// get single order for admin
export const findOrderById = async (orderId) => {
    return prisma.order.findUnique({
        where: {
            id: orderId
        },
        include: {
            address: true,
            orderItems: {
                include: {
                    product: true,
                    variant: true,
                }
            },
            payments: true,
            user: {
                select: {
                    id: true,
                    name: true,
                    email: true
                }
            }
        }
    });
};
// update order status
export const updateOrderStatus = async (orderId, status) => {
    return prisma.order.update({
        where: {
            id: orderId,
        },
        data: {
            status: status,
        },
    });
};
//# sourceMappingURL=order.repository.js.map