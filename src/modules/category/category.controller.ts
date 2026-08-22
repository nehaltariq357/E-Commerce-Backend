import type { Request, Response } from "express";
import {
  createCategoryService,
  getAllCategoriesServices,
  getCategoryByIdService,
  updateCategoryService,
  deleteCategoryService,
} from "./category.service.js";
import {
  createCategorySchema,
  updateCategorySchema,
} from "./category.validation.js";

// create category
export const createCategory = async (req: Request, res: Response) => {
  try {
    const data = createCategorySchema.parse(req.body);
    const category = await createCategoryService(data);

    return res.status(201).json({
      success: true,
      message: "category created successfully",
      data: category,
    });
  } catch (error) {
    console.error(error);
    return res.status(400).json({
      success: false,
      message: error instanceof Error ? error.message : "Something went wrong",
    });
  }
};

// find all categories
export const getAllCategories = async (_req: Request, res: Response) => {
  try {
    const categories = await getAllCategoriesServices();
    console.log("categories", categories);
    return res.status(200).json({
      success: true,
      message: "categories fetched successfully",
      data: categories,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message:
        error instanceof Error ? error.message : "Failed to fetche categories",
    });
  }
};

// find category by id

export const getCategoryById = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    if (Number.isNaN(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid category ID",
      });
    }
    const category = await getCategoryByIdService(id);

    return res.status(200).json({
      success: true,
      message: "Category fetched successfullyttt",
      data: category,
    });
  } catch (error) {
    console.error(error);
    return res.status(404).json({
      success: false,
      message: error instanceof Error ? error.message : "Category not found",
    });
  }
};

export const updateCategory = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    if (Number.isNaN(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid category ID",
      });
    }
    const data = updateCategorySchema.parse(req.body);
    const category = await updateCategoryService(id, data);
        return res.status(200).json({
          success: true,
          message: "Category updated successfully",
          data: category,
        });
  } catch (error) {
    console.error(error);

    return res.status(400).json({
      success: false,
      message:
        error instanceof Error ? error.message : "Failed to update category",
    });
  }
};

export const deleteCategory = async(req:Request,res:Response)=>{
try{
  const id = Number(req.params.id)
   if (Number.isNaN(id)) {
     return res.status(400).json({
       success: false,
       message: "Invalid category ID",
     });
   }
   await deleteCategoryService(id)
   return res.status(200).json({
     success: true,
     message: "Category deleted successfully",
   });
}
catch(error){
console.error(error);

    return res.status(404).json({
      success: false,
      message: error instanceof Error ? error.message : "Category not found",
    });
}
}