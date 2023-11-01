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

//*  Elements

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

//* ///////////////////////////////////////////////
//* ///////////////////////////////////////////////

//* LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

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

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
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
console.log('//--------FOREACH ----------//');

movements.forEach(function(mov, i, arr) {
  // first parameter second always index and the thirdone always entire array for looping over ....
  if (mov > 0 ) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdraw ${Math.abs(mov)}`);
  }
});
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