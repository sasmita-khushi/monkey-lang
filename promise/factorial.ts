let argv = process.argv;
// console.log(argv[0]); //bun adress path;

// console.log(argv[1]); //absolute path of current file that executing

// console.log(argv[2]); //argumentpassed via command line

// console.log(argv[3]);

// let num = parseInt(argv[2]);
// console.log(num);



//DYNAMIC KEY VALUE PAIR IN TYPESCRIPT:
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
// let arr = "khushi".split("");
// console.log(arr);
