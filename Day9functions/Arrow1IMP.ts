//Arrow based functions ----> D


function multiplay ( K: number, L : number ) : number 
{ 
    return K*L;
}
console.log(multiplay(5,6)); //30

// ------------------------------------------------
function pavan( K : number, L : number ) : number 
{
       return K*L;
}
let A : number = pavan(5 , 8);
console.log(A);   // 40

// ------------------using Arrow based--------------------------//

let pandu = (a: number , b: number) : number => a*b;
console.log(pandu(5, 30));   //150

