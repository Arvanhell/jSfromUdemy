'use strict';

//////////////////////////////////////
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const nav = document.querySelector('.nav');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////

//* ////////////////  Modal window  ////////////////

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


btnScrollTo.addEventListener('click', function(e) {
  const s1coords = section1.getBoundingClientRect(); 
  console.log(s1coords);

    section1.scrollIntoView({behavior: 'smooth'})
});

// * ////////////////   Page Navigation  ////////////////////////

    //1. Add event listener to common parent element
    //2. Determine what element originated the event
document.querySelector('.nav__links')
    .addEventListener('click', function (e){
      e.preventDefault();  // preventing default behaviour
              //matching strategy 
        if (e.target.classList.contains('nav__link')){
            const id = e.target.getAttribute('href'); 
         document.querySelector(id).scrollIntoView({behavior: 'smooth'});
      }
});
      
//* /////////////  Tabbed component   //////////////////////////
//tabs.forEach(t => t.addEventListener('click', () =>  console.log('TAB')));
//* event delegation 

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab'); // traversing to closest parent element
 
        // Guard clause
  if(!clicked) return;  // if there is no click return imediately it fix return Null
 
        // Remove active classes //
        // <--- Active Tab
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
      clicked.classList.add('operations__tab--active'); 
        //  <--- Active content
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));
  
  // Activate content area 
document.querySelector(`.operations__content--${clicked.dataset.tab}`) // templet literals to manage data tab / clicked
// Adding content to be active and visible instead of none
  .classList.add('operations__content--active');
}); 


//* /////////////  Menu fade animation   //////////////////////////

//Event delegation  parent container for babling up for the target NAV
nav.addEventListener('mouseover', function(e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if(el !== link) el.style.opacity = 0.5;
    })
    logo.style.opacity = 0.5;
  }
});


nav.addEventListener('mouseout', function(e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if(el !== link) el.style.opacity = 1;
    })
    logo.style.opacity = 1;
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

/*
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

//* header.prepend(message); // top of our choosen element
header.append(message);  //*  only on bottom our header element 
//* header.append(message.cloneNode(true))  // everywhere as belong to area 

//* header.before(message); // before
//* header.after(message);   // after 


//* Delete elements

document.querySelector('.btn--close-cookie').addEventListener('click', function(){
  message.remove();
   //* message.parentElement.removeChild(message); // old school, before in use
});
*/
//*-------->    ------------------------------------   <---------
//*---->         187. Styles Atributes and classes          <----
//*-------->    ------------------------------------   <---------

// continue from prevous class

//Style

//message.style.backgroundColor = '#37383d';
//message.style.width = '120%';

//console.log(message.style.color);  // no output
//console.log(message.style.backgroundColor); // rgb(55, 56, 61)

//console.log(getComputedStyle(message).color);  // rgb(187, 187, 187)
//console.log(getComputedStyle(message).height); // 49px

//message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) +  30 + 'px';

//document.documentElement.style.setProperty('--color-primary', 'orangered');


//Attributes

//* const logo = document.querySelector('.nav__logo');
//* console.log(logo.alt);  // Bankist logo
//* console.log(logo.src);  // http://127.0.0.1:8080/img/logo.png
//* console.log(logo.className);  // nav__logo

//Non - standard
//* console.log(logo.designer);  // won't be readed 
//* console.log(logo.getAttribute('designer'));  // now is reading Jonas
//* logo.setAttribute('company', 'Bankist')  // creating 

//* console.log(logo.getAttribute('src')); // img/logo.png

//* const link = document.querySelector('.nav__link--btn')
//* console.log(link.href);   // http://127.0.0.1:8080/#
//* console.log(link.getAttribute('href'));   // #

// Data Attribute

//* console.log(logo.dataset.versionNumber);  // 3.0 // setted in the logo within html

//* Classes
/*
logo.classList.add('c', 'fake');
logo.classList.remove('c', 'fakeclas');
logo.classList.toggle('c', );
logo.classList.contains('c'); // not includes when called in array
*/
// dont use it
// logo.className = 'jonas'

//*-------->    ------------------------------------   <---------
//*---->         188. Implementing smooth scroling          <----
//*-------->    ------------------------------------   <---------

//* const btnScrollTo = document.querySelector('.btn--scroll-to');
//* const section1 = document.querySelector('#section--1');

//* btnScrollTo.addEventListener('click', function(e) {
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
  //  s1coords.left + window.pageXOffset, // curent position plus the current scroll
  //  s1coords.top + window.pageYOffset // curent position plus the current scroll
  //   ); 
//* oldschool
    // window.scrollTo({
    //   left: s1coords.left + window.pageXOffset, 
    //   top: s1coords.top + window.pageYOffset,
    //   behavior: 'smooth',
    // });
   //* section1.scrollIntoView({behavior: 'smooth'})
//*});


//*-------->    ------------------------------------   <---------
//*---->       188. Types of events and event hadnlers      <----
//*-------->    ------------------------------------   <---------
/*

const h1 = document.querySelector('h1');

const alertH1 = function (e) {
  alert('eddEventListener: great you are reading the heading')
};

h1.addEventListener('mouseenter',alertH1 );
setTimeout(() =>  h1.removeEventListener('mouseenter', alertH1), 3000);

/*
//* oldschoool
// h1.onmouseenter = function (e) { 
//   alert('onmouseenter: great you are reading the heading');
// }; 
//*



//*-------->    ------------------------------------   <---------
//*---->   190. Event Propagation: Bubbling and Capturing   <----
//*-------->    ------------------------------------   <---------


//*-------->    ------------------------------------   <---------
//*---->         191. Event Propagation in Practice         <----
//*-------->    ------------------------------------   <---------

// random color rgb(255,255,255)

const randomInt = (min, max) => 
  Math.floor(Math.random() * (max - min + 1 ) + min );
const randomColor = () => `rgb(${randomInt(0,255)}, ${randomInt(0,255)}, ${randomInt(0,255)})`;
console.log(randomColor(0, 255)); 

document.querySelector('.nav__link').addEventListener('click', function (e){
  //console.log('Link');
  this.style.backgroundColor = randomColor();
  console.log('Link', e.target);
  console.log(e.currentTarget === this);

  // stop propagation
  // e.stopPropagation(); // but it is not a good idea only to use sometimes in very complex  aplications with many  handlers with the same event
});
/*
document.querySelector('.nav__links').addEventListener('click', function (e){
  this.style.backgroundColor = randomColor();
  console.log('Container', e.target, e.currentTarget);
});

document.querySelector('.nav').addEventListener('click', function (e){
  this.style.backgroundColor = randomColor();
  console.log('Nav', e.target, e.currentTarget);
});
*/

//*-------->    ------------------------------------   <---------
//*----> 192.Event Delegation: Implementing Page Navigation <----
//*-------->    ------------------------------------   <---------

       
//* document.querySelectorAll('.nav__link') // nodelist then we loop forEach
//* .forEach(function(el){ // acces to current element in the nodelist
//*   el.addEventListener('click', function(e){  // acces to the event 
//*     e.preventDefault();  // preventing default behaviour
    
//*     const id = this.getAttribute('href'); 
//*     //console.log(id);
//*     document.querySelector(id).scrollIntoView({behavior: 'smooth'});
//*   });
//* }); 


//*        // event delegation is //

// *    //1. Add event listener to common parent element
//*     //2. Determine what lelement originated the event

//     document.querySelector('.nav__links').addEventListener('click', function (e){
//       e.preventDefault();  // preventing default behaviour
//*       //console.log(e.target);
//             //*matching strategy
//       if (e.target.classList.contains('nav__link')){
//             const id = e.target.getAttribute('href'); 
//*      //console.log(id);
//      document.querySelector(id).scrollIntoView({behavior: 'smooth'});
//       }
// });


//*-------->    ------------------------------------   <---------
//*---->                193. DOM Traversing                 <----
//*-------->    ------------------------------------   <---------

/*
// selecting h1
 
const h1 = document.querySelector('h1');

// going downwards
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.children);

h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'red';

// Going upwards : parent
console.log(h1.parentNode);
console.log(h1.parentElement);

h1.closest('.header').style.background = 'var(--gradient-secondary)'

h1.closest('h1').style.background = 'var(--gradient-primary)'  

// Going sideways: siblings
console.log(h1.previousElementSibling); // null nothing there
console.log(h1.nextElementSibling);     // h4

console.log(h1.previousSibling);  //text
console.log(h1.nextSibling);    // text

console.log(h1.parentElement.children); // HTML collection

[...h1.parentElement.children].forEach(function(el) {
  if(el !== h1) el.style.transform = 'scale(0.5)';
});
*/
//*-------->    ------------------------------------   <---------
//*---->          194. Building A tabbed component          <----
//*-------->    ------------------------------------   <---------


//*-------->    ------------------------------------   <---------
//*---->      195. Passing Arguments to Event Handlers      <----
//*-------->    ------------------------------------   <---------

