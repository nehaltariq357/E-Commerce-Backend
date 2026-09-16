export declare const getDashboardStatsService: () => Promise<{
    totalUsers: number;
    totalProducts: number;
    totalCategories: number;
    totalOrders: number;
    orders: {
        pending: number;
        processing: number;
        shipped: number;
        delivered: number;
        cancelled: number;
    };
    totalRevenue: number | import("@prisma/client-runtime-utils").Decimal;
}>;
//# sourceMappingURL=admin.dashboard.service.d.ts.map