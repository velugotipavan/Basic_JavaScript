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

 //only object keys and values in the output.....that means entries

 console.log(Object.entries(chair));

 /* [
  [ 'height', 3 ],
  [ 'color', 'brown' ],
  [ 'weight', 2 ],
  [ 'cost', 650 ],
  [ 'capacity', 100 ],
  [ 'chairdata', { material: 'plastic', legs: 4, isworking: true } ]  */
 