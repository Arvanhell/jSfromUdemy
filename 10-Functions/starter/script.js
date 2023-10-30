'use strict';
//* ////////////////////////////////////////////////////////////////////
//*                         128. Default Parameters
const bookings = [];
const createBooking = function(flightNum, numPassangers, price) {
    // ES 5
    // numPassangers = numPassangers || 1; 
    // price = price || 199;

        const booking = {
        flightNum,
        numPassangers,
        price
    }
    console.log(booking);
  
    bookings.push(booking);
}

createBooking('LH123');
// {flightNum: 'LH123', numPassangers: undefined, price: undefined}
createBooking('LH123', 2, 800);
// {flightNum: 'LH123', numPassangers: 2, price: 800}
createBooking('LH123', 5);
// {flightNum: 'LH123', numPassangers: 5, price: undefined}
createBooking('LH123', undefined, 1000) // skiping the parameter we want to skip which is undefined 
// {flightNum: 'LH123', numPassangers: undefined, price: 1000}



//* /////////////////////////////////////////////////////////////////////////////////
//*
//*               129. How Passing Arguments Works: Value vs. Reference

const flight = 'LH234';
const cezar = {
    name: 'Cezary Waszkuc',
    passport: 352364614641
}

const checkIn = function(flightNum, passenger) {
    flightNum = 'LH999'
    passenger.name = 'Mr. ' + passenger.name;

    if ( passenger.passport === 352364614641) {
       console.log('Check in')
    } else {
        console.log('Wrong passport');
    }
 }

// this could make some problem in opearating with some action 

checkIn(flight, cezar)
console.log(flight);
console.log(cezar);

/*
const newPassport = function(person) {
    person.passport = Math.trunc(Math.random() * 10000000000000000);
};
 newPassport(cezar);
 checkIn(flight, cezar) 
 */

//* ////////////////////////////////////////////////////////
//*
//*  130. First-Class and Higher-Order Functions

        //* 👉 JavaScript treats function as first-class citizen
        //* 👉 This mean that function are simply values
        //* 👉 Function are just another type Object

            //* 👉 store functions in variables or properties:
            // const add = (a, b) => a + b
            // const counter = {
            // value = 21
            // inc : function(){this.value**}
            
        //* 👉 Pass function as arguments to OTHER functions:
            // const greet = () => console.log('Hey Cezar');
            // btnClose.addEventListener('click', greet)  <--------- greet is passed function to function 

        //* 👉 Return function from functions 
        //* 👉  Call methids on functions:
            // counter.inc.bind(someOtherObject);


             //* 👉 //* 👉

            //* 👉 Higher order function 

                  //* 👉  a function that receives another function as asn argumetn that returns a new function or both
                   //* 👉 this is only possible because of first -class function 
                         //* 👉 1. Function that receives another function
                         // const greet = () => console.log( 'hey Cezar');
                         // btnClose.addEventListener('click', greet)
               //* 👉 addEventListener is Higher - order function and greet is Callback function
                         //* 👉 2. Function that returns new function

                         // function count() {      <--- higher order function
                         //      let counter = 0;
                         //    return function(){   <--- returned function 
                         //  counter++;
                         //   };
                         // }
        

//* ////////////////////////////////////////////////////////////////////////////////////////////////////////
// *                          131. Functions Accepting Callback Functions     

            const oneWord = function(str) {
                return str.replace(/ /g, '').toLowerCase();
            }

            const upperFirstWord = function (str) {
                const [first, ...others] = str.split(' ');
                return [first.toUpperCase(), ...others].join(' ');
            }
                // higher order function
            const transformer = function (str, fn) {
                    console.log(`Original string: ${str}`);        
                      //* Original string: JavaScript is the best!
                    console.log(`Transformed string: ${fn(str)}`);
                      //* Transformed string: JAVASCRIPT is the best!
                    console.log(`Transformed by: ${fn.name}`);
            }         //* Transformed by: upperFirstWord

            transformer('JavaScript is the best!' , upperFirstWord);
            
                        //* Original string: JavaScript is the best!
                        //* Transformed string: JAVASCRIPT is the best!
                        //* Transformed by: upperFirstWord
                        transformer('JavaSript is the best!', oneWord)
                        //*   Transformed by: oneWord

                        // JS uses callback all the time
                        const high5 = function() {   //callback function
                            console.log('🖐️');
                        }
                            document.body.addEventListener('click', high5);
                            // after clicking anywhere on body we got  🖐️

                    ['Cezar', 'Jola', 'Wiki'].forEach(high5);  // <---- threee time call, one time for each         
//* ////////////////////////////////////////////////////////
//*             132. Functions Returning Functions

const greet = function( greeting) {
    return function (name) {
        console.log(`${greeting} ${name}`);
    }
   }
const greeterHey = greet('Hey');
greeterHey('Cezar');
greeterHey('Jola');

greet('Hello')('Cezar');  

//* ///////              challenge               ////////////

const greetArr = greeting => name => console.log(`${greeting} ${name}`);

greetArr('Hi Ho')('Cezar'); 


//* ////////////////////////////////////////////////////////
//*             133.  The call and apply Methods

const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],

    book(flightNum, name) {
        console.log(
            `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}}`
        );
        this.bookings.push({flight: `${this.iataCode}${flightNum}`, name});
    },
};

lufthansa.book(239, 'Cezariooo Wu');
lufthansa.book(345, 'Jolanta Wu')
console.log(lufthansa);

const eurowings = {
    name: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
};

const book = lufthansa.book;  // book function 

// book(23, 'Sarah WIlliams') <--- does not work 

book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);
book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

/*
Sarah Williams booked a seat on undefined flight EW23}
Mary Cooper booked a seat on Lufthansa flight LH239}
*/

const swiss = {
    airline: 'Swiss Air Lines',
    iataCode: 'LX',
    bookings: []
}

book.call(swiss, 567, 'Marry Cooper' );
console.log(swiss);
// Marry Cooper booked a seat on Swiss Air Lines flight LX567}

// apply is no more use in modern Js
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);


//George Cooper booked a seat on Swiss Air Lines flight LX583}

// insteas of better use this call and spread operator ...
book.call(swiss, ...flightData);   



//* ////////////////////////////////////////////////////////
//*        134. The Bind Method

//book.call(eurowings, 23, 'Sarah WIlliams');

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Williams')
//Steven Williams booked a seat on undefined flight EW23

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Cezary Waszkuc');
bookEW23('Jola Waszkuc');
// Cezary Waszkuc booked a seat on Eurowings flight EW23
// Jola Waszkuc booked a seat on Eurowings flight EW23

//* //         With Event Listener

lufthansa.planes = 300;
lufthansa.buyPlane = function () {
    console.log(this);

    this.planes++;
    console.log(this.planes);
};

document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));
// bind method is binding elements to this method
/*
<button class='buy'> Buy new place 🛩️</button>
 NaN
 🖐️
*/
//* //          Partial application

const addTax = (rate, value) => value + value * rate
console.log(addTax(0.1, 200)); // opt 220



const addVAT = addTax.bind(null, 0.23);
// addVAT = value = > value + value * 0.23;

console.log(addVAT(100));  // 123
console.log(addVAT(23));   // 28.29

//* // challenge 
const addTaxRate = function(rate) {
    return function (value) {
        return value + value * rate
    }
}
const addVAT2 = addTaxRate(0.23)
console.log(addVAT2(100));   // 123
console.log(addVAT2(23));   // 28.29


//* ////////////////////////////////////////////////////////
//*             CODING CHALLENGE # 1

/*
Let's build a simple poll app! 

A poll has a question, an array of options from which people can choose,
 and  an array with the number of replies for each option.
 This data os stored in the starter object below.

 Here are your tasks:

 1. Create a method called 'registereNewspaper' on the 'poll' object.
 The method does 2 things:
    1.1 Display a prompt window for the user to input the number of 
    the number of the selected option. The prompt should look like this:
            What is your favourite programing language?
            0: JavaScript
            1: Python
            2: Rust
            3: C++
            (Write option number)
            
    1.2 Based on the input  number, update the answer array. For example,
    if the option is 3, increase the value AT POSITION 3 of the array by 1. 
    Make sure to check if the input is a number and if the number makes sense
    (e.g answer 52 wouldn't make sense right?)
    2. Call this method whenever the user click the 'Answer poll' button.
    3. Create a method 'displayResults' which displays the poll results.
    The method takes a string as an input ( called 'type'), which can be either 'string' or 'array'.
    If the type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like 
    'Poll resylts re 13, 2, 4, 1'.*/