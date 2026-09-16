import type { CreateCategoryInput, UpdateCategoryInput } from "../category/category.types.js";
export declare const findCategoryByName: (name: string) => Promise<{
    name: string;
    id: number;
    createdAt: Date;
    updatedAt: Date;
    description: string | null;
    isActive: boolean;
} | null>;
export declare const createCategory: (data: CreateCategoryInput) => Promise<{
    name: string;
    id: number;
    createdAt: Date;
    updatedAt: Date;
    description: string | null;
    isActive: boolean;
}>;
export declare const findAllCategories: () => Promise<{
    name: string;
    id: number;
    createdAt: Date;
    updatedAt: Date;
    description: string | null;
    isActive: boolean;
}[]>;
export declare const findCategoryById: (id: number) => Promise<{
    name: string;
    id: number;
    createdAt: Date;
    updatedAt: Date;
    description: string | null;
    isActive: boolean;
} | null>;
export declare const updateCategory: (id: number, data: UpdateCategoryInput) => Promise<{
    name: string;
    id: number;
    createdAt: Date;
    updatedAt: Date;
    description: string | null;
    isActive: boolean;
}>;
export declare const deleteCategory: (id: number) => Promise<{
    name: string;
    id: number;
    createdAt: Date;
    updatedAt: Date;
    description: string | null;
    isActive: boolean;
}>;
//# sourceMappingURL=category.repository.d.ts.map