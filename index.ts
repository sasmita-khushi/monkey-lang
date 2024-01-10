type callback = (x: string) => void;
function A(cb: callback, name: string) {
  console.log("trying to finout employee id:", name);
  setTimeout(() => {
    cb("123");
  }, 2000);
}

function B(cb: callback, id: string) {
  console.log("looking for...pan no. form id", id);
  setTimeout(() => {
    cb("acahy2002");
  }, 2500);
}

function C(cb: callback, panNumber: string) {
  console.log("incometaxfrom", panNumber);
  setTimeout(() => {
    cb("2000200");
  }, 3000);
}

A((id: string) => {
  console.log("id is", id);
  B((panNumber: string) => {
    console.log("Pan number is ", panNumber);
    C((taxAmount: string) => {
      console.log("Income tax amount is", taxAmount);
    }, panNumber);
  }, id);
}, "khushi");
