import { Product } from "./product.module"


export const products: Product[] = [];

export const addProduct = ( product: Product ): void => {
  products.push(product)
}


export const countStock = ( products: Product[] ): number => {
  return products.reduce( (acc, current) => acc + current.stock , 0);
}



