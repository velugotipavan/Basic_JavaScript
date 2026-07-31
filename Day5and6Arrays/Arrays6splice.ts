//Deleting some elements in the Array
let animals1 : string[] = ["cat", "Rabbit", "Lion", "Tiger", "Bear", "Rat", "pig", "Element"];
animals1.splice(2,1);  // from 2nd index 1st will be removed
console.log(animals1);

/*'cat',     'Rabbit',
  'Tiger',   'Bear',
  'Rat',     'pig',
  'Element'*/

  //If i want delete all remining  elements from particular index
  let animals3 : string[] = ["cat", "Rabbit", "Lion", "Tiger", "Bear", "Rat", "pig", "Element"];
animals3.splice(3); // from index3 all remining will be deleted2
console.log(animals3); 
//o/p [ 'cat', 'Rabbit', 'Lion' ]