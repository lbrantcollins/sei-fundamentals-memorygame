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

// Check whether the two cards picked match
function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
}

// Flip a card.  Check for a match if 2nd card drawn
function flipCard() {
	const cardId = this.getAttribute('data-id');
	this.setAttribute('src', cards[cardId].cardImage);
	// console.log("User flipped " + cards[cardId].rank);
	// console.log("Suit: " + cards[cardId].suit);
	// console.log("Image path: " + cards[cardId].cardImage);

	cardsInPlay.push(cards[cardId].rank);
	if (cardsInPlay.length === 2) {
		checkForMatch();
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
	cards.shuffle();
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
	 	cardElement.addEventListener('click', flipCard);
	 	document.getElementById('game-board').appendChild(cardElement);
	}
}

createBoard();