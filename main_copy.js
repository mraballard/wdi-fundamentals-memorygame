console.log("JS file is connected to HTML! Woo")

var cards = [];
cards[1] = 'queen';
cards[2] = 'queen';
cards[3] = 'king';
cards[4] = 'king';
var cardsInPlay = [];

//Add card divs to gameboard
var gameBoard = document.getElementById('game-board');
  for (var i = 0; i < 4; i++) {
    var newCard = document.createElement('div');
//    console.log(newCard);
    newCard.className = 'card';
    gameBoard.appendChild(newCard);
  }

//Function to create HTML for cards.
var createBoard = function()  {
  for (var i = 0; i < cards.length; i++) {
    cards[i] = document.getElementsByClassName('card');
    cards[i].innerHTML = '';
    cardElement.setAttribute('data-card', cards[i]);
    cardElement.addEventListener('click', isTwoCards);
  }
}

var isMatch = function(cardsInPlay) {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert('You have a match!');
  }
}

var isTwoCards = function() {
  cardsInPlay.push(this.getAttribute('data-card'));

  if (cardsInPlay.length === 2) {
    isMatch(cardsInPlay);
    cardsInPlay = [];
  }
}
