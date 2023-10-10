/*
Compilation -> then 
Code is ready to executed 

EXECUTION
Creation of global execution context ( for top- level code)
1) - the code is not inside any function 
such like page loaded 
const name = 'Cezar'
then function declaration wil be declared and call later
 then this // code Human readable 
  const first = () => { 
  //  
 let a = 1;
const b = second();
a = a + b;
return a;
};

and this //
function second (){
    //
    var c = 2; return c;
}
// but the body of function only will be executed when called!!!
 
Execution context 
Environment in which a piece of JavaScript is executed. Store all the necessary information for some code to be executed.
📦 Pizza 'execcution context'
🍕 'JavaScript code'  // pizza eaten inside the box 

Execution of top- level code ( inside global EC)
👉 Exactly one global execution context (EC):
Default context, created for cpde that is not inside any function ( top-level).

Execution of function and waitijng for callbacks



What's INside executiojn context?
1. variable environment
    let, const and var declarations
    functions  
    argument object

2. scope chain

3. this keyword

Remember that this keyword and arguments object will not working in arrow function...!!!!!

call stack i looks like this on the top to bottom
executon context - execution context - execution cotext ...
'place' where execution context get stacked on top of each other, to leep track of where we are in the execution ..

*/

const name = ' Jonas';

const first = () => {
    let a = 1; 
    const b = secpnd (7, 9);
    a = a + b;
    return a;
};

function second (x, y) {
    var c = 2; 
    return c;
}

const x = first()
/*
stack in order 
GLOBAL checking variable in global scope then 
const x is executing function first()
inside the function first 
we have executed function second()
but instead function is returned and is living somewhere in memory 
abstarcja kurwa
all fucntion are poped off call stack and global as lastly staying in there  until also is poped out of callstack 

*/

