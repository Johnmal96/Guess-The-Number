'use strict';

let randomNum = Math.floor(Math.random() * 20);
let score = 20;
let highScore = 0;

//reset game score/random number/ interface
function refresh() {
  score = 20;
  randomNum = Math.floor(Math.random() * 20);
  updateTextColor('white');
  document.querySelector('.check').disabled = false;
  document.querySelector('.message').innerHTML = 'Start guessing...';
  document.querySelector('.number').innerHTML = '?';
  document.querySelector('.guess').value = '';
  document.body.style.background = '#222';
  document.querySelector('.score').innerHTML = score;
  document.getElementById('headerText').innerHTML = 'Guess My Number!';
}

//updates the color of text after clicking button
function updateTextColor(color) {
  document.querySelector('.guess').style.color = color;
  document.querySelector('.between').style.color = color;
}

//update to lost game interface
function lostGame() {
  document.body.style.background = 'red';
  document.querySelector('.message').innerHTML =
    'You lost the easiest game on the Internet 😐';
  document.querySelector('.check').disabled = true;
  document.getElementById('headerText').innerHTML = 'You Lost!';
  document.querySelector('.number').innerHTML = randomNum;
}

//check if lost game and edit message
function gameStatus(text) {
  document.querySelector('.message').innerHTML = text;
  score--;
  if (score === 0) {
    lostGame();
  }
  document.querySelector('.score').innerHTML = score;
}

//Event Listener on click / handle click
document.querySelector('.check').addEventListener('click', function () {
  let guessedNum = Number(document.querySelector('.guess').value);
  updateTextColor('white');

  if (!guessedNum && guessedNum !== 0) {
    document.querySelector('.message').innerHTML = 'Please Enter a Number';
  } else if (guessedNum === randomNum) {
    document.body.style.background = '#60b347';
    document.getElementById('headerText').innerHTML = 'Winner!';
    document.querySelector('.message').innerHTML = '🎉 You Guessed Correctly!';
    document.querySelector('.check').disabled = true;
    if (highScore < score) {
      highScore = score;
    }
    document.querySelector('.highscore').innerHTML = highScore;
  } else if (guessedNum > randomNum) {
    gameStatus('📈	Too High!');
    if (guessedNum > 20) {
      updateTextColor('red');
    }
  } else if (guessedNum < randomNum) {
    gameStatus('📉 Too low!');
    if (guessedNum < 0) {
      updateTextColor('red');
    }
  }
});
