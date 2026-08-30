import { Router } from "express";
import {
  createProduct,
  getallproduct,
  findproductbyid,
  updateproduct,
  deleteproduct,
  addProductImage,
  addProductVarient,
  getProductVariant,
  updateProductVariant,
  deleteProductVariant,
} from "./product.controller.js";
import { authenticate } from "../../middleware/auth.middleware.js";
import { requireRole } from "../../middleware/role.middleware.js";

const router = Router();

router.post("/", authenticate, requireRole("ADMIN"), createProduct);
router.get("/", getallproduct);
router.get("/:productId/variants", getProductVariant);
router.get("/:id", findproductbyid);
router.get("/:id", authenticate, requireRole("ADMIN"), updateproduct);
router.delete("/:id", authenticate, requireRole("ADMIN"), deleteproduct);
router.post("/images", authenticate, requireRole("ADMIN"), addProductImage);
router.post("/variants", authenticate, requireRole("ADMIN"), addProductVarient);
router.patch(
  "/variants/:id",
  authenticate,
  requireRole("ADMIN"),
  updateProductVariant,
);
router.delete("/variants/:id",authenticate,requireRole("ADMIN"),deleteProductVariant)
export default router;
