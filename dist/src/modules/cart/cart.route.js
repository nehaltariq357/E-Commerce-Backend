import Router from "express";
import { addToCart, getCart, updateCartItem, removeCartItem, clearCart } from "./cart.controller.js";
import { authenticate } from "../../middleware/auth.middleware.js";
const router = Router();
router.post("/items", authenticate, addToCart);
router.get("/", authenticate, getCart);
router.patch("/items/:id", authenticate, updateCartItem);
router.delete("/items/:id", authenticate, removeCartItem);
router.delete("/", authenticate, clearCart);
export default router;
//# sourceMappingURL=cart.route.js.map