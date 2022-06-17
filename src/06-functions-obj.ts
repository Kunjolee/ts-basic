(() => {

  const login = (obj: { user: string, password: number }):void => {
    console.log(obj);
  }


  login({
    user: "Kunjo lee",
    password: 1,
  });

  type Sizes = "X" | "XL" | "L" | "S";


  const products: any[] = [];

  const addProduct = (product:{
    id: number,
    name: string,
    price: number,
    size?: Sizes
  }): void => {

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

})()
