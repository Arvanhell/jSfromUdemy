// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// sudo npm install live-server -g
// live-server
//
//
//const calcAge = birthYear => 2023 - birthYear;
//console.log(calcAge(1976));
//
//                  RULES
/*
1
Make sure you undestand the problem. Ask the right questions to get a clear picture of the problem.
2
Divide and conquer: Break big problem into smaller sub- problems.
3
Don't be afraid to do as much research as you have to.
4
For bigger problems, write pseudo-code before witing the actial code.
----
Project manager : 'W need a function that reverse whatever we pass into it....!!! 
this is pseudo code...
function reverse (value)
if value type !string && ! number && !array
return value

if value type == string
reverse string
if value type == number
reverse number
if value type == array
reverse array

return reversed value
this is pseudo code...


// Problem
// We work for company building a sart home thermometer. Our mosts recent task is this: 'Given an array  of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error.'


const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
*/
//1) understanding the problem

/*
 - what is temperature amplitude? 
Answer : difference between highest and the lowest temp
- How to compute max and min tempertature?
-What's a sensor error? What to do?
*/
//2) Breaking up into sub-problem
/*
-How to ignore errors?
-Find max value in temp array
-Find min value in temp array
- substract min frm max ( amplitude) and return it
*/
/*
const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (temps[i] > max) max = temps[i];
    if (temps[i] < min) min = temps[i];
  }
  console.log(min, max);
  return max - min;
};
calcTempAmplitude([3, 15, 4]);
// logic of this function
// max = 3 iteration
// max = 7 iteration
// next number is smaller so we found max as 7
// we found min and max temperature within array -6 17
//last part we const amplitude
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude); //opt 23

//Problem 2:
//Function should now receive t arrays of temps

//1) Understanfong the problem
//- with 2 arrays, should we implement functionality twice? NO! Just merge two arrays

//2) Breaking up into sub-problems
//-  merge 2 arrays?

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (temps[i] > max) max = temps[i];
    if (temps[i] < min) min = temps[i];
  }
  console.log(min, max);
  return max - min;
};
const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [14, 5, 8]);
*/
///////////////////////////////////////////////////
//          60. Debuging (Fixing errors)
///////////////////////////////////////////////////
/*
Software bug: Defect a problem in a computer program. Basicly, any unexpected or unintended behavior of a computer program is a software bug.

Bugs are completly normal in software development!

Identify
become that there is a bug
during development
testing software
user reports durong production
context browser, user etc.

Find
Developer console (simple code)
Debugger (complex code)

FiX
replace wrong solution with new correct solution

Prevent
Searching fpr the same bug in similar code
Writing test using testing software
*/

///////////////////////////////////////////////////
//     60. Debuging with the console and breakpoints
///////////////////////////////////////////////////
/*

const measureKelvin = function () {
  const measurment = {
    type: 'temp',
    unut: 'celsius',
    value: 10
  
};
console.log(measurment);

//console.log(measurment.value);
//console.warn(measurment.value);
//console.error(measurment.value);

const kelvin = measurment.value + 273
return kelvin;
};
A// identify

console.log();

//BREAKPOINT we setting by marking red dot in google chrome within code line we want to set. When we debugging then code is executed until the breakpoint.Then we can push futher our code by clicking arrow with dot in Inpection tool Sourcesand ou code is executed one line in tiem. We will be able to find the problem and fixit.

*/

/*
// Using a debugger
const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = 0;
  let min = 0;

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    debugger; // <------- code for auto start debbuger
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
//A) Identify
console.log(amplitudeBug);

// to execute debugging we using comand code debbuger: in code line and autmaticaly we hae started live serwer ( if open ebuger tool);
*/

///////////////////////////////////////////////////
//                    62. Coding Challenge #1
///////////////////////////////////////////////////

/*
Given an array of forecasted maximum temperatures, the termometer displays a string with these temperatures.

Example: [17, 21, 23] will print 
"... 17degree C in 1 days ... 21degree C in 2 days ... 23degree C in 4 days ... "

Create a function 'PrintForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem- solving framework: Understand the problem and break it up into sub-problems!

test data 1: [17, 21, 23]
//
test data 2: [12, 5, -5, 0, 4]
*/
//1) I understand the problem
//- Array transformed to string, separated by ...
//- what is that X days? Answer index + 1

//2) Breaking up into sub problems
//- transform array into string
//- transoform each element to string with Celsius
//
