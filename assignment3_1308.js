//Brent Levan
//SDI 1308
//Project 3
// Methods,objects,json


var gameTitle = "Too Fast Too Furious";
var startButton = "Start";
var selectButton = "Select";
var gamerTags = ["Levan5", "NukeLifeWife", "Master OH"]
var lapsRemaining = 5

console.log(gameTitle);
console.log("To begin press the " + startButton + ".");


var gamerTag = {
    
    "Brent": "Levan5",
    "Nicole": "NukeLifeWife",
    "Brandon": "Master OH",
    "firstPlayer": function(playerSelection){
        
        var firstSelection = playerSelection
        
        return firstSelection
        
        playerSelection(gamerTag.Brent);
    }// end of method accessor
    
    };//end of gamerTag object
   console.log(gamerTag.firstPlayer() + " has logged in."); 
;    

console.log("Choose your game type.");

var newGame = {//method procedure
    
    "type1": "single player",
    "type2": "multiplayer",
    "type3": "online",
    "selection": function(gameType) {
        
        newGame = gameType;
        
    }
    
    }//end of method procedure
    newGame.selection(newGame.type2);
    console.log("You have chosen " + newGame + ".");
;    
    
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

var carSetup = {
    "gameType": function(gamer,car,color,transmission){
        
        for (var i=0, a=3; i<a; i++) {
            
            selectionMade = gamer,car,color, transmission;
           console.log(gamer[i],car[i] + color[i] + transmission[i]);
        
        }
        return selectionMade
        }



        }//end of carSetup object
        
;        

carSetup.gameType([" Levan5 ", " NukeLifeWife ", " Master OH " ],
                  [" Ford ", " Chevy ", " Dodge "],
                  [" Red "," Blue "," Yellow "],
                  [" Automatic "," Standard "," Paddle Shifter "])

var upgrades ={
    
    "upgrade1": "tires",
    "upgrade2": "suspension",
    "upgrade3":["injectors"," supercharger"],
    "upgrade4":"transmission",
    
    "totalUpgrades": function(){
        
        var totalPackage = this.upgrade1 + " , " + this.upgrade3;
        return totalPackage;
    },
    
    "newPackage": function(totalPackage1){
    
        this.upgrade1 = totalPackage1;

    }//end of method mutator

    };//end of upgrades object

    console.log(gamerTags[0] + " upgraded " + upgrades.totalUpgrades());

    upgrades.newPackage(" motor ");

    console.log(gamerTags[1] + " upgraded " + upgrades.totalUpgrades());
    console.log(gamerTags[2] + " upgraded" + upgrades.upgrade1 + "and " + upgrades.upgrade2)
   
;

console.log("We're Ready to race!");

var lapsLeft = function(numberOfLaps) {
    
    while (numberOfLaps >=3) {
        console.log(numberOfLaps + " laps left to go, " + gamerTags[1] + " is in the lead.");
      
        almostDone = numberOfLaps --;
    
        }
    
        console.log(numberOfLaps + " laps left to go, " + gamerTags[0] + " is in the lead.");
        console.log("The race is over!");
        return almostDone;
    
};

         lapsLeft(lapsRemaining);

    console.log(gamerTags[0] + " won the race!");
    
;


