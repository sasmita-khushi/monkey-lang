function IdFromName(name: string): Promise<string> {
  console.log("Looking for id from", name);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("112hvgjh");
    }, 2000);
  });
}

function PanFromId(Id: string): Promise<string> {
  console.log("Looking for pan from", Id);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("11298");
    }, 2000);
  });
}

function TaxFromPan(Pan: string): Promise<string> {
  console.log("Looking for tax amount  from", Pan);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("100000");
    }, 2000);
  });
}

//async-await:
// async function main() {
//   let Id = await IdFromName("khushi");

//   let Pan = await PanFromId(Id);

//   let Tax = await TaxFromPan(Pan);
//   console.log(Tax);
// }
// main();

//Top level async-await:
let Id = await IdFromName("khushi");

let Pan = await PanFromId(Id);

let Tax = await TaxFromPan(Pan);
console.log(Tax);
