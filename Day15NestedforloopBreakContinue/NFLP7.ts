/* 1
 12
 123
 1234
 12345
 123456
 1234567
 12345678
 123456789

I am adding one empty string and save/adding  data in to that same string.   */


let Z : number = 5;
for ( let C : number = 1 ; C <= 9 ; C++)
{
    Z += C;
   console.log(Z);   
}

/* 6  --->  5+1 =6
8  ----> 6+2 = 8
11       8+3 = 11
15       11+4 = 15
20
26
33
41
50      41+9 = 50

*/