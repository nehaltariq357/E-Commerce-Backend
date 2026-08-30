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
        userId
     }
    })
}

// 