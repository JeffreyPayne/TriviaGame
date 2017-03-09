
var correctAnswers = 0;

var incorrectAnswers = 0;

var seconds = Math.floor((distance % (1000 * 60)) / 1000);

function checkAnswers() {
	// here is where we put the code that will execute, when the function is called
	// 4. When timer runs out check to see what questions the player got right or wrong
	alert("You got " + correctAnswers + "correct  and " + incorrectAnswers + "incorrect.");


   // 5. Option to restart the game appears

}

// 1. Start timer
$( document ).ready(function() {
    //when document is ready, run the below code
    setTimeout(checkAnswers(), 3000);
});

// 2. Three multiple choice questions appear with three answer choices buttons


// 3. Player goes through each question and attempts to answer each question in the alloted time
// when player clicks an answer, update the variables to add one to the correct answers or the incorrect answers
// this selects an element with id of "question one"
$("#q-one-true").click(function() {
	// when the html element with the target id is clicked, the below code will run
	correctAnswers += 1;
});

$("#q-one-false").click(function() {
	// when the html element with the target id is clicked, the below code will run
	incorrectAnswers += 1;
});




