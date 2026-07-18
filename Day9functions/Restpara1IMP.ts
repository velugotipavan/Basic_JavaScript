
//I want to calculate total marks

/*Here:
... → Rest operator
marks → Parameter name
number[] → An array of numbers  */

function mokshithmarks(...marks :number[]) : void     //function functionName(...parameter: dataType[])
{
let totalmarks : number = 0;
for(let A of marks)
{
totalmarks = totalmarks + A;
}
console.log(totalmarks);
}
mokshithmarks(19,87,34,65,66)    //271


/* Easy way to remember
for...of → of = values
for...in → in = indexes (keys) 

let marks = [70, 80, 90];

for (let A of marks) 
{
    console.log(A);
}

output :
 70
80
90
----------------
let marks = [70, 80, 90];

for (let A in marks)  // indexes
{
    console.log(A);
}

 0
1
2
====================
for (let A in marks) 
{
    console.log(marks[A]);
}
70
80
90
*/