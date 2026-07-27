/* Rows = 5
   columns = 12

   111111111111
   222222222222
   333333333333
   444444444444
   555555555555  */


   let Z : string = "";
   for(let R : number = 1 ; R <= 5; R++)
   {
         for(let C : number = 1 ; C <=12 ; C++)
     {
        Z += R + ""
     }
      Z += "\n";
   }
console.log(Z);
