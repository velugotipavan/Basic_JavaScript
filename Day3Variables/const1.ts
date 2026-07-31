const city = "Hyderabad"; //declare
console.log(city);

/*city = "Guntur";  // Re-assigning    --->   TypeError: Assignment to constant variable.
console.log(city); */

/*  const city = "Bangalore";  // Re-Declare      // Syntax ERROR ---> The symbol "city" has already been declared
console.log(city);   */

// outside data to inside block
const fruit = "Apple"
{
    console.log(fruit);   
}

// Inside declaration and inside
{
    const game = "cricket";
    console.log(game);
}

/* inside to outside

{
   const school = "Okatree";
}
console.log(school);  // Reference error ----> school is not defined 

*/


// Hyderabad
// Apple
// cricket