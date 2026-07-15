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
  
  console.log(chair.chairdata);  //All sub objects data
 //  { material: 'plastic', legs: 4, isworking: true }

  console.log(chair.chairdata.legs);  // specific sub objects data    //4




