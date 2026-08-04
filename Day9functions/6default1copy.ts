function drivingtest(name: string, eligible: string = "Right to drive")
 {
    let age: number = 32;

    if (age > 17) 
        {
        console.log(name + " is now " + eligible);
        } 
        else 
        {
        console.log(name + " please sit in the house");
        }
}

drivingtest("Pavan"); //Pavan is now Right to drive
