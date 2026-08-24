export interface CreateProductInput {
  name: string;
  description: string;
  slug: string;
  price:number
  categoryId?:number | undefined
}