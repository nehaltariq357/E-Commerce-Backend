import { prisma } from "../../lib/prisma.js";
import { OrderStatus } from "../../../generated/prisma/client.js";
import { findAllOrders, findOrderById, updateOrderStatus, } from "./admin.order.repository.js";
// ================================
// Get All Orders
// ================================
export const getAllOrdersService = async () => {
    return findAllOrders();
};
// ================================
// Get Single Order
// ================================
export const getOrderByIdService = async (orderId) => {
    const order = await findOrderById(orderId);
    if (!order) {
        throw new Error("Order not found");
    }
    return order;
};
// ================================
// Update Order Status
// ================================
export const updateOrderStatusService = async (orderId, data) => {
    // 1. Find order
    const order = await findOrderById(orderId);
    if (!order) {
        throw new Error("Order not found");
    }
    const currentStatus = order.status;
    const newStatus = data.status;
    // 2. Same status check
    if (currentStatus === newStatus) {
        throw new Error("Order is already in this status");
    }
    // 3. Cancelled order cannot change
    if (currentStatus === OrderStatus.CANCELLED) {
        throw new Error("Cancelled order status cannot be changed");
    }
    // 4. Delivered order cannot change
    if (currentStatus === OrderStatus.DELIVERED) {
        throw new Error("Delivered order status cannot be changed");
    }
    // ==================================
    // PENDING → PROCESSING
    // ==================================
    if (currentStatus === OrderStatus.PENDING &&
        newStatus === OrderStatus.PROCESSING) {
        return updateOrderStatus(orderId, newStatus);
    }
    // ==================================
    // PENDING → CANCELLED
    // ==================================
    if (currentStatus === OrderStatus.PENDING &&
        newStatus === OrderStatus.CANCELLED) {
        return cancelOrderByAdmin(orderId);
    }
    // ==================================
    // PROCESSING → SHIPPED
    // ==================================
    if (currentStatus === OrderStatus.PROCESSING &&
        newStatus === OrderStatus.SHIPPED) {
        return updateOrderStatus(orderId, newStatus);
    }
    // ==================================
    // PROCESSING → CANCELLED
    // ==================================
    if (currentStatus === OrderStatus.PROCESSING &&
        newStatus === OrderStatus.CANCELLED) {
        return cancelOrderByAdmin(orderId);
    }
    // ==================================
    // SHIPPED → DELIVERED
    // ==================================
    if (currentStatus === OrderStatus.SHIPPED &&
        newStatus === OrderStatus.DELIVERED) {
        return updateOrderStatus(orderId, newStatus);
    }
    // Any other transition
    throw new Error(`Invalid status transition: ${currentStatus} → ${newStatus}`);
};
// ================================
// Admin Cancel Order
// Restore Stock + Cancel Order
// ================================
const cancelOrderByAdmin = async (orderId) => {
    return prisma.$transaction(async (tx) => {
        // 1. Get order items
        const orderItems = await tx.orderItem.findMany({
            where: {
                orderId,
            },
        });
        // 2. Restore stock
        for (const item of orderItems) {
            if (item.variantId) {
                await tx.productVariant.update({
                    where: {
                        id: item.variantId,
                    },
                    data: {
                        stock: {
                            increment: item.quantity,
                        },
                    },
                });
            }
        }
        // 3. Cancel order
        const cancelledOrder = await tx.order.update({
            where: {
                id: orderId,
            },
            data: {
                status: OrderStatus.CANCELLED,
            },
        });
        return cancelledOrder;
    });
};
//# sourceMappingURL=admin.order.service.js.map