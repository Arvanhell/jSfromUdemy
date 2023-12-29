


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

//* Importing module
console.log('Importing module ✅');

//* 
//Learning how to import export rename and import as module in different way
//*

//* no strict mode --> all modules are executed in stricte mode as default
// import './shoppingCart.js' 
// we must to specify in html file that we have script type of module
//* // <script type = "module"  <----------   defer src="script.js"></script>

//* export must be happen in the top level code.


// import {addToCart, price, totalQuantity as quantity} from './shoppingCart.js';
//  'as'   is for changing name of variable set before into new name which we use 
// after exporting, we can change name now ar after within imported file.


// import { addToCart, price , totalQuantity as quantity } from './shoppingCart.js';
// addToCart('bread', 5)
// console.log(price , quantity);   //opt    237 23

//console.log(shippingCost); 

//  import * as ShoppingCart from './shoppingCart.js';
//* create an object containing everything from the module we exporting from
// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.price); // 237 
//* when we importing | default | named object from module we using //* add

// import add, { addToCart, price, totalQuantity }
// from './shoppingCart.js';
// import add, {cart} from './shoppingCart.js'
//* how is easy to import default export, no need to adding curly braces
//* but we can also mixing default with others objects like this example
// add('pizza', 2);
// console.log(price); // 2 pizza added to cart
// add('bananas', 25);
// add('aranges', 40);

//console.log(cart); 
// we mutating an array in the exported file and manipulated to use as function to push objects into array
//* IMPORT ARE NOT COPIES OF THE EXPORT, 
//* the are like an a live conection.


//*            <---------------------------------------------------->
//*            <            273. Top-Level await (ES2022)           >
//*            <---------------------------------------------------->


        // console.log('Start fetching');
        // const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        // const data = await res.json();
        // console.log(data);
        // console.log('Checking Checking connection');

        // const getLastPost = async function () {
        //         const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        //         const data = await res.json();
                //console.log(data);

//                 return {title: data.at(-1).title, ttext: data.at(-1).body };
//         };
// const lastPost = getLastPost();
// console.log(lastPost);

// Not very clean option
// lastPost.then(last => console.log(last));

// const lastPost2 = await getLastPost();
// console.log(lastPost2);
        
//*            <---------------------------------------------------->
//*            <     -------- 274. The Module Pattern   ------      >
//*            <---------------------------------------------------->

//        const ShoppingCart2 = (function(){
//                 const cart = []
//                 const shippingCost = 10;
//                 const totalPrice = 245;
//                 const totalQuantity = 32;

//                 const addToCart = function (product, quantity) {
//                         cart.push({product, quantity});
//                         console.log(`${quantity} ${product} is added to cart, shipping cost is ${shippingCost}`);
//                 };

//                 const orderStock = function (product, quantity) {
//                         console.log(`${quantity} ${product} ordered from  suplier`);
//                 };

//                 return {
//                         addToCart,
//                         cart,
//                         totalPrice,
//                         totalQuantity,
//                 };
//         })(); 
        
//         ShoppingCart2.addToCart('monitor', 3);
//         ShoppingCart2.addToCart('wireles mouse',2)
//         console.log(ShoppingCart2);
//         console.log(ShoppingCart2.shippingCost);

//*            <---------------------------------------------------->
//*            <                275. CommonJS Modules               >
//*            <---------------------------------------------------->

  //* Export
        // export.addToCart = function (product, quantity) {
        //         cart.push({product, quantity});
        //         console.log(
        //                 `${quantity} ${product} added to cart, shipping cost is ${shippingCost}`
        //         );
        // };
  //* Import
        // const { addToCart } = require('./shoppingCart.js');      

//*            <---------------------------------------------------->
//*            <    276. A Brief Introduction to the Command Line   >
//*            <---------------------------------------------------->

/*
     ls - listing 
     cd - change directory when you in file and you see interesting folder you want to go
     start typing then use tab to complete]
     cd ../.. move two level
     rm -R file - remove 
     mv - move file  mv file.js ../   which folder you wanted you must specify or slowly backward then 
*/

//*            <---------------------------------------------------->
//*            <              277. Introduction to NPM              >
//*            <---------------------------------------------------->

// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
import cloneDeep from 'lodash-es';
const state = {
        cart: [
                {product: 'keyboard', quantity: 20},
                {product: 'joystick', quantity: 20},
        ],    //     <------- always forgetting coma in here grrr
        user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);

// if we change is deep cloned as the module is stating for
state.user.loggedIn = false;
console.log(stateClone);

console.log(stateDeepClone);

// if(module.hot) {
//         module.hot()
// }
//* hot module is not working under this version of parcel 


//*            <---------------------------------------------------->
//*            <     278. Bundling With Parcel and NPM Scripts      >
//*            <---------------------------------------------------->

//* instaling parcel 
        // npm i parcell --save-dev    (<---- developer dependencies)

        // comand to working within parcel is 
                // npx (<--- not npm) parcel index.html
                 // 
                 // now instead live-server I received acces to server trough http://localhost:1234
                 // created after command  //    npx parcel index.html 
                 // this is on localhost as live-server but has different port 
                 // instead 8080 has 1234

//* To start parcel we can set script within package jason 
// "scripts": {
//    "start": "parcel index.html"
//   },
//*command from npm instead npx simply executing in terminal 
//* npm run start
//* to build 
//"scripts": {
//"build": "parcel build index.html"
//},

//*---------

//*            <---------------------------------------------------->
//*            <       279. Configuring Babel and Polyfilling       >
//*            <---------------------------------------------------->


//*            <---------------------------------------------------->
//*            <     -----------------------------------------      >
//*            <---------------------------------------------------->

//*            <---------------------------------------------------->
//*            <     -----------------------------------------      >
//*            <---------------------------------------------------->

//*            <---------------------------------------------------->
//*            <     -----------------------------------------      >
//*            <---------------------------------------------------->

