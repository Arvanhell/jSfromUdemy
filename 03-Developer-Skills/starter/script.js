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
