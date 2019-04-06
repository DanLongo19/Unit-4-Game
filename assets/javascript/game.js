// Variables
var ballButton = {
    baseball: {
        value: 0,
    },
    basketball: {
        value: 0,
    },
    hockeyPuck:{
        value: 0,
    },
    soccerBall:{
        value: 0,
    }
}

var startingScore = 0;
var targetScore = 0;
var winCount = 0;
var lossCount = 0;

// Functions
var getRandom = function(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// start the game and get a target score to try to match 
var startGame = function(){
    startingScore = 0;
    targetScore = getRandom(1, 100);
    // console.log('number');
}
// assing values to balls/buttons
ballButton.baseball.value = getRandom(1, 10);

ballButton.basketball.value = getRandom(1, 10);

ballButton.hockeyPuck.value = getRandom(1, 10);

ballButton.soccerBall.value = getRandom(1, 10);

console.log("Target Score: " + targetScore);
console.log("Baseball: " + ballButton.baseball.value + " | Basketball: " + ballButton.basketball.value + " | HockeyPuck: " + ballButton.hockeyPuck.value + " | SoccerBall: " + ballButton.soccerBall.value);

// update html
$("#yourScore").html(startingScore);
$("#gameScore").html(targetScore);

var addValues = function(ballButton){
    startingScore = startingScore + ballButton.value;
    // console.log("Your Score: " + startingScore);
    // update html with the users score
    $("yourScore").html(startingScore);
    didYouWin();
}
// check if the user got to the target score for win/lose (called above)
var didYouWin = function(){
    if (startingScore > targetScore) {
        alert("You've Gone Over! You Lose!");
        console.log('You Lost');
        lossCount++;
        $("losses").html(lossCount);
        // restart
        startGame();
    }
        else if (startingScore = targetScore){
            alert('Congratulations! You Win!');
            console.log('You Win!');
            winCount++;
            $('wins').html(winCount);
        // restart
        startGame();
        }
    }
// Proccess (click the balls to get the score up)
startGame();

$('#baseball').click(function(){
    console.log("click");
    addValues(ballButton.baseball);
})
$('#basketball').click(function(){
    console.log("click");
    addValues(ballButton.basketball);
})
$('#hockeyPuck').click(function(){
    console.log("click");
    addValues(ballButton.hockeyPuck);
})
$('#soccerBall').click(function(){
    console.log("click");
    addValues(ballButton.soccerBall);
})

// Pseudocode
// 1. Make the balls clickable
// 2. Give each ball a value that is recognized upon click
// 3. Make sure each value is added together
// 4. The values must equal 99 or else (to win)
    // - if over - You Lose
            // Note - the game must recognize 99 as the target value 

// NOTES:
// 1. the target score won't populate with a random number
// 2. I can't get anything to print through HTML (tried both .innerhtml and .html) - now messing with the "ids" - do i want to use -- return this.sftartingScore + " " + this.targetScore
// 3. I get a win no matter what on the first click but any click after gives me the loss alert 
