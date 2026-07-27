/* Rows = 5
   columns = 12

    /* Rows : 8, Columns = 1st row =1columns , 2nd row is 2 columns. do based up on the row name number of columns are there.
    1
    12
    123
    1234
    12345
    123456
    12345678
    */    


   let Z : string = "";
   for(let R : number = 1 ; R <= 8; R++)
   {
        for(let C : number = 1 ; C <= R ; C++)
     {
        Z += C + "";
     }
     Z += "\n";
   }
    console.log(Z);