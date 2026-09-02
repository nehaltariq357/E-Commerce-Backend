import type { Request, Response } from "express";
import { orderSchema } from "./order.validation.js";
import { cancelOrderService, createOrderService,getMyOrderByIdService,getMyOrdersService } from "./order.service.js";

export const createOrder = async (
  req: Request,
  res: Response
) => {
  try {
    // Check authentication
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "Authentication required",
      });
    }

    // Validate request body
    const data = orderSchema.parse(req.body);

    // Create order
    const order = await createOrderService(
      req.user.userId,
      data
    );

    return res.status(201).json({
      success: true,
      message: "Order created successfully",
      data: order,
    });
  } catch (error) {
    console.error(error);

    return res.status(400).json({
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Failed to create order",
    });
  }
};


export const getMyOrders = async (
  req: Request,
  res: Response
) => {
  try {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "Authentication required",
      });
    }

    const orders = await getMyOrdersService(
      req.user.userId
    );

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


export const getMyOrderById = async (
  req: Request,
  res: Response
) => {
  try {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "Authentication required",
      });
    }

    const orderId = Number(req.params.id);

    if (Number.isNaN(orderId)) {
      return res.status(400).json({
        success: false,
        message: "Invalid order ID",
      });
    }

    const order = await getMyOrderByIdService(
      req.user.userId,
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


export const cancelOrder = async (
  req: Request,
  res: Response
) => {
  try {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "Authentication required",
      });
    }

    const orderId = Number(req.params.id);

    if (Number.isNaN(orderId)) {
      return res.status(400).json({
        success: false,
        message: "Invalid order ID",
      });
    }

    const order = await cancelOrderService(
      req.user.userId,
      orderId
    );

    return res.status(200).json({
      success: true,
      message: "Order cancelled successfully",
      data: order,
    });
  } catch (error) {
    console.error(error);

    return res.status(400).json({
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Failed to cancel order",
    });
  }
};