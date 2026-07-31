var city = "Hyderabad"; //declare
console.log(city);

city = "Guntur";  // Re-assigning
console.log(city);

var city = "Bangalore";  // Re-Declare
console.log(city);

// outside data to inside block
let fruit = "Apple"
{
    console.log(fruit);   
}

// Inside declaration and inside
{
    var game = "cricket";
    console.log(game);
}

// inside to outside

{
    var game = "badmenton";
}
console.log(game);

/*Hyderabad
Guntur
Bangalore
Apple
cricket
badmenton */