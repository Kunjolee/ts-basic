(()=> {
  let myUndefined: undefined = undefined;

  let myNull: null = null;

  const options: number | null = null;

  const hi = ( name: string | null ) => {

    let print = "Hello " + name?.toLowerCase() || "nobody";

    console.log(print)

  }

  console.log(myUndefined);
  console.log(myNull);
  console.log(options);

  hi("Nicolas");
  hi(null);

})()

