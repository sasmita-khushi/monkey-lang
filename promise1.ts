import { resolve } from "bun";

let promise1 = new Promise((resolve, reject) => {
  console.log("promise is pending....");
  setTimeout(() => {
    console.log("iam a promise i am fulfilled");
    resolve(56);
  }, 2000);
});

let promise2 = new Promise((resolve, reject) => {
  console.log("promise is pending....");
  setTimeout(() => {
    console.log("iam a promise i am rejected");
    reject(new Error("i am in error"));
  }, 2000);
});
console.log(promise1, promise2);
//To get the value:
promise1.then((value) => {
  console.log(value);
});
//To catch the error:
promise2.catch((error) => {
  console.log("some error  occured in promise2");
});
