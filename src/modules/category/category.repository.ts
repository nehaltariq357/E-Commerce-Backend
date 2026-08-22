import {prisma} from "../../lib/prisma.js"
import type {CreateCategoryInput, UpdateCategoryInput} from "../category/category.types.js"

// find category by name
export const findCategoryByName = async(name:string)=>{
return await prisma.category.findUnique({
    where:{
        name,
    }
})
}

// create category
export const createCategory = async(data:CreateCategoryInput)=>{
return await prisma.category.create({
    data:{
        name:data.name,
        description:data.description ?? null
    }
})
}

// find all categories

export const findAllCategories = async()=>{
    const allCategories = await prisma.category.findMany({
        where:{
            isActive:true
        },
        orderBy:{
            createdAt:"desc"
        }
    })

    return allCategories
}

// find categories by id

export const findCategoryById = async(id:number)=>{
    const category = await prisma.category.findUnique({
        where:{
            id
        }
    })
    return category
}

// patch category

export const updateCategory = async(id:number,data:UpdateCategoryInput)=>{
const category = await prisma.category.update({
    where:{
        id
    },
    data:{
        ...(data.name !== undefined &&{
            name:data.name
        }),
        ...(data.description !==undefined &&{
            description:data.description
        }),
        ...(data.isActive !== undefined &&{
            isActive:data.isActive
        })
    }
})
return category
}

// delete category

export const deleteCategory = async(id:number)=>{
return prisma.category.delete({
    where:{
        id
    }
})
}