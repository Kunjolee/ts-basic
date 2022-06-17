export type Size = "X" | "XL" | "L" | "S";

export type Product = {
  id: number;
  description: string;
  price: number;
  createdAt: Date;
  stock: number;
};
