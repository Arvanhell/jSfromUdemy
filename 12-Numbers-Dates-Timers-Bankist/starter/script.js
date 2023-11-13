'use strict';

//* ///////////////////////////////////////////////
//* ///////////////////////////////////////////////
// BANKIST APP

//* ///////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Cezary Waszkuc',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2022-11-18T21:31:17.178Z',
    '2022-12-23T07:42:02.383Z',
    '2023-01-28T09:15:04.904Z',
    '2023-04-01T10:17:24.185Z',
    '2023-05-08T14:11:59.604Z',
    '2023-05-27T17:01:17.194Z',
    '2023-11-09T10:51:36.790Z',
    '2023-11-10T23:36:17.929Z',
    '2023-11-11T10:51:36.790Z',
    '2023-11-11T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'en-GB',  
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2022-11-01T13:15:33.035Z',
    '2022-11-30T09:48:16.867Z',
    '2022-12-25T06:04:23.907Z',
    '2023-01-25T14:18:46.235Z',
    '2023-02-05T16:33:06.386Z',
    '2023-04-10T14:43:26.374Z',
    '2023-06-25T18:49:59.371Z',
    '2023-07-26T12:01:20.894Z',
  ],
  currency: 'EUR',
  locale: 'de-DE', // 
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
// Elements
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

/////////////////////////////////////////////////
// Functions

const formatMovementDate = function(date, locale) {
      
  const calcDayPassed = (date1, date2) => Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const daysPassed = calcDayPassed(new Date(), date);
 if (daysPassed === 0) return 'Today';
 if (daysPassed === 1) return 'Yesterday';
 if (daysPassed <= 7) return `${daysPassed} days ago`
 
  // const day   =  `${date.getDate()}`.padStart(2, 0);
  // const month =  `${date.getMonth() + 1}`.padStart(2, 0);
  // const year  =  date.getFullYear();
  // return `${day}/${month}/${year}`;
  return new Intl.DateTimeFormat(locale).format(date);
};


const formatCur = function(value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
};

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort 
  ? acc.movements.slice().sort((a, b) => a - b) : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(date, acc.locale);

    const formattedMov = formatCur(mov, acc.locale, acc.currency);
   
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
    <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${formattedMov}</div>
      </div>
    `;
// mov.toFixed(2) give us two decimal parts .00 in our movements 
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
 
   
  labelBalance.textContent = formatCur(acc.balance, acc.locale, acc.currency);
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formatCur(incomes, acc.locale, acc.currency);

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formatCur(Math.abs(out), acc.locale, acc.currency);
  

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = formatCur(interest, acc.locale, acc.currency);
  
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

const startLogoutTimer = function () {
  const tick = function(){
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = time % 60;
  // in each call, print the reamining time to UI 
    labelTimer.textContent = `${min}:${sec}`
  
  //when  0 sec, stop timer and log out user
  if (time === 0 ){
    clearInterval(timer);
    labelWelcome.textContent = "Log in to get started"
    containerApp.style.opacity = 0;
      }
      //decreaase 1 s
    time--;
  }
  // setting the time to 5 min
  let time = 300;
  // call timer every second 
  tick();
  const timer = setInterval(tick, 1000)
  return timer;
}
//* ///////////////////////////////////
// Event handlers
let currentAccount, timer;
currentAccount = account1
// //* -----------------> FAKE always logged in

// currentAccount = account1
// updateUI(currentAccount)
// containerApp.style.opacity = 100;

// //* -----------------> FAKE always logged in

// Experimenting API
const now  = new Date();
const options = {
  hour: 'numeric',
  minute: 'numeric',
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  weekday: 'long',
}
//const locale = navigator.language; //* setting for langueage of local machine
labelDate.textContent = new Intl.DateTimeFormat(currentAccount.locale, options).format(now);
// ja -   2023年11月11日土曜日 23:38                  / Japan
// pl -   sobota, 11 listopada 2023 23:39           / Polska
// ru -   суббота, 11 ноября 2023 г. в 23:40        / Russia
// pt -   sábado, 11 de novembro de 2023 às 23:41   / Portugalia
// it -   sabato 11 novembre 2023 alle ore 23:41    / Italia
// zk- HK - 2023年11月11日星期六 下午11:43             / China
// vi -   lúc 23:45 Thứ Bảy, 11 tháng 11, 2023      / Vietnam
// ur-PK - ہفتہ، 11 نومبر، 2023 کو PM                     /  Urdu
// uk-UA - субота, 11 листопада 2023 р. о 23:49     / Ukrainian
// tr-TR - 11 Kasım 2023 Cumartesi 23:50            / Turkiye


//*        //          //         //           //


btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === +(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    

    // create current date and time.
    //const now   = new Date();
    // const day   = `${now.getDate()}`.padStart(2, 0);
    // const month = `${now.getMonth() + 1}`.padStart(2, 0);
    // const year  = now.getFullYear();
    // const hour  = `${now.getHours()}`;
    // const min   = `${now.getMinutes()}`;
//labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;
      
    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    //Timer
    if (timer)clearInterval(timer);
    timer = startLogoutTimer();
    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());
    // Update UI
    updateUI(currentAccount);

    // Reset timer
    clearInterval(timer);
    timer = startLogoutTimer();
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value); // rounding any value down


  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    
    setTimeout(function() {
    // Add movement
      currentAccount.movements.push(amount);

    // Add loan date
    currentAccount.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount); 

    //reset timer 
    clearInterval(timer);
    timer = startLogoutTimer();
  }, 4000)
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

//*
//*⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣀⣠⠤⠤⠤⠤⣄⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
//*⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⠶⠋⠉⠀⠀⠀⠀⠀⠀⠀⠀⠉⠙⠢⣄⠀⠀⠀⠀⠀⠀⠀
//*⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡴⠋⠁⠀⠀⠀⠀⢀⣀⡐⢄⠀⠀⠀⠀⠀⠀⠈⠳⣄⠀⠀⠀⠀⠀
//*⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡞⠁⠀⠀⠀⠀⠀⡜⠁⠀⣿⡌⠀⠀⠀⠀⠀⠀⠀⠀⠈⢆⠀⠀⠀⠀
//*⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡾⠀⠀⠀⠀⠀⠀⣸⣷⣤⣾⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠊⣼⠀⠀⠀⠀
//*⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⢤⡀⠀⠀⠀⢰⡇⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⠇⠀⠀⠀⠀⠀⠀⠀⠀⡜⣼⠀⠀⠀⠀
//*⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡎⠀⠉⠲⣄⣀⣼⡇⠀⠀⠀⠀⠀⠀⠻⠿⣿⣟⡼⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⠀⠀⠀⠀
//*⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠉⠉⠁⠀⡏⠑⠌⠓⢬⣧⠀⠀⠀⠀⠘⢄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢿⠿⡀⠀⠀⠀
//*⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣇⠀⠀⠀⠇⠀⠀⠀⠀⠙⣆⠀⠀⠀⠀⠀⠈⠉⠓⠒⠲⠤⢤⣀⠀⠂⠀⠀⠀⠀⠀⠀⡇⠀⠀⠀
//*⠀⠀⠀⠀⢀⣠⠤⠖⠒⠒⠒⠦⢤⡀⠀⠀⠀⠀⠀⢸⡄⠀⠀⠀⠀⠀⠀⠀⠀⠈⢦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠲⠤⠤⠒⠋⢉⠟⠀⠀⠀⠀
//*⠀⠀⢀⡴⠋⠁⠀⠀⠀⠀⠀⠀⠀⠙⢦⠀⠀⠀⢠⡞⠹⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⣦⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡠⠋⠀⠀⠀⠀⠀
//*⠀⣠⠟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢇⠀⢠⡟⠀⠀⠹⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⡏⠈⠑⠢⢤⣀⣀⠀⠀⠀⠀⢀⣀⡤⠖⠯⣀⠀⠀⠀⠀⠀⠀
//*⢀⡟⠀⠀⠀⠀⠠⠴⠤⣀⠀⠀⠀⠀⠀⢸⣠⡟⠀⠀⠀⠀⢹⣄⠀⠀⠀⠀⠀⠀⢀⣼⡁⠀⠀⠀⠀⠀⠈⠉⠉⠉⠉⢻⠀⠀⠀⠀⠀⠉⠢⣄⣀⡀⠀
//*⢸⡇⠀⠀⠀⠀⠀⠀⠀⠘⡆⠀⠀⠀⠀⢈⣿⡇⠀⠀⠀⠀⢸⠉⢢⣀⡀⢀⣀⣴⠟⠀⠙⢦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠸⡆⠀⠀⠀⠀⠀⠀⠀⠀⢇⡀
//*⠘⣇⠀⠀⠀⠀⠀⠀⠀⠀⡇⠀⠀⠀⠀⢸⡇⣷⠀⠀⠀⢀⡞⠀⢰⠏⠉⠉⠁⢸⡀⠀⠀⠀⠈⠓⠶⠤⣤⣄⣀⣠⡤⠴⡇⠀⠀⠀⠀⠀⠀⠀⠀⡔⠁
//*⠀⠹⣆⠀⠀⠀⠀⠀⢀⡼⠁⠀⠀⠀⠀⢸⠁⠸⡆⠀⣠⠞⠀⢀⡞⠀⠀⠀⠀⠘⡇⠀⠀⠀⠀⠀⠀⠀⠀⢸⠃⠀⠀⢰⣧⣀⣀⡀⠀⢀⣀⣠⠴⠃⠀
//*⠀⠀⠹⡓⠦⠤⠤⠖⠋⠀⠀⠀⠀⠀⠀⢸⠀⠀⠹⡴⠁⠀⢠⠞⠀⠀⠀⠀⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⡞⠀⠀⠀⣸⠀⠀⠉⠉⠉⠉⠀⠀⠀⠀⠀
//*⠀⠀⠀⠘⢆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠀⠀⢸⢁⡠⠴⢧⡀⠀⠀⠀⠀⣀⠔⠳⣄⠀⠀⠀⠀⠀⠀⡼⠁⠀⠀⢠⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
//*⠀⠀⠀⠀⠀⠑⢄⠀⠀⠀⠀⠀⠀⠀⠀⠘⣇⣠⡿⠋⠀⠀⠀⠙⢦⣀⡠⠞⠁⠀⠀⠈⠙⠶⣤⣀⡀⣰⠃⠀⠀⣠⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
//*⠀⠀⠀⠀⠀⠀⠀⠙⢦⣀⠀⠀⠀⠀⠀⠀⣸⠏⠀⠀⠀⠀⠀⠀⠈⢻⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣹⠋⠉⠉⣹⠏⠙⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
//*⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠑⠲⢤⣄⣀⣠⡏⠀⠀⠀⠀⠀⠀⠀⠀⠈⣇⠀⠀⠀⠀⠀⠀⠀⠀⡰⠃⢀⣤⠞⠁⠀⠀⠘⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
//*⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⡽⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣻⠶⠤⠤⠤⠤⠤⢤⣞⡥⠖⠋⠀⠀⠀⠀⠀⠀⢹⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
//*⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⠟⠒⠀⠀⠒⠒⠺⢯⡁⠀⠀⠀⠀⠀⠀⠀⠀⠀⣾⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀
//*⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠎⠀⠀⠀⠀⠀⠀⠀⠀⠀⡴⠃⠀⠀⠀⠀⠀⠀⠀⠀⠙⢦⡀⠀⠀⠀⠀⠀⠀⠀⢄⣈⠆⠀⠀⠀⠀⠀⠀⠀⠀
//*⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠳⢄⡀⠀⠀⠀⠀⠀⠀⢀⠞⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⣄⠀⠀⠀⠀⢀⣠⠴⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀
//*⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢇⣀⡤⠖⢄⠀⣰⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠳⠒⠒⠋⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
//*⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⠀⠈⠙⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
//*

//*  ----->   170. Converting and Checking Numbers

console.log(23 === 23.0); // true

//base 10 - 0 to 9
// binary  base 2 - 0 1
console.log(0.1 + 0.2);  //0.30000000000000004
console.log(0.1 + 0.2 === 0.3);  // false lol


//* Conversion
console.log(Number('23')); //23
console.log(+"23");        //23  < --- converted string to numbers

//* Parsing
console.log(Number.parseInt('30px', 10)); // 30 <----- looking for the number in the string but must start with the number
console.log(Number.parseInt('px30')); // NaN
console.log(Number.parseInt('px10', 10)); // NaN

console.log(Number.parseInt(' 2.5rem '));  // 2 there can be even white space 
console.log(Number.parseFloat(' 2.5rem ')); // 2.5

//console.log(parseFloat('  2.5rem  '));  //2.5

//* checking if value is NaN 
console.log(Number.isNaN(20)); //false
console.log(Number.isNaN('F')); //false
console.log(Number.isNaN(+'20X')); // true
console.log(Number.isNaN(23 / 0)); //false 

//* checking if value is number
console.log(Number.isFinite(20)); //true
console.log(Number.isFinite('20')); //false
console.log(Number.isFinite(+'20')); //true
console.log(Number.isFinite(+'20X')) //false
console.log(Number.isFinite(23 / 0)); //false
console.log(Number.isFinite('F'));// false

//* checking isInteger
console.log(Number.isInteger(+'20')) //true
console.log(Number.isFinite('20')) //false
console.log(Number.isFinite(23 /0)) //false


//*  ----->   <----------------------->  <-------
//*  ----->     171. Math and Rounding   <-------
//*  ----->   <----------------------->  <-------
 
console.log(Math.sqrt(25));   // 5 square root
console.log(25 ** ( 1/ 2));   // 5 square root
console.log(8 ** (1/3));      // 2 cubic root

console.log(Math.max(5, 18, 23, 11, 2));     // 23
console.log(Math.max (5, 18, '23', 11, 2));  // 23 coerction 
console.log(Math.max(5, 18, '23px', 11, 2)); // NaN  but not parsing

console.log(Math.min(5, 18, 23, 11, 2));     // 2

//* calculating of the area of circle
console.log(Math.PI * Number.parseFloat('10px') ** 2) 
//314.1592653589793 

//* --------------------------- *//

//* trunc   - elimiating decimal parts of created randomly number
console.log(Math.trunc(Math.random() * 6) + 1);  // 6  random

// Random 
const randomInt = (min, max) => Math.floor(Math.random() * (max - min) + 1) + min  //* from this function 
// 0..1 -> 0 ... ( max - min) -> min... max
console.log(randomInt(10, 20));  //*random number from 10 - 20


//*    Rounding Integers
console.log(Math.round(23.3));    // 23 round always to nearest integer
console.log(Math.round(23.9));    // 24 round always to nearest integer

console.log(Math.ceil(23.3));     // 24 round down e
console.log(Math.ceil(23.9));     // 24

console.log(Math.floor(23.3));    // 23
console.log(Math.floor('23.9'));  // 23


console.log(Math.trunc(23.3));    // 23 - remove any decimal parts ALWAYS
 
console.log(Math.trunc(-23.3));   // -23 
console.log(Math.floor(-23.3));   //* -24 work for neg and it is rounding Up like in ex -23.1 --- in to -24 

//* FLOOR is way better when we working with positive and negative

//* Rounding decimals
console.log((2.7).toFixed(0));    //* '3' but is returning string
console.log((2.7).toFixed(3));    //* '2.700'
console.log((2.345).toFixed(2));  // * '2.35' still string
console.log(+(2.345).toFixed(2)); //* now is number 2.35

//* decimals are using toFixed methods let us choose how many decimal part
// but return strings until we add + sign 


//*  ----->   <-------------------------->  <-------
//*  ----->   172. The remainder operator   <-------
//*  ----->   <-------------------------->  <-------

// simply remainder return of reminder of division ....
 //* console.log( 5 % 2);  // 1
 //console.log( 5  / 2 ); // 5 = 2 + 2 + 1 
 //* console.log( 8 % 3 );  // 2
 //console.log( 8 / 3);  // 2.6666666666666665  8 = 2 x 3 + 2 

 console.log(6 % 2);  // 0 even number
 console.log(7 % 2);  // 1 odd number 

 const isEven = n => n % 2 === 0;
 console.log(isEven(8));  // true
 console.log(isEven(23)); // false
 console.log(isEven(514));// true


 labelBalance.addEventListener('click', function() {
 [...document.querySelectorAll('.movements__row')]
      .forEach(function(row, i) {
  if (i % 2 === 0)row.style.backgroundColor = 'rgb(154, 213, 149)'; // 0 ,2, 4, 6   <--//  every even

  // if (i % 3 === 0)row.style.backgroundColor = 'rgb(255, 209,111)';  // 0, 3, 6, 9  <--// every odd
  else row.style.backgroundColor = 'rgb(255, 209,111)'; // every other than even <-- 
  // or we can use nth to choose which one we want to color
    });
 });


//*  ----->   <-------------------------->  <-------
//*  ----->       173. Numeric separator    <-------
//*  ----->   <-------------------------->  <------- 

// 287.460.000.000
const diameter = 287_460_000_000;  
console.log(diameter); //287460000000

const priceInCents = 345_99;
console.log(priceInCents);  // 34599

const transferFee = 15_00;
const transferFee2 = 1_500; 

const PI = 3.1415; 
console.log(PI); 

console.log(Number('230_000')); // NaN  probably income bug in aplication
console.log(Number('230000'));  // 230000


//*  ----->   <-------------------------->  <-------
//*  ----->     174. Working with BigInt    <-------
//*  ----->   <-------------------------->  <------- 

console.log(2 ** 53 - 1); //  9007199254740991 // <- the biggest number js can represent
console.log(Number.MAX_SAFE_INTEGER);  // 9007199254740991 same number 

console.log(2 ** 53 + 1) // 9007199254740992  what?
console.log(2 ** 53 + 2) // 9007199254740994
console.log(2 ** 53 + 0) // 9007199254740992  what?
console.log(2 ** 53 + 3)   // 9007199254740996 
console.log(2 ** 53 + 4)   // 9007199254740996
console.log(2 ** 53 + 5)   // 9007199254740996 
console.log(2 ** 53 + 6)   // 9007199254740998
console.log(2 ** 53 + 7)   // 9007199254741000
console.log(2 ** 53 + 8)   // 9007199254741000
console.log(2 ** 53 + 9)   // 9007199254741000


console.log(3352625726837593757625726527n);       // 3352625726837593757625726527 //* with n giving exact number we want but
console.log(BigInt(3352625726837593757625726527));// 3352625726837593641534357504n //* BigInt is not <-- to big number try with smaller
console.log(BigInt(900719925474100022)); // 900719925474099968n //* still is diferent

//* Operations
 
console.log(10000n + 10000n);  // 20 000
console.log(67340205043562356235731n + 423652257n); // 67340205043562779887988n

const huge = 54523432625623623623454363425n
const num = 23;
// console.log( huge * num )  //* error Cannot mix BigInt and other types, use explicit conversions

console.log(huge * BigInt(num)); // now is working //* 1254038950389343343339450358775n

console.log(20n > 15);    // true
console.log(20n === 20);  // false
console.log(20n == '20');   // true
console.log(typeof 20n);  // bigint
console.log(huge + ' is REALLY big !!!');  // 54523432625623623623454363425 is REALLY big !!! 


// Division
console.log(10n / 3n);  // 3n  // cut off decimal part 
console.log(10 / 3);    // 3.3333333333333335


//*  ----->   <-------------------------->  <-------
//*  ----->       175. Creating dates       <-------
//*  ----->   <-------------------------->  <------- 

  //* ----->  Create a date 

  //* const now = new Date();
  //* console.log(now); // <-- Sat Nov 11 2023 17:51:01 GMT+0000 (Greenwich Mean Time)

    //console.log(new Date('Nov 11 2023 17:51:01')); 
  // Sat Nov 11 2023 17:51:01 GMT+0000 (Greenwich Mean Time)

    //console.log( new Date (`November 28, 1976`)); 
  // Sat Nov 11 2023 17:51:01 GMT+0000 (Greenwich Mean Time)

    //console.log(new Date(account1.movementsDates[0]));
  // Mon Nov 18 2019 21:31:17 GMT+0000 (Greenwich Mean Time)

    //console.log(new Date ( 2037, 10, 19, 15, 23, 51));
  // Thu Nov 19 2037 15:23:51 GMT+0000 (Greenwich Mean Time)

    //console.log(new Date(2037, 10, 31)); 
  // Tue Dec 01 2037 00:00:00 GMT+0000 (Greenwich Mean Time) ????

    //console.log(new Date (0));
  // Thu Jan 01 1970 01:00:00 GMT+0100 (Greenwich Mean Time) ??

    //console.log(new Date(3 * 24 * 60 * 1000));
  // Thu Jan 01 1970 02:12:00 GMT+0100 (Greenwich Mean Time


  //*   ---> working with dates 

    // const future = new Date(2037, 10, 19, 15, 23)
    // console.log(future);
    // console.log(future.getFullYear()); // Thu Nov 19 2037 15:23:00 GMT+0000 (Greenwich Mean Time
    // console.log(future.getMonth()); // 10
    // console.log(future.getDate());  // 19
    // console.log(future.getDay());   // 4 <-- thursday
    // console.log(future.getHours());    // 15
    // console.log(future.getMinutes());  // 23
    // console.log(future.getSeconds());  // 0
    // console.log(future.toISOString()); // 2037-11-19T15:23:00.000Z
    
    //* ------------>
    
    //console.log(future.getTime());     // 2142256980000
    //console.log(new Date(2142256980000)); 
    // Thu Nov 19 2037 15:23:00 GMT+0000 (Greenwich Mean Time)

    //* console.log(Date.now()); // 1699726430438
    //* console.log(new Date(1699726430438));
    // Sat Nov 11 2023 18:13:50 GMT+0000 (Greenwich Mean Time) <-- real time

//    future.setFullYear(2040)
//    console.log(future);
// Mon Nov 19 2040 15:23:00 GMT+0000 (Greenwich Mean Time)  <----- future real time


//*  ----->   <---------------------------------->  <-------
//*  ----->     176. Adding dates to Bankist app    <-------
//*  ----->   <---------------------------------->  <------- 



//*  ----->   <---------------------------------->  <-------
//*  ----->         177. Operation with dates       <-------
//*  ----->   <---------------------------------->  <------- 

const future = new Date (2037, 10, 19, 15, 23);
console.log(+future);

const calcDayPassed = (date1, date2) => Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

const days1 = calcDayPassed(new Date(2037, 3, 4), new Date(2037, 3, 14));

console.log(days1); // 864000000 => 10 days


//*  ----->   <---------------------------------->  <-------
//*  ----->        178. nternationalizing Dates     <-------
//*  ----->   <---------------------------------->  <------- 


//*  ----->   <---------------------------------->  <-------
//*  ----->      179. nternationalizing Numbers     <-------
//*  ----->   <---------------------------------->  <------- 

const numsi = 321512345215.23;

const options1 = {
  //style: 'unit',
  style: 'currency',
  unit: 'mile-per-hour',
  currency: 'PLN'
}

console.log(new Intl.NumberFormat('en-US', options1).format(numsi));
// PLN 321,512,345,215.23 mph formated // us  
console.log(new Intl.NumberFormat('pl-PL', options1).format(numsi));
// 321 512 345 215,23 mili / h formated // pl zł
console.log(new Intl.NumberFormat('ar-SY', options1).format(numsi));
//  ٣٢١٬٥١٢٬٣٤٥٬٢١٥٫٢٣ ميل/سf PLN ormated for syria 
console.log(new Intl.NumberFormat('it-IT', options1).format(numsi));
// 321.512.345.215,23 PLN | mi/ h formated for italy
console.log(new Intl.NumberFormat('tr-TR', options1).format(numsi));
// 321.512.345.215,23 PLN | mil/ sa formated for Turkiye


//*  ----->   <------------------------------------------>  <-------
//*  ----->      180. Timers: Settimeout and Setinterval    <-------
//*  ----->   <------------------------------------------>  <------- 

/*
const ingriedients = ['olive', 'spinach']
const pizzaTimer = setTimeout(
  (ing1, ing2) => console.log(`Here is your ordered Pizza  with ${ing1} and ${ing2} 🍕`),
   3000, 
   ...ingriedients
); 
console.log('Waiting...');                                              

  if (ingriedients.includes('spinach')) clearTimeout(pizzaTimer)
*/

// set Interval

/*
setInterval(function(){
  const now = new Date();
  console.log(now);
}, 1000)
*/
//*  ----->   <------------------------------------------>  <-------
//*  ----->       181. Implementing a countdown timer       <-------
//*  ----->   <------------------------------------------>  <------- 

