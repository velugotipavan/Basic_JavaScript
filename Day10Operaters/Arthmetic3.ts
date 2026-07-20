//Arthametic operations  ++ Increment , -- Decrement,

let m = 4;
let n = 5;

let c : number = (m++ * --n) - (n-- * ++m) + (n - --m);       // 4 * 4  -   4 * 6   3 - 5  = 16-24-2= -10
console.log(c);
