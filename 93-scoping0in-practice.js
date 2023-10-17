'use strict';

function calcAge(birthYear) { // global scope 
    const age = 2037 - birthYear;

    function printAge(){
        const output = ` You are ${age}, born in ${birthYear}`
        console.log(output);
    }
    return age;
}

// global variable 
const firstName = 'Cezar';
calcAge(1976);
