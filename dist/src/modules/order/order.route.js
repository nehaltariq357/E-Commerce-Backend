import { Router } from "express";
import { authenticate } from "../../middleware/auth.middleware.js";
import { cancelOrder, createOrder, getMyOrderById, getMyOrders, getAllOrders, getOrderById, updateOrderStatus } from "./order.controller.js";
import { requireRole } from "../../middleware/role.middleware.js";
const router = Router();
router.post("/", authenticate, createOrder);
router.get("/", authenticate, getMyOrders);
router.patch("/:id/cancel", authenticate, cancelOrder);
router.get("/:id", authenticate, getMyOrderById);
// admin
router.get("/admin/orders", authenticate, requireRole("ADMIN"), getAllOrders);
router.get("/admin/orders/:id", authenticate, requireRole("ADMIN"), getOrderById);
router.patch("/admin/orders/:id/status", authenticate, requireRole("ADMIN"), updateOrderStatus);
export default router;
//# sourceMappingURL=order.route.js.map