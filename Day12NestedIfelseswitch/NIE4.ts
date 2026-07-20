 // if any one of the if condition not true the else will execute
 
 let marks : number = 90;
 
    if(marks >= 35 && marks < 50)     // T && F = False
    
        {
            console.log("The student got passed")
        }

       else if (marks >= 50 && marks < 60)  // False
        {
              console.log( "the student got second")
        }

        else if (marks >= 60 && marks < 90)   //False
        {
            console.log("the student got first")

        }
        else if (marks >= 90)       // True
        {
            console.log("The student got distinction")
        }
        else
        {
           console.log("studenet got failed")    
        }

       // The student got distinction