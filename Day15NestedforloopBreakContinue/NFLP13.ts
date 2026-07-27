let Z: string = "";

for (let R = 1; R <= 10; R++) {
    for (let C = 10; C >= R; C--) 
        {
        Z += C;
    }
    Z += "\n";
}

console.log(Z);