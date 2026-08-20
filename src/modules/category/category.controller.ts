import type { Request,Response } from "express";
import {createCategoryService} from "./category.service.js"
import { createCategorySchema } from "./category.validation.js";

export const createCategory = async(req:Request,res:Response)=>{

try{
    const data = createCategorySchema.parse(req.body)
    const category = await createCategoryService(data)

    return res.status(201).json({
        success:true,
        message:"category created successfully",
        data:category
    })

}
catch(error){
console.error(error)
return res.status(400).json({
    success:false,
    message:error instanceof Error ? error.message :"Something went wrong"
})
}
}