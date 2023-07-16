//* Importing module
//* no strict mode --> all modules are executed in stricte mode as default

import './shoppingCart.js' 

// we must to specify in html file that we have script type of module
// <script type = "module"  <----------   defer src="script.js"></script>
console.log('Importing module will be first? '); // logged as second to console




//*            <---------------------------------------------------->
//*            <             268. Section Intro                     >
//*            <---------------------------------------------------->

//*            <---------------------------------------------------->
//*            <             269. Section Roadmap                   >
//*            <---------------------------------------------------->

//*            <---------------------------------------------------->
//*            <  270. An Overview of Modern JavaScript Development >
//*            <---------------------------------------------------->

//*                           NPM - node package manager

//*            <---------------------------------------------------->
//*            <       271. An Overview of Modules in JavaScript    >
//*            <---------------------------------------------------->
        //* Module 
//*     ------------
        // 👉Reusable piece of code that encapsulates implementation details;
        // 👉Usually a standalone file, but it doesn't have to be.
          // can have import or export values EXPORT (public API)
              /*

              import { rand } from './math.js';  -----------> IMPORT (DEPENDENCY)
              |------------------------------------|
              |  const diceP1 = rand(1, 6, 2);     |   
              |  const diceP2 = rand(1, 6, 2);     |   Module code can be simple
              |  const scores = { diceP1, diceP2 };|   value or entire function.
              |------------------------------------|  
               export { scores };    ------------------> export (public API) 

              */
        //👉Compose software: Modules are small building blocks that we put together
        // to build complex applications;
        //👉Isolate components: Modules can be developed in isolation without thinking
        // about the entire codebase;
        //👉Abstract code: Implement low-level code in modules and import these 
        //  abstraction into  other modules;
        //👉Organized code: Modules naturally lead to a more organized codebase;
        //👉Reuse code: Modules allow us to easily reuse the same code, 
        //  eveen across multiple projects.




//*            <---------------------------------------------------->
//*            <     272. Exporting and Importing in ES6 Modules    >
//*            <---------------------------------------------------->

//* no strict mode --> all modules are executed in stricte mode as default
// import './shoppingCart.js' 
//* // we must to specify in html file that we have script type of module
//* // <script type = "module"  <----------   defer src="script.js"></script>
// console.log('Importing module will be first? '); // logged as second to console

//*            <---------------------------------------------------->
//*            <     -----------------------------------------      >
//*            <---------------------------------------------------->