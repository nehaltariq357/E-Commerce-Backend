import {
  createProductService,
  getallproductservice,
  getProductByIdService,
} from "./product.service.js";
import { createProductSchema } from "./product.validation.js";
import type { Request, Response } from "express";
export const createProduct = async (req: Request, res: Response) => {
  try {
    const data = createProductSchema.parse(req.body);
    const product = await createProductService(data);
    console.log("product", product);
    return res.status(201).json({
      success: true,
      message: "Product created successfully",
      data: product,
    });
  } catch (error) {
    console.error(error);

    return res.status(400).json({
      success: false,
      message:
        error instanceof Error ? error.message : "Failed to create product",
    });
  }
};

export const getallproduct = async (_req: Request, res: Response) => {
  try {
    const product = await getallproductservice();
    console.log("product", product);
    return res.status(200).json({
      success: true,
      message: "product fetched successfully",
      data: product,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Failed to fetch products",
    });
  }
};

export const findproductbyid = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    if (Number.isNaN(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid product ID",
      });
    }

    const product = await getProductByIdService(id);

    return res.status(200).json({
      success: true,
      message: "product fetched successfully",
      data: product,
    });
  } catch (error) {
    console.error(error);

    return res.status(404).json({
      success: false,
      message: error instanceof Error ? error.message : "Product not found",
    });
  }
};
