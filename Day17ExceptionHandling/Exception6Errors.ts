// we are throwing the error. when if condition is True here.

let age : number = 12;
if (age < 18)
{
    throw new Error("you are not eligible for vote");   // throw new Error ---> is used in JavaScript and TypeScript to create and throw an exception (error).
}
else 
{
    console.log("Take money fro MLA");
}

// Error: you are not eligible for vote

