'use strict';
// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const score0El = document.querySelector('#score--0');   // DOM element
const score1El = document.getElementById('score--1');   // DOM element
const current0El = document.getElementById('current--0'); // DOM
const current1El = document.getElementById('current-1');  // DOM
const diceEl = document.querySelector('.dice');         // DOM element
const btnNew = document.querySelector('.btn--new');     // DOM element
const btnRoll = document.querySelector('.btn--roll');   // DOM element
const btnHold = document.querySelector('.btn--hold');   // DOM element

let scores, currentScore, activePlayer, playing; // declared outside but reused inside init function 
// starting condition

const init = function () {

   scores = [0, 0];  // scope only in init function if declared inside 
   currentScore = 0;   // scope only in init function if declared inside
   activePlayer = 0;  // scope only in init function if declared inside
   playing = true; // game is running 
  
  score0El.textContent = 0; // display within DOM 
  score1El.textContent = 0; // display within DOM
  current0El.textContent = 0;
  // current1El.textContent = 0;

  diceEl.classList.add('hidden'); // display with DOM at start is HIDDEN
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};
init();

// switing players

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
          currentScore = 0;
          activePlayer = activePlayer === 0 ? 1 : 0; // working after one player get number 1 is swapping to next player -reasigning the active player
          // 
          player0El.classList.toggle('player--active'); // switch on/ off 
          player1El.classList.toggle('player--active'); // switch on/ off
} 

// First Roll Dice & Rolling dice functionality
btnRoll.addEventListener('click', function() {
  if(playing){
  //1. Generating a random dice roll
  const dice = Math.trunc(Math.random()*6) + 1; // trunc is change floating for example  0.23 to 0 and adding + 1 

  //2. Display dice
  diceEl.classList.remove('hidden'); // adding Dice in DOM
  diceEl.src =`dice-${dice}.png`; // didplay any dice depend roll

  //3. Check for rolled  1: if true, switch to next player
    if (dice !== 1){
        // Add to the current score
        currentScore += dice;

         // changed as displayed bellow to next 
         //current0El.textContent = currentScore // CHANGE LATER 
          document.getElementById(`current--${activePlayer}`).textContent = currentScore;
       // changed in to displayed above
    }else{
        // Switch to next player
          switchPlayer();
        }
      }
  });

btnHold.addEventListener('click', function (){

  if (playing) {
  // 1. add current score to active player score
      scores[activePlayer] += currentScore; 
  // scores[1] = scores[1] + currenScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
  // 2. check if player score is >= 100
  if (scores[activePlayer] >= 100) {
    // Finish the game
      playing = false;
      diceEl.classList.add('hidden'); // removing dice in DOM 
      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
      document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
  }else{
  // switch to next player
    switchPlayer();
    }
  }
});

// back with all set to begining after winning game and clicking the btn New Game
btnNew.addEventListener('click', init); // initialization function called 
