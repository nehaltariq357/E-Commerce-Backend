import Router from "express";
import {
  createAddress,
  getAddress,
  getAddressById,
  updateAddress,
  deleteAddress,
} from "./address.controller.js";
import { authenticate } from "../../middleware/auth.middleware.js";

const router = Router()

router.post("/",authenticate,createAddress)
router.get("/",authenticate,getAddress)
router.get("/:id",authenticate,getAddressById)
router.patch("/:id",authenticate,updateAddress)
router.delete("/:id",authenticate,deleteAddress)
export default router

