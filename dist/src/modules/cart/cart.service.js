import { findproductbyid } from "../product/product.repository.js";
import { createCart, createCartItem, findCartByUserId, findCartItem, updateCartItem, findCartWithItemsByUserId, findCartItemByIdAndUserId, findCartItemByIdAndUserIdDelete, deleteCartItem, deleteAllCartItems } from "./cart.repository.js";
export const addToCartService = async (userId, input) => {
    // check product
    const product = await findproductbyid(input.productId);
    if (!product) {
        throw new Error("Product not found");
    }
    // check product active
    if (!product.isActive) {
        throw new Error("Product is not active");
    }
    // check variant 
    if (input.variantId !== undefined) {
        const variant = product.productVariants.find((variant) => variant.id === input.variantId);
        if (!variant) {
            throw new Error("Variant does not belong to this product");
        }
        // check varaiant stock
        if (variant.stock < input.quantity) {
            throw new Error("Insufficient stock");
        }
    }
    // find user cart
    let cart = await findCartByUserId(userId);
    if (!cart) {
        cart = await createCart(userId);
    }
    // check item already exists
    const existingCartItem = await findCartItem(cart.id, input.productId, input.variantId);
    if (existingCartItem) {
        const newQuantity = existingCartItem.quantity + input.quantity;
        if (input.variantId !== undefined) {
            const variant = product.productVariants.find((variant) => variant.id === input.variantId);
            if (!variant) {
                throw new Error("Variant does not belong to this product");
            }
            if (variant.stock < newQuantity) {
                throw new Error("Insufficient stock");
            }
        }
        return updateCartItem(existingCartItem.id, newQuantity);
    }
    // new cart item
    return await createCartItem(cart.id, input.productId, input.quantity, input.variantId);
};
export const getCartService = async (userId) => {
    const cart = await findCartWithItemsByUserId(userId);
    if (!cart) {
        return {
            id: null,
            userId,
            cartItems: []
        };
    }
    return cart;
};
export const updateCartItemService = async (userId, cartItemId, quantity) => {
    const cartItem = await findCartItemByIdAndUserId(cartItemId, userId);
    if (!cartItem) {
        throw new Error("Cart item not found");
    }
    if (!cartItem.product.isActive) {
        throw new Error("Product is not active");
    }
    if (cartItem.variant) {
        if (cartItem.variant.stock < quantity) {
            throw new Error("Insufficient stock");
        }
    }
    return updateCartItem(cartItem.id, quantity);
};
export const removeCartItemService = async (userId, cartItemId) => {
    const cartItem = await findCartItemByIdAndUserIdDelete(cartItemId, userId);
    if (!cartItem) {
        throw new Error("Cart item not found");
    }
    return deleteCartItem(cartItem.id);
};
export const clearCartService = async (userId) => {
    return deleteAllCartItems(userId);
};
//# sourceMappingURL=cart.service.js.map