
import { Router } from "express";

import adminOrderRouter from "./admin.order.route.js";
import adminDashboardRouter from "./admin.dashboard.route.js";

const adminRouter = Router();

// Admin Order Management
adminRouter.use("/", adminOrderRouter);

// Admin Dashboard
adminRouter.use("/", adminDashboardRouter);

export { adminRouter };

