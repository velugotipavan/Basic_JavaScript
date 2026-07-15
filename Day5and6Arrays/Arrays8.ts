let animals1 : string[] = ["cat", "Rabbit", "Lion", "Tiger", "Bear", "Rat", "pig", "Elephant"];
animals1.splice(3, 0, "Apple", "Banana"); //just adding elements in between
console.log(animals1);
//After Index2 elements will be add 
/* cat',    'Rabbit',
  'Lion',   'Apple',
  'Banana', 'Tiger',
  'Bear',   'Rat',
  'pig',    'Element'
]
  */