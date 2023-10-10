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





