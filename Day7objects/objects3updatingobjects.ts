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
      
     chairdata : 
     {
        material : 'plastic',
        legs : 4,
        isworking : true,
     }
              
 }
  chair.manifactureyear = 2025;   //adding elements into the objects
  chair.color = "red",   //updating the color  
  console.log(chair); 

  console.log(chair.color);
/* {
  height: 3,
  color: 'red',
  weight: 2,
  cost: 650,
  capacity: 100,
  chairdata: { material: 'plastic', legs: 4, isworking: true },
  manifactureyear: 2025
}
red */
