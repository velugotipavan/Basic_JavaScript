let p = console.log 
let fruit : string = "Apple";
p(fruit);



 let stddata : string[] = ["pavan", "12345", "12Dec2024"];
 console.log(stddata.length);

 let a : string = "mokshith";
 let b : string ="nagaasai";

 let c : number = 5;
 let d : number = 10;

 console.log(a + b);  //mokshithnagaasai   ...... strings will concatinate
 console.log(a +       b);  //  mokshithnagaasai

 console.log(a + c); // mokshith5
console.log(c+d); // 15 numbers no concatination

console.log(a+ " " +b);  // mokshith nagaasai
console.log(c+ " " +d);   // 5 10  if we add atlease one space between adding numbers then they will not add.
console.log(c+ "" +d);    // 510  // providing empty string so numbers will not add.