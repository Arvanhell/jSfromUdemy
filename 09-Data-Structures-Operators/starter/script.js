'use strict';

/*
const weekdays: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]:{
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    opem: 0, // open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
 
  // ES6 enhanced object literals
  openingHours,


  order(starterIndex, mainIndex) {                    // f
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },


  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) { // f
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {                      // f
    console.log(
      `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};


//* 114. Looping Objects: Object Keys, Values, and Entries

//*       Property NAMES

const properties = Object.keys(openingHours);
console.log(properties); // *opt (3) ['thu','fri','sat']

let openStr = `We are open on ${properties.length}`; 
//*opt We are open on 3 days.
days:
for (const day of Object.keys(openingHours)){
  console.log(day);  // *opt  thu, fri, sat
}
console.log(openStr);
//*opt We are open on 3 days.


//*         Property VALUES

const values = Object.values(openingHours);
console.log(values);

//*opt (3){...}{...}{...}
  //* 0:{open: 12, close: 22}
  //* 1:{open: 11, close: 23}
  //* 2:{open: 0, close: 24}
      //* length: 3
      //* __proto__: Array(0)


      //*  ENTIRE object
      const entries = Object.entries(openingHours);
      console.log(entries);

      //* []key, value] 
      for ( const [key, {open, close}] of entries) {
        console.log(`On ${key} we open at ${open} and close at ${close}`);
      }
*/
//* //////////////////////////////////////////////////
/*
 *Optional chaining

if (restaurant.openingHours && restaurant.openingHours.mon)
console.log(restaurant.openingHours.mon.open);


 *with optional chaining ] --->   ? 

console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

*example

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'closed'; // coelasting and  optional chaining togther comply
  console.log(`On ${day}, we open at ${open}`);
}

* Methods
console.log(restaurant.order?.(0,1) ?? 'Method does not exist');


* Array

const users = [{'Joanna', 'hallo@monkey.com'}];

* shorter version
console.log(users[0]?.name ?? 'User array empty');

* loger version ( older)
if (users.length > 0) console.log(users[0].name);
else console.log('user array empty');


* // opt 'Joanna'

*/
/*

const menNu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menNu) console.log(item);

for (const [i, el] of menNu.entries()) {
 
  console.log(`${i+1}: ${el}`);
}

console.log([...menu.entries()]);




const {name, openingHours, categories} = restaurant;
console.log(name, openingHours, categories);

const {name: restaurantName, openingHours: hours, categories: tags} = restaurant;
console.log(restaurantName, hours, tags);



const  {menu = [], starterMenu: starters = []} = restaurant
console.log(menu, starters);

*/

// *Mutating  variables 
/*
let a = 111;
let b = 999;
const obj = {a: 23, b: 7, c: 14};
({a, b} = obj); // trick to putting the object to parentese
console.log(a,b);
*/
// 23  7


//nested Object
/*
const {
  fri: {open: o, close: c} ,
} = openingHours;
console.log(o, c); 
*/
// 11  23



                //* coaelescing operator  ??


   // restaurant.numGuests = 0;
   /*
const guesTs = restaurant.numGuests || 10;
console.log(guesTs); // 0c
*/
// nullish : null undefined ( NOT 0 or empty string '')
/*
const guesTsCorrect = restaurant.numGuests ?? 10;
console.log(guesTsCorrect); // 10

*/



/*

      console.log('---- OR ----');
*/
// * Use any fata type, return any data type, short -circuting
/*
console.log(3 || 'Jonas'); // 3
console.log('' || 'Jonas'); //  Jonas
console.log(true || 0); // true
console.log(undefined || null); // null

console.log(undefined || 0 || '' || 'Hello' || 23 || null);  // Hello

*/

/*
//* * restaurant.numGuests = 23

const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1); 
//* 10 
const guest2 = restaurant.numGuests || 10
console.log(guest2); 
//* *10 because at this moment restaurantGuest is not defined value,  but when we define value as restaurant.numGuests = 23; the truth value will be 23 
*/
/*
      console.log('---- AND ----');
*/
  //  *And work oposite way than OR 

  /*
  console.log(0 && 'Jonas'); // 0 value and answer is 0
  console.log(7 && 'Jonas '); // truthy value but instead is answer Jonas

  console.log('Hello' && 23 && Null && 'jonas');  // null in moment any value become false then all became falsy 
*/


  // practical example
  /*
  if (restaurant.orderPizza) {
    restaurant.orderPizza('mushroom', 'spinach');
  }
restaurant.orderPizza & restaurant.orderPizza 
('mushrooms', 'spinach');
//*
const rest1 = {
  name: 'Capri',
//*
//* numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'La Piaza',
  owner: 'Giovani Rossi',
};
*/

// * OR assigment operator 
//rest1.numGuests = rest1.numGuests || 10;
//rest2.numGuests = rest2.numGuests || 10
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

/*
//* * nullish assigment operator ( null or undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

rest1.owner = rest1.owner && '<ANONYMOUS>'; //undefined
rest2.owner = rest2.owner && '<ANONYMOUS>'; //'La Piazza' owner '<ANONYMOUS>'
rest1.owner && '<ANONYMOUS>';
rest2.owner && '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);

                                    
//* * The Spread Operator (...)
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr); 
//* opt [1,2,7,8,9]
const newArr = [1,2, ...arr]; // spread operator  
console.log(newArr); 
//*  opt [1,2,7,8,9] 

console.log(...newArr);
//*  opt 1 2 7 8 9

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);
//* opt  (4) ['Pizza', 'Pasta', 'Risotto', 'Gnocci']

//*  * Copy array

const mainMenuCopy = [...restaurant.mainMenu]
console.log(mainMenuCopy);
//* opt (3) ['Pizza', 'Pasta', 'Risotto']
const menus = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menus);
//* opt (7) ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad', 'Pizza', 'Pasta', 'Risotto']

//*  * Iterables: array, strings maps, sets. Not objects
const str = 'Jonas';
const letters = [...str, ' ', 'S.']
console.log(letters);
//*  opt (7) ['J', 'o', 'n', 'a', 's', ' ', 'S.'] 
console.log(...str);
//*  opt J o n a s

//*         real world examples 
*/
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
// *        Objects
/*
const newRestaurant = {foundedIn: 1998,...restaurant, founder: 'Giuseppe'}
console.log(newRestaurant);

const restaurantCopy = { ...restaurant};
restaurant.name = 'Ristorant Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);
//*     destructuring is live saver :)
*/
/*
let [main, secondary] =  restaurant.categories;
console.log(main, secondary)
 switching variables
 const tempor = main;
main = secondary;
console.log(main, secondary);
 receive 2 return values from a function
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


// * DESTRUCTURONG

// * Rest Pattern and Parameters
// * SPREAD because on Right side of = 
       const arrA= [1,2, ...[3, 4]]
// * REST because on Left side of = 
//     const [a, b ...other] =  [1, 2, 3, 4, 5];
//       console.log(a, b, others);


// * the rest element must be as the last element (int his manner we have ...otherFood)
/*
const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu, 
  ...restaurant.starterMenu
];
console.log(pizza, risotto, otherFood);
//*opt Pizza Risotto
//* (4) ["Foccacia", "Bruschetta", "Garlic Bread", "Caprese Salad"]

//* Now try in object 
//*  * Object

const {sat, ...weekday} = restaurant.openingHours;
console.log(weekday);
*/
/*
{thu: {…}, fri: {…}}
fri: {open: 11, close: 23}
thu: {open: 12, close: 22}
[[Prototype]]: Object
*/
/*

//* FUNCTION

const add = function(...numbers) { 
  let sum = 0;
  for (let i= 0; i < numbers.length; i++) 
    sum += numbers[i];
    console.log(numbers);
    console.log(sum);
  
};

add(2, 3);
add(5, 3, 7, 2);
add(8,2,5,3,2,1,4);

const x = [23, 5, 7];
add(...x)
console.log(x);
*/
/*
   5 // sum
   (4) [5, 3, 7, 2] // numbers[i]
   17 // sum 
   (7) [8, 2, 5, 3, 2, 1, 4] // numbers[i]
   25 // sum 
   (3) [23, 5, 7] // numbers[i]
   35 // sum 
   (3) [23, 5, 7] //numbers
*/

// * restaurant.orderPizza('mushrooms', 'onin', 'olives', 'spinach';)

/*

////////////////////////////////////////////*
//* Coding Challenge #1

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the othes are field players.
For Bayern Munich (team1)  create one variable ('gk') with the goalkeaper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich ( team 1) used 3 substitutes players. So create a new array ('playersFinal) containing all the original team1 players plus 'Thiago', 'Countinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd ( called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals) that receives an arbitrary number of player names (not an array) and printes each of them to the console, along with the number of goals that  were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win Print to the console which team is more likely to win, WITHOUT using an if/ else statement or the ternary operator.

test data for 6: Use players 'Davies', 'Muller', 'Lewandowski', and 'Kimich'. Then, call the function again with players from game.scored.
GL
*/
/*
const game = {
  team1: 'Bayern Munich',
  team2: 'Borussia Dortmund',
  player: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brands',
      'Sancho',
      'Goetze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
*/
/*
//* 1.
const [player1, player2] = game.players;
console.log(player1, player2);

//* 2.
const [gk, ...fieldPllayers] = player1;
console.log(gk, fieldPllayers);

//* 3.
const allPlayers = [...player1, ...player2];
console.log(allPlayers);

//* 4.
const players1Final = [...player1, 'Thiago', 'Couthinho', 'Periscic'];

//* 5.
const {odds: {team1, x: draw, team2}
  } = game;
  console.log(team1, draw, team2);

//* 6.
const printGoals = function(...players) {
  console.log(`${players.length} gials were scored`);
};


printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals('Davies', 'Muller'); 
printGoals(...game.scored);

//* 7.
team1 < team2 && console.log('Team 1 is mote likely to win');
team1 > team2 && console.log('Team 2 is mote likely to win');

*/
////////////////////////////////////////////*
//* Coding Challenge #2

/*
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, 
along with the goal number ( example: 'Goal 1: 'Lewandowski')
2. Use a loop to calculate the average odd and log it to the console ( we already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formated way, exactly like this:
    Odd off victory Bayern Munich: 1.33
    Odd of draw: 3.35
    Odd of victory Borrussia Dortmund: 6.5
  Get the team names directly from the game objects have the same property names

  BONUS:
  Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
        {
          Gnarby: 1,
          Hummels: 1,
          Lewandowski: 
        }
*/
/*
//* 1.

for (const [i, player] of game.scored.entries())
console.log(`Goal ${i + 1}: ${player}`);
// opt Goal 1: Lewandowski
// opt Goal 2: Gnarby
// opt Goal 3: Lewandowski
// opt Goal 4: Hummels

//* 2.

//calc average
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) average += odd;
average /= odds.length;
console.log(average); 
//  opt 3.6933333333333334

//* 3. 

//print
for ( const [team, odd] of Object.entries(game.odds)){
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
 console.log(`Odd of ${teamStr} ${odd}`);   //team, odd
}
//*opt Odd of victory Bayern Munich 1.33
//*opt Odd of draw 3.25
//*opt Odd of victory Borussia Dortmund 6.5
*/

