import { prisma } from "../../lib/prisma.js";
import type { CreateProductInput } from "./product.types.js";

export const findCategoryById = async (id: number) => {
  return await prisma.category.findUnique({
    where: {
      id,
    },
  });
};
export const findProductBySlug = async (slug: string) => {
  return await prisma.product.findUnique({
    where: {
      slug,
    },
  });
};

export const createProduct = async (data: CreateProductInput) => {
  return await prisma.product.create({
    data: {
      name: data.name,
      description: data.description,
      slug: data.slug,
      price: data.price,
      ...(data.categoryId !== undefined && {
        category: {
          connect: {
            id: data.categoryId,
          },
        },
      }),
    },
  });
};

// frind all product

export const findallproduct = async()=>{
  return await prisma.product.findMany({
    where:{
      isActive:true
    },
    include:{
      category:true
    },
    orderBy:{
      createdAt:"desc"
    }
  })
}

//  frind product by id

export const findproductbyid = async(id:number)=>{
  return await prisma.product.findUnique({
    where:{
      id
    },
    include:{
      category:true,
      productImages:true,
      productVariants:true
    }
  })
}