'use strict';
// FUNDAMENTALS PART 2
//
//////////////////////////////////////////////////////////////
//              32. Activating Strict Mode
//////////////////////////////////////////////////////////////
//     FOR A CTIVATION USE 
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
//              32. Activating Strict Mode
///////////////////////////////////////////////////////////////
//
//..