(()=>{


  type Sizes = "X" | "S" | "L" | "XL";

  function createProductToJson (
    size: Sizes,
    createdAt: Date,
    stock: number,
    id: number
    ) {

    return {
      size,
      createdAt,
      stock,
      id
    }
  }

  createProductToJson("L", new Date(), 12, 1)


  const itWillReturnString = ( data: number[] ): string => {
    return data.reduce((acc, value) => acc + value, 0).toString();
  }

  itWillReturnString([1,2,3,4,5]);


  const withoutReturn = ( data: string ): void => {
    console.log("Here is the data i'm not going to return", data);
  }

  withoutReturn("Example");
})()
