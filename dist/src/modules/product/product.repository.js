import { prisma } from "../../lib/prisma.js";
export const findCategoryById = async (id) => {
    return await prisma.category.findUnique({
        where: {
            id,
        },
    });
};
export const findProductBySlug = async (slug) => {
    return await prisma.product.findUnique({
        where: {
            slug,
        },
    });
};
export const createProduct = async (data) => {
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
// find all product
export const findallproduct = async () => {
    return await prisma.product.findMany({
        where: {
            isActive: true,
        },
        include: {
            category: true,
            productImages: true,
            productVariants: true,
        },
        orderBy: {
            createdAt: "desc",
        },
    });
};
//  frind product by id
export const findproductbyid = async (id) => {
    return await prisma.product.findUnique({
        where: {
            id,
        },
        include: {
            category: true,
            productImages: true,
            productVariants: true,
        },
    });
};
// update product
export const updateProduct = async (id, data) => {
    return await prisma.product.update({
        where: {
            id,
        },
        data: {
            ...(data.name !== undefined && {
                name: data.name,
            }),
            ...(data.description !== undefined && {
                description: data.description,
            }),
            ...(data.slug !== undefined && {
                slug: data.slug,
            }),
            ...(data.price !== undefined && {
                price: data.price,
            }),
            ...(data.isActive !== undefined && {
                isActive: data.isActive,
            }),
        },
    });
};
// delete product
export const deleteProduct = async (id) => {
    return await prisma.product.delete({
        where: {
            id,
        },
    });
};
// product image create
export const createProductImage = async (data) => {
    return await prisma.productImage.create({
        data,
    });
};
// add product varient
export const createProductVarient = async (data) => {
    return await prisma.productVariant.create({
        data: {
            productId: data.productId,
            stock: data.stock,
            sku: data.sku,
            size: data.size == null ? null : String(data.size),
            color: data.color ?? null,
        }
    });
};
// find varient by sku
export const findVariantBySku = async (sku) => {
    return await prisma.productVariant.findUnique({
        where: {
            sku
        }
    });
};
// find variant by product id
export const findVariantByProductId = async (productId) => {
    return await prisma.productVariant.findMany({
        where: {
            productId
        },
        orderBy: {
            id: "asc"
        }
    });
};
// update product variant 
export const updateProductVariant = async (id, data) => {
    return await prisma.productVariant.update({
        where: {
            id,
        },
        data: {
            ...(data.stock !== undefined && {
                stock: data.stock,
            }),
            ...(data.size !== undefined && {
                size: data.size,
            }),
            ...(data.color !== undefined && {
                color: data.color,
            }),
            ...(data.sku !== undefined && {
                sku: data.sku,
            }),
        },
    });
};
export const findVariantById = async (id) => {
    return prisma.productVariant.findUnique({
        where: {
            id,
        },
    });
};
// delete product variant 
export const deleteProductvariant = async (id) => {
    return prisma.productVariant.delete({
        where: {
            id
        }
    });
};
//# sourceMappingURL=product.repository.js.map