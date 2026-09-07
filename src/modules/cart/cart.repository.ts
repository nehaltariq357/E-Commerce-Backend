import {prisma} from "../../lib/prisma.js"
import type{addToCartInput} from "./cart.types.js"

// frind cart by user id

export const findCartByUserId = async(userId:number)=>{
return await prisma.cart.findUnique({
  where: {
    userId,
  },
});
}

// create user cart

export const createCart = async(userId:number)=>{
    return await prisma.cart.create({
     data:{
        userId,
     }
    })
}

// find cart item 

export const findCartItem = async (cartId:number, productId:number,variantId?:number)=>{
  return await prisma.cartItem.findFirst({ 
    where:{
      cartId,
      productId,
      variantId: variantId || null
    }
  })
}

// create cart item

export const createCartItem = async (cartId:number, productId:number, quantity:number, variantId?:number)=>{
  return await prisma.cartItem.create({
    data:{
      cartId,
      productId,
      quantity,
      variantId: variantId || null
    }
  })
}

// update cart item

export const updateCartItem = async (cartItemId:number, quantity:number)=>{
  return await prisma.cartItem.update({
    where:{
      id:cartItemId
    },
    data:{
      quantity
    }
  })
}


export const findCartWithItemsByUserId = async (
  userId: number
) => {
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

export const findCartItemByIdAndUserId = async (
  cartItemId: number,
  userId: number
) => {
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

export const findCartItemByIdAndUserIdDelete = async (
  cartItemId: number,
  userId: number
) => {
  return prisma.cartItem.findFirst({
    where: {
      id: cartItemId,
      cart: {
        userId,
      },
    },
  });
};

export const deleteCartItem = async (
  cartItemId: number
) => {
  return prisma.cartItem.delete({
    where: {
      id: cartItemId,
    },
  });
};

export const deleteAllCartItems = async (
  userId: number
) => {
  return prisma.cartItem.deleteMany({
    where: {
      cart: {
        userId,
      },
    },
  });
};