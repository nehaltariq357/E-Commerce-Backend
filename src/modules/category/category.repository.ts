import {prisma} from "../../lib/prisma.js"
import type {CreateCategoryInput} from "../category/category.types.js"

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
    data
})
}