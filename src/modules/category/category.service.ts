import {createCategory,findCategoryByName} from "./category.repository.js"
import type{CreateCategoryInput} from "./category.types.js"


export const createCategoryService = async(data:CreateCategoryInput)=>{

    const existingCategory = await findCategoryByName(data.name)

    if (existingCategory){
        throw new Error("Category already exists")
    }

    const category = createCategory(data)
    return category
}