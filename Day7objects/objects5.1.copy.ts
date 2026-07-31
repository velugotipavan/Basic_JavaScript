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

 // console.log(chair.chairdata);  //All sub objects data
  // console.log(chair.chairdata.legs);  // specific sub objects data
  
 //console.log(chair);
 /*  {
  height: 3,
  color: 'brown',
  weight: 2,
  cost: 650,
  capacity: 100,
  chairdata: { material: 'plastic', legs: 4, isworking: true }
} */

delete chair.weight;  //deleting weight sub objects
console.log(chair);

/* {
  height: 3,
  color: 'brown',
  cost: 650,
  capacity: 100,
  chairdata: { material: 'plastic', legs: 4, isworking: true }
} */

