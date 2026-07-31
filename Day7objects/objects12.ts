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
// find out element type
console.log(typeof chair.chairdata.isworking); //boolean
console.log(typeof chair.chairdata.legs);  //number 
console.log(typeof chair.color);  //  string
   



