function A(name: string): Promise<string> {
  console.log("looking for id of employee: ", name);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("224");
    }, 2000);
  });
}

function B(Id: string): Promise<string> {
  console.log("looking for pan of employee: ", Id);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("jhgxh33");
    }, 2000);
  });
}
function C(panNumber: string): Promise<string> {
  console.log("looking for tax of employee: ", panNumber);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("37353729");
    }, 2000);
  });
}

function foo(tax: string) {
  console.log("tax amount is", tax);
}
A("khushi").then(B).then(C).then(foo);
