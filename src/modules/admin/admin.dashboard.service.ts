
import { getDashboardStats } from "./admin.dashboard.repository.js";

// ==================================
// Get Dashboard Statistics
// ==================================
export const getDashboardStatsService = async () => {
  return await getDashboardStats();
};

