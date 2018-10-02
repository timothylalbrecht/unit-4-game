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
    numToGet = Math.floor(Math.random() * (120 - 19) + 19);
    console.log(numToGet);

    blueCrystal = Math.floor(Math.random() * (12 - 1) + 1);         
    greenCrystal = Math.floor(Math.random() * (12 - 1) + 1);
    redCrystal = Math.floor(Math.random() * (12 - 1) + 1);
    yellowCrystal = Math.floor(Math.random() * (12 - 1) + 1);

    totalScore = 0;

    $("#goal-number").text(numToGet);                               // display a new goal number
    $("#total-score").text(totalScore);                             // reset to 0

    startGame();
}

function startGame(){
    numToGet = Math.floor(Math.random() * (120 - 19) + 19);
    console.log(numToGet);

    blueCrystal = Math.floor(Math.random() * (12 - 1) + 1);         
    greenCrystal = Math.floor(Math.random() * (12 - 1) + 1);
    redCrystal = Math.floor(Math.random() * (12 - 1) + 1);
    yellowCrystal = Math.floor(Math.random() * (12 - 1) + 1);

    totalScore = 0;

    $("#goal-number").text(numToGet);                               // display a new goal number
    $("#total-score").text(totalScore);                             // reset to 0

    $('.blue').attr("value", blueCrystal);
    var test = $(".blue").attr("value");
    //Test / Debug
    console.log("blue crystal " + test);
    
    $('.green').attr("value", greenCrystal);
    var test = $(".green").attr("value");
    console.log("green crystal " + test);

    $('.red').attr("value", redCrystal);
    var test = $(".red").attr("value");
    console.log("red crystal " + test);
    
    $('.yellow').attr("value", yellowCrystal);
    var test = $(".yellow").attr("value");
    console.log("yellow crystal " + test);
    
    $(".crystal").off().on("click", function()
		{
			var score = $(this).attr("value");
			//Adds to final score when clicked
			totalScore = parseInt(totalScore) + parseInt(score);
			console.log("Crystal Value " +  score);
			console.log("totalScore is now " + totalScore);
			$("#total-score").text(totalScore);

			if(numToGet === totalScore)
			{
				alert("Winner!");
				winTotal++;
				$("#wins").text(winTotal);
				$("#total-score").text(0);
				resetGame();
				
			}
			else if (totalScore > numToGet)
			{
				alert("Game Over!");
				loseTotal++;
				$("#losses").text(loseTotal);
				$("#total-score").text(0);
				resetGame();
			}

		}); 

}


// Run ------------------------------------------------------------------------
startGame();