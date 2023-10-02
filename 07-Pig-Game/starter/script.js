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


score0El.textContent = 0; // display within DOM
score1El.textContent = 0; // display within  DOM
diceEl.classList.add('hidden'); // display with DOM at start is HIDDEN

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0; // 
//
// First Roll Dice & Rolling dice functionality
btnRoll.addEventListener('click', function() {
  //1. Generating a random dice roll
  const dice = Math.trunc(Math.random()*6) + 1; // trunc is change floating for example  0.23 to 0 and adding + 1 

  //2. Display dice
  diceEl.classList.remove('hidden');
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
          document.getElementById(`current--${activePlayer}`).textContent = 0;
          currentScore = 0;
          activePlayer = activePlayer === 0 ? 1 : 0; // working after one player get number 1 is swapping to next player -reasigning the active player
          // 
          player0El.classList.toggle('player--active'); // switch on/ off 
          player1El.classList.toggle('player--active'); // switch on/ off
          //
    }
});