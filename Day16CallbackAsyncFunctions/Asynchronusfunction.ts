/* 
Promise can be resolve / reject (or)  Accepted / Rejected  
We are adding code in the Arrow based functions ( => {} )  */

function driverAge() : Promise<string>
{

return new Promise((resolve, reject) => 
     {
          let age : number = 21;
          if(age >= 18)
             {
              resolve("Driver is good to go for Driving Test")
             }
          else
             {

              reject(new Error("Driver is not eligible for Driving Test"));
           }

     });

}

async function eligible() : Promise<void>
{
    const mydata : string = await driverAge();
    console.log(mydata)
}
eligible();  // calling the async function