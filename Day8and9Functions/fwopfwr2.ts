

// Function without Parameters and with Returntype

//1st ....> function is calling and Block of statements will execute
//2nd ......> It get the return type 


function school() : number

{
  let student : number = 431;
  let schoolpincode : number = 505501;
  console.log("The number of students in the school is : " +student);
  return schoolpincode;   //Dont give double cotations otherwise it will print AS: schoolpincode
}
console.log(school()); //calling the function

/* The number of students in the school is : 431
505501 */
