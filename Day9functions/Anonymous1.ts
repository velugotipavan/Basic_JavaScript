/* function playername( name : string ) : void
{
    console.log(name);
}
playername("pavan"); //pavan
 */

// -------------- calling function in another function as parameter-----------------------//

function playername( name : string) : void
{
    console.log(name);
}
playername("pavan");

function playergame( game : (name : string) => void) : void
{
    game("cricket");
}
playergame(playername);
//pavan
//cricket
