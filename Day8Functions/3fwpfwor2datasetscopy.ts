// function with parameters and function without return type
//function with rectangle and take the dimentions 
//* different sets of data//


function student (stdid : number, stdname : string, isstudent: boolean, stdDOB: number, stdaddress : string) // no semicolan
{
console.log("Hai iam a student");
}
function hello(): void
{
    console.log(" Hai Iam hello function");
}
student(35, "pavan", true, 19031988, "uppalapadu"); 
console.log("------------------------------");
hello();         // without parameters parsing dont use the console.log(hello()); ====> "undefind" also will print along with the "Hai Iam hello function"

/*
Hai iam a student
------------------------------
 Hai Iam hello function
*/
