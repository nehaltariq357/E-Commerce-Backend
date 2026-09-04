
import type { Request, Response } from "express";

import {
  getAllOrdersService,
  getOrderByIdService,
  updateOrderStatusService,
} from "./admin.order.service.js";

import { updateOrderStatusSchema } from "./admin.order.validation.js";

// ==================================
// Get All Orders
// ==================================
export const getAllOrders = async (
  req: Request,
  res: Response
) => {
  try {
    const orders = await getAllOrdersService();

    return res.status(200).json({
      success: true,
      message: "Orders fetched successfully",
      data: orders,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch orders",
    });
  }
};

// ==================================
// Get Single Order
// ==================================
export const getOrderById = async (
  req: Request,
  res: Response
) => {
  try {
    const orderId = Number(req.params.id);

    if (Number.isNaN(orderId)) {
      return res.status(400).json({
        success: false,
        message: "Invalid order ID",
      });
    }

    const order = await getOrderByIdService(
      orderId
    );

    return res.status(200).json({
      success: true,
      message: "Order fetched successfully",
      data: order,
    });
  } catch (error) {
    console.error(error);

    return res.status(404).json({
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Order not found",
    });
  }
};

// ==================================
// Update Order Status
// ==================================
export const updateOrderStatus = async (
  req: Request,
  res: Response
) => {
  try {
    const orderId = Number(req.params.id);

    if (Number.isNaN(orderId)) {
      return res.status(400).json({
        success: false,
        message: "Invalid order ID",
      });
    }

    // Validate body
    const data =
      updateOrderStatusSchema.parse(req.body);

    // Update status
    const order =
      await updateOrderStatusService(
        orderId,
        data
      );

    return res.status(200).json({
      success: true,
      message: "Order status updated successfully",
      data: order,
    });
  } catch (error) {
    console.error(error);

    return res.status(400).json({
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Failed to update order status",
    });
  }
};
