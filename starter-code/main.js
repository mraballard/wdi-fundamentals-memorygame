console.log("JS file is connected to HTML! Woo")

var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

//Add card divs to gameboard
var gameBoard = document.getElementById('game-board');
  for (var i = 0; i < 4; i++) {
    var newCard = document.createElement('div');
//    console.log(newCard);
    newCard.className = 'card';
    gameBoard.appendChild(newCard);
  }

//Function to create HTML for cards. Then, append to div with class board.
var createBoard = function()  {
  for (var i = 0; i < 4; i++) {
    var cards = document.getElementsByClassName('card');
    cards[i].innerHTML = '';
  }
}






//User clicks card. selected card

/*if (cardTwo===cardFour) {
  alert("You found a match!");
}
  else {
    alert("Sorry, try again.");
}
*/
