'use strict';

// Generating a random secret number
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// Selecting elements
const message = document.querySelector('.message');
const scoreElement = document.querySelector('.score');
const numberElement = document.querySelector('.number');
const guessInput = document.querySelector('.guess');
const highscoreElement = document.querySelector('.highscore');
const body = document.querySelector('body');

// Function to display messages dynamically
const displayMessage = msg => {
  message.textContent = msg;
};

// Event listener for "Check!" button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(guessInput.value);

  // When there's no input
  if (!guess) {
    displayMessage('⛔ No number entered!');

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    numberElement.textContent = secretNumber;
    body.style.backgroundColor = '#60b347';
    numberElement.style.width = '30rem';

    // Update highscore if the score is higher
    if (score > highscore) {
      highscore = score;
      highscoreElement.textContent = highscore;
    }

    // When the guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      scoreElement.textContent = score;
    } else {
      displayMessage('💥 You lost the game!');
      scoreElement.textContent = 0;
    }
  }
});

// Event listener for "Again!" button to reset the game
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  scoreElement.textContent = score;
  numberElement.textContent = '?';
  guessInput.value = '';

  body.style.backgroundColor = '#222';
  numberElement.style.width = '15rem';
});
