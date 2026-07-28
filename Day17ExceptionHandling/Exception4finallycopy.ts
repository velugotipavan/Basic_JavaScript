//finally will always run wheather it is no exception or exception
let a : number = 11;
let b : number = -71;
try
{
let c = new Array(0.7);    
console.log("The number of elements stored in Array : " +c.length);
}
catch(Error)
{
console.log("The number of elements always should be positive only")
}

finally
{
  console.log("The difference between A and B is : " +(a-b)); 
}

console.log("The multiplication between A and B is : " +(a*b)); 

/* The number of elements always should be positive only
The difference between A and B is : 82
The multiplication between A and B is : -781  */