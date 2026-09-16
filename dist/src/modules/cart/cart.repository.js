import { prisma } from "../../lib/prisma.js";
// frind cart by user id
export const findCartByUserId = async (userId) => {
    return await prisma.cart.findUnique({
        where: {
            userId,
        },
    });
};
// create user cart
export const createCart = async (userId) => {
    return await prisma.cart.create({
        data: {
            userId,
        }
    });
};
// find cart item 
export const findCartItem = async (cartId, productId, variantId) => {
    return await prisma.cartItem.findFirst({
        where: {
            cartId,
            productId,
            variantId: variantId || null
        }
    });
};
// create cart item
export const createCartItem = async (cartId, productId, quantity, variantId) => {
    return await prisma.cartItem.create({
        data: {
            cartId,
            productId,
            quantity,
            variantId: variantId || null
        },
        include: {
            product: true,
            variant: true
        }
    });
};
// update cart item
export const updateCartItem = async (cartItemId, quantity) => {
    return await prisma.cartItem.update({
        where: {
            id: cartItemId
        },
        data: {
            quantity
        },
        include: {
            product: true,
            variant: true
        }
    });
};
export const findCartWithItemsByUserId = async (userId) => {
    return prisma.cart.findUnique({
        where: {
            userId,
        },
        include: {
            cartItems: {
                include: {
                    product: {
                        include: {
                            productImages: true,
                        },
                    },
                    variant: true,
                },
            },
        },
    });
};
export const findCartItemByIdAndUserId = async (cartItemId, userId) => {
    return prisma.cartItem.findFirst({
        where: {
            id: cartItemId,
            cart: {
                userId,
            },
        },
        include: {
            product: {
                include: {
                    productImages: true,
                },
            },
            variant: true,
        },
    });
};
export const findCartItemByIdAndUserIdDelete = async (cartItemId, userId) => {
    return prisma.cartItem.findFirst({
        where: {
            id: cartItemId,
            cart: {
                userId,
            },
        },
    });
};
export const deleteCartItem = async (cartItemId) => {
    return prisma.cartItem.delete({
        where: {
            id: cartItemId,
        },
    });
};
export const deleteAllCartItems = async (userId) => {
    return prisma.cartItem.deleteMany({
        where: {
            cart: {
                userId,
            },
        },
    });
};
//# sourceMappingURL=cart.repository.js.map