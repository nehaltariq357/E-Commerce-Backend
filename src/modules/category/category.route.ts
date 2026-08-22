import { Router } from "express";
import { createCategory, getAllCategories,getCategoryById,updateCategory,deleteCategory } from "./category.controller.js";
import { authenticate } from "../../middleware/auth.middleware.js";
import { requireRole } from "../../middleware/role.middleware.js";

const router = Router();

router.post("/", authenticate, requireRole("ADMIN"), createCategory);
router.get("/",getAllCategories)
router.get("/:id",getCategoryById)
router.patch("/:id", authenticate, requireRole("ADMIN"), updateCategory);
router.delete("/:id", authenticate, requireRole("ADMIN"), deleteCategory);
export default router;
