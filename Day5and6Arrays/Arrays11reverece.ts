//reverce order printing

let animals1 : string[] = ["cat", "Rabbit", "Lion", "Tiger", "Bear", "Rat", "pig", "Elephant"];
let animals2 : string = animals1.reverse();
console.log(animals2);
/*  'Elephant', 'pig',
  'Rat',      'Bear',
  'Tiger',    'Lion',
  'Rabbit',   'cat'
]*/






let animals6 : string[] = ["cat", "Rabbit", "Lion", "Tiger", "Bear", "Rat", "pig", "Elephant"];

let B = animals1.reverse();

for(let pavan of B)
{
    console.log(pavan)
}

/* Elephant
pig
Rat
Bear
Tiger
Lion
Rabbit
cat  */