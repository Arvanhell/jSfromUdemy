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
   
    