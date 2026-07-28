//finally will always run when exception in the Try and catch also. but error will through in the catch
//finally output will run but eerror will through because of catch error
let a : number = 71;
let b : number = 11;
try
{
let c = new Array(0.7);    
console.log("The number of elements stored in Array : " +c.length);
}
catch(Myreason)
{
  let D = new Array(-0.7);
console.log("The Array length should be positive integer");
}
finally
{
  console.log("Finally ----> The difference between A and B is : " +(a-b)); 
}

console.log("The multiplication between A and B is : " +(a*b)); 

/* Finally ----> The difference between A and B is : 60
D:\Learning_Playwright\Basic_JavaScript\Day17ExceptionHandling\Exception5.ts:11
  let D = new Array(-0.7);
          ^

RangeError: Invalid array length */