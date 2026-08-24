import { Router } from "express";
import {
  createProduct,
  getallproduct,
  findproductbyid,
} from "./product.controller.js";
import {authenticate} from "../../middleware/auth.middleware.js"
import {requireRole} from "../../middleware/role.middleware.js"

const router = Router()

router.post("/",authenticate,requireRole("ADMIN"),createProduct)
router.get("/",getallproduct)
router.get("/:id",findproductbyid)
export default router