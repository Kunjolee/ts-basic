( ()=> {

    type UserId = number | string | boolean;


    let userId: UserId = "";

    // Tipos literales

    type Sizes = "X" | "XL" | "S" | "M";

    let shirt: Sizes = "X"

    function greeting (userId: string, sizes: Sizes) {

      if (typeof userId === "string") {
        console.log(`Este es un string ${userId}`);
      }

      console.log(userId);
      console.log(sizes)
    }

    greeting(userId, shirt);

  } )()


