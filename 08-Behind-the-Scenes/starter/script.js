'use strict';


function calcAge(birthYear) { // global scope 
    const age = 2037 - birthYear;

    function printAge(){
        const output = ` You are ${age}, born in ${birthYear}`
        console.log(output);

        if(birthYear >= 1981 && birthYear <= 1996) {
            var millenial = true; // function declare acces everywhere rather not use 
            const firstName = 'Steven';
            const str = `Oh and you are a millenial, ${firstName}`;
            console.log(str);

            function add (a,b){
                return a + b 
            }
        }
        console.log( millenial)
        add(2,3); // not defined will throw error 
    }
    printAge();
    return age;
}

// global variable 
const firstName = 'Cezar';
calcAge(1976);