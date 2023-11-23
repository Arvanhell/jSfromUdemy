'use strict';


//* <---------------------------------------------------------------------->
//* <----------  206. What is Object-Oriented Programing   ---------------->
//* <----------------------------------------------------------------------> 

//* ----------->  OOP Baby OOP BABY !!!!!!
//* 👉 Object oriented programing paradigm based on the concept of objects;
//*   STYLE of code 'how' we write and organize code
//* 👉 We ise object to model ( describe) real- world or abstract features;
        // eg user or todo list item // real -world
        //abstract e.g HTML component of data structure
//* 👉 Object may contain data (properties) and code (methods). By using objects, we
//*  pack data and corresponding behavior into one block;
//* 👉 In OOP, objectes are self-contained pieces / blocks of code;
//* 👉 Objects are building blocks of applications, and interact with one another;
//* 👉 Interaction happen through a public interface (API); methods that the code
//* outside of the object can access and ise to communicate with the object;
//* 👉 OOP was developed with the goal of organizing code, to make it more flexible
//* and easier tp maintain (avoid 'spaghetti code').

//---------------------------------------------------//
//* Classes and instances ( traditional OOP)

//* Class - like a blueprint from which we can create new object 
//* Instances ---> the are common from class like a new object created from the class
//* Like a real house created from an abstract blueprint
//*😎 'How do we actually design classes? How do we model real-world data into classes?'

// how we design a house ? 

//*  the 4 fundamental principles of Object Oriented Programming
//* ✅  Abstraction
//  Ignoring or hiding details that dom't matter, allowing ut to get an overviev
// perspective of the thing we're implementing, instead of messing with details 
// that don't really matter to our implementation.
// menu of restaurant or phone we use only this what is needed to us as for user 
//* ✅  Encapsulation
//  Keeping properties and methods private inside the class, so they are not accessible from outside the 
//  class. Some methods can be exposed as a public interface (API)
            // Prevents external code from accidentally manipulating inteernal properties/ state
//* ✅  Inheritance
// Making all properties and methids of a certain class available to a child class,
// forming a hierarchical relationship between classes. This allows us to reuse common logic
// and to model real- world ralationship.
// taking properties and methods  from its parent class ;) by inheritance
//* ✅  Polymorphism
// A child class can overwrite a method it inherited from a parent class 
// [it's more complex that that but enough for our purposes].


//* <---------------------------------------------------------------------->
//* <------------          207. OOP in JavaScript          ---------------->
//* <----------------------------------------------------------------------> 

//*   -----> OOP in JS: Prototype

//                  Prototype  [ contains methods]

//                                 👆     Prototypal  Inheritance / delegation 

//                   Object    [ can access methods]

// 👉 bject are linked to a prototype object;
// 👉 Prototypal inheritance: 
//      The prototype contains methods (behavior) that are accessible to all objects linked 
//      to that prototype;
// 👉 Behavior is delegated to the linked prototype object.


//* 3 ways of implementing prototypal inheritance in JavaScript

//* 1    COnstructor function
// 👉 Technique to create objects from function;
// 👉 This is how built- in objects like Arrays, Maps or Sets are actually implemented.

//* 2    ES6 Classes 
// 👉 MOdern alternative  to costructor function syntax;
// 👉 'Syntatic sugar', behind the scenes, ES6 classes work exactly like constructor functions;
// 👉 ES6 cllasses do NOT behave like classes in ' classical OOP' 

//* 3  Object.create()
   //  👉 The easiest and most straingforwars way of linking an object to a prototype object.


//* <---------------------------------------------------------------------->
//* <-------   208. Constructor Functions and the new Operator  ----------->
//* <----------------------------------------------------------------------> 


//* CONSTRACTOR FUNCTION how to build a 'house' with this blueprint
const Person = function(firstName, birthYear) {   // only function declaration and expresion
this.firstName = firstName;
this.birthYear = birthYear;

// never do this method this way in constructor function
// this.calcAge = function() {
//         console.log(2037 - this.birthYear);
// }
};   
 const cezary = new Person('Cezary', 1976); 
 console.log(cezary) // Person {firstName: 'Cezary', birthYear: 1976}

 //* 1. New {} is created   
 //* 2. function is called, this = {}
 //* 3.  {}        nearly created object is linked to prototype
 //* 4. function automatically return {} 


 const jola = new Person ('Jola', 1979);
 const adam = new Person ('Adam', 1977);
 const kris = new Person ('Kris', 1975);
 //  
 //Person {firstName: 'Jola', birthYear: 1979}
 //Person {firstName: 'Adam', birthYear: 1977} 
 //Person {firstName: 'Kris', birthYear: 1975}
 //
 const jay = 'jay';
 console.log(jay instanceof Person);// false
 console.log(jola, adam, kris); 
 console.log(cezary instanceof Person); // true

//* <---------------------------------------------------------------------->
//* <-------------------       209. Prototypes        --------------------->
//* <----------------------------------------------------------------------> 

// Prototypes 
console.log(Person.prototype);                              //prototype of constructor 
Person.prototype.calcAge  = function () {
        console.log(2037 - this.birthYear);
};
cezary.calcAge();
jola.calcAge();
adam.calcAge();
kris.calcAge();

console.log(cezary.__proto__);
console.log(cezary.__proto__ === Person.prototype);  // true
console.log(Person.prototype.isPrototypeOf(cezary)); // true
console.log(Person.prototype.isPrototypeOf(Person)); // false 
 
//  .prototypeOfLinkedObjects ( not named as this only option what it is )

//set property for prototype 
Person.prototype.species = 'Homo Sapiens';
console.log(cezary);  // inherit from the prototype  species: "Homo Sapiens"
console.log(cezary.hasOwnProperty('firstName'));  //true
console.log(cezary.hasOwnProperty('species'));    //false   <--- inherited

//* <---------------------------------------------------------------------->
//* <------ 210. Prototypal Inheritance and The Prototype Chain ----------->
//* <----------------------------------------------------------------------> 

/*
How prototypal inheritance / delegation works



  __________________________________________
        Constructor function                | ---- .prototype --->   Prototy[e]   <-- it NOT of Person, but object created by Person
        [Person()]                          |                        [Person.prototype]
  __________________________________________|  <--- .constructor --  calcAge: function

        const Person = function (name, birthYear) {                           ⬆|                         🆕 The new operator:
        this,name = name;                                               .__proto__                     //*1. 
                                                                               |                         //*  An empty object is created
                                                                               |
        this.birthYear = birthYear;                                _____________________                //*2. 
                                                                        Object          |                //*  this keyword in constructor function call 
                                                                        [cezary]        |                //*  is set to new object         
        }                                                                               |                
              const cezar = new Person('Cezary', 197                   name: 'Cezary'   |              //*3. 
                         cezary.calcAge();                           birthYear: 1976    |               //*   The new object ilinked 
                                                                                        |               //*   (__proto__property)  to the constructor
                                                                                                       //*   functions prototype property      
                                                                        __proto__:
                                                                     Person.prototype <------ always point to an object prototype


       
       
        🟨 calcAge is inherited from prototype has not his own
        🟨 This how it works with function constructor and ES6 classes

        */
       
       
       
//* <---------------------------------------------------------------------->
//* <------   211. Prototypal Inheritance on Built-In Objects   ----------->
//* <----------------------------------------------------------------------> 

       console.log(cezary.__proto__); // {species: 'Homo Sapiens', calcAge: ƒ, constructor: ƒ}
       console.log(cezary.__proto__.__proto__);  // Object.prototype --> top of the chain   
       // {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
       console.log(cezary.__proto__.__proto__.__proto__);   // null

       console.dir(Person.prototype.constructor);  // ƒ Person(firstName, birthYear)

       const arr = [3,5,6,7,8,9,3];
       console.log(arr.__proto__); // <---- each array is inherit all methods from prototype 
       console.log(arr.__proto__ === Array.prototype); // true

       console.log(arr.__proto__.__proto__); // {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}

       // it is egsist somewhere in javascript engine and we have access to it 

// Array.prototype.unique = function() {   // randowmly created name unique only for experiments
//         return [...new Set(this)];
// }
// console.log(arr.unique()); // [3, 5, 6, 7, 8, 9] 

const h1 = document.querySelector('h1')
console.dir(h1)

/*
//* console.dir(x => x + 1); 
anonymous()length: 1name: ""arguments: (...)caller: (...)[[FunctionLocation]]: script.js:216[[Prototype]]: ƒ ()[[Scopes]]: Scopes[2]
*/

//* <---------------------------------------------------------------------->
//* <---------            212 .  Coding Challenge #1            ----------->
//* <---------------------------------------------------------------------->

