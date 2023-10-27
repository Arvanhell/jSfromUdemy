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
        alert ('Check in')
    } else {
        alert ('Wrong passport')
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