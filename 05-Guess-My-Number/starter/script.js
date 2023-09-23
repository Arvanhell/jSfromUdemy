"use strict";

/*
console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = "Correct Number!";

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;

document.querySelector(".guess").value = 23;
console.log(document.querySelector(".guess").value);
*/

//secret number we define outside function handler
// we declaring here the secret number to guess
let secretNumber = Math.trunc(Math.random() * 20) + 1;
//  DOM maipulating within the secret number we added
let score = 20;

let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    //if there number is not given we will get message in DOM NO NUMER because field is empty.
// when there is no input
    document.querySelector(".message").textContent = "👎 No Number!";

// when player wins
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🫵 Correct Number!";

   document.querySelector(".number").textContent = secretNumber;

  document.querySelector('body').style.backgroundColor = '#60b347';

  document.querySelector('.number').style.width = '30rem';
// new score as highscore
  if(score > highscore){
    highscore = score;
    document.querySelector('.highscore').textContent = highscore;
  }

//when guess is to high
  } else if (guess > secretNumber) {
    if (score > 0) {
      document.querySelector(".message").textContent = " 👆 To high !";
      score = score - 2;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = " 🫵 You lost the game! 🫵";
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#FF0000';
      document.querySelector('.again').style.backgroundColor = '#ff2';
    }
//when guess is to low    
  } else if (guess < secretNumber) {
      if (score > 1) {
      document.querySelector(".message").textContent = " 👇 To low !";
      score = score - 2; //decreasing by decrementation by 1
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = " 🫵 You lost the game! 🫵";
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#FF0000';
      document.querySelector('.again').style.backgroundColor = '#ff2';
    }
  }
}); 

document.querySelector('.again').addEventListener('click', function(){
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor ='#222';
  document.querySelector('.again').style.backgroundColor = '#fff';
  document.querySelector('.number').style.width = '15rem';

});

//console.log(document.querySelector(".check"));
//create event handler
//  the score to decrease when wrong number each time ...
//
/*
challenge #1
Implelment a game functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler.
2. In the handler function, restore initial values of the score and neumber variables.
3. Restore the initial conditions of the message, number, score and guess input field.
4. Also restore the original background color (#222)
and number width (15rem)
*/