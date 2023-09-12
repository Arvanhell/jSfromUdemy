'use strict';
// FUNDAMENTALS PART 2
//
//////////////////////////////////////////////////////////////
//              32. Activating Strict Mode
//////////////////////////////////////////////////////////////
//     FOR ACTIVATION USE 
//
//      'use strict':
//
//      activation for specyfic function or specific blocks
//      need to be on the top of document, before any other code
//      helping to avoid accidental errors
//
//          example of strict introduces
//
//    let hasDriversLicence = false;
//    const passTest = true;
//    if (passTest) hasDriverLicense = true;
//    if (hasDriversLicence) console.log('I can drive');
//
//    //when we have activated 'use strict': we can see what bug are appear within our code and line 
//    //  script.js:19 Uncaught ReferenceError: hasDriverLicense is not defined
//    //at script.js:19:36
//
//     // without it there will be no mark what error we have
//     // we had forgoten to tape proper name misspelling word
//
//      Script mode help Us avoid problems we created during process of code
//
//////////////////////////////////////
//
//      reserved words also cautch error 
//
//      const interface = 'Audio'
//
//      script.js:34 Uncaught SyntaxError: Unexpected strict mode reserved word 
//      (at script.js:34:7)
//
//////////////////////////////////////
//  
//      const private = 534;
//
//      script.js:40 Uncaught SyntaxError: Unexpected strict mode reserved word 
//      (at script.js:40:7)
//
//////////////////////////////////////
//
//      const if = 'gogo'
//      Uncaught SyntaxError: Unexpected token 'if' 
//      (at script.js:53:7)
//gi
//////////////////////////////////////////////////////////////
//              33. Function
///////////////////////////////////////////////////////////////
//
//              FUNCTION DECLARATION
//
//
//    function logger () {
//        console.log('My name is Cezary');
//    } 
//              calling / running / invoking / function  
//    logger();
//    logger();
//    logger();
//
/////////////////////////
//
//    function fruitProcessor(apples, oranges) {
//      
//       const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//        return juice;
//      };
//
//          const appleJuice = fruitProcessor(5, 0); 
//         //  Juice with 5 apples and 0 oranges // output in returned and saved const juice !!!!!!!!
//
////////////////////////
//
//    // we captured and saved value of produced juice within variable 
//    // we created after return. Either returned value will be POoF!!!  and gone if not stored.
//
////////////////////////
//    
//    console.log(appleJuice);
//              here we can call and see that appleJuice is stored in variable
//    const appleOrangeJuice = fruitProcessor(2, 4);
//    console.log(appleOrangeJuice);
//          opt --> 2 4  
//          opt --> Juice with 2 apples and 4 oranges  
//    without executing the function there will be no output after we call 
//
///////////////////////////////////////////////////////////////
//                  35. Function Declaration Vs Expressions
///////////////////////////////////////////////////////////////
//
//
//            Generic Function  Function declaration 
    //
    //     Function declaration that can be used before is declared
    //    const age1 = calcAge1(1976); // call before defined code 
    //
    //    function calcAge1(birthYear){
    //   
    //     return 2023 - birthYear;
    //    }
    //    
    //    console.log(`my age is ${age1}`) //  my age is 47
//
/////////////////////////////////
//
//              Function Expression 
//                  produce value 
//              anonymous function 
//      Essentialy a function value stored in a varible
//         const calcAge2 = function (birthYear) {
//            return 2023 - birthYear
//            }      
//            const age2 = calcAge2(1979);
//
//            console.log ( age2); // opt 44
//
/////////////////////////////////
//
//     Any function is creating value so is next step to:
//                  - stored in variables.
//
//     !!!! You can call function declaration before 
//          - define a code !!!!
//
//
//      //////////////////////////
//
//
//
//
//           function collectThings(x, ...y) {
//              console.log(x)
//              console.log(y)
//             }
//           we call the function collectThings(1,2,3,4,5,6,7,8,9);
//              we got x parameter with output  1
//              and we got y parameter with output as rest ... 
//              an array eight elements (8)[2,3,4,5,6,7,8,9]
// § function definition can only :
//     - have one rest parameter
//     - must be placed as the last parameter 
//     - is marked by three dots ...paramater//
//
//              
//
//
//
////////////////////////////////////////
//
//      !!!! you can't call function expression 
//              before define a code !!!!
//                  " because of the process called hoisting "
//
//////////////////////////////////////////////////////////////////
//                  35.  Arrow Functions
//////////////////////////////////////////////////////////////////
//
//            Function expression shorter and faster to write 
//
//          // Function expression  
//
//        const calcAge2 = function (birthYear) {
//            return 2023 - birthYear
//            } 
//  
//////////////////////////////////////////////
//
//          //  Arrow function  
//
//  
//      
//          Arrow functions are anonymous functions. 
//      Therefore, you cannot call them before initialization.
//            
//         const calcAge3 = birthYear => 2023 - birthYear;
//                  
//                const age3 = calcAge3(1979) 
//                console.log(age3); //  opt 44
//
//
//              // one liner finction not need keyword return
//                   it is return as arrow
//
//              const greeting = () => 'Hello world!';
////////////////////////////////////////////////////////////////////
//                  function append(a, b) {
//                        result = a + b;
//                        return result;
//                        }
// 
/////////////////////////////////////////////                     
//      let append = (a, b) => a + b; // short syntax
//
//      let append = (a, b) => { return a + b; }; // block syntax
//            
//      let sum = a => a + 2;
//        sum(1);  // 3
//////////////////////////////////////////////
//
//
//              // when we have more line within arrow function
//              // we need keyword return
//
//          const calcAge3 = birthYear => 2023 - birthYear;                  
//          const age3 = calcAge3(1979) 
//  
//      const yearsUntillRetirement = (birthYear, firstName)=> {
//      const age = 2023 - birthYear;
//      const retirement = 65 - age;
//                                                             
//               return `${firstName} retired in ${retirement} years`
//      }
//  
//          console.log(yearsUntillRetirement(1976, "Cezary"));  // Cezary retired in 18 years
//          console.log(yearsUntillRetirement(1979, "John"));    // John retired in 21 years
//
/////////////////////////////
//
//  Comparison
//
//  Let's create some functions using traditional syntax, 
//  block arrow function syntax and short arrow function syntax, 
//  and compare them:
//
//  function mult1(a, b) {
//    return a * b;
//  }
///////
//  let mult2 = (a, b) => { return a * b; };
//////
//  let mult3 = (a, b) => a * b;
//////
//
//  console.log(mult1(3, 2)) // 6
//  console.log(mult2(3, 2)) // 6
//  console.log(mult3(3, 2)) // 6
//
//  As you can see, the results of all these functions are identical, 
//  but the shorter syntax of the arrow function makes
// it more convenient to write.
//
//  It's important to use a tool appropriate for the particular problem.
//   If you have code where all functions are written in a traditional way,
//   don’t use Arrow functions. Always think in terms of the 
//   existing code structure.
//
//
//
//
//////////////////////////////////////////////////////////////////
//                  36. Function calling other function.
////////////////////////////////////////////////////////////////// 
//
//  
//       function cutFruitPieces(fruit) {
//     return fruit * 4;
//      }

//       function fruitProcessor(apples, oranges) {
//       const applePieces = cutFruitPieces(apples);
//       const orangePieces = cutFruitPieces(oranges);  
//       const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} piece of orange`;
//          return juice;
//          };
    
//       console.log(fruitProcessor(2,3));
//
///////////////////////////////////////
//          37. Reviewing Function
///////////////////////////////////////
//
  
// const calcAge = function(birthYear){
//     return 2023 - birthYear 
// }
// const yearsUntillRetirement = (birthYear, firstName) => {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;

//     if (retirement > 0 ) {
//         console.log(`${firstName} retires in ${retirement} years`);
//         return retirement; 
//     } else {
//         console.log(`${firstName} has already retired 😎`);
//         return -1;
//     }
// }

// console.log(yearsUntillRetirement (1976, 'Cezary'));
// console.log(yearsUntillRetirement(1950, 'Mike'));
    // (() => {
    //     console.log('Hello!');
    //     })();

    // (function () {
    //     console.log('Hello!');
    // })()c
//
//   Three different way of writing functions but 
//   they all work in a similiar way:
//      receive INPUT data,
//      TRANSFORM data,
//      OUTPUT data
//
////////////////////////////////////////////////////////
//
//    function fUNCTION_NAME(param1, param2) {
//        const varIata = value - param1 // example
//        console.log(`${param2} is ${varIata} to something`)// example
//        return varIata
//    }
//        const variaTa = FUNCTION_NAME(value of param1, value of param2)
//    
//
//    Parameters param1, param2 are placeholders 
//    //////
//    fUNCTION_NAME is name of our function
//    //////
//    return is statement to opt a value from the function and terminate execution
    /////
//    everything within { ... block of code that we want to requestAnimationFrame. 
    /////
//        Processes the function input data ...  }
    ///////
//    Calling, invoking or runing the function using () 
    //////
//    Inside we have ARGUMENT`s actual values of function parameters,
//    to input data // placing them into placeholder param1 , param2
    //////
//   const varaiaTa are variable to save returned value ( function output),
//   we can reuse if we have to 
//
//
///////////////////////////    ////// /////// ///// //////
//
//                    38.  Challenge #
//
///////////////////////////
//
//
// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.

// Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).

// A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!



// Your tasks:

// Create an arrow function calcAverage to calculate the average of 3 scores. This function should have three parameters and return a single number (the average score).

// Create two new variables — scoreDolphins and scoreKoalas, and assign the value returned from the calcAverage function to them (you will need to call this function, and pass scores as arguments).

// Create a function checkWinner that takes the average score of each team as parameters (avgDolphins and avgKoalas), and then logs the winner to the console, together with the victory points, according to the rule above. Example: Koalas win (30 vs. 13) (use avgDolphins and avgKoalas instead of hard-coded values).

// Use the checkWinner function to determine the winner for both DATA 1 and DATA 2.

// Ignore draws this time. Instead, log No team wins... to the console if there is no winner.



// TEST DATA 1: Dolphins scored 44, 23, and 71. Koalas scored 65, 54, and 49.

// TEST DATA 2: Dolphins scored 85, 54, and 41. Koalas scored 23, 34, and 27.


// const calcAverage = (param1, param2, param3) => {
//     return (param1 + param2 + param3) / 3 ;
//     };
//     console.log(calcAverage)
//     let scoreDolphins = calcAverage(44, 23, 71);
//     let scoreKoalas = calcAverage(65, 54, 49);
//     console.log(scoreDolphins, scoreKoalas);
    
//      const checkWinner = function(avgDolphins, avgKoalas) {
//         if (avgDolphins >= 2 * avgKoalas) {
//             console.log(`Dolphin wins ${avgDolphins} Vs ${avgKoalas}`);
//             } else  if (avgKoalas >= 2 * avgDolphins){
//             console.log(`Koala wins ${avgKoalas} Vs ${avgDolphins}`);
//             } else {
//             console.log(`No team wins...`);
//         }
//     };
    
//      checkWinner(scoreKoalas, scoreDolphins);
//
//                    //  Test 2 
//    scoreDolphins = calcAverage(85, 54, 41)
//    scoreDolphins = calcAverage(23, 34, 27)
//    console.log(scoreDolphins, scoreKoalas);
//    checkWinner(scoreDolphins, scoreKoalas);
//
///////////////////////////////////////////////////////////        
//                       39. Introduction to arrays
///////////////////////////////////////////////////////////
//
// const friend1 = 'Michal';
// const friend2 = 'Piotr';
// const friend3 = 'Greg';

// const friend = ['Michal','Piotr', 'Greg']; // literal syntax
// console.log(friend);

// //const years = new Array[1991, 1994, 2008, 2020]; 

// console.log(friend[0]);
// console.log(friend[2]);

// console.log(friend.length);
// console.log(friend[friend.length -1]); //in brackets jS expect expression not a statement
// //mutating is allowed for arrays ( even they are constructed as const variables)
// friend[2] = 'Jay';
// console.log(friend);
// // we cannot do replace whole arrays. 
// // friend = ['bob','bob'] // 
// //
// const firstName = 'Cezar';
// const cezar = [firstName, 'Waszkuc',2023 - 1976,  friend ];
// console.log(cezar);

// //Exercise
// const calcAge = function(birthYear){
//     return 2023 - birthYear
// }
// const years = [1990, 1967, 2002, 2010, 2018];

// // we can calculate for element of array but not whole array it will be shown NaN 
// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.concatlength -1]);
// console.log(age1, age2, age3);

// const ages = [calcAge(years[0]),calcAge(years[1]),calcAge(years[years.length -1])];
// console.log(ages);
//
/////////////////////////////////////////////////////////
//                  40.Basic Array operation (method)
/////////////////////////////////////////////////////////
//

// The isArray() method returns true if an object is an Array, otherwise false.

// The full syntax is Array.isArray(obj) .

// The below examples show how to use this method:

// let marks = [45, 50, 44, 30, 29];

// Array.isArray(marks); // true

// let marksOne = "45";

// Array.isArray(marksOne); // false

/////////////////////////////////////////////////////
//
//                      The fill() method
//
// /////////////////////////////////////////////////
//
//
//      fill()  is used to return a modified version of an array 
//  — it changes the array's elements to a static value. 
//  This method takes up to three arguments:
//
//       fill(value, start, end)
//
//       value: the value the array will be filled with.
//
//       start: the index where the filling should begin. 
//      This argument is optional, and its default value is 0.
//
//       end: the index where the filling should finish(not including the end).
//       This argument is also optional, and its default is the array's length.
//
//       You can see some examples in the following code snippet:
//
//       const myNumbers = [1, 4, 7, 10, 15];
//
//       // fill with 0 from position 1 until position 3
//          console.log(myNumbers.fill(0, 1, 3)); // [1, 0, 0, 10, 15]
//
//           console.log(myNumbers.fill(13)); // [13, 13, 13, 13, 13]
//
//           // fill with 5 from position 2
//          console.log(myNumbers.fill(5, 2)); // [13, 13, 5, 5, 5]
//              Now, let's create an array by using the new keyword 
//              and the fill() method together:
//
//       let numberArray = new Array(6).fill(2); // [2, 2, 2, 2, 2, 2]
//          The above code will create an array with 6 slots 
//          and fill each one with the number 2.
//
//       Make sure you declare and initialize the array 
//          before using the fill() method.
//
////////////////////////////////
//
//              The from() method
//        
////////////////////////////////
//
//
//      The Array.from() method creates a new Array instance 
//      from an array-like or iterable object (such as a Map). 
//      The syntax of the from() method is as follows:
//
//          Array.from(object, mapFunction, thisValue)
//
//      object: the object to convert to an array. This is a required field.
//
//          mapFunction: the map function to call on each element of the array.
//           This is an optional field.
//
//      thisValue: a value to use as this when executing the mapFunction 
//      — also an optional field. 
//      (The this keyword will be explained in a later topic.)
//
//      Let's look at some examples that demonstrate how to create an array 
//                  with Array.from().
//
//                  Using a string:
//
//          Array.from('Hello'); // ['H', 'e', 'l', 'l', 'o']
//                  
//                  Using function arguments:
//
//              function createArray(...arguments) {
//                return Array.from(arguments);
//              }
//
//          createArray(2, 4, 6); // [2, 4, 6]
//          Passing an arrow function to the mapFunction parameter:
//
//          Array.from([3, 5, 7], x => x * x); // [9, 25, 49]
//
///////////////////////////////
//
//                  The of() method
//
///////////////////////////////
//
//          Array.of() was introduced in Javascript version ES6. 
//      It creates a new Array instance containing the given arguments,
//      regardless of their type or number. The syntax of the of() method 
//      is Array.of(element_1, element_2, ..., element_n).
//
//    You can see some examples of how to create an array 
//          using Array.of() below:
//
//      Array.of(15); // [15]
//
//      Array.of(101, 202, 303); // [101, 202, 303]
//
//      Array.of(undefined); // [undefined]
//      The difference between Array.of() and the Array constructor 
//      lies in the handling of integer arguments: Array.of(10) 
//      creates an array with a single element, 10, whereas Array(10) 
//      creates an array of ten undefined values.
//
////////////////////////////////////////
//          Basic Arry Operation Methods vol.2 
/////////////////////////////////////////
//
//                  Add Element
//
//    const friends = ['Michele', 'Tony', 'Linda'];
//   
//    const newLength1 = friends.push('Jay');
//    // push is a method function that adding new element array to end existing array.
//    To make new variable and keep old ones we constuct new variable and we receive
//                //opt ['Michele', 'Tony', 'Linda','Jay']
//
//    const newLength2 = newLength1.unshift('John');
//    // unshift is a method function that adding new element array on the front existing array. 
//     To make new varible and keep old ones we construct new one and we receive
//                 //opt ['John', 'Michele', 'Tony', 'Linda', 'Jay']
//
/////////////////////////////////
//                Remove Element
//
//   friends.pop()// taking out of array last elements of array
//   const popped = friends.pop()
//    //opt 'Linda'
//   
//    friends.unshift()// first element taking off the array
//
/////////////////////////////////
//
//                    Method indexOf 
//
//          console.log(friend.indexOf('0'))
//                        //opt Michele
///////////////
//
//                    Method includes
//                 use a strict equality 
//
//        console.log(friends.includes('Michele')) // opt true
//
//        console.log(friends.includes('Michal')) //opt false
//
//        if we add number example 
//                    friend.push(36) and we tested this includes
//                        console.log(friends.includes('36');
//                           // we got output false because is not a string
//        if we add number and test as a number 
//                     friend.push(36) 
//                  console.log(friends.includes(36);
//                          // we got output true equall comparison                   
//   
//                if (friends.includes('Michele')) {
//                    console.log('You have a friend called Michele')
//
//
//                }
///////////////////////////////////////////////////////////////////////////
//
/////////////////////////////////////////////////////////
//                  41. Coding Exercise 6 Challenge#2
/////////////////////////////////////////////////////////
//

// Steven wants you to improve his tip calculator, using the same rules as before
//       — tip 15% of the bill if the bill value is between 50 and 300, 
//       - and if the value is different, the tip is 20%.
//
// Your tasks:
//
// Write a function calcTip that takes any bill value as an input and returns the corresponding tip, 
//calculated based on the rules above (you can check out the code from the first tip calculator 
//challenge if you need to). Use the function type you like the most. 
//Test the function using a bill value of 100.
//
// And now let's use arrays! So, create an array called bills containing the test data below.
//
// Create an array called tips containing the tip value for each bill, 
//  calculated from the function you created before.
//
// BONUS: Create an array totals containing the total values, so the bill + tip.
//
// TEST DATA: 125, 555, and 44.
//
//
/* Write your code below. Good luck! 🙂 */
//

    //              arrow function
    //      
    //      consta calcTip = bill => bill >= 50 && bill <= 300 ? 
    //              bill * 0.15 : bill * 0.2
/*

            const calcTip = function(bill) {
                return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
            }

            const bills = [125, 555, 44] ; // created array 


            const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
     // created array tips  and functioncall calcTip with arrays on inex position
     // you can also create an array with tip1 = calcTip(bill[0]) and tip2 and tip3 uo to you
            

     const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
    // created array with sum of the bill and tips 
                
            console.log(bills, tips, totals);
*/
//      opt [ 125, 555, 44 ] [ 18.75, 111, 8.8 ] [ 143.75, 666, 52.8 ]
//
//////////////////////////////////////////
//
///////////////////////////////////////////////////////////
//                  42. Introduction to Objects
///////////////////////////////////////////////////////////
//
//             Object Literal syntax ... ... ... 
/*
             
const cezar = {
    firstName: 'Cezary',
    lastName: 'Waszkuc',
    age: 2023 - 1976,
    job: 'security officer',
    friends: ['Skibek', 'Mumin', 'Olo']
};

*/
//
/////////////////////////////////////////////////////////
//                  42. Dot vs. Bracket Notation
/////////////////////////////////////////////////////////
//
//

/*
const cezar = {
    firstName: 'Cezary',
    lastName: 'Waszkuc',
    age: 2023 - 1976,
    job: 'security officer',
    friends: ['Skibek', 'Mumin', 'Olo']
};

console.log(cezar.lastName);  // dot as operator opt Waszkuc

/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////

console.log(cezar['lastName']); // bracket notation opt Waszkuc

const. nameKey = 'Name';
console.log(cezar[ 'first'+ nameKey]);
console.log(cezar['last' + nameKey]);

const interestedIn = prompt('What do you want to know about Cezar? Choose beetwen firstName, lastName, age, job and friends');
console.log(cezar[interestedIn]);

if user try get property that doest exist we can use 
    
        if(cezar[interestedIn]) {
            console.log (cezar[interestedIn]);
        }else{
            console.log ('Wrong request! Choose between firstName, lastName, age , job , and friends');
        }
 
        

        we can add any expression we want 
        cezar.location = 'Ireland';
      
        
        //challenge 
        console.log(`${cezar.firstName} has ${cezar.friends.length}, and his best friend is called ${cezar.friends[0]}`);

*/
//
//
//
/////////////////////////////////////////////////////////
//                  43. Object Methods
/////////////////////////////////////////////////////////

/*
const cezar = {
    firstName: 'Cezary',
    lastName: 'Waszkuc',
    birthYear : 1976,
    job: 'security officer',
    hasDriverLicences: true,
    friends: ['Skibek', 'Mumin', 'Olo'],

    // calcAge: function(birthYear) { // function expression only
    //     return  2023 - birthYear;
    // }


    // calcAge: function() {
    //     console.log(this);
    //     return 2023 - this.birthYear;
    // }

    calcAge: function () {
        this.age = 2023 - this.birthYear;
        return this.age;
    },
    getSummary: function() {
           return `${this.firstName} is a ${this.calcAge()} -year old ${cezar.job}, and he has ${this.hasDriverLicences ? 'a' : 'no'} driver's licence.`
    }
};


console.log(cezar.calcAge());
console.log(cezar.age);

// Challenge
// 'Cezar is a 47- year old security.'
console.log(cezar.getSummary());
*/


/////////////////////////////////////////////////////////
//                  44. Challenge
/////////////////////////////////////////////////////////

/*
CHALLENGE #3
Let's go back to Mark and John comparing their BMIs!

This time, let's use objects to implement the calculations! Remember: BMI = mass / (height * height) (mass in kg and height in meters).

Your tasks:

For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith). Name these objects as mark and john, and their properties exactly as fullName, mass and height.

Create a calcBMI method on each object to calculate the BMI (the same method on both objects). Assign the BMI value to a property, and also return it from the method.

Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!".

TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.

*/

/* Write your code below. Good luck! 🙂 */

/*
const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function ()
    {
        this.bmi = this.mass / (this.height * this.height) ;
        return this.bmi;
    }
  
};
    

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI:  function() 
    {
        this.bmi = this.mass / (this.height * this.height) ;
        return this.bmi ;
    }
};

    mark.calcBMI();
    john.calcBMI();

if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`)
} else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`)
}
*/

/////////////////////////////////////////////////////////
//                  46. Iteration The For Loop
/////////////////////////////////////////////////////////

// console.log('Liftin weight repetition 1 🏎️ ');
// console.log('Liftin weight repetition 2 🏎️ ');
// console.log('Liftin weight repetition 3 🏎️ ');
// console.log('Liftin weight repetition 4 🏎️ ');
// console.log('Liftin weight repetition 5 🏎️ ');
// console.log('Liftin weight repetition 6 🏎️ ');
// console.log('Liftin weight repetition 7 🏎️ ');
// console.log('Liftin weight repetition 8 🏎️ ');
// console.log('Liftin weight repetition 9 🏎️ ');
// console.log('Liftin weight repetition 10 🏎️ ');

/////////////////

// for loop keep running while condition is still TRUE

/*
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Liftin weight repetition ${rep}🏎️ `);
}
*/

////////////////////////////////////////////////////////////////
//              46. Looping Arrays, breaking and continuing
/////////////////////////////////////////////////////////////////


// const jonas = [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michel', 'Peter', 'Steven'],
//     true
// ];

// we want to get  console.log(jonas[0])
//   console.log(jonas[1])
//   console.log(jonas[2])
//   console.log(jonas[3])
//...
//   console.log(jonas[4])
// jonas[5] does not exist
// going trough loop to achieve goal
/*
const types = [];

for ( let i = 0;i < jonas.length ; i++){
    console.log(jonas[i], typeof jonas [i]);
    // types[i] = typeof jonas[i]; 
    // types.push(typeof jonas[i]);
};
console.log(types);

*/

//educational exercises --->
//

/////  opt
//   Jonas string
//   Schmedtmann string
//   46 'number'
//   teacher string
//   (3) ['Michel', 'Peter', 'Steven'] 'object'
//   true 'boolean'
///////
//
////////////////////////////////////////////////
//
//
/*
const years = [1991, 2005, 1969, 2020];
const ages = [];
// i want to add value to empty array
for ( let i = 0; i < years.length; i++){
    ages.push(2023 - years[i]);
}
console.log(ages);

// with this example we can calculate one by one exactly amount of year 
// by looping trough the array

*/
////////////////////////////////////////////////

// continue and break
/*

        console.log( '-----ONLLY STRING----')
        for ( let i = 0; i < jonas.length; i++) {
            if(typeof jonas[i] !== 'string') continue;

             console.log(jonas[i], typeof jonas[i]);
        };

//opt           -----ONLLY STRING----
//          script.js:939 Jonas string
//          script.js:939 Schmedtmann string
//          script.js:939 teacher string


*/


////////////////////////////////////////////////////////////

// break method

/*
console.log( '-----Break with number----')
for ( let i = 0; i < jonas.length; i++) {
    if(typeof jonas[i] === 'number') break;

    console.log(jonas[i], typeof jonas[i]);
};

//opt       -----Break with number----
//          Jonas string
//          script.js:953 Schmedtmann string
//          and stop because next is number

*/

////////////////////////////////////////////////////////////////////////
//          48.Looping backwards and looping in loops
////////////////////////////////////////////////////////////////////////

/*
const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michel', 'Peter', 'Steven'],
    true
];
*/

// 0,1, .... ,4
// loop backward
// 4, 3, .....,1

/*
for (let i= jonas.length -1; i >= 0; i-- ) {
    console.log(i, jonas[i]);
}

//opt        ?   
        i    |    jonas[i]
-----------------------------
        5    |    true
        4    |    (3) ['Michel', 'Peter', 'Steven']
        3    |    'teacher'
        2    |     46
        1    |    'Schmedtmann'
        0    |    'Jonas'
*/

// Loop in the Loop

   /////////////////////////////////////////

   /*

for ( let exercise = 1; exercise < 4; exercise++) {
        console.log(`-------> Starting exercise ${exercise}`);


        for ( let rep = 1; rep < 6; rep++) {
            console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`)
        }
    };

    //opt


                        -------> Starting exercise 1

     Exercise 1: Lifting weight repetition 1
     Exercise 1: Lifting weight repetition 2
     Exercise 1: Lifting weight repetition 3
     Exercise 1: Lifting weight repetition 4
     Exercise 1: Lifting weight repetition 5

                         -------> Starting exercise 2

     Exercise 2: Lifting weight repetition 1
     Exercise 2: Lifting weight repetition 2
     Exercise 2: Lifting weight repetition 3
     Exercise 2: Lifting weight repetition 4
     Exercise 2: Lifting weight repetition 5

                         -------> Starting exercise 3

     Exercise 3: Lifting weight repetition 1
     Exercise 3: Lifting weight repetition 2
     Exercise 3: Lifting weight repetition 3
     Exercise 3: Lifting weight repetition 4
     Exercise 3: Lifting weight repetition 5

     */

     //////////////////////////////////////////////////////////
     //                  49. While Loop
     //////////////////////////////////////////////////////////