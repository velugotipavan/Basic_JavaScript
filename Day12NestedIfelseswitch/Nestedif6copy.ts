// Individual if conditions)

let a : number = 76;
let b : number = 92;
let c : number = 54;

if (a < b )       // T
 {
    console.log("Lion")
        
       if (b > c )  // T
    {
            console.log("Cat")     //F 
    
                 if (a < c )   //  False
        {
                    console.log("Fish")
        }
               else if ( 56 != 56)    // else will execute and here if is also False
                  {
                     console.log("Dog")
                  }
   
    console.log("Baby")
    }
console.log("Cow")
}

 
/*  
Lion
Cat
Baby
Cow
*/
