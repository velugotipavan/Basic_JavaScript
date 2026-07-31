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

 //only object keys in the output.

 console.log(Object.keys(chair));

 //    [ 'height', 'color', 'weight', 'cost', 'capacity', 'chairdata' ]