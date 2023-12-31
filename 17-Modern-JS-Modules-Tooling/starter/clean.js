const budget = [
  { value: 250, description: 'Sold old TV 📺', user: 'cezary' },
  { value: -45, description: 'Groceries 🥑', user: 'cezary' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'cezary' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'cezary' },
  { value: -1100, description: 'New iPhone 📱', user: 'cezary' },
  { value: -20, description: 'Candy 🍭', user: 'jola' },
  { value: -125, description: 'Toys 🚂', user: 'jola' },
  { value: -1800, description: 'New Laptop 💻', user: 'cezary' },
];

const spendingLimits = {
  cezary: 1500,
  jola: 100,
};

const addExpense = function (value, description, user = 'cezary') {
  user = user.toLowerCase();

  let lim;
  // if (spendingLimits[user]) {
  //   lim = spendingLimits[user];
  // } else {
  //   lim = 0;
  // }
//* instead upper create cleaner code bellow
  //const limit = spendingLimits[user] ? spendingLimits[user] : 0;
  const limit = spendingLimits?.[user] ?? 0;

  if (value <= limit) {
    budget.push({ value: -value, description, user });
  }
};
addExpense(10, 'Pizza 🍕');
addExpense(100, 'Going to movies 🍿', 'Jola');
addExpense(200, 'Stuff', 'Jay');
console.log(budget);

const checkExpenses = function () {
  for (const entry of budget) {
    //let lim;
    // if (spendingLimits[entry.user]) {
    //   lim = spendingLimits[entry.user];
    // } else {
    //   lim = 0;
    // }
//* instead upper create cleaner code bellow
    const limit = spendingLimits?.[entry.user] ?? 0;

    if (entry.value < -limit) {
      entry.flag = 'limit';
    }
  }
};
checkExpenses();

console.log(budget);

const bigExpenses = function (limit) {
  let output = '';
  for (let el of budget) {
    if (el.value <= -limit) {
      output += el.description.slice(-2) + ' / '; // Emojis are 2 chars
    }
  }
  output = output.slice(0, -2); // Remove last '/ '
  console.log(output);
};

bigExpenses(1000);



// cmd + D add next occurency