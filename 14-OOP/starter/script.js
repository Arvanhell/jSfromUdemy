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