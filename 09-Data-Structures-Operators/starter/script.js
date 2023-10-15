'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
openingHours: {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
},

order: function(starterIndex, mainIndex) {
  return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

   
  orderDelivery: function ({starterIndex, mainIndex,time, address}) {
    console.log(`Order received ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  }
  //Order received Garlic Bread and Risotto will be delivered to Via del Sole, 21 at 22:30

  /*
  orderPasta: function(ing1, ing2, ing3){
    console.log(`Here is your delicious pasta with ${ing1},${ing2},${ing3}`);
  };
  */

};

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
})


const {name, openingHours, categories} = restaurant;
console.log(name, openingHours, categories);

const {name: restaurantName, openingHours: hours, categories: tags} = restaurant;
console.log(restaurantName, hours, tags);

//default value
const  {menu = [], starterMenu: starters = []} = restaurant
console.log(menu, starters);

// Mutating  variables 
let a = 111;
let b = 999;
const obj = {a: 23, b: 7, c: 14};
({a, b} = obj); // trick to putting the object to parentese
console.log(a,b);
// 23  7

//nested Object
const {
  fri: {open: o, close: c} ,
} = openingHours;
console.log(o, c); 
// 11  23

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr); 
// opt [1,2,7,8,9]
const newArr = [1,2, ...arr]; // spread operator  
console.log(newArr); 
// opt [1,2,7,8,9] 

console.log(...newArr);
// opt 1 2 7 8 9

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);
//opt  (4) ['Pizza', 'Pasta', 'Risotto', 'Gnocci']

// Copy array

const mainMenuCopy = [...restaurant.mainMenu]
console.log(mainMenuCopy);
//opt (3) ['Pizza', 'Pasta', 'Risotto']
const menus = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menus);
// opt (7) ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad', 'Pizza', 'Pasta', 'Risotto']

//Iterables: array, strings maps, sets. Not objects
const str = 'Jonas';
const letters = [...str, ' ', 'S.']
console.log(letters);
// opt (7) ['J', 'o', 'n', 'a', 's', ' ', 'S.'] 
console.log(...str);
// opt J o n a s

// real world examples 
/*
const ingidients = [
  prompt('Let\'s make pasta! Ingridient 1?'),
  prompt('Ingridient 2?'),
  prompt ('Ingridient 3'),
];

console.log(ingridients);

restaurant.orderPasta(ingidients[0],ingidients[1],ingidients[2]);
restaurant.orderPasta(...ingidients);
*/
// Objects
const newRestaurant = {foundedIn: 1998,...restaurant, founder: 'Giuseppe'}
console.log(newRestaurant);

const restaurantCopy = { ...restaurant};
restaurant.name = 'Ristorant Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);
// destructuring is live saver :)

/*
let [main, secondary] =  restaurant.categories;
console.log(main, secondary)
// switching variables
// const tempor = main;
//main = secondary;
console.log(main, secondary);
// receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0)
console.log(starter, mainCourse);

const nested = [2, 4, [5, 6]];
const [i,  ,j] = nested;
console.log(i,j);
const [i, , [j, k]] = nested;
console.log(i, j, k);
 output  2 , 5, 6

const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
*/
/*
const arr = [2,3,4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x,y,z] = arr;
console.log(x, y, z);
console.log(arr);
*/
  

