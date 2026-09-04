
import type { Request, Response } from "express";

import {
  getDashboardStatsService,
} from "./admin.dashboard.service.js";

// ==================================
// Get Dashboard Statistics
// ==================================
export const getDashboardStats = async (
  req: Request,
  res: Response
) => {
  try {
    const stats =
      await getDashboardStatsService();

    return res.status(200).json({
      success: true,
      message:
        "Dashboard statistics fetched successfully",
      data: stats,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message:
        "Failed to fetch dashboard statistics",
    });
  }
};

