

// Function without Parameters and with Returntype

//1st ....> function is calling and Block of statements will execute
//2nd ......> It get the return type 
//If 2 return types 
// variabledeclaration variablname : datatype = value


function school() : string

{
  let student : number = 431;
  let schoolpincode : number = 505501;
  const k : string = "King"
  return student;   //after execute 1st return...its exit and it will not goto the end return
  return schoolpincode;   //Unreachable code detected

}
console.log(school());  //431


