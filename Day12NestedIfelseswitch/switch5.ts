// After hit the case, if break is not found then it will execute the next cases untill the break found

let p : string = "Sep";
switch(p)
{
    case "pandu" : console.log("Month is october");
                 break;
    default : console.log("Apple");
               break;
                 
     case "Sep" : console.log("Banana");
                 
                 
     case "OCt" : console.log("Cat");
                 break;
    case "November" : console.log("Cat");
                 break;             
        
}


 /*  Banana              ........... Sep case matched but there is no break, 
    so next cases also will print untill break avaialble
    Cat  */