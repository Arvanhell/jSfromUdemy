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
//           function collectThings(x, ...y) // 
// § function definition can only :
//     - have one rest parameter
//     - must be placed as the last parameter 
//     - is marked by three dots ...paramater//
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

//////////////

