//Data existence or not checking by using Set. if data avaialble then true, otherwise false.
//Deleting, Delete all  data at atime

let K = new Set();
K.add(12345);
K.add("abcd");
K.add(123);
K.add(12345);
K.add("bc");

//console.log(K.has(12345)); //true     // checking the value
// console.log(K.has(123456)); //false  //checking  the value
console.log(K); 
K.delete(123);  //deleteing the value
console.log(K);   // Set(3) { 12345, 'abcd', 'bc' }

console.log(K.has(123)); // false
console.log(K.has("bc")); //true

K.clear();  // clear all the data at a time 
console.log(K); Set(0) {}

