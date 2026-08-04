function mydata (name : string, myaadhar? : number, pan? : string)
{
    if(myaadhar == undefined)
    {
        console.log("Deleaing with personal data");
    }
    else
    {
     console.log("Iam in abank and providing my Aadhar : " +(myaadhar));
     console.log("Iam in abank and providing my Pancard : " +(pan));

    }

}

mydata("pavan", 55505 , "Alzpv");
/*
Iam in abank and providing my Aadhar : 55505
Iam in abank and providing my Pancard : Alzpv   */