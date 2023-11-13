'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach;

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});


//*-------->        ------------------------------------      <---------
//*-------->           184. PROJECT: "Bankist" Website        <---------
//*-------->        ------------------------------------      <---------

//*-------->        ------------------------------------      <---------
//*-------->           185. How the DOM really works          <---------
//*-------->        ------------------------------------      <---------



/* What is DOM 
Interface between JS and browser
    //* 👉 Allows us to make JavaScript interact with the browser;
    
    //* 👉 We can write HavaScipt to create, modify and delete HTML elements;
       //* set styles, slasses and atributtes; and listen and respond to events;
    
   //* 👉 DOM tree is generated from an HTML document, which we can then interact with;
   
   //*  👉 DOM is a very complex API Application Programming Interface 
   //* that contains lots of methods and properties to interact with the DOM tree

*/
/*
represented by JavaScript object                            
.textContent                     //* Event Target    .addEventlistener()
.childNides   //*                                 .removeEventListener()
.parentNode                      ⬇️            ⬇️
.cloneNode()
//*                            Node  :         Window: 

§ //* Text <p> Paragraph</p>                                                          
§ //* Comment <!-- Comments -->
§ //* Document 
        👉 .querySelector()
        👉 .createElement()
        👉 .getElementById()
§ //* Element :
      ⬇️
  .innerHTML
  .classList
  .children
  .parentLement
  .append()
  .remove()
  .insertAdjacentHTML()
  .querySelectior()
  .closest()
  .matches()
  .scrollIntoView()
  .setAtributte()

  //*   ==> HTMLElement 
  //*   ==> HTMLButtonElement ... HTMLDivElement (One different type of HTMLElement per HTML element)
  
            INHERITANCE OF METHOIDS AND PROPERTIES
            Example:
              Any HTMLElement will have acces to 
              .addEventlistener(),
                .cloneNode() or .closest() methods.2

*/


//*-------->        ------------------------------------        <---------
//*---->       186. Selecting, Creating, and Deleting Elements       <----
//*-------->        ------------------------------------        <---------

console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);