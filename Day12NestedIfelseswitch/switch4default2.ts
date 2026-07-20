// we can add default in starting / end also
// default iss also a type of case only
// if we add default in starting then break is mandatory and default adding in the last is optional....better use break every where

let m : string = "Hello Hai";
switch(m)
{
    default : console.log("Month code is incorrect");
    break;
    case "oct" : console.log("banana");
    break;
}

//Month code is incorrect