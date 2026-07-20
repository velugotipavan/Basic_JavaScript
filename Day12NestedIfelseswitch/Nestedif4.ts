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
    
                 if (a < c )   // f
        {
                    console.log("Fish")
        }
    console.log("Baby")
    }
console.log("Cow")
}

 
/*  1st and 2nd if conditions related block statements will execute
Lion
Cat
Baby
Cow
*/
