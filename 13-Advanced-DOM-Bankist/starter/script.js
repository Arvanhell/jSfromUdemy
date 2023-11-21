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
        //* Guard clause
  if(!clicked) return;  // if there is no click return imediately it fix return Null
 
        //* ------->    Remove active classes //
        // <--- Active Tab
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
      clicked.classList.add('operations__tab--active'); 
        //  <--- Active content
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));
  
  // -------->  Activate content area 
document.querySelector(`.operations__content--${clicked.dataset.tab}`) 
// templet literals to manage data tab / clicked
// Adding content to be active and visible instead of none
  .classList.add('operations__content--active');
}); 

//* /////////////  Menu fade animation   //////////////////////////

// Refactoring ---> to dry code
const handleHover =  function(e, opacity) {
  //console.log(this, e.currentTarget);
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img'); 

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};
// Passing 'argument  into handler 
nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

//* /////////////  Sticky Navigation:  //////////////////////////

//* creating the observer 
const header = document.querySelector('header')
const navHeight = nav.getBoundingClientRect().height;
// console.log(navHeight)
const stickyNav = function(entries) {
  const [entry] = entries;
  //console.log(entry);
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px` // box of pixels of the header intersetion margin 
});
headerObserver.observe(header);

//* ///////////// Reveal Section : ////////////////////////////////

const allSections = document.querySelectorAll('.section');

const revealSection = function(entries, observer) {
    const [entry] = entries;
    //console.log(entry);

    if (!entry.isIntersecting) return; 

    entry.target.classList.remove('section--hidden');
    observer.unobserve(entry.target);
};
  const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.15,
});

  allSections.forEach(function (section) {
    sectionObserver.observe(section); // observing each section before reveal
    section.classList.add('section--hidden'); // adding for each section hidden class
});

//*/ //////////////// Lazy loading images //////////////////

      //* -------> Selecting all img with property of data-src !
const imgTarget = document.querySelectorAll('img[data-src]'); 
const loadImg = function (entries, observer) {

  const [entry] = entries;
                          //console.log(entry);// showing that img-Entry are fired corectly
      if (!entry.isIntersecting) return;

      //* -------> Replace src with data-src
      entry.target.src = entry.target.dataset.src;

      //* --------> Load Img event -------> 
      entry.target.addEventListener('load', function() {
            entry.target.classList.remove('lazy-img');
      });
      //* ------> stop observing 
      observer.unobserve(entry.target);
};
      //* -------> Create img observer
const imgObserver = new IntersectionObserver(loadImg, 
  {
root: null,
threshold: 0,
rootMargin: '200px'
});

imgTarget.forEach(img => imgObserver.observe(img));
///
//* /////////////////// Sliders  ///////////////////

const slider = function() {

const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');
const dotContainer = document.querySelector('.dots');
        let curSlide = 0;
const maxSlide = slides.length;  // how many slides available to go  
// Functions
const createDots = function (){ // create dots function
  slides.forEach(function(_, i) { // conventional var we don't even need  '_'
    dotContainer.insertAdjacentHTML('beforeend', `<button class="dots__dot" data-slide="${i}"></button>`); //  adding index to looping forEAch
  }); 
};
/////////////////////
const goToSlide = function(slide) {
  slides.forEach((s, i) => (s.style.transform = `translateX(${100 * (i - curSlide)}%)`)  // logic here 
  );
};
const activateDot = function(slide) {
  document
  .querySelectorAll('.dots__dot')
  .forEach(dot => dot.classList.remove('dots__dot--active')); // removing active class for dots
 document
  .querySelector(`.dots__dot[data-slide="${slide}"]`)
  .classList.add('.dots__dot--active') // adding active class for dots
};
// Next slide <------ depends on btnRight
const nextSlide = function() {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  }
  curSlide++
          goToSlide(curSlide);
          activateDot(curSlide);
};
// Previous slide <----- depends on btnLeft
const prevSlide = function() {
  if (curSlide === 0) {
    curSlide = maxSlide -1;
  }else{
  curSlide--;
  }
  goToSlide(curSlide);
  activateDot(curSlide);
};

const init = function () { // initialization 
  goToSlide(0);
  createDots();

  activateDot(0);
}
init();

//Event Handler
btnRight.addEventListener('click', nextSlide);
btnLeft.addEventListener('click', prevSlide);
 
 document.addEventListener('keydown', function (e) {
  if (e.key ==='ArrowLeft') prevSlide(); // key event left
  e.key === 'ArrowRight' && nextSlide(); // key event right
});

// event delegation for dots
    dotContainer.addEventListener('click', function (e){
      if (e.target.classList.contains('dots__dot')) {
        const {slide} = e.target.dataset;
        goToSlide(slide);
        activateDot(slide);
     }
  });
};
slider();

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
//* h1.onmouseenter = function (e) { 
//*   alert('onmouseenter: great you are reading the heading');
//* }; 
//*

//*-------->    ------------------------------------   <---------
//*---->   190. Event Propagation: Bubbling and Capturing   <----
//*-------->    ------------------------------------   <---------

//*-------->    ------------------------------------   <---------
//*---->         191. Event Propagation in Practice         <----
//*-------->    ------------------------------------   <---------

//* random color rgb(255,255,255)

const randomInt = (min, max) => 
  Math.floor(Math.random() * (max - min + 1 ) + min );
const randomColor = () => `rgb(${randomInt(0,255)}, ${randomInt(0,255)}, ${randomInt(0,255)})`;
console.log(randomColor(0, 255)); 

document.querySelector('.nav__link').addEventListener('click', function (e){
  //*console.log('Link');
  this.style.backgroundColor = randomColor();
  console.log('Link', e.target);
  console.log(e.currentTarget === this);

  //* stop propagation
  //* e.stopPropagation(); // but it is not a good idea only to use sometimes in very complex  aplications with many  handlers with the same event
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
//* selecting h1 checking the connections in child 
 
const h1 = document.querySelector('h1');

//* going downwards
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.children);

h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'red';

//* Going upwards : parent
console.log(h1.parentNode);
console.log(h1.parentElement);

h1.closest('.header').style.background = 'var(--gradient-secondary)'

h1.closest('h1').style.background = 'var(--gradient-primary)'  

//* Going sideways: siblings
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

/*
//*with a callback
nav.addEventListener('mouseover', function(e) {
  handleHover(e, 0.5);
});
nav.addEventListener('mouseout', function(e) {
  handleHover(e, 1);
});

//*Event delegation  parent container for babling up for the target NAV
nav.addEventListener('mouseover', function(e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img'); 
    //* we could select by a class name 
    //*but to learn  we use .closest 

    siblings.forEach(el => {
      if(el !== link) el.style.opacity = 0.5; // if not a link change opacity 
    })
    logo.style.opacity = 0.5; // and change opacity for logo  
  }
});
nav.addEventListener('mouseout', function(e) {    // reverting after mouse out 
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
*/

//*-------->        ------------------------------------         <---------
//*---->   196. Implementing a Sticky Navigation: The Scroll Event    <----
//*-------->         ------------------------------------        <---------

 //console.log(window.scrollY); // position of viewport 
 /*
 const initialCoords = section1.getBoundingClientRect();
 console.log(initialCoords);
 
 window.addEventListener('scroll', function (e){
   //*console.log(window.scrollY); // position of viewport 
       if (window.scrollY > initialCoords.top ) 
       //* if window reach level smaller than coords to top is activating sticky class. /* nav and stickly class at the same time  from css
       nav.classList.add('sticky');
     else nav.classList.remove('sticky');
 });
*/

//*-------->        ------------------------------------         <---------
//*---->      197. A Better Way: The Intersection Observer API        <----
//*-------->         ------------------------------------        <---------

//* Sticky navigation 
/*
//* 3. creating callback function
const obsCallback = function(entries, observer) {    // 3.this callback here willl get call each time when our observed element intersecting the root element will be defined.
  entries.forEach(entry => {
    console.log(entry);
  })
};
const obsOptions = {
  root: null,
  threshold: [0, 0.2]// percentage of intersection at which the observing 3.callback will be call
};
//* 1. creating new section observer
const observer = new IntersectionObserver (obsCallback, obsOptions);
//* 2. observing choosen section
observer.observe(section1);
*/

//*-------->        ------------------------------------         <---------
//*---->            198. Revealing Elements on Scrolling              <----
//*-------->        ------------------------------------         <---------

//*-------->        ------------------------------------         <---------
//*---->                  199. Lazy Loading Images                    <----
//*-------->        ------------------------------------         <---------

//*-------->        ------------------------------------         <---------
//*---->           200. Building a slider component part.1            <----
//*-------->        ------------------------------------         <---------

/* javascript 
const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');

let curSlide = 0;
const maxSlide = slides.length;  // how many slides available to go trough

const gotToSLide = function(slide) {
  slides.forEach((s, i) => (s.style.transform = `translateX(${100 * (i - curSlide)}%)`)  // logic here 
  );
}
gotToSLide(0);

// Next slide <------ depends on btnRight
const nextSlide = function() {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  }
  curSlide++
          gotToSLide(curSlide);
}
// Previous slide <----- depends on btnLeft
const prevSlide = function() {
  if (curSlide === 0) {
    curSlide = maxSlide -1;
  }else{
  curSlide--;
  }
  gotToSLide(curSlide);
}
btnRight.addEventListener('click', nextSlide);
btnLeft.addEventListener('click', prevSlide);
 // curSlide = 1 : -100%, 0%, 100%, 200%

  document.addEventListener('keydown', function (e) {
  if (e.key ==='ArrowLeft') prevSlide(); // key event left
  e.key === 'ArrowRight' && nextSlide(); // key event right
});
 */
//* //// html 
//  ...html   
//  <div class="slider">
//   <div class="slide"><img src="img/img-1.jpg" alt="Photo 1" /></div>
//         <div class="slide"><img src="img/img-2.jpg" alt="Photo 2" /></div>
//         <div class="slide"><img src="img/img-3.jpg" alt="Photo 3" /></div>
//         <div class="slide"><img src="img/img-4.jpg" alt="Photo 4" /></div>
//         <button class="slider__btn slider__btn--left">&larr;</button>
//         <button class="slider__btn slider__btn--right">&rarr;</button>
//         <div class="dots"></div>
//       </div>
//  ...
//*-------->        ------------------------------------         <---------
//*---->           200. Building a slider component part.2            <----
//*-------->        ------------------------------------         <---------

