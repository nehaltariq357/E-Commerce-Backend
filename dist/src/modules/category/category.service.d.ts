import type { CreateCategoryInput, UpdateCategoryInput } from "./category.types.js";
export declare const createCategoryService: (data: CreateCategoryInput) => Promise<{
    name: string;
    id: number;
    createdAt: Date;
    updatedAt: Date;
    description: string | null;
    isActive: boolean;
}>;
export declare const getAllCategoriesServices: () => Promise<{
    name: string;
    id: number;
    createdAt: Date;
    updatedAt: Date;
    description: string | null;
    isActive: boolean;
}[]>;
export declare const getCategoryByIdService: (id: number) => Promise<{
    name: string;
    id: number;
    createdAt: Date;
    updatedAt: Date;
    description: string | null;
    isActive: boolean;
}>;
export declare const updateCategoryService: (id: number, data: UpdateCategoryInput) => Promise<{
    name: string;
    id: number;
    createdAt: Date;
    updatedAt: Date;
    description: string | null;
    isActive: boolean;
}>;
export declare const deleteCategoryService: (id: number) => Promise<{
    name: string;
    id: number;
    createdAt: Date;
    updatedAt: Date;
    description: string | null;
    isActive: boolean;
}>;
//# sourceMappingURL=category.service.d.ts.map