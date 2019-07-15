<!DOCTYPE html>
<html>
    <head>
        <title>PokeQuiz</title>
        <link  href="css/styles.css" rel="stylesheet" type="text/css" />
        <link href="https://fonts.googleapis.com/css?family=Pacifico" rel="stylesheet">
        <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
        
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
        
        <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>
    
    <body>
		<div class="container text-center">
	
			<header>
				<h1>Pokemon Quiz</h1>
				<h4>#1 What Pokemon is this?</h4>
			</header>
			
			<div id="word"></div>
			
			<div id="man">
				<img src="img/bulbasaur.png" id="pokeImg">
			</div>
			
			<div id="hint">
				<br />
				<button class="hintBtn btn btn-success">Hint</button>
				<br />
				<span class='hint'>Hint:</span>
			</div>
			<div id="letters">
				<h6>Your submission should be in all lower-case.</h6>
				<input type="text" id="submitBox">
				<button class="boxBtn btn btn-success">Submit</button>
			</div>
			
			<div id="won">
				<h2>Correct!</h2>
				<button class="toQst2 btn btn-success">Next Question</button>
			</div>
			
			<div id="lost">
				<h2>Incorrect!</h2>
				<button class="replayBtn btn btn-warning">Try Again</button>
			</div>
			
		</div>
		
		<script src="js/pokeQuiz.js"></script>
    
    </body>
    
    
</html>