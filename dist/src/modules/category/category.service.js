import { createCategory, findCategoryByName, findAllCategories, findCategoryById, updateCategory, deleteCategory, } from "./category.repository.js";
// create category service
export const createCategoryService = async (data) => {
    const existingCategory = await findCategoryByName(data.name);
    if (existingCategory) {
        throw new Error("Category already exists");
    }
    const category = createCategory(data);
    return category;
};
// find all categories
export const getAllCategoriesServices = async () => {
    return findAllCategories();
};
// find category by id
export const getCategoryByIdService = async (id) => {
    const category = await findCategoryById(id);
    if (!category) {
        throw new Error("Category not found");
    }
    return category;
};
// patch category
export const updateCategoryService = async (id, data) => {
    const existingCategory = await findCategoryById(id);
    if (!existingCategory) {
        throw new Error("Category not found");
    }
    if (data.name && data.name !== existingCategory.name) {
        const categoryWithSameName = await findCategoryByName(data.name);
        if (categoryWithSameName) {
            throw new Error("Category name already exists ");
        }
    }
    return updateCategory(id, data);
};
export const deleteCategoryService = async (id) => {
    const existing = await findCategoryById(id);
    if (!existing) {
        throw new Error("Category not found");
    }
    return deleteCategory(id);
};
//# sourceMappingURL=category.service.js.map