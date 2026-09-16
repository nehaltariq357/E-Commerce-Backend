import { prisma } from "../../lib/prisma.js";
// find category by name
export const findCategoryByName = async (name) => {
    return await prisma.category.findUnique({
        where: {
            name,
        }
    });
};
// create category
export const createCategory = async (data) => {
    return await prisma.category.create({
        data: {
            name: data.name,
            description: data.description ?? null
        }
    });
};
// find all categories
export const findAllCategories = async () => {
    const allCategories = await prisma.category.findMany({
        where: {
            isActive: true
        },
        orderBy: {
            createdAt: "desc"
        }
    });
    return allCategories;
};
// find categories by id
export const findCategoryById = async (id) => {
    const category = await prisma.category.findUnique({
        where: {
            id
        }
    });
    return category;
};
// patch category
export const updateCategory = async (id, data) => {
    const category = await prisma.category.update({
        where: {
            id
        },
        data: {
            ...(data.name !== undefined && {
                name: data.name
            }),
            ...(data.description !== undefined && {
                description: data.description
            }),
            ...(data.isActive !== undefined && {
                isActive: data.isActive
            })
        }
    });
    return category;
};
// delete category
export const deleteCategory = async (id) => {
    return prisma.category.delete({
        where: {
            id
        }
    });
};
//# sourceMappingURL=category.repository.js.map