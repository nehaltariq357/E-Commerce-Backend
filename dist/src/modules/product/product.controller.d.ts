import type { Request, Response } from "express";
export declare const createProduct: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const getallproduct: (_req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const findproductbyid: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const updateproduct: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const deleteproduct: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const addProductImage: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const addProductVarient: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const getProductVariant: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const updateProductVariant: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const deleteProductVariant: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
//# sourceMappingURL=product.controller.d.ts.map