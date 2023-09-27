'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal'); // Node list - created with querySelectorAll 
//console.log(btnsOpenModal);
const openModal = function (){
    modal.classList.remove('hidden') // dont add dot '.'  only pass name of class to remove no .hidden but hidden 
    overlay.classList.remove('hidden') // same as above manipulating with style class :) 
};

const closeModal = function(){
    modal.classList.add('hidden');//  we manipulating and removing class hidden so our 
    overlay.classList.add('hidden');
};

// we are looping while looping NOD list containing the buttons
for(let i = 0; i < btnsOpenModal.length; i++)
btnsOpenModal[i].addEventListener('click', openModal) // function called  defined before .... < the code dry and restructured a little bit :) 
//console.log('button clicked'); console checked conection with flow

 // displaying text content on the buttons ( practise)...
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

