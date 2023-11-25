'strict mode';

const budget =  Object.freeze([  // making object immutable
  { value: 250, description: 'Sold old TV 📺', user: 'cezary' },
  { value: -45, description: 'Groceries 🥑', user: 'cezary' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'cezary' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'cezary' },
  { value: -1100, description: 'New iPhone 📱', user: 'cezary' },
  { value: -20, description: 'Candy 🍭', user: 'jola' },
  { value: -125, description: 'Toys 🚂', user: 'jola' },
  { value: -1800, description: 'New Laptop 💻', user: 'cezary' },
]);

const spendingLimits =  Object.freeze({ // making object immutable
  cezary: 1500,
  jola: 100,
});
spendingLimits.jay = 200;
// console.log(spendingLimits);
//spendingLimits.jay = 200

//const limit = spendingLimits[user] ? spendingLimits[user] : 0;  

const getLimit = (limits,user) => limits?.[user] ?? 0;

//  👉  PURE FUNCTION 💥 🍿 😎
const addExpense = function (
  state, 
  limits, 
  value, 
  description, 
  user = 'cezary') {
  const cleanUser = user.toLowerCase();
  // best practice to converting to lower case  when working on objects 
  return value <= getLimit(limits, cleanUser) ?
   [...state, { value: -value, description, user: cleanUser }]
    : state
   // budget.push({ value: -value, description, user: cleanUser }); 
};
const newBudget1 = addExpense(
  budget, spendingLimits, 10, 'Pizza 🍕'
  );

const newBudget2 = addExpense(newBudget1,spendingLimits, 100, 'movies 🍿', 'Jola'
  );
  
 const newBudget3 = addExpense(newBudget2,spendingLimits,200,'Stuff','Jay'
   );

   /*
const checkExpenses2 = function (state, limits) {
   return state.map(entry => {
    return entry.value < -getLimit(limits, entry.user) ? {...entry, flag: 'limit'} 
    : entry;
   });
  // for (const entry of budget) 
  //  if (entry.value < -getLimit(limits, entry.user)) 
  //     entry.flag = 'limit';
    };
*/
// Nice and Pure not manipulate anything map is power
    const checkExpenses = (state, limits) => 
       state.map(entry => 
        entry.value < -getLimit(limits, entry.user) 
        ? {...entry, flag: 'limit'} 
        : entry
      );

const finalBudget = checkExpenses(newBudget3, spendingLimits);
console.log(finalBudget);

//Inpure because create side effects by doing bad consol log wrong way. ;)
const logBigExpenses = function (state, bigLimit) {
  const bigExpenses = state.filter(entry => entry.value <= -bigLimit)
  .map(entry => entry.description.slice(-2)).join(' / ');
  //or bottom version
  //.reduce((str, cur) => `${str} / ${cur.description.slice(-2)}`, '');
  
  console.log(bigExpenses);

 /*
  let output = '';
  for (const entry of budget) 
   output += 
    entry.value <= -bigLimit ? `${entry.description.slice(-2)}  / `: ''
    //* Emojis are 2 chars and they are counted as character  
  output = output.slice(0, -2); // Remove last '/ '
  console.log(output);
  */
};

logBigExpenses(finalBudget, 500);

