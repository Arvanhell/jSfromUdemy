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

/*
1. Use a constructor function to implement a Car. A car has a make and a speed property.
The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the 
new speed to the console.
3. Implement a 'brake', method that will decrese the car's speed  by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h
*/

const Car = function( make, speed) {   // only function declaration and expresion
        this.make = make;
        this.speed = speed
};

Car.prototype.accelerate = function() {
        this.speed += 10;
        console.log(`${this.make} is going at ${this.speed}km/h`);
};

Car.prototype.brake = function() {
        this.speed -= 5;
        console.log(`${this.make} going  ${this.speed}`);
}
//-------------------------------------------------------------------
const bmw = new Car ('BMW', 120); 
//-------------------------------------------------------------------
bmw.accelerate(); //BMW is going at 130km/h
bmw.accelerate(); //BMW is going at 140km/h
bmw.brake();      //BMW going  135
bmw.accelerate(); //BMW is going at 145km/h
//-------------------------------------------------------------------
const mercedes = new Car('Mercedes', 95 ); 
//-------------------------------------------------------------------
mercedes.accelerate(); //Mercedes is going at 105km/h
mercedes.accelerate(); //Mercedes is going at 115km/h
mercedes.brake();      //Mercedes going  110
mercedes.accelerate(); //Mercedes is going at 120km/h

                        //* <---------------------------------------------------------------------->
                        //* <---------                213.  ES6 Classes                 ----------->
                        //* <---------------------------------------------------------------------->

//Classes in JavaScript are not same as in Java or C++ they are //* syntetic Sugar
// they still  behind the scenes implement prototypes inheritants 
// but with that syntax that this more more sense for the people comming from
// other programing languages.

                        //* class expression
//* const PersonCl = class {}

                         //* class declaration

class PersonCl {  
     constructor(fullName, birthYear){   // method of this class need to be call contructor
                this.fullName = fullName;
                this.birthYear = birthYear;
  }    

  //* Instance methods
  // Methods will be added to .prototype property
        calcAge() { 
        //* method written outside the constructor will be on the prototype of the object 
        //*not on the object himself
        // prototype inheritant
        /*
PersonCl {firstName: 'Cezar', birthYear: 1976}
birthYear:  1976
firstName: "Cezar"
[[Prototype]]: Object
calcAge: ƒ calcAge()
constructor: class PersonCl
*/
                        console.log(2037 - this.birthYear);
  } //*         <--------                    ------->  no commas after end of methods
        greet() {
                console.log(`Hey ${this.fullName}`);
        }   //* <--------  no commas after end of methods

        get age() {
                return 2037 - this.birthYear
        }
        //* <------- set a property that alredy exists 
        set fullName(name){
                console.log(name);
                if (name.includes(" ")) this._fullName = name;
                else alert(`${name} is not full name!`);
        }

        get fullName() {
                return this._fullName;
        }

        //* Static method
        static hey() {
                console.log('Hey there 👀');
                console.log(this);
        }

}
const cezar = new PersonCl('Cezar Wu', 1976);
console.log(cezar);  // PersonCl {firstName: 'Cezar', birthYear: 1976}
cezar.calcAge(); // 61 I will be old man oh lord
console.log(cezar.__proto__);
/*
{constructor: ƒ, calcAge: ƒ}
calcAge: ƒ calcAge()
constructor: class PersonCl
[[Prototype]]: Object
*/
console.log(cezar.__proto__ === PersonCl.prototype); // true

// PersonCl.prototype.greet = function () {
//         console.log(`Hey ${this.firstName}`);
// };
cezar.greet(); //Hey Cezar
cezar.calcAge();
console.log(cezar.age);

//* 1 Classes are NOT hoisted 
//* 2 Classes are first-class citizens ( special kind of fucntion behind the scene)
//* 3 Classes are executed in strict mode 



                        //* <---------------------------------------------------------------------->
                        //* <---------           214. Setters and Getters               ----------->
                        //* <---------------------------------------------------------------------->

// assesors property 
// function that get and set 

const account = {
         owner: 'cezar',
         movements: [200, 530, 120, 300],

   get latest() {
        return this.movements.slice(-1).pop();
   },

   set latest(mov) {  // setters need to have one parameter minimum
        this.movements.push(mov);

   }
};
console.log(account.latest); // 300

account.latest = 50;
console.log(account.movements); //[200, 530, 120, 300, 50]

// <------ getter and setters are set in previus example within creating object of person 

//* const walter = new PersonCl ('Walter', 1965) // output as alert ---> Walter is not full name!


                        //* <---------------------------------------------------------------------->
                        //* <---------                215. Static methods               ----------->
                        //* <---------------------------------------------------------------------->

         Person.hey = function() {
                console.log('Hey there 👀');
         };
         Person.hey(); //  Hey there 👀
         console.log(this);

         //* cezar.hey();    // error it is not a funciton            

         // to make static ... we simply need to add static keyword 

         PersonCl.hey()
         /*
         class PersonCl {  
     constructor(fullName, birthYear){   // method of this class need to be call contructor
                this.fullName = fullName;
                this.birthYear = birthYear;
  }    
…
         */

                        //* <---------------------------------------------------------------------->
                        //* <---------                 216. Object create               ----------->
                        //* <---------------------------------------------------------------------->


//* Third way to create object by delegation

// recreate person class  -- object literal
const PersonProto = {
        calcAge() {
                console.log(2037 - this.birthYear);
        },

        init(firstName, birthYear){   // manual way to initialize any object with any name 
        this.firstName = firstName;
        this.birthYear = birthYear;
        },
};

const steven = Object.create(PersonProto);  // empty object will be linked to PersonProto object 
console.log(steven); // {}
                     // [[Prototype] Object
                     //   calcAge: ƒ calcAge()
                     //   [[Prototype]]: Object
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();   // <-- 35

console.log(steven.__proto__); // {calcAge: f}
                                // calcAge f calcAge()
                                // __proto__: Object

console.log(steven.__proto__ === PersonProto) // true

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979); // true
sarah.calcAge(); // 58


                        //* <---------------------------------------------------------------------->
                        //* <---------            217. Coding challenge #2              ----------->
                        //* <---------------------------------------------------------------------->

/*
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h
before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methids, and with the getter and setter.
Data c1 : 'Ford' going at 120 km/h
GL
*/
class CarCl {
        constructor (make, speed){
        this.make = make;
        this.speed = speed;
}


        accelerate() {
                this.speed += 10;
                console.log(`${this.make} is going at ${this.speed} km/h`);
}

        brake() {
                this.speed -= 5;
                console.log(`${this.make} going  ${this.speed} km/h`);
        }

        get speedUS() {
                return this.speed / 1.6;
        }

        set speedUS(speed) {
                this.speed = speed * 1.6;
        }
}

const ford = new CarCl ('Ford', 120);
console.log(ford.speedUS); //    75 mi /h
ford.accelerate(); // Ford is going at 130 km/h
ford.accelerate(); // Ford is going at 140 km/h
ford.brake(); // Ford is going at 135 km/h
ford.speedUS = 50; 
mercedes.speedUS = 60;
bmw.speedUS = 80;
console.log(ford); // CarCl {make: 'Ford', speed: 80}
console.log(mercedes); // Car {make: 'Mercedes', speed: 120, speedUS 60}
console.log(bmw); // Car {make: 'BMW', speed: 145, speedUS: 80}


                        //* <---------------------------------------------------------------------->
                        //* |    218. Inheritance Between "Classes": Constructor Functions         |
                        //* <---------------------------------------------------------------------->


// parent contructor 
const Persona = function (firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
};

Persona.prototype.calcAge = function () {
        console.log(2030 - this.birthYear);
};

// child constructor
const Student = function(firstName, birthYear, course) {
                Persona.call(this, firstName, birthYear)  // setting by call for not repeating same code 
                this.course = course;
}

//*------------------------------------------------------------------------------------------
//* we must to do it here: 
//* and object Student.prototype that inherit from object Person.prototype
//* before we add any more method to the prototype object of students... othervise
//* ---->  object.create  will return an empty object // so now student.prototype is empty
//*  and then we can add methods 
//* othervise if ve create methods before ... 
//* ... object.create will overwrite created methods.

Student.prototype = Object.create(Persona.prototype);    //------------------------------- //* linking prototype
//*------------------------------------------------------------------------------------------

//* before this methods or any other methods we could create
Student.prototype.introduce = function() {
        console.log(`My name is ${this.firstName} and I study ${this.course}`);
}

const mike = new Student('Mike', 2010, 'Computer Science');
//* console.log(mike); // Student {firstName: 'Mike', birthYear: 2020, course: 'Computer Science'}

mike.introduce() // My name is Mike and I study Computer Science
mike.calcAge(); // 20
//*--------------------------------------------------------------------------------------------
console.log(mike.__proto__); //  Persona {introduce: ƒ} introduce: ƒ ()[[Prototype]]: Object
console.log(mike.__proto__.__proto__); // {calcAge: ƒ, constructor: ƒ

console.log(mike instanceof Student); //true
console.log(mike instanceof Persona); //true
console.log(mike instanceof Object);  //true

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor); //ƒ Persona(firstName, birthYear, course)

                        //* <---------------------------------------------------------------------->
                        //* |                    219. Coding Challenge #3                          |
                        //* <---------------------------------------------------------------------->
/*
1. Use a constructor function to impleent an Electric Car (called EV) as a child "class" of Car.
Besides a make and current speed, the EV also has the current battery charge in % ('charge property');
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo';
3. Implement an 'accelerate' method that will charge by 1%. Then log a message like this: 'Tesla going at 140 km/h,
with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake', and 'chargeBattery' ( charge to 90%)
Notice what happens when you 'accelerate' ! HINT: Review the definition of POLIMORPHISM
Data Car 1: 'Tesla' going at 120 km/h, with a charge of 23%
*/
const Car1 = function( make, speed) {   // only function declaration and expresion
        this.make = make;
        this.speed = speed
};

Car1.prototype.accelerate = function() {
        this.speed += 10;
        console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car1.prototype.brake = function() {
        this.speed -= 5;
        console.log(`${this.make} going  ${this.speed} km/h`);
}

const EV = function(make, speed, charge) {
                Car1.call(this, make, speed);
                this.charge = charge;
};
//-------------------------------
EV.prototype = Object.create(Car1.prototype);    //* Link the prototypes <------------------------------------
//-------------------------------
EV.prototype.chargeBattery = function(chargeTo) {
        this.charge = chargeTo;
}

EV.prototype.accelerate = function() {  // override prototype chain
        this.speed += 10;
        this.charge--;
        console.log(`${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}.`);
}

const tesla = new EV('Tesla', 120, 23);    //* EV {make: 'Tesla', speed: 120, charge: 23} 

tesla.chargeBattery(90);   
console.log(tesla);        //*  EV {make: 'Tesla', speed: 120, charge: 90}
tesla.brake(); //Tesla going  115 km/h.
tesla.accelerate(); // Tesla is going at 125 km/h, with a charge of 89.
tesla.brake(); // Tesla going  120 km/h
/*
//* we have two simmiliar methods in the prototype chain  Object and Car1 , always will be in use the first one in the chain <---- accelerate 
*/




                        //* <---------------------------------------------------------------------->
                        //* |           220. Inheritance Between "Classes": ES6 Classes            |
                        //* <---------------------------------------------------------------------->
 
                class PersonCl2 {  
                        constructor(fullName, birthYear){   
                                   this.fullName = fullName;
                                   this.birthYear = birthYear;
                     }    
                   
                     //* Instance methods
             
                           calcAge() { 
                                console.log(2037 - this.birthYear);
                     } 
                           greet() {
                                   console.log(`Hey ${this.fullName}`);
                     }  
                   
                           get age() {
                                   return 2037 - this.birthYear
                           }
                         
                           set fullName(name){
                                   console.log(name);
                                   if (name.includes(" ")) this._fullName = name;
                                   else alert(`${name} is not full name!`);
                           }
                   
                           get fullName() {
                                   return this._fullName;
                           }
                   
                           //* Static method
                           static hey() {
                                   console.log('Hey there 👀');
                                   console.log(this);
                           }
                   
                   }
            
class StudentCl2 extends PersonCl2 {
         constructor(fullName, birthYear, course) {
                // Always need to happen first !!!
            super(fullName, birthYear)  // constructor function parent class we need specified parameters from 
            this.course = course;
                }
                introduce(){
                        console.log(`My name is ${this._fullName} and I study ${this.course}.`); 
                }
                calcAge(){
                        console.log(`I'm ${2037 - this.birthYear} years old, but as a student I feel more like ${2037 - this.birthYear + 10}`); // I'm 25 years old, 
                        //but as a student I feel more like 35
                }
        }

        const martha = new StudentCl2('Martha Jones', 2012, 'Computer Science')
        martha.introduce(); // My name is Martha Jones and I study Computer Science.
        martha.calcAge(); // <----- not shoiwing up because is overwriten up


                        //* <---------------------------------------------------------------------->
                        //* |         221. Inheritance Between "Classes": Object create            |
                        //* <---------------------------------------------------------------------->
        
const PersonProto2 = {
        calcAge() {
                console.log(2047 - this.birthYear);
        },

        init(firstName, birthYear) {
                this.firstName = firstName;
                this.birthYear = birthYear
        },
};

const StudentProto2 = Object.create(PersonProto2);
StudentProto2.init = function(firstName, birthYear, course) {
        PersonProto2.init.call(this, firstName, birthYear);
        this.course = course;
};

StudentProto2.introduce = function() {
        console.log(`Hello my name is ${this.firstName} and I study ${this.course}`);
}
const jays = Object.create(StudentProto2);
jays.init('Jays', 2020, 'AI & Computer Science')
jays.introduce();
jays.calcAge();

                                        /*
                                     |   Prototype         |
                                     |   [PersonProto2]    |      
                                     |   calcAge: function |
                                      ----------------------
                                                ^   
                                                |                       
     //*   const StudentProto2 = Object.create(PersonProto2)             .__proto__
                                                |
                                 _______________________________                           
                                |       Prototype               |
                                |       [StudentProto2]         |
                                |       proto :                 |       //* Student inherit from PersonProto2
                                |       PersonProto2            |
                                |_______________________________|   
                                                ^
                                                |
     //*  const jays = Object.create StudentProto2                      .__proto__    
                                                |
                                _________________________________
                               |        Object                  |
                               |        [jays]                  |
                               |                                |
                               |        proto  :                |
                               |     StudentProto2              |
                               _________________________________|                        
                                       */

                               

//*                             <---------------------------------------------------------------------->
//*                             |                      222. Another Class Example                      |
//*                             <---------------------------------------------------------------------->  


//        class Account {
//         constructor(owner, currency, pin) {
//                 this.owner = owner;
//                 this.currency= currency;
//                 this._pin = pin;
//                 //*Protected property movements by convention 
//                 this._movements = [];
// //---------------------------------------------------------------
//                 this.locale = navigator.language;

//         console.log(`Thank you for choosing our service ${owner}, and opening an account with us.`);
//         }

//         //* Public Interface 
//         getMovements() {
//                 return this._movements        
//         }

//         deposit(val) {
//                 this._movements.push(val);
//         }
//          withdraw(val) {
//                 this.deposit(-val) // abstraction 
//          }
//          _approveLoan(val) {
//                 return true ;
//          }

//          requestLoan(val) {
//                 if ( this._approveLoan(val)){
//                         this.deposit(val);
//                         console.log(`Loan approved`);
//                 }
//          }
//        }   
//          const acc1 = new Account('Cezary', 'EUR', 1111);
//* -------------------------------------------------------------------------
        //acc1.movements.push(250)  
        //acc1.movements.push(-140)
//* instead of above we do  deposit and withdraw methods for each created accounts within Public Interface
   
//        acc1.deposit(250);
//        acc1.withdraw(140);
//        acc1.requestLoan(100);

//        console.log(acc1);
//        console.log(acc1.getMovements()); //(3) [250, -140, 100]
       //*     Account {owner: 'Cezary', currency: 'EUR', pin: 1111, movements: Array(2), locale: 'en-US'}
       //*         currency: "EUR" locale: "en-US"
       //*                 movements: (3) [250, -140, 100] owner: "Cezary" pin: 1111
       //*         [[Prototype]]: Object  


//*                             <---------------------------------------------------------------------->
//*                             |       223. Encapsulation: Protected Properties and Methods           |
//*                             <---------------------------------------------------------------------->  

    /*
        API encapsulation involves hiding internal implementation details, 
        exposing a simplified interface, and providing access control to ensure modularity, 
        data protection, code reusability, versioning, compatibility, and maintainability. 
        It helps create well-designed APIs that are easier to understand, use, maintain, and evolve.
    */

// first we use convenction for protection // _movements... by adding underscore... mean dont touch you can broke



//*                             <---------------------------------------------------------------------->
//*                             |       224. Encapsulation: Private Class Fields and Methods           |
//*                             <---------------------------------------------------------------------->  
//* 1 Public field
//* 2 Private fields
//* 3 Public methods
//* 4 Private methods
class Account {
        //*    1. Public fields (instances)
        locale = navigator.language;  // same as this.locale = navigator.language
        // _movements = [];              // same as this._movements = [];

        //*    2. Private fields (instances)
        #movements = [];     // # <---- 
        #pin;      //* created as undefine 
                constructor(owner, currency, pin) {
                        this.owner = owner;
                        this.currency= currency;
                        //protected property
                        this.#pin = pin;
                        //this._movements = [];
                        //this.locale = navigator.language;
                console.log(`Thank you for choosing our service ${owner}, and opening an account with us.`);
                }
        
                //* Public Interface 
                getMovements() {
                        return this.#movements        
                }
        
                deposit(val) {
                        this.#movements.push(val); 
                }
                 withdraw(val) {
                        this.deposit(-val); // abstraction 
                 }
                 _approveLoan(val) {
                        return true ;
                 }
        
                 requestLoan(val) {
                        if ( this._approveLoan(val)){
                                this.deposit(val);
                                console.log(`Loan approved`);
                        }
                 }
}   
                 const acc1 = new Account('Cezary', 'EUR', 1111);

                 acc1.deposit(250);
                        acc1.withdraw(140);
                        acc1.requestLoan(100);
                 
                        console.log(acc1);   //      .... the rest the same but movements appear as
                        // #movements: Array(3)
                        //* but  if we try to get acces to movements protected by # 
     //*   console.log(acc1.#movements);   we got the syntax error it is protected
        //*SyntaxError: Private field '#movements' must be declared in an enclosing class
//-------------------------------------------------------------------------------------------------------------
        //* We can still get into movements but with created API geMovement 
        console.log(acc1.getMovements()); //(3) [250, -140, 100]
//------------------------------------------------------------------------------------------------------------   
        //*console.log(acc1.#pin);
        //* SyntaxError: Private field '#pin' must be declared in an enclosing class

        