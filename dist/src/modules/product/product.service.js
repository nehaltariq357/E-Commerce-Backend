import { createProduct, findCategoryById, findProductBySlug, findallproduct, findproductbyid, updateProduct, deleteProduct, createProductImage, createProductVarient, findVariantBySku, findVariantByProductId, findVariantById, updateProductVariant, deleteProductvariant } from "./product.repository.js";
export const createProductService = async (data) => {
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
export const getallproductservice = async () => {
    return await findallproduct();
};
export const getProductByIdService = async (id) => {
    const product = await findproductbyid(id);
    if (!product) {
        throw new Error("Product not found");
    }
    return product;
};
export const updateproductservice = async (id, data) => {
    const existingProduct = await findproductbyid(id);
    if (!existingProduct) {
        throw new Error("product not found");
    }
    // check duplicate slug
    const isSlugProvide = data.slug;
    if (isSlugProvide !== undefined) {
        if (isSlugProvide !== existingProduct.slug) {
            const sameSlug = await findProductBySlug(isSlugProvide);
            if (sameSlug) {
                throw new Error("Product with this slug already exists");
            }
        }
    }
    // check category
    if (data.categoryId !== undefined && data.categoryId !== null) {
        const category = await findCategoryById(data.categoryId);
        if (!category) {
            throw new Error("Category not found");
        }
        if (!category.isActive) {
            throw new Error("Category is not active");
        }
    }
    return updateProduct(id, data);
};
export const deleteproductservice = async (id) => {
    const existingproduct = await findproductbyid(id);
    if (!existingproduct) {
        throw new Error("product not found");
    }
    return deleteProduct(id);
};
// add product image service
export const addProductImageService = async (data) => {
    const product = await findproductbyid(data.productId);
    if (!product) {
        throw new Error("product not found");
    }
    return createProductImage(data);
};
// add product varient
export const addProductVarientService = async (data) => {
    const product = await findproductbyid(data.productId);
    if (!product) {
        throw new Error("product not found");
    }
    const existingVariant = await findVariantBySku(data.sku);
    if (existingVariant) {
        throw new Error("variant with this SKU already exists");
    }
    return createProductVarient(data);
};
export const getProductVariantService = async (productId) => {
    const product = await findproductbyid(productId);
    if (!product) {
        throw new Error("product not found");
    }
    return findVariantByProductId(productId);
};
export const updateProductVariantService = async (id, data) => {
    const existingVariant = await findVariantById(id);
    if (!existingVariant) {
        throw new Error("Product variant not found");
    }
    const isSkuProvide = data.sku;
    if (isSkuProvide !== undefined) {
        if (isSkuProvide !== existingVariant.sku) {
            const sameSku = await findVariantBySku(isSkuProvide);
            if (sameSku) {
                throw new Error("variant with this sku already exists");
            }
        }
    }
    return updateProductVariant(id, data);
};
export const deleteProductvariantService = async (id) => {
    const existingVariant = await findVariantById(id);
    if (!existingVariant) {
        throw new Error("Product variant not found");
    }
    return deleteProductvariant(id);
};
//# sourceMappingURL=product.service.js.map