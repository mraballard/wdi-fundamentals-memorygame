console.log("JS file is connected to HTML! Woo")

var cards = [];
cards[0] = 'queen';
cards[1] = 'queen';
cards[2] = 'king';
cards[3] = 'king';
var cardsInPlay = [];

//Function to create HTML for cards.
var createBoard = function()  {
  var gameBoard = document.getElementById('game-board');
  var newCard = [];
  for (var i = 0; i < cards.length; i++) {
    newCard[i] = document.createElement('div');
    newCard[i].className = 'card';
    gameBoard.appendChild(newCard[i]);
    newCard[i].setAttribute('data-card', cards[i]);
    newCard[i].addEventListener('click', isTwoCards);
  }
}

var isMatch = function(cardsInPlay) {
  var resetCards = document.querySelectorAll('.card');
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert('You have a match!');
  }
  else {
    alert('Sorry, not a match!')
  }
  for (var i = 0; i < resetCards.length; i++) {
    resetCards[i].innerHTML = '';
  }
}

var isTwoCards = function() {
  cardsInPlay.push(this.getAttribute('data-card'));
  if (this.getAttribute('data-card') === 'king') {
    this.innerHTML = '<img src="king-clubs.png" alt="King of Clubs" />';
  }
  else {
    this.innerHTML = '<img src="queen-clubs.png" alt="Queen of Clubs" />';
  }
  if (cardsInPlay.length === 2) { //If user has clicked two cards, run test.
    isMatch(cardsInPlay);
    cardsInPlay = [];
  }
}

createBoard();
