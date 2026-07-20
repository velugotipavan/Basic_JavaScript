// if with in the if . 1st if condition is true the only go to the next if condition(block of statments)

let a : number = 76;
let b : number = 92;
let c : number = 54;

if (a < b )      // T
{
    console.log("B is more than A")
       if (b > c ) //T
         {
            console.log("C is less than A")
                 if (a > c )   //T

                {
                    console.log("A is more than C")
                }

         }

}


/* B is more than A
C is less than A
A is more than C  */