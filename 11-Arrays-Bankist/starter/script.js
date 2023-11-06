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