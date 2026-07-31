let city = "Hyderabad"; //declare
console.log(city);

city = "Guntur";  // Re-assigning
console.log(city);

/*  let city = "Bangalore";  // Re-Declare      // Syntax ERROR ---> The symbol "city" has already been declared
console.log(city);   */

// outside data to inside block
let fruit = "Apple"
{
    console.log(fruit);   
}

// Inside declaration and inside
{
    let game = "cricket";
    console.log(game);
}

/* inside to outside

{
   let school = "Okatree";
}
console.log(school);  // Reference error ----> school is not defined 

*/