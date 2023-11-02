'use strict';

//* ///////////////////////////////////////////////
//* ///////////////////////////////////////////////

//* ----- BANKIST APP ----- *//

//*  Data

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

//*  Elements    147 --- creating DOM elements

const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovement = function (movements) {
  containerMovements.innerHTML = '';
    movements.forEach(function(mov, i) {
      
        const type = mov > 0 ? 'deposit' : 'withdrawal'

        const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
          <div class="movements__value">${mov}</div> 
        </div>
        `;
// in this place we implemented movements to shown on within html DOM manipulation
        containerMovements.insertAdjacentHTML('afterbegin', html);

    });
}
displayMovement(account1.movements)















//* ///////////////////////////////////////////////
//* ///////////////////////////////////////////////

//* LECTURES



//const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//* ///////////////////////////////////////////////

/*
let arr = ['a', 'b', 'c', 'd', 'e'];

console.log(arr.slice(2)) // return new array with extracted  // ['c', 'd', 'e']

console.log(arr.slice(2, 4)); // ['c', 'd']
console.log(arr.slice(-2)); // ['d', 'e'] \\ less element of the aray
console.log(arr.slice(-1)); // ['e']
console.log(arr.slice(1, -2)); // ['b', 'c']
console.log(arr.slice()); 
console.log([...arr]);

//* SPLICE

//*console.log(arr.splice(2)); // ['c','d','e']
arr.splice(-1); // ['a', 'b', 'c', 'd']
console.log(arr); // mutated and left ['a', 'b'] only
arr.splice(1, 2);  // second element is the number of elements you want to deleted 

//* REVERSE
 arr = ['a', 'b', 'c', 'd', 'e'];
 const arr2 = ['j', 'k', 'l', 'm', 'n'];
 console.log(arr2.reverse()) // 
 console.log(arr2); // mutated original array  ['n','m','l','k','j'] // 

//* CONCAT method

const letters = arr.concat(arr2);
console.log(letters); // ) ['a', 'b', 'c', 'd', 'e', 'n', 'm', 'l', 'k', 'j']

console.log([...arr, ...arr2]); // ['a', 'b', 'c', 'd', 'e', 'n', 'm', 'l', 'k', 'j']

//* JOIN 

console.log(letters.join(' - ')); // a - b - c - d - e - n - m - l - k - j 
console.log(letters.join(' * ')); // a * b * c * d * e * n * m * l * k * j
console.log(letters.join('')); // abcdenmlkj

//* ////------------ 143. The new at() Method ----------- ////
const arri = [ 23, 11, 64];
console.log(arri[0]); // 23
console.log(arri.at(0)); // 23
console.log(arri[arr.lengt - 1]); // 64 
console.log(arri.slice(-1)[0]);  // 64
console.log(arri.at(-1));  // 64
//* at method work on the strings 
console.log('cezary'.at(-1)) // y
*/
//* ////--------- 144. looping arrays forEach----------- ////
/*
//* for (const movement of movements) {
  for (const [i, movement] of movements.entries()) {
  if (movement > 0 ) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdraw ${Math.abs(movement)}`);
  }
}
*/
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log('//--------FOREACH ----------//');

movements.forEach(function(mov, i, arr) {
  //* first parameter second always index and the thirdone always entire array for looping over ....
  if (mov > 0 ) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdraw ${Math.abs(mov)}`);
  }
});
*/
//--------FOREACH ----------//

/*
Movement 1: You deposited 200
Movement 2: You deposited 450
Movement 3: You withdraw 400
Movement 4: You deposited 3000
Movement 5: You withdraw 650
Movement 6: You withdraw 130
Movement 7: You deposited 70
Movement 8: You deposited 130
*/

/*
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function(value, key, map){
  console.log(`${key}: ${value}`);
})
*/
/*
USD: United States dollar
EUR: Euro
GBP: Pound sterling
*/
//* ----- Set

/*
const currenciesUnique = new Set (['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique); //Set(3) {'USD', 'GBP', 'EUR'}

currenciesUnique.forEach(function (value, _, map){
  console.log(`${value}: ${value}`); // < --- key same as value?  lets change for underscore 
  //* USD: USD
  //* 180 GBP: GBP
  //* 180 EUR: EUR
})
*/
//* ----------------   146. PROJECT: "Bankist" App -----------------*//

//* ---------------- Coding Challenge #1 ----------------*//

/*
Julia and Kate are doing a study on dogs. So each of them asked 5 dogs owners about their dog's age, 
and stored the data into an array ( one array for each). For now, they are just interested in knowing wheter a dog is an adult or a puppy.
A dog is an adult if it is at least 3 year old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ( 'dogsJulia', and 'dogsKate'),
and does the following things:

1. Julia found out that the owners of the FIRST abd the LAST TWO dogs actually have cast, not dogs! So create a shalllow copy of Julia's array, abd remove the cat ages from that copied array ( because it's a bad ppractice to mutate function parameters)

2. Create an array with both Julia's (corrected ) nad Kate's data

3. For each remaining dog, log to the console whether it's an adult ('Dog number 2 is still a puppy')

4. Run the function for both test datasets

HINT: USE tools from all lectures in this section so far.

TestData - TD
TD 1. Julia's data [3,5,2,12,7] Kate's data [4, 1, 15, 8, 3]
TD2.  Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

*/


const checkDogs = function(dogsJulia, dogsKate ) {
    const dogsJuliaCorrected = dogsJulia.slice();
    dogsJuliaCorrected.splice(0, 1);
    dogsJuliaCorrected.splice(-2);
    console.log(dogsJuliaCorrected); 
    // last two and one from front is removed from array becauyse they were cats. 
        const dogs = dogsJuliaCorrected.concat(dogsKate);
        console.log(dogs); // TD1 [5, 2, 4, 1, 15, 8, 3]
                          // TD2 [16, 6, 10, 5, 6, 1, 4]

        //* 'Dog number 1 is an adult, and is 5 year old' or a puppy 'Dog number 2 is still a puppy'

        dogs.forEach(function(dog, i) {
            if ( dog >= 3) {
              console.log(`Dog number ${ i + 1} is an adult, and is ${dog} year old`);
            } else {
              console.log(`Dog number ${i + 1} is still a puppy`
              );
            }
        })
}
checkDogs([3,5,2,12,7],[4, 1, 15, 8, 3]) 
/*
TD1
Dog number 1 is an adult, and is 5 year old
Dog number 2 is still a puppy
Dog number 3 is an adult, and is 4 year old
Dog number 4 is still a puppy
Dog number 5 is an adult, and is 15 year old
Dog number 6 is an adult, and is 8 year old
Dog number 7 is an adult, and is 3 year old
*/

checkDogs([9, 16, 6, 8, 3],[10, 5, 6, 1, 4])
/*
TD2
Dog number 1 is an adult, and is 16 year old
Dog number 2 is an adult, and is 6 year old
Dog number 3 is an adult, and is 10 year old
Dog number 4 is an adult, and is 5 year old
Dog number 5 is an adult, and is 6 year old
Dog number 6 is still a puppy
Dog number 7 is an adult, and is 4 year old
*/

//* ---------- 149. Data Transformations: map, filter, reduce ----------///

//* ---------- 150. The Map Method ----------///


const movementos = [200, 450, -400, 3000, -650, -130, 70, 1300];
    const eurToUsd = 1.1;

    const movementosUsd = movementos.map(function(mov){
      return mov * eurToUsd;
    })
    console.log(movementos);
    console.log(movementosUsd);
  /*
     [220.00000000000003, 495.00000000000006, -440.00000000000006, 3300.0000000000005, -715.0000000000001, -143, 77, 1430.0000000000002]
    */

    const movemenntosUsd = movementos.map(mov => mov * eurToUsd); // arrow function same as above simplifier
    console.log(movemenntosUsd);

    /*
     [220.00000000000003, 495.00000000000006, -440.00000000000006, 3300.0000000000005, -715.0000000000001, -143, 77, 1430.0000000000002]
    */

/*
    const movementUsdfor = [];
    for ( const mov of movementos) movementUsdfor.push(mov * eurToUsd);
    console.log(movementUsdfor);
     
     [220.00000000000003, 495.00000000000006, -440.00000000000006, 3300.0000000000005, -715.0000000000001, -143, 77, 1430.0000000000002]
    
   */