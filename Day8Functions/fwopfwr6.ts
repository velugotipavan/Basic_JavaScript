

// Function without Parameters and with Returntype

//1st ....> function is calling and Block of statements will execute
//2nd ......> It get the return type 
//If 2 return types (after execute 1st return...its exit and it will not goto the end return)
// variabledeclaration variablname : datatype = value


function school() : string

{
  let student : number = 431;
  let schoolpincode : number = 505501;
  const k : string = "King"
   return student , schoolpincode;          // output : 505501
  // return { student , schoolpincode };       // output { student: 431, schoolpincode: 505501 }
  //  return [ student , schoolpincode ];         // output  [ 431, 505501 ]
  // no use //Left side of comma operator is unused and has no side effects
  }
console.log(school());  // 
 

