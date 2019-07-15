var selectedWord = "";
var selectedHint = "";
var board = [];
var remainingGuesses = 3;
var boxval = "";

var words = [{ word: "bulbasaur", hint: "Grass Starter"},
			{word: "charmander", hint: "Fire Starter"},
			{word: "squirtle", hint: "Water Starter"},
			{word: "pikachu", hint: "The Electric Mouse Pokemon"},
			{word: "jigglypuff", hint: "This Pokemon likes to sing"},
			{word: "eevee", hint: "This pokemon has 8 evolutions"}];

//Listener
window.onload = startGame();

$(".boxBtn").on("click", function() {
	boxVal = $("#submitBox").val();
	console.log("You entered: " + boxVal);
	checkSubmission(boxVal);
	if (boxVal != selectedWord){
		appendGuesses();
	}
});

$(".hintBtn").on("click", function() {
	remainingGuesses -=1;
	updatePoke();
	updateHint();
	$('.hint').show();
	appendGuesses();
	disableButton($(this));
});

$(".toQst2").on("click", function() {
	window.location.href = "q2.html";
});

$(".toQst3").on("click", function() {
	window.location.href = "q3.html";
});

$(".replayBtn").on("click", function() {
	window.location.href = "index.php";
});

function startGame() {
	pickPoke();
	initBoard();
	updateBoard();
	updatePoke();
}

function pickPoke() {
	var randomInt = Math.floor(Math.random() * words.length);
	selectedWord = words[randomInt].word;
	selectedHint = words[randomInt].hint;
}

function checkSubmission(boxVal) {
	if (boxVal == selectedWord){
		endGame(true);
	} 
	else {
		remainingGuesses -= 1;
		if (remainingGuesses <= 0) {
			endGame(false);
		}
	}
}

function updateBoard() {
	$("#word").empty();
	
	for (var letter of board) {
		document.getElementById("word").innerHTML += letter + " ";
	}
}

function updateHint() {
	$("#hint").append("<br />" + selectedHint)
}

function appendGuesses() {	
	$("#hint").append("<br /> Remaining Guesses: " + remainingGuesses)
}

function initBoard() {
	for (var letter in selectedWord) {
		board.push("_");
	}
}

function updatePoke() {
	$("#pokeImg").attr("src", "img/" + selectedWord + ".png");
}

function endGame(win) {
	$("#letters").hide();

	if (win) {
		$('#won').show();
	} else {
		$('#lost').show();
	}
}

function disableButton(btn) {
	btn.prop("disabled", true);
	btn.attr("class", "btn btn-danger")
}

