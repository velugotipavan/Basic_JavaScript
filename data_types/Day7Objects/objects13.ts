interface chairinfo1
{
height : number,
color : string,
weight : number,
cost : number,
capacity : number,
}

let chair1 : chairinfo1 =
{
    height : 3,
    color : "brown" ,
    weight: 2 ,
    cost : 650 ,
    capacity : 100,
   
              
 }


interface chairinfo2 
{
height2 : number,
color2 : string,
weight2 : number,
cost2 : number,
capacity2 : number,
}

let chair2 : chairinfo2 =
{
    height2 : 444,
    color2 : "Red" ,
    weight2: 777 ,
    cost2 : 9999 ,
    capacity2 : 5555,
                  
 }


let chairinfo1andchairinfo2 = {...chair1 , ...chair2};
console.log(chairinfo1andchairinfo2);

/* {
  height: 3,
  color: 'brown',
  weight: 2,
  cost: 650,
  capacity: 100,
  height2: 444,
  color2: 'Red',
  weight2: 777,
  cost2: 9999,
  capacity2: 5555
} */


