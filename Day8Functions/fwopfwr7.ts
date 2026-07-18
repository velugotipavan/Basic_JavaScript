//Adding 3 return types ---> Not recommended 

// Function without Parameters and with Returntype

//1st ....> function is calling and Block of statements will execute
//2nd ......> It get the return type 

// variabledeclaration variablname : datatype = value


function school() : string

{
  let student : number = 431;
  let schoolpincode : number = 505501;
  const k : string = "King"
  //return k+student+schoolpincode;     // King431505501
  return k + " " +student + " " +schoolpincode;      //King 431 505501
   }
console.log(school()); 


