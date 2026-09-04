
import { Router } from "express";
import { Role } from "../../../generated/prisma/client.js";

import { authenticate } from "../../middleware/auth.middleware.js";
import { requireRole } from "../../middleware/role.middleware.js";

import {
  getDashboardStats,
} from "./admin.dashboard.controller.js";

const router = Router();

// ==================================
// GET DASHBOARD STATISTICS
// GET /api/admin/dashboard
// ==================================
router.get(
  "/dashboard",
  authenticate,
  requireRole(Role.ADMIN),
  getDashboardStats
);

export default router;

