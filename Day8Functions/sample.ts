function student (stdid : number, stdname : string, isstudent: boolean, stdDOB: number, stdaddress : string) // no semicolan
{
console.log("Student sum of stdid and DOB is: " +(stdid+stdDOB));
}
function hello(): void
{
    console.log(" Hai Iam hello function");
}
student(35, "pavan", true, 19031988, "hyd"); 
console.log("------------------------------");
hello();