//  Try will run when there is no exceptionss. if exceptions then catch will run
//We are ignoring the error and executing the remining lines 
// No exception ----> try 
// Exception -------> catch


let a : number = 71;
let b : number = 11;
try
{
let c = new Array(-6);    
console.log("The number of elements stored in Array : " +c.length);
}
catch(Error)
{
console.log("The number of elements always should be positive only")
}

console.log("The difference between A and B is : " +(a+b)); 


// The number of elements always should be positive only 
// The difference between A and B is : 82