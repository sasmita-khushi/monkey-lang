import readline from "node:readline/promises";
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//CALLBACK:
// rl.question("1-- what is your name?:", (answer) => {
//   console.log("your name is", answer);

//   rl.question("2-- what is your age ? :", (answer) => {
//     console.log("you entered:", answer);

//     rl.question("3-- Enter your phone number ? :", (answer) => {
//       console.log("Your phone number is", Number);
//       rl.close();
//     });
//   });
// });

// //PROMISE VERSION:
// let name = await rl.question("What is your name ? :");

// let age = await rl.question("what is your age ? :");

// let phonenumber = await rl.question("what is your mobile number ?:");

// console.log("your answer are", name, age, phonenumber);

// rl.close();

function factorial(num: number): number {
  if (num <= 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}
let ans = await rl.question("Enter a number  to findoutfactorial :");
let num = parseInt(ans);
let result = factorial(num);
console.log(`factorial of ${num} is ${result}`);
rl.close();
