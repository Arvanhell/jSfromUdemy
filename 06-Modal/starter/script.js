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

document.addEventListener('keydown', function(goblin) { // e to moj goblin :)
    //console.log(goblin.key); // event handler function
         if ( goblin.key === 'Escape' && !modal.classList.contains('hidden')){
            // console.log('escape was pressed'); // tested working
                // two statement tested && if true then 

                closeModal();  // <-- we call function within this block to close modal if modal doesn't contain modal  class 'hidden' block is executed
            }
    });

// this entire code includes opening and closing pop-up windows after clicking on X esc or the area around the buttons modals

// w calym tym kodzie jest zapisane otwieranie i zamykanie wyskaujacych okien po klknieciu w X esc czy obszar wokol przyciskow