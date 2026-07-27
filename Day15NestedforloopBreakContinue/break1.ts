/*
for(let t : number =1; t <= 89; t++)
{
    console.log(t);
}

output: 1 t0 89 will print */

//break will terminate from the loop ( if and for loop also)

for(let t : number =1; t <= 89; t++)
{
   if(t == 76)
   {
   // console.log(t);     //  only 76
    break;
   }
   console.log(t);     // 1 to 75    (when 76 == 76 then True and break will execute and terminate from the loop)
}

// if you want output till 1 to 76 then if(t ==77) or before if condition print statement also fine.
 
 