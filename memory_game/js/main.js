// Set up the array of cards: card info and path to images
var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}
];
var cardsInPlay = [];

// Check whether the two cards picked match and reset the game board
function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!\n Click OK to play again with re-shuffled cards!");
		cards = cards.shuffle();
	} else {
		alert("Sorry, try again.");
	}
	resetBoard();
}

// Reset the game board after user cho0ses two cards and gets a response
function resetBoard() {
	var theBoard = document.getElementById('game-board');
	for (var i = 0; i < cards.length; i++) {
		theBoard.removeChild(theBoard.childNodes[0]);
	}
	createBoard();
}

// Flip a card.  Check for a match if 2nd card drawn
function flipCard() {
	const cardId = this.getAttribute('data-id');
	// Change the image to flip the card over
	this.setAttribute('src', cards[cardId].cardImage);
	// Unfortunately, the 2nd card is not flipped since the update to the DOM
	// does not occur until the flipCard() function ends, 
	// but the alert in checkForMatch() pops up before flipcard() ends

	cardsInPlay.push(cards[cardId].rank);
	if (cardsInPlay.length === 2) {
		checkForMatch();
   	cardsInPlay.pop();
	   cardsInPlay.pop();
	}
}

// Code to shuffle an array
Array.prototype.shuffle = function() {
    var input = this;
    for (var i = input.length-1; i >=0; i--) {
        var randomIndex = Math.floor(Math.random()*(i+1)); 
        var itemAtIndex = input[randomIndex]; 
        input[randomIndex] = input[i]; 
        input[i] = itemAtIndex;
    }
    return input;
}

// Lay out the display of (shuffled) cards with back of cards showing
function createBoard() {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
	 	cardElement.addEventListener('click', flipCard);
	 	document.getElementById('game-board').appendChild(cardElement);
	}
}

// Shuffle the cards and start the first game
cards = cards.shuffle();
createBoard();