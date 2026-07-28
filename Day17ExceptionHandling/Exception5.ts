//finally will always run when exception in the Try and catch also. but error will through in the catch
//finally output will run but eerror will through because of catch error
let a : number = 71;
let b : number = 11;
try
{
let c = new Array(0.7);    
console.log("The number of elements stored in Array : " +c.length);
}
catch(Pavan)   // insted of pavan we caan give anything
{
  console.log(Pavan);  // if you are not mention specific reason then by deafault back end error will through.
}
finally
{
  console.log("Finally ----> The difference between A and B is : " +(a-b)); 
}

console.log("The multiplication between A and B is : " +(a*b)); 

/* RangeError: Invalid array length

    at <anonymous> (D:\Learning_Playwright\Basic_JavaScript\Day17ExceptionHandling\Exception5.ts:7:9)
    at Object.<anonymous> (D:\Learning_Playwright\Basic_JavaScript\Day17ExceptionHandling\Exception5.ts:19:62)
    at Module._compile (node:internal/modules/cjs/loader:1871:14)
    at Object.transformer (C:\Users\Mokshith\AppData\Roaming\npm\node_modules\tsx\dist\register-BLUABhh3.cjs:9:3252)
    at Module.load (node:internal/modules/cjs/loader:1594:32)
    at Module._load (node:internal/modules/cjs/loader:1396:12)
    at wrapModuleLoad (node:internal/modules/cjs/loader:255:19)
    at loadCJSModuleWithModuleLoad (node:internal/modules/esm/translators:372:15)
    at ModuleWrap.<anonymous> (node:internal/modules/esm/translators:244:9)
    at ModuleJob.run (node:internal/modules/esm/module_job:439:25)
    
Finally ----> The difference between A and B is : 60
The multiplication between A and B is : 781 */