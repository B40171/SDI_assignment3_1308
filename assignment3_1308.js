//Brent Levan
//SDI 1308
//Project 3
// Methods,objects,json


var newGame = {
    
    "type1": "single player",
    "type2": "multiplayer",
    "type3": "online",
    "selection": function(gameType) {
        
        newGame = gameType
        
        console.log("You have chosen " + newGame + ".");
        
    }
    
}
    newGame.selection(newGame.type2);