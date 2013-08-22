//Brent Levan
//SDI 1308
//Project 3
// Methods,objects,json


var gameTitle = "Too Fast Too Furious";
var startButton = "Start";
var selectButton = "Select";

console.log(gameTitle);
console.log("To begin press the " + startButton + ".");


var gamerTag = {
    
    "Brent": "Levan5",
    "Nicole": "NukeLifeWife",
    "Brandon": "Master OH",
    "firstPlayer": function(playerSelection){
        
        var firstSelection = this.Brent
        
        return firstSelection
        
    }// end of method accessor
    
}//end of gamerTag object
console.log(gamerTag.firstPlayer() + " has logged in.");

console.log("Choose your game type.");

var newGame = {//method procedure
    
    "type1": "single player",
    "type2": "multiplayer",
    "type3": "online",
    "selection": function(gameType) {
        
        newGame = gameType;
        
        console.log("You have chosen " + newGame + ".");
        
    }
    
}//end of method procedure
    newGame.selection(newGame.type2);
    
console.log("One more player is needed for this game type.");

if (newGame === "multiplayer") {
    console.log(gamerTag.Nicole + " has joined the game.");
    
    } else {
    
        console.log("Add another player or select a different game type.");
    };

;

console.log("Select game style.");    

var gameSetup = {
    
    "map": ["Highway to Hell ", " Devil's Bend ", " Downtown Doom "],
    "numberOfLaps": 5,
    "Difficulty": ["Easy", "Medium", " Hard "],
    "selectionsMade": function(mySelection){
        
        mySelection = (this.map[0] + this.numberOfLaps + this.Difficulty[2])
        
        return mySelection;
        
    }//end of method accessor
    
    
    }// end of gameSetup object

console.log("Here are your selections, " + gameSetup.selectionsMade())
