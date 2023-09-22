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
const secretNumber = Math.trunc(Math.random() * 20) + 1;
//  DOM maipulating within the secret number we added
let score = 20;
document.querySelector(".number").textContent = secretNumber;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    //if there number is not given we will get message in DOM NO NUMER because field is empty.
    document.querySelector(".message").textContent = "👎 No Number!";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🫵 Correct Number!";
  } else if (guess > secretNumber) {
    if (score > 0) {
      document.querySelector(".message").textContent = " 👆 To high !";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game!👀";
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
    document.querySelector(".message").textContent = " 👇 To low !";
    score--; //decreasing by decrementation by 1
    document.querySelector(".score").textContent = score;
  } else {
    document.querySelector(".message").textContent = "You lost the game! 👀";
    document.querySelector('.score').textContent = 0; 
  }
}
}); 
//console.log(document.querySelector(".check"));
//create event handler

//  the score to decrease when wrong number each time ..