// Individual if conditions)

let a : number = 76;
let b : number = 92;
let c : number = 54;

if (a < b )       // T
 {
    console.log("Lion")
        
       if (b > c )  // T
    {
            console.log("Cat")
    
                 if (a < c )   //  False
        {
                    console.log("Fish")
        }
               else // else will execute
                  {
                     console.log("Dog")
                  }
   
    console.log("Baby")
    }
console.log("Cow")
}

 
/*  
LIon
Cat
Dog
Baby
Cow
*/
