import {
  createProductService,
  getallproductservice,
  getProductByIdService,
  updateproductservice,
  deleteproductservice,
  addProductImageService,
  addProductVarientService,
  getProductVariantService,
  updateProductVariantService,
  deleteProductvariantService,
} from "./product.service.js";
import {
  createProductSchema,
  updateProductSchema,
  addProductImageSchema,
  addProductVarientSchema,
  updateProductVariantSchema,
} from "./product.validation.js";
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

export const updateproduct = async (req: Request, res: Response) => {
  try {
    const data = updateProductSchema.parse(req.body);
    const id = Number(req.params.id);

    if (Number.isNaN(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid product ID",
      });
    }
    const product = await updateproductservice(id, data);
    return res.status(200).json({
      success: true,
      message: "Product updated successfully",
      data: product,
    });
  } catch (error) {
    console.error(error);
    return res.status(400).json({
      success: false,
      message:
        error instanceof Error ? error.message : "Failed to update product",
    });
  }
};

export const deleteproduct = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    if (Number.isNaN(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid product ID",
      });
    }

    await deleteproductservice(id);

    return res.status(200).json({
      success: true,
      message: "Product deleted successfully",
    });
  } catch (error) {
    console.error(error);

    return res.status(400).json({
      success: false,
      message:
        error instanceof Error ? error.message : "Failed to delete product",
    });
  }
};

// create product image controller

export const addProductImage = async (req: Request, res: Response) => {
  try {
    const data = addProductImageSchema.parse(req.body);

    const image = addProductImageService(data);

    return res.status(201).json({
      success: true,
      message: "Product image added successfully",
      data: image,
    });
  } catch (error) {
    console.error(error);

    return res.status(400).json({
      success: false,
      message:
        error instanceof Error ? error.message : "Failed to add product image",
    });
  }
};

// add product varient controller

export const addProductVarient = async (req: Request, res: Response) => {
  try {
    const data = addProductVarientSchema.parse(req.body);
    const varient = addProductVarientService(data);
    return res.status(201).json({
      success: true,
      message: "Product varient added successfully",
      data: varient,
    });
  } catch (error) {
    console.error(error);

    return res.status(400).json({
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Failed to add product varient",
    });
  }
};

export const getProductVariant = async (req: Request, res: Response) => {
  try {
    const productId = Number(req.params.productId);

    if (Number.isNaN(productId)) {
      return res.status(400).json({
        success: false,
        message: "Invalid product ID",
      });
    }
    const variants = await getProductVariantService(productId);
    return res.status(200).json({
      success: true,
      message: "product variants fetched successfully",
      data: variants,
    });
  } catch (error) {
    console.error(error);

    return res.status(404).json({
      success: false,
      message: error instanceof Error ? error.message : "Product not found",
    });
  }
};
// update product variant

export const updateProductVariant = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    if (Number.isNaN(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid variant ID",
      });
    }
    const data = updateProductVariantSchema.parse(req.body);
    const variant = updateProductVariantService(id, data);
    return res.status(200).json({
      success: true,
      message: "product variant updated successfully",
      data: variant,
    });
  } catch (error) {
    console.error(error);

    return res.status(400).json({
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Failed to update product variant",
    });
  }
};

export const deleteProductVariant = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    if (Number.isNaN(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid variant ID",
      });
    }
    await deleteProductvariantService(id);
    return res.status(200).json({
      success: true,
      message: "Product variant deleted successfully",
    });
  } catch (error) {
    console.error(error);

    return res.status(404).json({
      success: false,
      message:
        error instanceof Error ? error.message : "Product variant not found",
    });
  }
};
