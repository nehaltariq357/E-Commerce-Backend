import { Router } from "express";
import { authenticate } from "../../middleware/auth.middleware.js";
import { requireRole } from "../../middleware/role.middleware.js";
import { adminTest } from "./admin.controller.js";


const router = Router()

router.get("/test",authenticate,requireRole("ADMIN"),adminTest)

export default router