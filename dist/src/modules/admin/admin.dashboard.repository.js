import { prisma } from "../../lib/prisma.js";
import { OrderStatus } from "../../../generated/prisma/client.js";
// ==================================
// Dashboard Statistics
// ==================================
export const getDashboardStats = async () => {
    const [totalUsers, totalProducts, totalCategories, totalOrders, pendingOrders, processingOrders, shippedOrders, deliveredOrders, cancelledOrders, revenue,] = await Promise.all([
        // Total Users
        prisma.user.count(),
        // Total Products
        prisma.product.count(),
        // Total Categories
        prisma.category.count(),
        // Total Orders
        prisma.order.count(),
        // Pending Orders
        prisma.order.count({
            where: {
                status: OrderStatus.PENDING,
            },
        }),
        // Processing Orders
        prisma.order.count({
            where: {
                status: OrderStatus.PROCESSING,
            },
        }),
        // Shipped Orders
        prisma.order.count({
            where: {
                status: OrderStatus.SHIPPED,
            },
        }),
        // Delivered Orders
        prisma.order.count({
            where: {
                status: OrderStatus.DELIVERED,
            },
        }),
        // Cancelled Orders
        prisma.order.count({
            where: {
                status: OrderStatus.CANCELLED,
            },
        }),
        // Total Revenue
        prisma.order.aggregate({
            _sum: {
                totalAmount: true,
            },
            where: {
                status: OrderStatus.DELIVERED,
            },
        }),
    ]);
    return {
        totalUsers,
        totalProducts,
        totalCategories,
        totalOrders,
        orders: {
            pending: pendingOrders,
            processing: processingOrders,
            shipped: shippedOrders,
            delivered: deliveredOrders,
            cancelled: cancelledOrders,
        },
        totalRevenue: revenue._sum.totalAmount ?? 0,
    };
};
//# sourceMappingURL=admin.dashboard.repository.js.map