import { products, addProduct, countStock } from "./product.service"


addProduct({
  id: 1,
  description: "Product1",
  createdAt: new Date(2022,6,16),
  price: 12,
  stock: 6
})

addProduct({
  id: 2,
  description: "Product2",
  createdAt: new Date(2022,6,16),
  price: 11,
  stock: 8
})




console.log( products );
console.log( countStock(products) );

