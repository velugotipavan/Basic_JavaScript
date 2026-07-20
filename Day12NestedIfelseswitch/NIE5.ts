 // if any one of the if condition is true the never checks next if/else conditions
 
 let marks : number = 98;
 
    if(marks >= 35 && marks < 50)     // T && F = False
    
        {
            console.log("The student got passed")
        }

       else if (marks >= 50 || marks < 60)  // T || F = T
        {
              console.log( "The student got second")
        }

        else if (marks >= 60 || marks < 90)   //
        {
            console.log("the student got first")

        }
        else if (marks >= 90)       // 
        {
            console.log("The student got distinction")
        }
        else
        {
           console.log("studenet got failed")    
        }

       //  The student got second