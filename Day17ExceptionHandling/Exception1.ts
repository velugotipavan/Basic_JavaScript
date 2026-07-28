 /* let a : number = 71;
let b : number = 11;
let D = new Array(6);    // let D : number[] = new Array(6);

console.log("The number of elements stored in Array : " +D.length);
console.log("The difference between A and B is : " +(a+b)); */

/* The number of elements stored in Array : 6
The difference between A and B is : 82 */



let a : number = 71;
let b : number = 11;
let D = new Array(-6);    
console.log("The number of elements stored in Array : " +D.length);
console.log("The difference between A and B is : " +(a+b)); 
//RangeError: Invalid array length ...D value is Negative.
// A and B also not run due to the errors