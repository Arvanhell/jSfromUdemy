'use strict';
/*
SCOPING AND SCOPE IN JAVA SCRIPT: CONCEPTS

Scope chain 

Scoping : how our program's variables are prganized and accessed.
'Where do variables live?' or 'Where can access a crertain variable, and where not?'.

Lectical scoping: Scoping is controlled by placement of 
function and blocks in the code.

Scope: Space or environment in whhich a certain variable is declared ( variable environment in case of functions).
There is global scope, function scope, and block scope...
Ku*wa ja pie*dole jakie to poj*bane ale ok jakos jedziemy .


Scope of variable: region of our code wher a certain variable can be accessed
/*

/*
there is three difrent types of scope

global scope 
        accesible in everywhere 
        Outside of any function or block
        variables declared in global scope are accessible everywhere
    const me = 'Cezary';
    const job = 'Security';
    const year = 19976


funcition scope 
        variables are accessible onlu inside NOT outside called local scope

        function calcAge(birthYear) {
            const now = 2023;
            const age = now - birthYear
            retun age;
        }
            console.log(now)// reference error

block scope ( ES6)
        if ( year >= 1981 && year <= 1996) {
            const millenial = true;
            const food = 'avocado';
        }
        example if block for loop block etc.

        console.log( millenial) //reference error

        variables are accessible only inside blocks ( block scoped)
        However this only applies to let and const variables)!

        Function are block also block scoped (only strict mode...)

*/

scope chain nested 
//////////// global scope 
const myName = 'Cezar'; 

function first () {
        /////// first() scope
         const age = 30;

         if (age >= 30){
            const decade = 3;
            var millenial = true;
        }

    function second () {
                 ///////// second() scope
                const job = 'security';

                console.log(`${myName} is a ${age} - old ${job}`);
    //scope has acces to vaiables from all outer scopes
                ////////// second() scope
    }

    second();
     //scope has acces to vaiables from all outer scopes
    //////// first() scope
}

first ()
///////////// global scope

// this process looking for variables around up up  
// VARIABLE LOOKUP in SCOPE CHAIn...!
// until founding the variable he need then use it 
//but is not workin in back way outter has no acces in to inner 
// can look for parrents but not for child scopes

/*
if block scope {
var is function scoped 
const and let are block scoped...!!!
}

if blocks and second have no acces to each other in example above so is not work side ways only UP WAYS 

///////////////////////////////////
Scope chain vs call stack


const  a = 'Jonas';             /  
first();                        /           third()EC
                                /       d = 'Hey';
function first() {              //////////////////////////////
    const b = 'Hello';          /
    second()                    /           second() EC
                                /       c = 'Hi';
                                ///////////////////////////////
    function second(){          /    
        const c = 'HI';         /           first() EC
        third();                /       b = 'Hello';
    }                           /       second = < function >
}                               /   
                                ///////////////////////////////   
function third(){               /
    const d = ' Hey';           /           GLOBAL EC
console.log(d + c + b + a);     /       a = 'Jonas'
//refeerence error              /       first = < function >
}                               /       third = < function >
                                ///////////////////////////////////
                                          variable environment ( VE) 
                                                CALL STACK 
                                            order in which function 
                                            were called 


                                        GLOBAL scope
                                        a = 'Jonas
                                        first = <funciton>
                                        third = <funciton>



                        first() scope                   third() scope
                        b= 'Hello'                      d = 'Hey'
                        second = < function>            ...............
                        ....................            a = 'Jonas'
                        a = 'Jonas'                     first = <function>
                        first = < function>             third = <function>
                        third = < function>



                        second() scope
                        c = 'Hi'
                        ....................
                        b = 'Hello'
                        second = <function>
                        ....................
                        a = 'Jonas'
                        first = < function>
                        third = < function>




                Scope chain order which function are writen in the code

                has nothing to do with order in which function were called....


                    

                        