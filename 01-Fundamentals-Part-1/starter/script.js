////////////////////////////////////////////////////////////
//                       SECTION                          //
//              JAVASCRIPT FUNDAMENTALS - PART 1          //  
////////////////////////////////////////////////////////////
//
//
//
//
// let js = "amazing";
// console.log(40 + 8 + 23 - 10)
//
// console.log('Cezary');
// console.log(23);
//
// let firstName = 'Jolanta';
//
// console.log(firstName);
// console.log(firstName);
// console.log(firstName);
//
// let cezar_jola = 'cj';
// let $function = 27;
// let PI = 3.1415;
//
// let myFirstJob = 'butcher';
// let myCurentJob = 'security';
//  // keep in mind about naming variables
// console.log(myFirstJob);
// let country = "Poland";
// let continent = 'Europe';
// let population = 37.776000 ;
// let language = 'polish'
// 
// console.log(`I am from ${country} in ${continent} where live ${population} people, native language is ${language} `)
//
// const isIsland = "false"
// language = 'english'
// console.log('isIsland', 'population', 'country','language')
//
// console.log(population);
//
// let decsription = 'Portugal is in Europe, and its 11 milion people speak portuguease'
//
// let javascriptIsFun = true;
// console.log(javascriptIsFun);
// console.log(typeof true);
//
// javascriptIsFun = 'Yes!';
//
// year = 1223;
// console.log(year);
// console.log(null);
//
//
// let age = 30;
// age = 41;
// console.log(age);
// const birthYear = 1991;
// birthYear = 1990;
// const job;
//
//remember use always const ... unleas not needed change const 
//
// console.log(ageJonas,ageSarah,ageCezar);
//
// console.log(ageJonas * 2, ageJonas / 2, 3 ** 2);
//
// const firstName = 'Cezary'
// const lastName = 'Waszkuc'
// console.log(firstName + ' ' + lastName);
//
//                  Asigment operator
// let x = 10 + 5; // 15
// x += 10; // x = x + 10
// x *= 25 // x = x * 25
// x++ // x = x + 1
// x--// x = x - 1
// console.log(x)

// //Comparison operator
// console.log(ageJonas > ageCezar); // false
// // <, >, <=, >=
// console.log(ageSarah >= 18);// false

// const isFullAge = ageSarah >= 18;

// console.log(isFullAge);// false
// console.log( now - 1991 > now - 2018);

// const now = 2023;
// const ageJonas = now - 1991;
// const ageSarah = now - 2019;
// const ageCezar = now - 1976;
// console.log(now - 1991 > now - 2018);
// let x, y;
// x = y = 25 - 10 - 5; // x = y = 10 then  y = 10 so x = y both have same value 10 and 10
// console.log(x,y);

/*
Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is 
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg 
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both 
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about 
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 
m tall.
GOOD LUCK � */

///////////////////////////////////////////////////
///////////////////////////////////////////////////
//
//          Challenge// ver 1.                    
//      const markMass = 78         
//      const johnMass = 92
//      const markHeight = 1.69
//      const johnHeight = 1.88
//
//      let bmiMark = markMass/markHeight ** 2
//      //27.309968138370506
//      console.log(bmiMark);
//
//      let bmiJohn = johnMass/johnHeight ** 2
//      //26.02987777274785
//      console.log(bmiJohn)
//      const markHigherBMI = bmiJohn > bmiMark
//      console.log(markHigherBMI); //false
//
/////////////////////////////////////////////////
/////////////////////////////////////////////////
//             Challenge ver 2.        
//
//      const markMass = 95 
//      const johnMass = 85
//      const markHeight = 1.88
//      const johnHeight = 1.76
//
//      let bmiMark = markMass/markHeight ** 2
//      //26.87867813490267
//      console.log(bmiMark);
//
//      let bmiJohn = johnMass/johnHeight ** 2
//      //27.44059917355372
//      console.log(bmiJohn)
//      const markHigherBMI = bmiJohn > bmiMark
//      console.log(markHigherBMI) //true
//
/////////////////////////////////////////////////
/////////////////////////////////////////////////
//
//      const markMass = 95 
//      const johnMass = 85
//      const markHeight = 1.88
//      const johnHeight = 1.76
//      let bmiMark = markMass/markHeight ** 2
//          26.87867813490267
//      console.log(bmiMark);
//      let bmiJohn = johnMass/johnHeight ** 2
//          27.44059917355372
//      console.log(bmiJohn)
//      const markHigherBMI = bmiJohn > bmiMark
//      console.log(markHigherBMI) //true
//      console.log( `Mark's BMI is ${bmiMark} and is higher than John's ${bmiJohn}!`);
// 
/////////////////////////////////////////////////
/////////////////////////////////////////////////
//
//                      ver 1
//
//
//         const whoBmisHigher =  (bmiJohn < bmiMark) ?  "Mark's BMI is higher than John's!" : "John's BMI is higher than Mark's!"
//          console.log(whoBmisHigher);
//
//
//                      ver 2
/*

            if (bmiJohn < bmiMark) {
                  console.log(`Mark's BMI ${bmiMark} is higher than John's ${bmiJohn}!`)
            }else {
                  console.log( `John's BMI ${bmiJohn}} is higher than Mark's ${bmiMark}!`)
   
                           }
                         */
                        
///////////////////////////////////////////////////
///////////////////////////////////////////////////
//
//  const markHeight = 1.69; "cm";
//  const massMark = 78; "kg";
//  const johnHeight = 1.95; "cm";
//  const massJohn = 92; "kg";
///////////////////////////////////////
//  //const markHeight = 1.99; "cm";   
//  //const massMark = 78; "kg";	  
//  //const johnHeight = 1.99; "cm"; 
//  //const massJohn = 92; "kg";	   
/////////////////////////////////////
//  
//  const bmiMark = massMark / (markHeight * markHeight);
//  const BMIMark = (Math.floor(bmiMark))
//  const bmiJohn = massJohn / (johnHeight * johnHeight);
//  const BMIJohn = (Math.floor(bmiJohn))
//  
//  ///////////////////////////////////////////////////////
//  //const bmiTest = (bmiMark > bmiJohn) ? true : false //
//  ///////////////////////////////////////////////////////
//  
//  if (BMIJohn > BMIMark){
//      console.log(`Mark BMI ${BMIMark} is lower than John ${BMIJohn}`)
//  }else{ 
//      (bmiMark > bmiJohn)
//          console.log(`John BMI ${BMIJohn} is lower than Mark ${BMIMark}`)
//      }
/// //////////////////////////////////////////////
//
//              17. Strings and template Literals.
//
/////////////////////////////////////////////////
//
// const firstName = 'Cezary';
// const job = 'security';
// const birthYear = 1976;
// const year = 2023;
//
// const cezar = "Hi " + "I'm " + firstName + ', a ' + (year - birthYear) + ' years old. ' + "I am " + job + '.';
// console.log(cezar);
//
//  const cezarNew = `I'm ${firstName}, a ${year - birthYear} year old ${job} !`;
//  console.log(cezarNew)
//  
// console.log(`Just a regular string...`);
//
// console.log('string with \n\
// multiple \n\
// lines')
// console.log(`string 
// with multiple
// lines
// within 
// backstick`)
///////////////////////////////////////////////////
//      18. Taking decisions: if / else : statemant
///////////////////////////////////////////////////
//
// const age = 15;
//
// if (age >= 18) {
//     console.log('Sara can start driving license 🚘');
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`Sara is to young. Wait another ${yearsLeft} years 🥹`);
// };
//
// const birthYear = 1991; 
//
// let century;
// if (birthYear <= 200 ){ // condition 
//      century = 20;
// } else {
//      century = 21;
// };
// console.log(century);
//
///////////////////////////////////////////////////
///////////////////////////////////////////////////
//
///////////////////////////////////////////////////
// 19. Challenge 2#
///////////////////////////////////////////////////
//
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;
//
// const BMIMark = massMark / (heightMark * heightMark);
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark, BMIJohn);
//
// /* Write your code below. Good luck! 🙂 */
//
// if ( BMIMark > BMIJohn ){
//     console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`)
// } else {
//     console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`)
// }
//
///////////////////////////////////////////////////
//         20. Type Conversion and Coercion
//
///////////////////////////////////////////////////
//
// type conversion is when we manualy converting 
// value from one type to another
//
//  type coercion is automated converted by 
//  jScript doing automaticly 
//
/////////////////////////////////////////////////
//
//        const inputYear = '1991';
//        console.log(inputYear + 18);
//        output will be equall to "199118"
//        
//        const inputYear = '1991';
//        console.log(Number(inputYear)); // 1991
//        console.log(inputYear + 18); // 199118
//
///////////////////
//
//         const inputYear = '1991';
//         console.log(Number(inputYear), inputYear); //opt is number  1991 ,string  "1991" 
//         console.log(Number(inputYear) + 18); // opt is number 2009
//          
//         console.log(Number('cezar')); // opt NaN
//         console.log(typeof NaN); // opt <==== number lol invalid number :)
//         console.log(String(23), 23); // function String give us a string "23" and next is number 
//         opt is "23", 23
//
/////////////////////
//
//                  type coercion
//
/////////////////////
//
//        console.log('I am ' + 23 + "years old"); // + concatinate 
//        console.log('23' - "10" - 3); //opt numbers 10 // (-) making normal extraction 
//        console.log("23" + "10" + 3); //opt string 23103 // (+) concatinate string and numbers 
//        console.log("23" * '2');
//        console.log('23' / "2");
//
//                        let n = '1' + 1; // opt '11'
//                        n = n - 1 ;      // opt is '11' - 1
//                        console.log(n);  // opt final is 10 
//                         
//                2 + 2 + 4 + "5" = "85" 
//           '10' - '4' - '3' - 2 + '5' = '15' 
//
///////////////////////////////////////////////////
//      21. Truthy and Falsy value 
///////////////////////////////////////////////////
//
//   5 falsy values : 0 , '', undefined, null , NaN
//
//   console.log(Boolean(0));        //false
//   console.log(Boolean(undefined));//false
//   console.log(Boolean('Cezar'));  //true
//   console.log(Boolean({}));       //true
//   console.log(Boolean(''));      //false
//
//       const   money = 0;  // false boolean
//         const    money = 100; // truth boolean 
//       if (money) {
//          console.log("Don't spend it all :)");
//       } else {
//          console.log('You should get a job');
//       }
//
///////////////////////////////////
//
//        let height;
//        if (height) {
//            console.log('Yay! Height is defined')
//        } else {
//            console.log('Height is UNDEFINED')
//        }
//              opt is Height is Undefined
///////////////////////////////////
//                let height = 0;
//                
//        if (height) {
//            console.log('Yay! Height is defined')
//        } else {
//            console.log('Height is UNDEFINED')
//       }
//
//              opt height is also undefined 
//                 because 0 is also falsy value
/////////////////////////////////////
//
/////////////////////////////////////////////////////
//      22. Equality opertors == vs. === .
///////////////////////////////////////////////////
//
//   const age = 18; // asigment =
//   if (age === 18) console.log ('You just became an adult ;)'); 
//   comparison === //strict equality operator
//
//
//   const age = '18'
//   if (age == 18) console.log ('You just became an adult ;)')
//
// !!!!!!!!! always use === equality comparison operator ......
//
////////////////////////////////////////////////////////
//
//       const favourite = prompt('what is your favourite number?')
//        console.log(favourite); 
//        console.log(typeof favourite); // Opt is string 
//
//       if (favourite == 23) {  //'23' == 23
//            console.log('Cool! 23 is an amazing number !!')
//        } 
//
///////////////
//
//                if (favourite === 23) {  //
//                   console.log('Cool! 23 is an amazing number !!')
//                     } 
//                     // Opt we get nothing 
//
////////////////
//
//              We must use Number function for this 
//
//            const favourite = Number(prompt('what is your favourite number?'));
//
//            if ( favourite === 23 ) 
//                console.log('Cool! 23 is an amazing number !!')
//                           console.log(favourite);  // opt 23 as a number !
//
//////////////
//
//
// const favourite = Number(prompt('what is your favourite number?'));
//
//             if ( favourite === 23 ) {
//             console.log('Cool! 23 is an amazing number !!')
//              } else if (favourite === 7) {
//                 console.log('7 is also a cool number');
//              }else if ( favourite === 9) {
//                 console.log('9 is also a cool number')
//              } else {
//                 console.log( ' You typed wrong number')
//              }
//                      
//                       console.log(favourite); 
//
//
//     if(favourite !== 23) console.log('why not 23?');
//
/////////////////////////////////////////////////////////
//      23. Bolean logic
//////////////////////////////////////////////////////////
// age = 16
// Boolean Variables 
// A: Age is greater or equall 20  // false
// B: Age is less than 30 // true
//
// Operators! 
// !A   <------ // true
// A(false) and B(true) // false  ---> &&
// A (false) or B ( true) // true ---->||
// !A && B // true
// A || !B // false      
//
///////////////////////////////////////////////////////////     
//                  24. Logical Operators
/////////////////////////////////////////////////////////
//
//        const hasDriverLicense = true; // A
//        const hasGoodVision = true     // B
//        console.log(hasDriverLicense && hasGoodVision); // true
//
///////////////
//
//        const hasDriverLicense = true; // A
//        const hasGoodVision = false     // B
//        console.log(hasDriverLicense || hasGoodVision); // true 
//
///////////////
//
//        const hasDriverLicense = true; // A
//        const hasGoodVision = true     // B
//        console.log(!hasDriverLicense); // false
//
///////////////
//
//        const hasDriverLicense = true; // A
//        const hasGoodVision = true     // B
//        const isTired = true // C
//        
//        const shouldDrive = hasDriverLicense && hasGoodVision;
//        
//       if(shouldDrive){
//           console.log('Sara is able to drive!');
//       } else{
//           console.log('Someone else should drive')
//       };
//
//    if (hasDriverLicense && hasGoodVision && !isTired) { // !isTired false 
//    because we set isTired as true boolean but ! is change it to false
//    console.log('sarah drive');
//    }else {
//    console.log('stop the car')
//     }
//
/////////////////////////////////////////////////////////////     
//                       Challenge #3
/////////////////////////////////////////////////////////////
/*
CHALLENGE #3
There are two gymnastics teams: Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!

Your tasks:

1. Calculate the average score for each team, using the test data included below. The average score for Dolphins should be assigned to the scoreDolphins variable, and the average score of Koalas should be assigned to the scoreKoalas variable.

2. Compare the team's average scores to determine the winner of the competition, and print to the console:

"Dolphins win the trophy" if Dolphins win, or

"Koalas win the trophy" if Koalas win, or

"Both win the trophy" if their average scores are equal.

TEST DATA: Dolphins scored 96, 108, and 89. Koalas scored 88, 91, and 110.


/////////
//        
//            const scoreDolphins = (96 + 108 + 89) / 3;
//            const scoreKoalas = (88 + 91 + 110) / 3;
//                    
//            if (scoreKoalas === scoreDolphins){
//                console.log('Both win the trophy 🏆')
//            } else if (scoreKoalas < scoreDolphins) {
//                console.log ("Dolphins win the trophy 🏆")
//            } else if (scoreDolphins < scoreKoalas){
//                console.log ("Koalas win the trophy 🏆")
//            }
//            
////////
//
//                          Bonus 1
//                    Equall Win for both Team
                        
// const scoreDolphins = (97 + 112 + 101) / 3;
// const scoreKoalas = (109 + 95 + 106) / 3
// if (scoreDolphins > scoreKoalas && scoreDolphins >= 100){
//     console.log('Dolphins win the trophy 🏆');
// } else if (scoreKoalas > scoreDolphins && scoreKoalas >=100){
//     console.log('Kolas win the trophy 🏆');
// } else if ( scoreKoalas === scoreDolphins && scoreDolphins >= 100 && scoreKoalas >= 100 ){
//     console.log('Both win 🏆')
// } else {
//     console.log ('There is no Winner 👎')
// }
//                 Bonus 2 
//            there is No winner   
// const scoreDolphins = (97 + 112 + 80) / 3;
// const scoreKoalas = (109 + 95 + 50) / 3
// if (scoreDolphins > scoreKoalas && scoreDolphins >= 100){
//     console.log('Dolphins win the trophy 🏆');
// } else if (scoreKoalas > scoreDolphins && scoreKoalas >=100){
//     console.log('Kolas win the trophy 🏆');
// } else if ( scoreKoalas === scoreDolphins && scoreDolphins >= 100 && scoreKoalas >= 100 ){
//     console.log('Both win 🏆')
// } else {
//     console.log ('There is no Winner 👎')
// 
/////////////////////////////////////////////////////////////     
//                       The Switch Statement
/////////////////////////////////////////////////////////////
//
// */
//    const day = 'tueasday';
//
//    switch (day) {  // day === 'monday or another value'      straight comparison....
//    
//    case 'monday': // 
//       console.log('wo wo wo work day off');
//    break;
//    case 'tueasday':
//       console.log('starting work at 7:00 till 12:00');
//    break;
//    case 'wednesday':
//       console.log('Started early, going to GYM after work');
//    break;
//    case 'thursday':
//       case 'friday':
//             case 'saturday':
//                   console.log('booooring')
//    break;
//     default:
//       console.log('not a vvalid day')
//     
//    }
//          // if we dont apply break after each block of action  automaticly will run next block of code 
//
//    if (day === 'monday'){
//       console.log('wo wo wo work day off');
//     } else if (day === 'tueasday'){
//       console.log('starting work at 7:00 till 12:00');
//     } else if (day === 'wednesday'){
//       console.log('Started early, going to GYM after work');
//     } else if (day === 'thursday' || day === 'friday' || day === 'saturday'){
//       console.log('booooring');
//     }else{
//       console.log('not a vvalid day');
//     };
//
// ////////
//
//    const atributS = 'vaLue'
//    switch (atributS) {
//       case 'value':
//       console.log('if value is right this will be executed');
//       break; // this should break continuation of code if is compared as true othervise going to next code block
//       default:
//       console.log('if previous value not match this will be executed');
//       }
//
/////////////////////////////////////////////////////////////     
//                      26. Statements and expresion
/////////////////////////////////////////////////////////////