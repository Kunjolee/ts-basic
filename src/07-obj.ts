(() => {

  const login = (obj: { user: string, password: number }):void => {
    console.log(obj);
  }


  login({
    user: "Kunjo lee",
    password: 1,
  });

  type Sizes = "X" | "XL" | "L" | "S";

  type ProductsType = {
    id: number,
    name: string,
    price: number,
    size?: Sizes
  }

  const products: ProductsType[] = [];

  const addProduct = (product: ProductsType ): void => {

    products.push(product);

  }


  addProduct({ id: 1,
    name: "Shirt",
    price: 123,
    size: "XL"
  });

  addProduct({ id: 2,
    name: "Shirt2",
    price: 1233,
    size: "L"
  });

  console.log(products);


})()
