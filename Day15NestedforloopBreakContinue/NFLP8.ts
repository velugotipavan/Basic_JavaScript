/* 1
 12
 123
 1234
 12345
 123456
 1234567
 12345678
 123456789

I am adding one empty string and save/adding  data in to that same string.
*/

let Z : string = "";
for ( let C : number = 1 ; C <= 9 ; C++)
{
    Z += C;
}
console.log(Z); 


// 123456789     

/* 
let Z : number = 5;
for ( let C : number = 1 ; C <= 9 ; C++)
{
    Z += C;
}
console.log(Z);  // 50  */
