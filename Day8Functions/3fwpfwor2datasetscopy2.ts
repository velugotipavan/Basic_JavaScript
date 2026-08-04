// function with parameters and function without return type
//function with rectangle and take the dimentions 
//* different sets of data//


function student (stdid : number, stdname : string, isstudent: boolean, stdDOB: number, stdaddress : string) // no semicolan
{
console.log("Student sum of stdid and DOB is: " +(stdid+stdDOB));
}
function hello(): void
{
    console.log(" Hai Iam hello function");
}
student(35, "pavan", true, 19031988, "uppalapadu"); 
console.log("------------------------------")
console.log(hello());     // no need console.log because no return type

/*Hai iam a student
------------------------------
 Hai Iam hello function
undefined
*/
