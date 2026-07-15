// sorting of data Assending / Decending order

let myfancy : number[] = [45, 88,2 , 8, 7];
 //   console.log(myfancy.sort()); //sorting order as per the first digit
// output: [ 2, 45, 7, 8, 88 ] 
//console.log(myfancy.sort((x ,y) => x-y)); //Assending order

/* output: [ 2, 7, 8, 45, 88 ] */


console.log(myfancy.sort((x , y) => (y-x))); //decending order
//[ 88, 45, 8, 7, 2 ]
