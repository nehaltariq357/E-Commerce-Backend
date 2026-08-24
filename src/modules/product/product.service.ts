import {
  createProduct,
  findCategoryById,
  findProductBySlug,
  findallproduct,
  findproductbyid
} from "./product.repository.js";
import type { CreateProductInput } from "./product.types.js";

export const createProductService = async (data: CreateProductInput) => {
  const existingProduct = await findProductBySlug(data.slug);
  if (existingProduct) {
    throw new Error("Product with this slug already exists");
  }

  // check category if category id is provided

  if (data.categoryId !== undefined) {
    const category = await findCategoryById(data.categoryId);

    if (!category) {
      throw new Error("Category not found");
    }

    if (!category.isActive) {
      throw new Error("Category is not active");
    }
  }

  const product = await createProduct(data);
  return product;
};

export const getallproductservice = async()=>{
    return await findallproduct()
}

export const getProductByIdService = async (id:number) => {
  const product= await findproductbyid(id);

  if (!product){
    throw new Error("Product not found")
  }
};
