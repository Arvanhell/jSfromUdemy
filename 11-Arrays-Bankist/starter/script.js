'use strict';

//* ///////////////////////////////////////////////
//* ///////////////////////////////////////////////

//* ----- BANKIST APP ----- *//

//*  Data

const account1 = {
  owner: 'Martin Hertxel',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Dummies',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Theodor Mark Willson',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Sanders',
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

const displayMovement = function (movements, sort = false) { 
  // adding second parameter 'sort'
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

    movs.forEach(function(mov, i) {
      //when sort will be true then display will be sorted
      const type = mov > 0 ? 'deposit' : 'withdrawal';

      const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
          <div class="movements__value">${mov}€</div> 
        </div>
        `;
// in this place we implemented movements to shown on within html DOM manipulation
        containerMovements.insertAdjacentHTML('afterbegin', html);

    });
}
//displayMovement(account1.movements)

const calcDisplayBalance = function(acc) {
  acc.balance = acc.movements.reduce((acc,mov) => acc + mov, 0);
  
  labelBalance.textContent = `${acc.balance}€`;
  };  
  //calcDisplayPrintBalance(account1.movements);

const calcDisplaySummary = function(acc) {

  const income = acc.movements
  .filter(mov => mov > 0)
  .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${income}€`
//*-------------------------------------------//
  const outcome = acc.movements
  .filter(mov => mov < 0)
  .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(outcome)}€`;
//*----------------------- abs absolut value 

  const interest = acc.movements. filter(mov => mov > 0)
  .map(deposit => deposit * acc.interestRate) 
  // calculate percentage for interests

  .filter((int, i, arr) => {
    return int >= 1;
  })
  .reduce(( acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;

}
//calcDisplaySummary(account1.movements);




const createUsernames = function (accs) {
    accs.forEach(function(acc){   // perfct to work to get side-efect looping trough entire 
      acc.username = acc.owner  // we doing side effect to our app 
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('')
    })
};
createUsernames(accounts);

const updateUI = function (acc) {
      //display movement
      displayMovement(acc.movements);
      //display balance
      calcDisplayBalance(currentAccount);
      //display summary
      calcDisplaySummary(currentAccount); 
}

// Event Handler 
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  // prevent form from submitting 
  e.preventDefault(); 

 currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value);
    
    console.log(currentAccount);

    if (currentAccount?.pin === Number(inputLoginPin.value)){
      //display UI and wellcome method
        labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]
      }`;
      containerApp.style.opacity = 100;

      //Clear input fields
      inputLoginUsername.value = inputLoginPin.value = '';
      inputLoginPin.blur();

        //update UI
     updateUI(currentAccount)
    }
});


btnTransfer.addEventListener('click', function(e) {
e.preventDefault();
const amount = Number(inputTransferAmount.value);
const receiverAcc = accounts.find(
  // using method find to transfer amount of money
  acc => acc.username === inputTransferTo.value
);
inputTransferAmount.value = inputTransferTo.value = '';

    if(amount > 0 && 
      receiverAcc &&
      currentAccount.balance >= amount && 
      receiverAcc?.username !== currentAccount.username) {
        // doing the transfer 
        currentAccount.movements.push(-amount);
         receiverAcc.movements.push(amount);

         //Update UI
         updateUI(currentAccount);
      }
});


// close account feature
// we will use to find and delete account findIndex
btnClose.addEventListener('click', function (e) {
  e.preventDefault();
        
  if (inputCloseUsername.value === currentAccount.username && Number(inputClosePin.value) === currentAccount.pin) {
   const index = accounts.findIndex(acc => acc.username === currentAccount.username);

          // delete account
        accounts.splice(index, 1);
          // hide UI
          containerApp.style.opacity = 0;
           }
           inputCloseUsername.value = inputClosePin.value = '';
});

btnLoan.addEventListener('click', function (e){
e.preventDefault();

const amount = Number(inputLoanAmount.value);
// we using 'some' method here to implement request loan
    if(amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
        // Add movement
        currentAccount.movements.push(amount);
        
        //update UI
        updateUI(currentAccount);
    }
    inputLoanAmount.value = '';
})
// need to sort for click to sort and reverse to unsorted to false

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovement(currentAccount.movements, !sorted); // true 
  sorted = !sorted;
  // and is working
});



//* ///////////////////////////////////////////////
//* ///////////////////////////////////////////////

//* LECTURES



// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

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


//const checkDogs = function(dogsJulia, dogsKate ) {
  //  const dogsJuliaCorrected = dogsJulia.slice();
    //dogsJuliaCorrected.splice(0, 1);
   // dogsJuliaCorrected.splice(-2);
    //console.log(dogsJuliaCorrected); 
    // last two and one from front is removed from array becauyse they were cats. 
      //  const dogs = dogsJuliaCorrected.concat(dogsKate);
        //*console.log(dogs); // TD1 [5, 2, 4, 1, 15, 8, 3]
                          // TD2 [16, 6, 10, 5, 6, 1, 4]

        //* 'Dog number 1 is an adult, and is 5 year old' or a puppy 'Dog number 2 is still a puppy'
/*
        dogs.forEach(function(dog, i) {
            if ( dog >= 3) {
              //* console.log(`Dog number ${ i + 1} is an adult, and is ${dog} year old`);
            } else {
              //* console.log(`Dog number ${i + 1} is still a puppy`
              );
            }
        })
}
checkDogs([3,5,2,12,7],[4, 1, 15, 8, 3]) 
*/
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

//* --> checkDogs([9, 16, 6, 8, 3],[10, 5, 6, 1, 4])
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

//const movements = [200, 450, -400, 3000, -650, -130, 70, 1300],

  //   eurToUsd = 1.1;
    //const movementsUsd = movements.map(function(mov){
      //return mov * eurToUsd;
    //})
    //*console.log(movements);
    //*console.log(movementsUsd);
  /*
     [220.00000000000003, 495.00000000000006, -440.00000000000006, 3300.0000000000005, -715.0000000000001, -143, 77, 1430.0000000000002]
    */

//const movementUsdfor = [];
  //  for ( const mov of movements) movementUsdfor.push(mov * eurToUsd);
    //* console.log(movementUsdfor);
    // const movementsDecription = movements.map((mov, i) => 

    //  `Movement ${i + 1} : You ${mov > 0 ?  'deposited' : 'withdrew'} ${Math.abs(mov)}`
     // passing callback to this method map function
    // );
    //* console.log(movementsDecription);
    /*
    //*(8) ['Movement 1 : You deposited 200', 'Movement 2 : You deposited 450', 'Movement 3 : You withdrew 400', 'Movement 4 : You deposited 3000', 'Movement 5 : You withdrew 650', 'Movement 6 : You withdrew 130', 'Movement 7 : You deposited 70', 'Movement 8 : You deposited 1300']
    */
//* // ----------------- 151. Computing Usernames ----------------- //

//console.log(createUsernames('Steven Thomas Williams')); // stw
// const username = user.toLowerCase()     // 'steven thomas williams'
// .split(' ')                             // 'steven', 'thomas', 'wiliams'
// .map(name => name[0])                   // 's', 't', 'w'
// .join('')                               // stw
// console.log(username);


        /*
        const createUsernames = function (accs) {
    accs.forEach(function(acc){   // perfct to work to get side-efect looping trough entire 
      acc.username = acc.owner  // we doing side effect to our app 
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('')
    })
};
createUsernames(accounts)

//*console.log(createUsernames('Steven Thomas Williams')); // stw
//* const username = user.toLowerCase()     // 'steven thomas williams'
//* .split(' ')                             // 'steven', 'thomas', 'wiliams'
//* .map(name => name[0])                   // 's', 't', 'w'
//* .join('')                               // stw
//* console.log(username); 
        */


//* // ----------------- 152. The Filter mEthod ----------------- //

/*
const deposit = movements.filter(function(mov, i, arr) { // callback function 
    return mov > 0  // filter only above on this example 
});
//* console.log(movements);
//* console.log(deposit);   // only above 0  [200, 450, 3000, 70, 1300] 

const depositsFor = [];
for ( const mov of movements) if ( mov > 0 ) depositsFor.push(mov);
//* -->console.log(depositsFor); // [200, 450, 3000, 70, 1300] same output for loop

const withdrawals = movements.filter(mov => mov < 0); // return only negative value 
*/
//* --> console.log(withdrawals); // [-400, -650, -130]

//* // ----------------- 153. The Reduce Moethod----------------- //

//* --> console.log(movements); //8) [200, 450, -400, 3000, -650, -130, 70, 1300]

//accumulator is like snowball gathering everything is spoted on his way
//* const balance = movements.reduce(function(acc, cur, i, arr) {
//*  console.log(`iteration ${i}: ${acc}`);
//*   return acc + cur;  
//*}, 0); 
/*
iteration 0: 0
iteration 1: 200
iteration 2: 650
iteration 3: 250
iteration 4: 3250
iteration 5: 2600
iteration 6: 2470
iteration 7: 2540
Balance of this account is 3840
*/


// arrow accumaltor is 
/*

const balance = movements.reduce((acc,cur) => acc + cur, 0)
//* --> console.log(`Balance of this account iterated by arrow function is ${balance} `); //Balance of this account iterated by arrow function is 3840


//* now same efect we do within for loop 
let balance2 = 0
for ( const mov of movements) balance2 += mov;
//* --> console.log(`Balance of this account looped for loop is ${balance2}`);
//*Balance of this account looped for loop is  3840.

//* other stuff with reduce to play with

//* Maximum value 
const max = movements.reduce((acc,mov) => {
    if ( acc > mov)
    return acc;
    else
    return mov;
}, movements[0]);
//* --> console.log(max); //3000

const min = movements.reduce((acc,mov) => {
  if ( acc < mov)
  return acc;
  else
  return mov;
}, movements[0])
*/
//* --> console.log(min); //-650

//* // ----------------- 154. Coding Chalenge #2----------------- //

/*
create a function 'calcAverageHunanAge', which accepts an arrays of dog's ages ('ages'), and does the following things order:

1. calculate the dog age in human years using the following formula:
  if the dog is <=2 years old, humanAge = 2 * dogAge, If the dog is > 2 years old, humanAge = 16 + dogAge * 4.

2. Exclude all dogs that are less than 18 human years old ( which is the same as keeping dogs that are at least 18 years old)

3. Calculate the average human age of all adult dogs (you should already know from the other challenges how we calculate averages)

4. Run the function for both test datasets

TD 1: [5,2,4,1,15,8,3]
TD 2: [16,6,10,5,6,1,4]
GL
*/
/*
const calcAverageHunanAge = function(ages) {
  const humanAge = ages.map( age => age <= 2 ? 2 * age : 16 + age * 4)  // map
  //* --> console.log(humanAge); // <-- (7) [36, 4, 32, 2, 76, 48, 28]
  const adults = humanAge.filter( age => age >= 18);
  //* --> console.log(adults); // [36, 32, 76, 48, 28]<--

  //* const average = adults.reduce((acc, age) =>  acc + age, 0) / adults.length;  <--met 1
  //*                     
  const average = adults.reduce ((acc, age, i, arr) => acc + age / arr.length, 0); //  <--met 2


  //*2 3 ( 2 + 3 ) / 2 = 2.5.    2/2 + 3/2 = 2.5
  return average
}

const avg1 = calcAverageHunanAge([5,2,4,1,15,8,3]);
const avg2 = calcAverageHunanAge([16,6,10,5,6,1,4]);  
*/
  //* --> console.log(avg1, avg2); // <--44 47.333333333333336


  //* // ----------------- 155. Magic in chaining methods ---------------- //


  // PIPELINE 
  /*
  const totalDepositUSD = movements
        .filter(mov => mov > 0 )
        .map(mov => mov * eurToUsd)
        .reduce((acc, mov) => acc + mov, 0);
        */
  //* --> console.log(totalDepositUSD); // 5522.000000000001


    //* // ----------------- 156. CHallenge #3---------------- //

    /*
    Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this tie as an arrow functionm and using chaining!
    */
/*
    const calcAverageHumanAge = ages => ages.map(age => (age < 2 ? 2 * age : 16 + age * 4 ))
    .filter(age => age >= 18)
    .reduce((acc,age,i,arr) => acc + age / arr.length,0);
                                        // adults.length

    const avg3 = calcAverageHumanAge([6,4,6,7,2,8,12,17]);
    const avg4 = calcAverageHumanAge([15,4,6,9,12,3,16,2])
    */
    //* --> console.log(avg3,avg4); // <-- 47 49.5

    //* // ----------------- 157.The Find Method---------------- //

    //* const firstWithdrawal = movements.find(mov => mov < 0); // < ---- 
    //*-->  console.log(movements);
    //*-->  console.log(firstWithdrawal); // <-- -400 

    //*-->  console.log(accounts);
    
    //* (4) [{…}, {…}, {…}, {…}]
//*0:{owner: 'Jonas Schmedtmann', movements: Array(8), interestRate: 1.2, pin: 1111, username: 'js'}
//*1: {owner: 'Jessica Davis', movements: Array(8), interestRate: 1.5, pin: 2222, username: 'jd'}
//*2: {owner: 'Steven Thomas Williams', movements: Array(8), interestRate: 0.7, pin: 3333, username: 'stw'}
//*3: {owner: 'Sarah Smith', movements: Array(5), interestRate: 1, pin: 4444, username: 'ss'}
//*length: 4

//const account = accounts.find( acc => acc.owner === 'Jessica Davis' )
// ==> console.log(account);


//* {owner: 'Jessica Davis', movements: Array(8), interestRate: 1.5, pin: 2222, username: 'jd'}


//* // ----------------- 158.Implementing login --/*//
//* // ----------------- 159.Implementing Transfer --/*//
//* // ----------------- 160.The FindIndex method --/*//
//* // ----------------- 161.Some and every --/*//

let movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// Equality
console.log(movements.includes(-130)); // includes 

// SOME : Condition
console.log(movements.some(mov => mov === -130)); //some // true

const anyDeposits = movements.some(mov => mov > 0 ); // some 'any'
console.log(anyDeposits);

// EVERY :
console.log(movements.every(mov => mov > 0)); //false 
console.log(account4.movements.every(mov => mov > 0)); // true

// Separate callback
/*
 //* const deposit = mov => mov > 0;
console.log(movements.come(deposit));  // true
console.log(movements.every(deposit)); // false
console.log(movements.filter(deposit));// true
*/


//* // ----------------- 162.Flat and FLATMAP --/*//

const arr = [[1,2,3], [4,5,6], 7, 8];
console.log(arr.flat());  // [1, 2, 3, 4, 5, 6, 7, 8]

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat()); // Array(2), 3, 4, Array(2), 7, 8]
// flat going work only one level deep nesting 

console.log(arrDeep.flat(2)); // with setting deep 2 is result
//[1, 2, 3, 4, 5, 6, 7, 8]

const accountMovements = accounts.map( acc => acc.movements);
console.log(accountMovements); // [Array(8), Array(8), Array(8), Array(5)]

const allMovements = accountMovements.flat()
console.log(allMovements);
// (29) [200, 450, -400, 3000, -650, -130, 70, 1300, 5000, 3400, -150, -790, -3210, -1000, 8500, -30, 200, -200, 340, -300, -20, 50, 400, -460, 430, 1000, 700, 50, 90]


// flat
const overalBallance = allMovements.reduce ((acc, mov)=> acc + mov, 0); 
console.log(overalBallance); //   17840 

const overalBallance2 = accounts.map (acc => acc.movements) //first 
.flat()   // second
.reduce((acc, mov) =>acc + mov, 0); // third
console.log(overalBallance2); // 17840 counted all in one 


// flatMap

const overalBallance3 = accounts
.flatMap( acc => acc.movements)  
.reduce((acc, mov) =>acc + mov, 0); 
console.log(overalBallance3); 



//* // ----------------- 162.Sorting arrays --/*//


// STRING
const owners = ['Jones', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort());
console.log(owners); // Adam', 'Jones', 'Martha', 'Zach'

// Numbers

console.log(movements)

// return < 0   =>  A, B //* keep order
// return > 0   =>  B, A //* switch order

//* Ascending 
      //  if (a > b)  return  1;
    //  if (a < b)  return -1;

    movements.sort((a,b) => a - b)
console.log(movements);
// --> -650, -400, -130, 70, 200, 450, 1300, 3000

//* ------------------------  -----------------------//

//* Descendin
       //if (a > b)  return -1;
      //if (a < b)  return  1;
      movements.sort((a,b) => b - a)  
console.log(movements);
// --> 3000, 1300, 450, 200, 70, -130, -400, -650

//* // ------163. More ways of creating and filling arrays --/*//

    const arrR = [1,2,3,4,5,6,7,8];
    const x = new Array(7);


    // Empty arrays + fill method
    console.log(x); //[empty × 7]
      //* console.log(x.map(()=> 5 )); // empty × 7] nothing change 
             //console.log(x.map(()=> 5)); // [empty x7]


      x.fill(1)  // with specyfic value we want
      console.log(x); // [1, 1, 1, 1, 1, 1, 1]
     
      //when we specify start and index 

      x.fill(1, 3, 5);
      console.log(x); // [empty × 3, 1, 1, empty × 2]

      arrR.fill(23, 4, 6);   // <--- from index 4 to index 6 
      console.log(arrR); //*  --> [1, 2, 3, 4, 23, 23, 7, 8]


// Array.from

const y = Array.from({length: 7}, () => 1 ); // --> return 
console.log(y); // --> [1, 1, 1, 1, 1, 1, 1]


      const z = Array.from({length: 7}, (_, i) => i + 1) // first parameter '_' is callled underscore  
      console.log(z); // --> [1, 2, 3, 4, 5, 6, 7]


        

        labelBalance.addEventListener('click', function () {
          const movementUI = Array.from(document.querySelectorAll('.movements__value'), el => Number(el.textContent.replace('€', '')));
        console.log(movementUI);

        })

//* // ------  164. Which array method to use? --------/*//  


//What do I actualy want to get from the array ?

//* To mutate original array  -------------------------------->

 //  👉  Add to original:
      //    .push (end)
     //    .unshift(start)

  // 👉 Remove from original
        // .pop(end)
       // .shift(start)
      // .splice(any)
      
  // 👉  Others
        //.reverse
       //.sort
      //.fill   

//* To get a new array ---------------------------------------->

      // 👉 Computed from original
          // .map   loop

      // 👉 Filtered using condition
          //.filter   

      // 👉 Portion of original
          //.slice
          
      // 👉 Adding original to other
          //.concat
          
      // 👉 Flattening the original 
          // .flat
         //.flatMap     

//* An array index -------------------------------------------->
//boolean
        // 👉 Based on value
              // .indexOf

        // 👉  Based on test condition
              //.findIndex

          //*<-*-> An entire array element

          // 👉 Based on test condition
              // .find


//* Or i want to know if array include certain element ------>

        // 👉 Based on value
              //.includes

        // 👉 Based on test condition
              //.some
              //.every      


            //*<-*-> maybe get a new string

        // 👉 Based on separator string:
              //.join

        //* To transform to another value -------------------->

        // 👉 Based on accumulator
              //.reduce
        //(boil down array to single value of any type
       //-number, string, boolean or even new array or object)

          //*<-*-> to simply to loop over the array

         // 👉  Based on callback
              //.forEach
          //(does not create a new array, just loops over it)


//* // ------  165. Array method practice--------/*//

//* //////////////////////////////////////////////
//*         Array Method Practice

//*--------------------------------------------------------------------
//*------------------------  Exercise #1  -----------------------------
//*--------------------------------------------------------------------


//* 

const bankDepositSum = accounts
.flatMap(acc => acc.movements)
.filter(mov => mov > 0)
.reduce((sum,cur) => sum + cur,0);


console.log(bankDepositSum)
//* after flat filter and finaly reduce final ampunt of deposit is 25180 from whole accouts.
/*
//* before flat only map 
//* const bankDepositSum = accounts.flatMap(acc => acc.movements)

0: (8) [200, 450, -400, 3000, -650, -130, 70, 1300]
1: (8) [5000, 3400, -150, -790, -3210, -1000, 8500, -30]
2: (8) [200, -200, 340, -300, -20, 50, 400, -460]
3: (5) [430, 1000, 700, 50, 90]
*/

/*
//* after flat and same output wit flatMap
//* const bankDepositSum = accounts.flatMap(acc => acc.movements).flat
(29) [200, 450, -400, 3000, -650, -130, 70, 1300, 5000, 3400, -150, -790, -3210, -1000, 8500, -30, 200, -200, 340, -300, -20, 50, 400, -460, 430, 1000, 700, 50, 90]
*/

//*--------------------------------------------------------------------
//*---------------------- exercise 2#  --------------------------------
//*--------------------------------------------------------------------

//* 

// ver1.
/*
//*   const numDeposits1000 = accounts
//*   .flatMap(acc => acc.movements)
//*   .filter(mov => mov > 1000)
//*   .length
//*     console.log(numDeposits1000);
//*         <--- 5
*/

const numDeposits1000ver2 = accounts
.flatMap(acc => acc.movements)
.reduce((acc,dep)=> (dep >= 1000? acc + 1 : acc) , 0) 
console.log(numDeposits1000ver2);
//* <---- 6

let a = 10;
//console.log(a++); // increamenting adding one but 
//console.log(a++);  <--- a++
//is returning the old value --> 10
console.log(++a); // 11 returning properly incrementing before ;)
// 11 <------ ++a

//*--------------------------------------------------------------------
//*----------------------    exercise 3#   ----------------------------
//*--------------------------------------------------------------------

const {deposits, withdrawals} = accounts
.flatMap(acc => acc.movements).reduce((sums, curr) => {
//* curr > 0 ? sums.deposits += curr : sums.withdrawals += curr;  
   sums[curr > 0 ? 'deposits' : 'withdrawals'] += curr; 
      return sums;
    },
  {deposits: 0, withdrawals: 0}
);
console.log(deposits, withdrawals)



//*--------------------------------------------------------------------
//*----------------------    exercise 4#   ----------------------------
//*--------------------------------------------------------------------
// Capitalize First letters of each word from sentences exception for 
// ['a', 'an', 'the', 'but', 'or', 'on', 'in', 'with']
const converteTitleCase = function(title) {
  const capitalize = str => str[0].toUpperCase() + str.slice(1);

    const exceptions = ['a', 'an', 'the', 'but', 'or', 'on', 'in', 'with', 'and'];
   
    const titleCase = title
    .toLowerCase()
    .split(' ') // make all to lowerCase 
    .map(word => (exceptions // make new array from our array ad take exceptions 
      .includes(word)? word : capitalize(word))) // if exceptions included dont change to Upper if not 
    
//* --> ['This', 'Is', 'a', 'Title']
//* --> ['This', 'Is', 'a', 'Long', 'Title', 'but', 'Not', 'To', 'Long']
//* --> ['And', 'Here', 'Is', 'Another', 'Title', 'with', 'an', 'Example']
    .join(' ');  // join them to make string again :)
 /*
This Is a Title
This Is a Long Title but Not To Long
And Here Is Another Title with an Example
*/
    return capitalize(titleCase);  // return title 
};
console.log(converteTitleCase('this is a title'));
console.log(converteTitleCase('this is a LONG title but not to long'));
console.log(converteTitleCase('and here is another title with an EXAMPLE'));
//* -----> This Is a Title
//* -----> This Is a Long Title but Not To Long
//* -----> And Here Is Another Title with an Example




//* --> {deposits: 25180, withdrawals: -7340}
//* --> 25180, -7340
//* //////////////////////////////////////////////




//* // ------  167. Coding Chalenge #4 --------/*//

/*
Julia and Kate are still studiying dogs, and this time they are sudying 
if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger 
than the recommended portion, and eating too little is the opposite.
Eating an okay amounts means the dog's current food portion is within a range 10%
above and 10% bellow the recommended portion ( see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the 
recommended food portion and add it to the object as a new property.
Do NOT create a new array, simply loop over the array.
Formula : 
recommendedFood = weight ** 0.75 * 28.
(the result is in gram of food, and the weight needs to be on kg)

2. FInd Sarah's dog and log to the console whether it's eating to much or to 
little. 
HINT: Some dogs have multiple owners, so you first need to find Sarah in the 
owners array, and so this ine is a bit tricky.

3. Create an array containing all owners of dogs who eat to 
much ( 'ownerEatToMuch') and an array with all owners of dogs
who eat to little ('ownersEatToLittle')

4. Log a string to the console for each array created on 3. 
Like this: 'Matilda and Alice and Bob's dogs aet to much'
and 'Sarah and John and Michale's dogs eat to little!".

5. Log to the console whether there is any dog eating EXACTLY 
the amount of food that is recommended ( just true or false))

6. Log to the console whether there is any dog eating an OKAY amount of food ( just true or false)

7. Create an array containing the dogs that are eating OKAY amount of food ( try to reuse the condition used in 6.)

8. Create a shallow copy of the dogs array and sort it by recommended
food portion in an ascendiing order ( keep in mind that the portions 
  inside the array's object)

  HINT1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them.
  HINT2: Being within a range 10% above and below the recommended 
  portion means: current > ( recommended * 0.90) && current < ( recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.


  TEST DATA: 
  const dogs = [
    {weight: 22, 
      curFood: 250,
    owners: [
      'Allice',
      'Bob'] },

      {weight: 8,
      currFood: 200,
      owners: ['Matilda'] },

      {weight: 13,
      curFood: 275,
      owners: [
        'Sarah',
        'John'] },

        {weight: 32,
        curFod: 340,
        owners: ['Michael'] }
    ];
    GL
*/

const dogs = [
  {weight: 22, 
    curFood: 250,
  owners: [
    'Allice',
    'Bob'] },

    {weight: 8,
    currFood: 200,
    owners: ['Matilda'] },

    {weight: 13,
    curFood: 275,
    owners: [
      'Sarah',
      'John'] },

      {weight: 32,
      curFod: 340,
      owners: ['Michael'] }
  ];


  dogs.forEach(dog => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28 )));
  console.log(dogs);
/*
//*1

0: {weight: 22, curFood: 250, owners: Array(2), recFood: 284
1: {weight: 8, currFood: 200, owners: Array(1), recFood: 133}
2: {weight: 13, curFood: 275, owners: Array(2), recFood: 191}
3: {weight: 32, curFod: 340, owners: Array(1), recFood: 376}
length: 4
*/

/*
//*2
*/
const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'))
console.log(dogSarah); //true
console.log(`Sarah's dog is eating ${dogSarah.curFood > dogSarah.recFood ? 'much' : 'little'
  }. `
);
//* --> Sarah's dog is eating much.

/*
//*3
*/

const ownersEatTooMuch = dogs.filter(dog => dog.curFood > dog.recFood)
.flatMap(dog => dog.owners)
//.flat();
console.log(ownersEatTooMuch); // --> ['Sarah', 'John']

const ownersEatTooLittle = dogs.filter(dog => dog.curFood < dog.recFood)
.flatMap(dog => dog.owners)
console.log(ownersEatTooLittle); // --> ['Allice', 'Bob']

/*
//*4
*/
//* example
//*"Matilda and Alice and Bob's dogs eat too much"
//*"Sarah and John and Michael's dogs eat too little!"


console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
//* --> Sarah and John's dogs eat too much!
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);
//* --> Allice and Bob's dogs eat too little!

/*
//*5
*/

console.log(dogs.some(dog => dog.curFood === dog.recFood));
// --> false

/*
//*6
*/
//* current > ( recommended * 0.90) && current < ( recommended * 1.10)

const checkEatingOk = dog => dog.curFood > dog.recFood * 0.9 && 
dog.curFood < dog.recFood * 1.1;
console.log(dogs.some(checkEatingOk));
  
/*
//*7
*/

console.log(dogs.filter(checkEatingOk)); //* --> []

/*
//*8
*/

//sort by recomended food portion
const dogsCopy = dogs.slice().sort((a,b) => a - b);