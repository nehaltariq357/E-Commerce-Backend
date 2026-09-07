import type { Request, Response } from "express";
import { addToCartService, clearCartService, getCartService, removeCartItemService, updateCartItemService } from "./cart.service.js";
import { addToCartSchema, updateCartItemSchema } from "./cart.validation.js"


export const addToCart = async (req: Request, res: Response) => {
    try {
        if (!req.user) {
            return res.status(401).json({
                success: false,
                message: "Authentication required"
            })
        }
        const data = await addToCartSchema.parse(req.body)

        const cartItem = await addToCartService(req.user.userId, data)

        return res.status(201).json({
            success: true,
            message: "Product added to cart successfully",
            data: cartItem
        })

    } catch (error) {
        console.error(error);

        return res.status(400).json({
            success: false,
            message:
                error instanceof Error
                    ? error.message
                    : "Failed to add product to cart",
        });
    }
};

export const getCart = async (req: Request, res: Response) => {
    try {
        if (!req.user) {
            return res.status(401).json({
                success: false,
                message: "Authentication required",
            });
        }

        const cart = await getCartService(req.user.userId);

        return res.status(200).json({
            success: true,
            message: "Cart retrieved successfully",
            data: cart,
        });
    } catch (error) {
        console.error(error);
        return res.status(404).json({
            success: false,
            message:
                error instanceof Error ? error.message : "Cart not found",
        });
    }
};




export const updateCartItem = async (
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

        const cartItemId = Number(req.params.id);

        if (isNaN(cartItemId)) {
            return res.status(400).json({
                success: false,
                message: "Invalid cart item id",
            });
        }

        const data = updateCartItemSchema.parse(req.body);

        const cartItem = await updateCartItemService(
            req.user.userId,
            cartItemId,
            data.quantity
        );

        return res.status(200).json({
            success: true,
            message: "Cart item quantity updated successfully",
            data: cartItem,
        });
    } catch (error) {
        console.error(error);

        return res.status(400).json({
            success: false,
            message:
                error instanceof Error
                    ? error.message
                    : "Failed to update cart item",
        });
    }
};


export const removeCartItem = async (
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

        const cartItemId = Number(req.params.id);

        if (isNaN(cartItemId)) {
            return res.status(400).json({
                success: false,
                message: "Invalid cart item id",
            });
        }

        await removeCartItemService(
            req.user.userId,
            cartItemId
        );

        return res.status(200).json({
            success: true,
            message: "Cart item removed successfully",
        });
    } catch (error) {
        console.error(error);

        return res.status(400).json({
            success: false,
            message:
                error instanceof Error
                    ? error.message
                    : "Failed to remove cart item",
        });
    }
};


export const clearCart = async (
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

    await clearCartService(req.user.userId);

    return res.status(200).json({
      success: true,
      message: "Cart cleared successfully",
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Failed to clear cart",
    });
  }
};