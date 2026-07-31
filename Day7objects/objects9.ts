interface chairinfo 
{
height : number,
color : string,
weight : number,
cost : number,
capacity : number,
}

let chair : chairinfo =
{
    height : 3,
    color : "brown" ,
    weight: 2 ,
    cost : 650 ,
    capacity : 100,
    chairdata : { material : 'plastic', legs : 4, isworking : true}
              
 }

 //only object values in the output.

 console.log(Object.values(chair));

 /* [
  3,
  'brown',
  2,
  650,
  100,
  { material: 'plastic', legs: 4, isworking: true }
]  */