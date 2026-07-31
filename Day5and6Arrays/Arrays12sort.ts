// sorting of data Assending / Decending order

let myfancy : number[] = [45, 88,2 , 8, 7];
 //   console.log(myfancy.sort()); //sorting order as per the first digit
// output: [ 2, 45, 7, 8, 88 ] 
//console.log(myfancy.sort((x ,y) => x-y)); //Assending order

/* output: [ 2, 7, 8, 45, 88 ] */


console.log(myfancy.sort((x , y) => (y-x))); //decending order
//[ 88, 45, 8, 7, 2 ]



let animals2 : string[] = ["CAt", "RAbbit", "LiOn", "TIger", "BeAr"];
console.log(animals2.sort());


animals2.sort((a, b) => a.localeCompare(b)); //assending order when capital and small letters
animals2.sort((a, b) => b.localeCompare(a)); //decending order when capital and small letters

//[ 'Bear', 'Lion', 'Rabbit', 'Tiger', 'cat' ]
// [ 'BeAr', 'CAt', 'LiOn', 'RAbbit', 'TIger' ]

