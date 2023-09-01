/*
let js = "amazing";
console.log(40 + 8 + 23 - 10)

console.log('Cezary');
console.log(23);

let firstName = 'Jolanta';

console.log(firstName);
console.log(firstName);
console.log(firstName);

let cezar_jola = 'cj';
let $function = 27;
let PI = 3.1415;

let myFirstJob = 'butcher';
let myCurentJob = 'security';
 // keep in mind about naming variables
console.log(myFirstJob);
let country = "Poland";
let continent = 'Europe';
let population = 37.776000 ;
let language = 'polish'
 
console.log(`I am from ${country} in ${continent} where live ${population} people, native language is ${language} `)

const isIsland = "false"
language = 'english'
console.log('isIsland', 'population', 'country','language')

console.log(population);

let decsription = 'Portugal is in Europe, and its 11 milion people speak portuguease'

let javascriptIsFun = true;
console.log(javascriptIsFun);
console.log(typeof true);

javascriptIsFun = 'Yes!';

year = 1223;
console.log(year);
console.log(null);
*/

// let age = 30;
// age = 41;
// console.log(age);
// const birthYear = 1991;
// birthYear = 1990;
// const job;

//remember use always const ... unleas not needed change const const const

// console.log(ageJonas,ageSarah,ageCezar);

// console.log(ageJonas * 2, ageJonas / 2, 3 ** 2);

// const firstName = 'Cezary'
// const lastName = 'Waszkuc'
// console.log(firstName + ' ' + lastName);

//Asigment operator
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

//  const markMass = 95 
//  const johnMass = 85
//  const markHeight = 1.88
//  const johnHeight = 1.76
//  let bmiMark = markMass/markHeight ** 2
// 26.87867813490267
//  console.log(bmiMark);
//  let bmiJohn = johnMass/johnHeight ** 2
//27.44059917355372
//  console.log(bmiJohn)
//  const markHigherBMI = bmiJohn > bmiMark
//  console.log(markHigherBMI) //true
//  console.log( `Mark's BMI is ${bmiMark} and is higher than John's ${bmiJohn}!`);
// 
/////////////////////////////////////////////////
/////////////////////////////////////////////////

//                      ver 1


// const whoBmisHigher =  (bmiJohn < bmiMark) ?  "Mark's BMI is higher than John's!" : "John's BMI is higher than Mark's!"
// console.log(whoBmisHigher);


//                      ver 2
/*

            if (bmiJohn < bmiMark) {
                  console.log(`Mark's BMI ${bmiMark} is higher than John's ${bmiJohn}!`)
            }else {
                  console.log( `John's BMI ${bmiJohn}} is higher than Mark's ${bmiMark}!`)
   
                           }
                         */
// 
///////////////////////////////////////////////////
///////////////////////////////////////////////////



   

