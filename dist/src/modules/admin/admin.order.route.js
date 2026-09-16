import { Router } from "express";
import { Role } from "../../../generated/prisma/client.js";
import { authenticate } from "../../middleware/auth.middleware.js";
import { requireRole } from "../../middleware/role.middleware.js";
import { getAllOrders, getOrderById, updateOrderStatus, } from "./admin.order.controller.js";
const router = Router();
// ==================================
// GET ALL ORDERS
// GET /api/admin/orders
// ==================================
router.get("/orders", authenticate, requireRole(Role.ADMIN), getAllOrders);
// ==================================
// GET SINGLE ORDER
// GET /api/admin/orders/:id
// ==================================
router.get("/orders/:id", authenticate, requireRole(Role.ADMIN), getOrderById);
// ==================================
// UPDATE ORDER STATUS
// PATCH /api/admin/orders/:id/status
// ==================================
router.patch("/orders/:id/status", authenticate, requireRole(Role.ADMIN), updateOrderStatus);
export default router;
//# sourceMappingURL=admin.order.route.js.map