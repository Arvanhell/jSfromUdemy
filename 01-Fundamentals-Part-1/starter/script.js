// let js = 'amazing';
//       if (js === 'amazing') alert ('JavaScript is Fun');

//       // 40 + 8 + 23 - 18;
//      console.log(40 + 8 + 23 - 18);


     /*
Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is 
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg 
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both 
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about 
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 
m tall.
GOOD LUCK � */

///////////////////////////////////////////////////
///////////////////////////////////////////////////
//
//          Challenge// ver 1.                    
//      const markMass = 78         
//      const johnMass = 92
//      const markHeight = 1.69
//      const johnHeight = 1.88
//
//      let bmiMark = markMass/markHeight ** 2
//      //27.3
//      console.log(bmiMark);
//
//      let bmiJohn = johnMass/johnHeight ** 2
//      //26.0
//      console.log(bmiJohn)
//      const markHigherBMI = bmiJohn > bmiMark
//      console.log(markHigherBMI); //false
//
/////////////////////////////////////////////////
/////////////////////////////////////////////////
//             Challenge ver 2.        
//
//      const markMass = 95 
//      const johnMass = 85
//      const markHeight = 1.88
//      const johnHeight = 1.76
//
//      let bmiMark = markMass/markHeight ** 2
//      //26.8
//      console.log(bmiMark);
//
//      let bmiJohn = johnMass/johnHeight ** 2
//      //27.4
//      console.log(bmiJohn)
//      const markHigherBMI = bmiJohn > bmiMark
//      console.log(markHigherBMI) //true
//
/////////////////////////////////////////////////
/////////////////////////////////////////////////

/////////////////////////////////////////////////
/////////////////////////////////////////////////



//             Coding Challenge # 2 

//             Coding Challenge #2
// Use the BMI example from Challenge #1, and the code you already wrote, and 
// improve it.
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message 
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"
// Hint: Use an if/else statement �
// GOOD LUCK �
/////////////////////////////////////////////////
/////////////////////////////////////////////////
//
//
      //    const markMass = 95 
      //    const johnMass = 85
      //    const markHeight = 1.88
      //    const johnHeight = 1.76
      //    let bmiMark = markMass/markHeight ** 2
      //    //26.8
      //    console.log(bmiMark);
      //    let bmiJohn = johnMass/johnHeight ** 2
         //27.4
//       console.log(bmiJohn)
//          const markHigherBMI = bmiJohn > bmiMark
//          console.log(markHigherBMI) //true
//          console.log( `Mark's BMI is ${bmiMark} and is lower than John's ${bmiJohn}!`);

//    Mark's BMI is 26.87867813490267 and is lower than John's 27.44059917355372!
//     John's BMI is higher than Mark's!
//
//
/////////////////////////////////////////////////
/////////////////////////////////////////////////

//                      ver 1


// const whoBmisHigher =  (bmiJohn < bmiMark) ?  "Mark's BMI is higher than John's!" : "John's BMI is higher than Mark's!"
// console.log(whoBmisHigher);


//                      ver 2


//             if (bmiJohn < bmiMark) {
//                   console.log("Mark's BMI is higher than John's!")
//             }else {
//                   console.log( "John's BMI is higher than Mark's!")
//             }
//
///////////////////////////////////////////////////
///////////////////////////////////////////////////



   

