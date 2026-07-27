/* Rows = 5
   columns = 12

    /* Rows : 8, Columns = 1st row =1columns , 2nd row is 2 columns. do based up on the row name number of columns are there.
    1
    2 2
    3 3 3
    4 4 4 4 
   5 5 5 5 5 5 
   6 6 6 6 6 6 6 
   7 7 7 7 7 7 7 7

    */    


   let Z : string = "";
   for(let R : number = 1 ; R <= 7; R++)
   {
        for(let C : number = 1 ; C <= R ; C++)
     {
        Z += R + " ";
     }
     Z += "\n";
   }
    console.log(Z);