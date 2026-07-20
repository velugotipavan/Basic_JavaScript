// if with in the if . 1st if condition is true the only go to the next if condition(block of statments)

let a : number = 76;
let b : number = 92;
let c : number = 54;

if (a > b )      // F
{
    console.log("B is more than A")
       if (b > c ) //
    {
            console.log("C is less than A")
                 if (a > c )   //
        {
                    console.log("A is more than C")
        }

   }

}


// 1st if false so it will quit. nothing will execute......no output

