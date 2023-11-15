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
    
    //* 👉 We can write JavaScipt to create, modify and delete HTML elements;
       //* set styles, classes and atributtes, and listen and respond to events;
    
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

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log();

console.log(document.getElementsByClassName('btn'));

//* Creating and inserting elements.

const message = document.createElement('div');
message.classList.add('cookie-message');
message.textContent = 'We use cookies for improved functionality and analytics.';
message.innerHTML = 
'We use cookies for improved functionality and analytics. <button class=" btn btn--close-cookie">Cookie!</button>'; 

//header.prepend(message); // top of our choosen element
header.append(message);  //*  only on bottom our header element 
//header.append(message.cloneNode(true))  // everywhere as belong to area 

// header.before(message); // before
// header.after(message);   // after 


//* Delete elements

document.querySelector('.btn--close-cookie').addEventListener('click', function(){
  message.remove();
   //message.parentElement.removeChild(message); // old school, before in use
});

//*-------->    ------------------------------------   <---------
//*---->         187. Styles Atributes and classes          <----
//*-------->    ------------------------------------   <---------

// continue from prevous class

//Style
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(message.style.color);  // no output
console.log(message.style.backgroundColor); // rgb(55, 56, 61)

console.log(getComputedStyle(message).color);  // rgb(187, 187, 187)
console.log(getComputedStyle(message).height); // 49px

message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) +  30 + 'px';

//document.documentElement.style.setProperty('--color-primary', 'orangered');


//Attributes

const logo = document.querySelector('.nav__logo');
console.log(logo.alt);  // Bankist logo
console.log(logo.src);  // http://127.0.0.1:8080/img/logo.png
console.log(logo.className);  // nav__logo

//Non - standard
console.log(logo.designer);  // won't be readed 
console.log(logo.getAttribute('designer'));  // now is reading Jonas
logo.setAttribute('company', 'Bankist')  // creating 

console.log(logo.getAttribute('src')); // img/logo.png

const link = document.querySelector('.nav__link--btn')
console.log(link.href);   // http://127.0.0.1:8080/#
console.log(link.getAttribute('href'));   // #

// Data Attribute

console.log(logo.dataset.versionNumber);  // 3.0 // setted in the logo within html

//* Classes
logo.classList.add('c', 'fake');
logo.classList.remove('c', 'fakeclas');
logo.classList.toggle('c', );
logo.classList.contains('c'); // not includes when called in array

// dont use it
// logo.className = 'jonas'

//*-------->    ------------------------------------   <---------
//*---->         188. Implementing smooth scroling          <----
//*-------->    ------------------------------------   <---------

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function(e) {
  //const s1coords = section1.getBoundingClientRect(); 
  //console.log(s1coords);

  //console.log(e.target.getBoundingClientRect());

  //console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);

  //console.log('height/width viewport',
  //document.documentElement.clientHeight,
  //document.documentElement.clientWidth
  //);

  //scrolling calculating positions
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset, // curent position plus the current scroll
  //   s1coords.top + window.pageYOffset // curent position plus the current scroll
  //   ); 

 //* oldschool
    // window.scrollTo({
    //   left: s1coords.left + window.pageXOffset, 
    //   top: s1coords.top + window.pageYOffset,
    //   behavior: 'smooth',
    // });

    section1.scrollIntoView({behavior: 'smooth'})
});


//*-------->    ------------------------------------   <---------
//*---->       188. Types of events and event hnadlers      <----
//*-------->    ------------------------------------   <---------