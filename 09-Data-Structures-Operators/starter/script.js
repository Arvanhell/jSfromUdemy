'use strict';

//const { text } = require("body-parser");

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
//*                             Coding Challenge #1

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
//*                     Coding Challenge #2

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
//* opt Goal 1: Lewandowski
//* opt Goal 2: Gnarby
//* opt Goal 3: Lewandowski
//* opt Goal 4: Hummels

//* 2.

//* calc average
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) average += odd;
average /= odds.length;
console.log(average); 
//* opt 3.6933333333333334

//* 3. 


for ( const [team, odd] of Object.entries(game.odds)){
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
 console.log(`Odd of ${teamStr} ${odd}`);   //team, odd
}
//*opt Odd of victory Bayern Munich 1.33
//*opt Odd of draw 3.25
//*opt Odd of victory Borussia Dortmund 6.5
*/
//* /////////////////////////////////////////////////////////

//*  116.          Sets

const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pasta',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(ordersSet);  // array
//* opt Set(3) {'Pasta', 'Pizza', 'Risotto'} duplicate are gone 

console.log( new Set('Kloss'));  // string 
//* opt Set(4) {'K', 'l', 'o', 's'}

console.log(new Set()); // also can be empty
//* opt Set(0) {size: 0}

console.log(ordersSet.size);   // as you can see is size not length 
//* opt 3

console.log(ordersSet.has('Pizza'));
//* opt true
console.log(ordersSet.has('Bread'));
//* opt false
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
console.log(ordersSet);
//* opt Set(4) {'Pasta', 'Pizza', 'Risotto', 'Garlic Bread'}
ordersSet.delete('Risotto');
console.log(ordersSet);
//* opt Set(3) {'Pasta', 'Pizza', 'Garlic Bread'}

for (const order of ordersSet) console.log(order);
//* opt Pasta
//* opt Pizza
//* opt Garlic Bread

//* /////// example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUique = [...new Set(staff)];
console.log(staffUique);
console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);
//* opt   3
console.log(new Set('gasgfasgsdgasdgahadjadg').size);
//* opt   7 
console.log(...new Set('gasgfasgsdgasdgahadjadg'))
//* opt   g a s f d h j

//*/                117. Maps: Fundamentals

const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy')
console.log(rest.set(2, 'Lisbon, Portugal'));
//* opt Map(3) {'name' => 'Classico Italiano', 1 => 'Firenze, Italy', 2 => 'Lisbon, Portugal'}

rest
.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
.set('open',11)
.set('close',23)
.set(true, 'We are open')
.set(false, 'We are closed');

//* rest.get('key')
console.log(rest.get('name'));  //* opt Classico Italiano
console.log(rest.get(true));    //* opt We are open
console.log(rest.get(1));       //* Firenze, Italy

// let time = 21;
//* console.log(rest.get(time > rest.get('open') && time < rest.get('close'))); 
//* opt    We are open 
// rest.clear();   //<------- deleting everything and we get 
//* Map(0) {size: 0}        //no oobject 
//* 0                       //no size 
console.log(rest.has('categories'));  //* has is a method 
//* opt   true
rest.delete(2);  //* we deleting whole this  (2, 'Lisbon, Portugal')
console.log(rest);
//* opt Map(7) {'name' => 'Classico Italiano', 1 => 'Firenze, Italy', 'categories' => Array(4), 'open' => 11, 'close' => 23, …}
console.log(rest.size); 
//* 7
const arr = [1, 2];
rest.set(arr, 'Test');
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
/*
0: {"name" => "Classico Italiano"}
1: {1 => "Firenze, Italy"}
2: {"categories" => Array(4)}
3: {"open" => 11}
4: {"close" => 23}
5: {true => "We are open"}
6: {false => "We are closed"}
7: {Array(2) => "Test"}
8: {h1 => "Heading"}
key: h1
value: "Heading"
*/
console.log(rest.size);
console.log(rest.get([1, 2])); //*  undefined 
console.log(rest.get(arr)); //* Test

//* //////////////////////////////////////////////////////

//*               118. Maps: Iteration


const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Try again!'],
]);
console.log(question); 
//* Map(7) {'question' => 'What is the best programming language in the world?', 1 => 'C', 2 => 'Java', 3 => 'JavaScript', 'correct' => 3, …}


// converting object to map
//* console.log(Object.entries(openingHours)); 
// const hoursMap = new Map(Object.entries(openingHours))
//* console.log(hoursMap);

//* iteration of the map

console.log(question.get('question'));
for (const [key, value] of question) {
    if(typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
//* ====>       const answer = Number(prompt('Your answer'));  
const answer = 3
console.log(answer);

console.log(question.get(question.get('correct') === answer)); 

//* convert map to array
console.log();([...question]);


//* console.log(question.entries());
console.log(...question.keys());
console.log(...question.values());

//* //////////////////////////////////////////////////////

//*             119. Summary: Which Data Structure to Use?

//* ///////////////////////////////////////
//* Sources Of Data:

//* 1   From the program itself: Data directly in source code (e.g status messages)
//* 2   From the UI / user interface : Data inpuyt from the user or data written in DOM (e.g tasks in todo app)
//* 3   From exteranal sources: Data fetched for example from web API (e.g recipe objects) // JSON
//*                                        ⬇️
//*                               Collection of data
//*                                        ⬇️
//*                                  Data structure
//*                       ⬇️                                  ⬇️
//*   simple List?                                                    key/value pairs?

//*               Arrays of Sets                          Object or Maps    

//*                                                             Keys allow us to describe value     

/*
Other BUILT-IN:
👉 WeakMap 
👉 WeakSet

NOT-BUILT IN:
👉 Stacks
👉 Queues
👉 Linked lists
👉 Trees
👉 Hash tables
*/



/*
//*                     When to use 

                            Arrays ⚠️    

 //*  tasks = ['Code','Eat', 'Code'];


                  //*['Code','Eat', 'Code']
👉 Use when you need ORDERED list of values ( might contain duplicates)
👉 Use when you need to MANIPULATE data

                              Vs.

                           Sets ⚠️    

  //*  tasks = new Set(['Code','Eat', 'Code'])


                      //*['Code','Eat']
👉 Use when you need to work with UNIQUE values
👉 Use when HIGH-PERFORMANCE is really important
👉 Use to REMOVE DUPLICATES from arrays

*/
//* and OBJEST vs MAP
/*

 //*                      OBJECTS ⚠️
                        task = {
                        task: 'Code',
                        date: 'today'
                        repeat: true
                        };
👉 More 'traditional' key/ value store ('abused' objects)
👉 Easier to write and acces values with . and []

✅ Use when you need to include function ( method)
✅ Use when working with JSON (can convert to map)

 //*                        MAPS ⚠️
                         task = new Map({
                        [task: 'Code'],
                        [date: 'today'],
                        [false, 'Start coding!']
                        });

👉 Better performance
👉 Keys can have data type
👉 Easy to iterate
👉 Easy to compute size                      

✅ Use when you simply need to map key to values
✅ Use when you need keys that are not strings
*/

//* //////////////////////////////////////////////////////
//*  120.      Coding challenge #3
/*
Let's continue with pur football betting app! This time, we have a map with a log of the events
that happened during the game. The values are the events
themselves, and the keys are the minutes in which eeach event happened ( a football game 
  has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game is finished,  it was found that the yellow card from minute 64 was unfair, 
so remove this event from the game events log.
3. Print the following string to the console: 
'An event happened, on average, every 9 minutes' ( keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking wheter it's in the first half 
or second half (after 45 min) of the game like this:
[FIRST HALF] 17 : ⚽️ GOAL
*/
/*
const gameEvents = new Map([
    [17, '⚽️ GOAL'],
    [36, '🔄 Substitution'],
    [47, '⚽️ GOAL'],
    [61, '🔄 Substitution'],
    [64, '🟨 Yellow card'],
    [69, '🟥 Red card'],
    [70, '🔄 Substitution'],
    [72, '🔄 Substitution'],
    [76, '⚽️ GOAL'],
    [80, '⚽️ GOAL'],
    [92, '🟨 Yellow card',]
]);

//* 1

const events = [...new Set(gameEvents.values())];
console.log(events);

//* 2
gameEvents.delete(64);

//* 3

console.log(`An event happened, on average, every ${90 / gameEvents.size} minutes`);
const time = [...gameEvents.keys()].pop();  // taking out last element
console.log(time);
console.log(
  `An event happened, on average, every ${time/ gameEvents.size} minutes`
);

//* 4

for (const [min, event ] of gameEvents) { // [key, value]
  const half = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[HALF] ${min}: ${event}`);
}
*/

/*
(4) ['⚽️ GOAL', '🔄 Substitution', '🟨 Yellow card', '🟥 Red card']
An event happened, on average, every 9 minutes
92
An event happened, on average, every 9.2 minutes
[HALF] 17: ⚽️ GOAL
[HALF] 36: 🔄 Substitution
[HALF] 47: ⚽️ GOAL
[HALF] 61: 🔄 Substitution
[HALF] 69: 🟥 Red card
[HALF] 70: 🔄 Substitution
[HALF] 72: 🔄 Substitution
[HALF] 76: ⚽️ GOAL
[HALF] 80: ⚽️ GOAL
[HALF] 92: 🟨 Yellow card

*/


//* //////////////////////////////////////////////////////
//*                   121. Working With Strings - Part 1
/*
const airline = 'TAP AIR Portugal';
const plane = 'A320';
console.log(plane[0]); // A
console.log(plane[1]); // 3
console.log(plane[2]); // 2
console.log('8737'[0]); // B

console.log(airline.length); // 16
console.log('8737'.length); // 4

console.log(airline.indexOf('r')); // 6
console.log(airline.lastIndexOf('r')); // 10
console.log(airline.indexOf('portugal')); // -1

console.log(airline.slice(4)); // Air Portugal <--- substring
console.log(airline.slice(4, 7)); // Air

console.log(airline.slice(0, airline.indexOf(' '))); // TAP
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // Portugal

console.log(airline.slice(-2)); // al
console.log(airline.slice(1, -1)); // AP Air Portuga

const checkMiddlSeat = function(seat) {
  //* B and E are middle seats
  const s = seat.slice(-1) // <======m string object is called  then turned into primitive string
  if(s === 'B' || s === 'E') console.log('You got the midle seat ');
  else console.log('You got lucky');
}
  checkMiddlSeat('11B'); //You got the midle seat 
  checkMiddlSeat('23C'); //You got lucky
  checkMiddlSeat('3E') //'You got the midle seat 

console.log(new String('gigigi')); //String {'gigigi'}  <=== object

*/

//* //////////////////////////////////////////////////////
//*                   122. Working With Strings - Part 2

const airline = 'TAP AIR Portugal';
console.log(airline.toLowerCase);
console.log(airline.toUpperCase);

//* fix capitalization in name

const passanger = 'ceZary'; 
const passangerLower = passanger.toLowerCase();
const passangerCorrect = passangerLower[0].toUpperCase() + passangerLower.slice(1);
console.log(passangerCorrect); //*  opt Cezary

//* comparing email

const email = 'hello@cezar.io'
const loginEmail = ' heLLo@cezaR.io \n'

//* const lowerEmail = loginEmail.toLocaleLowerCase();
//* const trimedEamil = lowerEmail.trim(); //* usuwamy white space
//*console.log(trimedEamil);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail); 

//* replacing

const priceGB = '288,87£'; //* podmiana dolar z funtem oraz przecnek kropka
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const annoucment = 'All passengers come to boarding door 23. Boarding door 23!'
//* console.log(annoucment.replace('door', 'gate')); //* replacing only one occurance 
//*All passengers come to boarding gate 23. Boarding door 23!
//* wwe can obey occurance using regular expression 
console.log(annoucment.replace(/door/g ,'gate'))
//* in meantime the replaceAll is working now as regulary basis ;)
console.log(annoucment.replaceAll('door', 'gate'));
//* All passengers come to boarding gate 23. Boarding gate 23!

//* Booleans 

const plane = 'A320neo';
console.log(plane.includes('A320')); //*true
console.log(plane.includes('Boeing')); //*false
console.log(plane.startsWith('Air'))  //* false
const plane2 = 'Airbus A320neo';
console.log(plane2.startsWith('Air')) //* true ('Air..) is in the string
console.log(plane2.startsWith('Aib')) //* false the string have no word starting Aib

if(plane2.startsWith('Airbus') && plane2.endsWith('neo')){
  console.log('Part of the New Airbus family');
}
//* Part of the New Airbus family 

//* Practise exercise

const checkBaggage = function(items){
  const baggage = items.toLowerCase(); //* that we can compared in one standard
    if(baggage.includes('knife') || baggage.includes('gun')) {
      console.log('You not allowed on board');
    }else {
      console.log('Wellcome aboard!');
    }
}

checkBaggage('Socks and camera')
checkBaggage('I have a laptop, some foof and pocket knife');
checkBaggage('Got some snack and a gun for protection')
//* Wellcome aboard!
//* You not allowed on board
//* You not allowed on board


//* //////////////////////////////////////////////////////
//*                   123. Working With Strings - Part 3

//* SPLIT and JOIN

console.log('a+very+nice+string'.split('+'));
//* (4) ['a', 'very', 'nice', 'string']
console.log('Cezary Waszkuc'.split(' '));
//* ['Cezary', 'Waszkuc']

const [firstName, lastName] = 'Cezary Waszkuc'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ')
console.log(newName); //* Mr. Cezary WASZKUC

const capitalizeName = function(name){
  const names = name.split(' ') //* split by space then loop over array
  const namesUppers = [];
  for (const n of names){
    namesUppers.push(n[0].toUpperCase() + n.slice(1));
  }
  //*  namesUpper.push(n.replace(n[0], n[0].toUpperCase)) another version to use previously learned :P
  console.log(namesUppers.join(' '));
}

capitalizeName('jessica ann smith davis') //* Jessica Ann Smith Davis
capitalizeName('cezary waszkuc') //* Cezary Waszkuc

//* Padding
const message = 'Go to gate 23!'
console.log(message.padStart(25, '+')); 
//* +++++++++++Go to gate 23! 
console.log('Cezar'.padStart(25, '*')); 
//*opt      ********************Cezar 
console.log(message.padStart(25, '+').padEnd(35, '*'));
//* opt    +++++++++++Go to gate 23!**********

//* FuNCTION  mask of credit card

const maskCreditCard = function(number) {
  const str = number + '';
  const last = str.slice(-4);
  
  return last.padStart(str.length, '*');
}

console.log(maskCreditCard(2423121234));
//* opt  ******1234
console.log(maskCreditCard(342524634123512461));
//* opt  **************2450
console.log(maskCreditCard('24352363415161435136236'));
//* opt  *******************6236

//* REPEAT 
const message2 = 'Bad weather... All departures Delayed...';
console.log(message2.repeat(5));

//* Bad weather... All departures Delayed...Bad weather... All departures Delayed...Bad weather... All departures Delayed...Bad weather... All departures Delayed...Bad weather... All departures Delayed...

const pllanesInLine = function(n){
  console.log(`There are ${n} in line ${'🛩️ '.repeat(n)}`);
}
pllanesInLine(5)
//* There are 5 in line 🛩️ 🛩️ 🛩️ 🛩️ 🛩️ 
pllanesInLine(12)
//* There are 12 in line 🛩️ 🛩️ 🛩️ 🛩️ 🛩️ 🛩️ 🛩️ 🛩️ 🛩️ 🛩️ 🛩️ 🛩️
pllanesInLine(2)
//* There are 2 in line 🛩️ 🛩️ 
//* //////////////////////////////////////////////////////
//*                   124. Coding Challenge #4


/*
Wrrite a program that receives a list of variable names written in undersore_case and convert them to camelCase

The input will come from a textarea inserted into the DOM (see code below), and convertion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
first_name
Some_Variable
calculate_AGE
ddelayed_departure

SHOUL PRODUCE THIS OUTPUT ( 5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
Some_Variable       ✅✅✅
calculate_Aae       ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: remember which character defines a new line in the textarea
HINT 2: The solution only needs to work a variable made of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working
HINT 4: This challenge is difficult in purpouse, so start watching solution in case you' re stuck.
Then pause and continue!
Then test with your own test data!

GOOD LUCK
*/

document.body.append(document.createElement('testarea'));
document.body.append(document.createElement('button'));


document.querySelector('button').addEventListener('click', function() {
  const text = document.querySelector('textarea').value;
    const rows = text.split('\n');
  //* console.log(text); //* check the text in the area
  //* console.log(rows); //* check where is end and begining new row separate them 

  for(const [i,row] of rows.entries()) {
      const [first, second] = row.toLowerCase().trim().split('_');  // where is underscore beciming splitted and making two words separately lowercases and trim
      const output = `${first}${second.replace(
        second[0],
         second[0].toUpperCase()
      )}`; // output first letter in second word in the row we made as uppercase
      console.log(`${output.padEnd(20)}${✅.repeat(i + 1)}`);

  }
});

/*
output should be like this 
underscoreCase      ✅
firstName           ✅✅
Some_Variable       ✅✅✅
calculate_Aae       ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

*/

/*
we need to 
underscore_case --> underscoreCase 
first_name
Some_Variable
calculate_AGE
ddelayed_departure
*/

//* //////////////////////////////////////////////////////
//*                   125. String method practice.