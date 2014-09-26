var NinerFan = prompt ("You are a diehard 12th Man and find your seat at the game next to obnoxious 49ers Fans. Do you CHEER extra loud and annoy them back, 'accidently' SPILL your beer on them, FIGHT because you know you can take them?").toUpperCase();
switch(NinerFan) {
    case 'CHEER':
        var loud = prompt ("Are you LOUD? Answer Yes or No.").toUpperCase();
        var field = prompt ("Will they hear you on the field? Answer Yes or No.").toUpperCase();
        if(loud === 'YES' || field === 'YES') {
        console.log("Let's Go Seahawks! The Clink is the loudest stadium in the world because of YOU my friend. Give 'em hell!");}
        else{
        console.log("You might need to practice being louder if you REALLY plan to annoy them!");
        };
        break;
    case 'SPILL':
        var beer = prompt("Did you buy your own beer? Answer Yes or No.").toUpperCase();
        var more = prompt("More importantly, can you replace the beer? Answer Yes or No.").toUpperCase();
        if (beer ==='YES' || 'NO' && more === 'YES') {
        console.log("Do it! There's more beer where that came from---as long as it isn't the end of third quarter that is!");
        } 
        else {console.log("It would be a waste of expensive beer if it was any other fan base! I'll buy the next round!");
        };
          break;
    case 'FIGHT':
        console.log("Sending good vibes your way that the 49er          fan you choose to fight is NOT one of the Seattle undercover cops!");
        break;
    default:
    console.log("You must be a 49er fan!");
};