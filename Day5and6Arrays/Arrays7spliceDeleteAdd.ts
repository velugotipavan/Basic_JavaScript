let animals1 : string[] = ["cat", "Rabbit", "Lion", "Tiger", "Bear", "Rat", "pig", "Element"];
animals1.splice(3, 2, "Apple", "Banana");
console.log(animals1);
/* op:  'cat',    'Rabbit',
  'Lion',   'Apple',
  'Banana', 'Rat',
 'pig',    'Element' */