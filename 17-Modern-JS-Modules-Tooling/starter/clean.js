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

const getLimit = user => spendingLimits?.[user] ?? 0;

const addExpense = function (value, description, user = 'cezary') {
  user = user.toLowerCase();

//* instead upper create cleaner code bellow
  //const limit = spendingLimits[user] ? spendingLimits[user] : 0;
  
  if (value <= getLimit(user)) {
    budget.push({ value: -value, description, user });
  }
};
addExpense(10, 'Pizza 🍕');
addExpense(100, 'Going to movies 🍿', 'Jola');
addExpense(200, 'Stuff', 'Jay');


const checkExpenses = function () {
  for (const entry of budget) 
    if (entry.value < -getLimit(entry.user)) 
      entry.flag = 'limit';
    };
checkExpenses();

const logBigExpenses = function (bigLimit) {
  let output = '';
  for (const entry of budget) 
   output += 
    entry.value <= -bigLimit ? `${entry.description.slice(-2)}  / `: ''
    // Emojis are 2 chars and they are counted as character
    
  output = output.slice(0, -2); // Remove last '/ '
  console.log(output);
};

console.log(budget);
logBigExpenses(500);


// cmd + D add next occurency