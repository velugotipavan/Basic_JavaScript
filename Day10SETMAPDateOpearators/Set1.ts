//variabledeclaration variablename = new Set();
//Duplicates will ignore remining will print as per the inseration order
let K = new Set();
K.add(12345);
K.add("abcd");
K.add(123);
K.add(12345);
K.add("bc");
console.log(K);

//Set(4) { 12345, 'abcd', 123, 'bc' }
 