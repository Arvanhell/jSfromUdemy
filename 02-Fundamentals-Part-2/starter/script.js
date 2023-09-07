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
    //
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
//
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
  
const calcAge = function(birthYear){
    return 2023 - birthYear 
}
const yearsUntillRetirement = (birthYear, firstName) => {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0 ) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement; 
    } else {
        console.log(`${firstName} has already retired 😎`);
        return -1;
    }
}

console.log(yearsUntillRetirement (1976, 'Cezary'));
console.log(yearsUntillRetirement(1950, 'Mike'));
    // (() => {
    //     console.log('Hello!');
    //     })();

    // (function () {
    //     console.log('Hello!');
    // })()c