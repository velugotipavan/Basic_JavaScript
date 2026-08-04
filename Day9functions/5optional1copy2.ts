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

mydata("pavan"); //Deleaing with personal data
mydata("pavan", undefined , "Alzpv");  //Deleaing with personal data

/*
Deleaing with personal data
Deleaing with personal data */