//Map----<( Key and Value)....Here Key is the main...........its checking duplicates there are not
// lattitude and langitude. if any duplicate keys in 2nd 5th then latest data shows in the 1st duplicates place and ignore the another one .

/* let K = new Map();
K.set(123, "one two three");
K.set("true" , "false");
K.set("pavan" , 6735);
K.set("movie", "false");
K.set("bat", "ball");
console.log(K);
/* Map(5) {
  123 => 'one two three',
  'true' => 'false',
  'pavan' => 6735,
  'movie' => 'false',
  'bat' => 'ball'
} */

  let K = new Map();
K.set(123, "one two three");
K.set("true" , "false");
K.set("pavan" , 6735);
K.set("movie", "false");
K.set("bat", "ball");
K.set("pavan", "pandu")  //duplicate key value but it will replace 3rd position
console.log(K);

/*
Map(5) {
  123 => 'one two three',
  'true' => 'false',
  'pavan' => 'pandu',
  'movie' => 'false',
  'bat' => 'ball'
}
  */