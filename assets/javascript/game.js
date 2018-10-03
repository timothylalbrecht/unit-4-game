// Crystal Collector

// Globals -------------------------------------------------------------------

var winTotal = 0;                                                   // Win and loss Counter
var loseTotal = 0;
var totalScore;

var blueCrystal = Math.floor(Math.random() * (12 - 1) + 1);         // last +1 to get rid of 0 option
var greenCrystal = Math.floor(Math.random() * (12 - 1) + 1);
var redCrystal = Math.floor(Math.random() * (12 - 1) + 1);
var yellowCrystal = Math.floor(Math.random() * (12 - 1) + 1);

// ---------------------------------------------------------------------------

function resetGame() {
    numToGet = Math.floor(Math.random() * (120 - 19) + 19);         // get a random nuumber between 20-119
    console.log(numToGet);

    blueCrystal = Math.floor(Math.random() * (12 - 1) + 1);         // generates a random number between 1-11 for each crystal
    greenCrystal = Math.floor(Math.random() * (12 - 1) + 1);
    redCrystal = Math.floor(Math.random() * (12 - 1) + 1);
    yellowCrystal = Math.floor(Math.random() * (12 - 1) + 1);

    totalScore = 0;                                                 // game starts with 0 points

    $("#goal-number").text(numToGet);                               // display a new goal number
    $("#total-score").text(totalScore);                             // reset to 0

    startGame();
}

function startGame(){                                               // reset and start both reference each other
    numToGet = Math.floor(Math.random() * (120 - 19) + 19);
    console.log(numToGet);

    blueCrystal = Math.floor(Math.random() * (12 - 1) + 1);         
    greenCrystal = Math.floor(Math.random() * (12 - 1) + 1);
    redCrystal = Math.floor(Math.random() * (12 - 1) + 1);
    yellowCrystal = Math.floor(Math.random() * (12 - 1) + 1);

    totalScore = 0;

    $("#goal-number").text(numToGet);                               // display a new goal number
    $("#total-score").text(totalScore);                             // reset to 0

    $('.blue').attr("value", blueCrystal);                          // for each crystal, assigns an attribute name of 'value' and an actual value of ______crystal
    //var blueNum = $(".blue").attr("value");
    //console.log("blue crystal " + blueNum);                       // test to make sure the random numbers work
    $('.green').attr("value", greenCrystal);
    $('.red').attr("value", redCrystal);
    $('.yellow').attr("value", yellowCrystal);
    
    $(".crystal").off().on("click", function()                      // references the crystal class on html. When clicked....
		{
			var score = $(this).attr("value");                      // assign the random value to each crystal
			totalScore = parseInt(totalScore) + parseInt(score);    // change values to numbers as .attr starts as a string
			console.log("Crystal Value " +  score);
			console.log("totalScore is now " + totalScore);
			$("#total-score").text(totalScore);                     // print the new total score

			if(numToGet === totalScore)
			{
				alert("Winner!");
				winTotal++;
				$("#wins").text(winTotal);                          // add 1 to wins and print to page
				$("#total-score").text(0);
				resetGame();
				
			}
			else if (totalScore > numToGet)
			{
				alert("Game Over!");
				loseTotal++;
				$("#losses").text(loseTotal);                       // add 1 to loss and print to page
				$("#total-score").text(0);
				resetGame();
			}

		}); 

}


// Run ------------------------------------------------------------------------
startGame();