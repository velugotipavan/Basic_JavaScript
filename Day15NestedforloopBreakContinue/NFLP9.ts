//123456789123456789123456789

let Z : string = "";
for(let K : number = 1 ; K<=3 ; K++)
{
   for(let L : number = 1 ; L<=9 ; L++)
  {
    Z += L;
  }
  
}
console.log(Z);    // /123456789123456789123456789

console.log("-----------------------------------");
/* After printing 123456789 i need to print next numbers in another line.
Adding next line to z   "\n" */

let A : string = "";
for(let B : number = 1 ; B<=3 ; B++)
{
   for(let C : number = 1 ; C<=9 ; C++)
  { 
    A += C ;          
  }
  A += "\n" ;    // adding in separate line after 1st foolr loop
}
  
console.log(A);

/*
123456789
123456789
123456789
*/

console.log("-----------------------------------");

let R : string = "";
for(let S : number = 1 ; S<=3 ; S++)
{
   for(let T : number = 1 ; T<=9 ; T++)
  { 
    R += T + " ";           //space between the lines 
  }
  R += "\n" ;    // adding in separate line after 1st foolr loop
}
  
console.log(R);

/* 
1 2 3 4 5 6 7 8 9 
1 2 3 4 5 6 7 8 9 
1 2 3 4 5 6 7 8 9 
*/