

// Function without Parameters and with Returntype

//1st ....> function is calling and Block of statements will execute
//2nd ......> It get the return type 
//if i dont want return value , Only calling function

function school() : number

{
  let student : number = 431;
  let schoolpincode : number = 505501;
  console.log("The number of students in the school is : " +student);
  return schoolpincode;   //Dont give double cotations otherwise it will print AS: schoolpincode
}
school(); //calling the function, but return type will not print 

