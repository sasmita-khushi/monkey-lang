let argv = process.argv;
type XX = {
  [key: string]: string;
};
let obj: XX = {};

let prop = process.argv[2];
let value = process.argv[3];
let prop1 = process.argv[4];
let value1 = process.argv[5];
obj[prop] = value;
obj[prop1] = value1;
console.log(obj);
