

// Function without Parameters and with Returntype

//1st ....> function is calling and Block of statements will execute
//2nd ......> It get the return type 
//I want return the string
// variabledeclaration variablname : datatype = value
function school() : string

{
  let student : number = 431;
  let schoolpincode : number = 505501;
  console.log("The number of students in the school is : " +student);
  const k : string = "King"
  return k;

}
//school(); //calling the function, but return type will not print //The number of students in the school is : 431
console.log(school());

/* The number of students in the school is : 431
King */

