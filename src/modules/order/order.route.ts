import { Router } from "express";
import { authenticate } from "../../middleware/auth.middleware.js";
import { cancelOrder, createOrder,getMyOrderById,getMyOrders } from "./order.controller.js";

const router = Router();

router.post(
  "/",
  authenticate,
  createOrder
);

router.get(
  "/",
  authenticate,
  getMyOrders
);
router.patch(
  "/:id/cancel",
  authenticate,
  cancelOrder
);

router.get(
  "/:id",
  authenticate,
  getMyOrderById  
);

export default router; 