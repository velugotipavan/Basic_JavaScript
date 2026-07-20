
// == lose coparison ---> either number or string not a matter but data should be same, ouptput ---> true / false
//  === strict comparision  ---> data type and data also should match

let a : number =  1234;
let b : number = 1234;
let c : string = "1234";
let d : number = 4321;
let e : string = "pavan";
let f : string = "Pavan";

console.log(a == c);  //true
console.log(e == f);  // false


console.log(a === c);  //false
console.log( a === b); //true
console.log(a === d);   //false
