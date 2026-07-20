// Ternary or Logical / conditional operators
// && All conditions true then only true, remining all false
// || pipelines ... Any one condition is true then its true.
// !=


let a : number = 45;
let b : number = 91;
let c: number = 23;

console.log( a<b && c<a);  // true && true  ===> true
console.log(a<b && c<a && b<c);  // true && true && false   ===> false
console.log(c<a || b<c);  //true || false ====> true


