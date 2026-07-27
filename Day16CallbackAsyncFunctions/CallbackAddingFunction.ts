/* Requirement 
Sum of A and B should be executed first and then H value should be print after) */


let a : number = 71 ;
let b : number = 96;

function countdata()
{
    let k : number = 0;
    for (let h : number =1 ; h < 9625252532 ; h++)
    {
        k++
    }
    console.log("The for loop runs for : " +k);
}
setTimeout(() =>      
     {                     // setTimeout to place it into a call back number              
         countdata();
     } )      
console.log("The Sum of A and B is : " +(a+b));




/* 
setTomeout (() => { countdata() })
// // setTimeout(() => { countdata(); } ) semi colon is optional
    
*/