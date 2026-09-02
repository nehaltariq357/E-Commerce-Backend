import { prisma } from "../../lib/prisma.js";
import type { OrderInput } from "./order.types.js";
import { findOrdersByUserId, findOrderByIdAndUserId, updateOrderStatus } from "./order.repository.js";
import { OrderStatus } from "../../../generated/prisma/client.js";
export const createOrderService = async (
    userId: number,
    data: OrderInput
) => {
    // 1. User ka cart find karo
    const cart = await prisma.cart.findUnique({
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

    if (!cart || cart.cartItems.length === 0) {
        throw new Error("Cart is empty");
    }

    // 2. User ka address check karo
    const address = await prisma.address.findFirst({
        where: {
            id: data.addressId,
            userId,
        },
    });

    if (!address) {
        throw new Error("Address not found");
    }

    // 3. Products aur stock check karo
    for (const item of cart.cartItems) {
        if (!item.product.isActive) {
            throw new Error(
                `Product "${item.product.name}" is not active`
            );
        }

        if (item.variant) {
            if (item.variant.stock < item.quantity) {
                throw new Error(
                    `Insufficient stock for "${item.product.name}"`
                );
            }
        }
    }

    // 4. Total calculate karo
    const totalAmount = cart.cartItems.reduce(
        (total, item) => {
            return total + Number(item.product.price) * item.quantity;
        },
        0
    );

    // 5. Transaction
    const order = await prisma.$transaction(async (tx) => {
        // Order create
        const newOrder = await tx.order.create({
            data: {
                userId,
                addressId: data.addressId,
                totalAmount,
            },
        });

        // OrderItems create
        await tx.orderItem.createMany({
            data: cart.cartItems.map((item) => ({
                orderId: newOrder.id,
                productId: item.productId,
                variantId: item.variantId,
                productName: item.product.name,
                price: item.product.price,
                quantity: item.quantity,
            })),
        });

        // Payment create
        await tx.payment.create({
            data: {
                orderId: newOrder.id,
                amount: totalAmount,
                method: "COD",
                status: "PENDING",
            },
        });

        // Cart clear
        await tx.cartItem.deleteMany({
            where: {
                cartId: cart.id,
            },
        });

        return newOrder;
    });

    return order;
};


export const getMyOrdersService = async (userId: number) => {
    return await findOrdersByUserId(userId);
}

export const getMyOrderByIdService = async (orderId: number, userId: number) => {
    const order = await findOrderByIdAndUserId(orderId, userId);

    if (!order) {
        throw new Error("Order not found");
    }

    return order;
}

export const cancelOrderService = async (orderId: number, userId: number) => {
    const order = await findOrderByIdAndUserId(orderId, userId);
    if (!order) {
        throw new Error("Order not found");
    }

    // already cancelled 

    if (order.status === "CANCELLED") {
        throw new Error("Order is already cancelled");
    }

    // Cannot cancel shipped/delivered orders

    if (order.status === "SHIPPED" || order.status === "DELIVERED") {
        throw new Error("Cannot cancel shipped/delivered orders");
    }

    return updateOrderStatus(order.id, OrderStatus.CANCELLED);
}